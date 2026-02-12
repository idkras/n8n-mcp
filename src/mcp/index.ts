#!/usr/bin/env node

import { N8NDocumentationMCPServer } from './server';
import { logger } from '../utils/logger';
import { appendFileSync, mkdirSync } from 'fs';
import path from 'path';

/**
 * Log errors to a file for post-mortem analysis.
 * Critical in stdio mode where console output is suppressed to avoid
 * corrupting JSON-RPC communication.
 */
function logErrorToFile(type: string, error: unknown): void {
  try {
    const logsDir = path.join(__dirname, '../../logs');
    mkdirSync(logsDir, { recursive: true });
    const logFile = path.join(logsDir, 'n8n-mcp-errors.log');
    const timestamp = new Date().toISOString();
    const errorStr = error instanceof Error 
      ? `${error.message}\n${error.stack}` 
      : String(error);
    const entry = `[${timestamp}] [${type}] PID=${process.pid}\n${errorStr}\n---\n`;
    appendFileSync(logFile, entry, 'utf8');
  } catch {
    // If we can't write to the log file, there's nothing else we can do
  }
}

// Add error details to stderr for Claude Desktop debugging
// CRITICAL: Do NOT process.exit(1) on unhandledRejection — it kills the MCP server
// on transient errors (network timeouts, API failures). Log and continue instead.
process.on('uncaughtException', (error) => {
  if (process.env.MCP_MODE !== 'stdio') {
    console.error('Uncaught Exception:', error);
  }
  logger.error('Uncaught Exception:', error);
  // Only exit on truly fatal errors (e.g., out of memory)
  // For other errors, log and let the server continue
  if (error.message?.includes('out of memory') || error.message?.includes('ENOMEM')) {
    process.exit(1);
  }
  // Log to file for post-mortem analysis in stdio mode
  logErrorToFile('uncaughtException', error);
});

process.on('unhandledRejection', (reason, promise) => {
  if (process.env.MCP_MODE !== 'stdio') {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  }
  logger.error('Unhandled Rejection:', reason);
  // Do NOT exit — unhandled rejections are usually transient (timeouts, network errors)
  // Log to file for post-mortem analysis
  logErrorToFile('unhandledRejection', reason);
});

async function main() {
  // Проверяем аргументы командной строки ПЕРЕД инициализацией MCP
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log('N8N MCP Server v2.7.0');
    console.log('Usage: node dist/mcp/index.js [OPTIONS]');
    console.log('');
    console.log('Options:');
    console.log('  --help, -h     Show this help message');
    console.log('  --version, -v  Show version information');
    console.log('  --test         Show registered tools and exit');
    console.log('  --list-tools   List all available MCP tools');
    console.log('');
    console.log('Examples:');
    console.log('  node dist/mcp/index.js              # Start MCP server');
    console.log('  node dist/mcp/index.js --test       # Show tools and exit');
    console.log('  node dist/mcp/index.js --list-tools # List all tools');
    console.log('  mcp run dist/mcp/index.js           # Run via MCP CLI');
    process.exit(0);
  }
  
  if (args.includes('--version') || args.includes('-v')) {
    console.log('N8N MCP Server v2.7.0');
    console.log('Protocol: MCP v1.0');
    console.log('Transport: stdio');
    process.exit(0);
  }
  
  if (args.includes('--test')) {
    console.log('Registered tools: n8n_get_workflows, n8n_execute_workflow, n8n_get_workflow_by_id, n8n_create_workflow, n8n_update_workflow, n8n_delete_workflow, n8n_get_workflow_executions, n8n_get_workflow_execution_by_id, n8n_get_workflow_templates, n8n_get_workflow_template_by_id, n8n_get_workflow_nodes, n8n_get_workflow_node_by_id, n8n_get_workflow_connections, n8n_get_workflow_connection_by_id, n8n_get_workflow_settings, n8n_update_workflow_settings, n8n_get_workflow_statistics, n8n_get_workflow_logs, n8n_get_workflow_health, n8n_test_workflow_connection');
    process.exit(0);
  }
  
  if (args.includes('--list-tools')) {
    const tools_list = [
      'n8n_get_workflows', 'n8n_execute_workflow', 'n8n_get_workflow_by_id',
      'n8n_create_workflow', 'n8n_update_workflow', 'n8n_delete_workflow',
      'n8n_get_workflow_executions', 'n8n_get_workflow_execution_by_id',
      'n8n_get_workflow_templates', 'n8n_get_workflow_template_by_id',
      'n8n_get_workflow_nodes', 'n8n_get_workflow_node_by_id',
      'n8n_get_workflow_connections', 'n8n_get_workflow_connection_by_id',
      'n8n_get_workflow_settings', 'n8n_update_workflow_settings',
      'n8n_get_workflow_statistics', 'n8n_get_workflow_logs',
      'n8n_get_workflow_health', 'n8n_test_workflow_connection'
    ];
    
    console.log('Available MCP Tools:');
    for (let i = 0; i < tools_list.length; i++) {
      console.log(`  ${(i + 1).toString().padStart(2, ' ')}. ${tools_list[i]}`);
    }
    console.log(`\nTotal: ${tools_list.length} tools`);
    process.exit(0);
  }
  
  if (args.some(arg => arg.startsWith('--'))) {
    console.error(`Unknown option: ${args.find(arg => arg.startsWith('--'))}`);
    console.error('Use --help for usage information');
    process.exit(1);
  }

  const mode = process.env.MCP_MODE || 'stdio';
  
  try {
    // Only show debug messages in HTTP mode to avoid corrupting stdio communication
    if (mode === 'http') {
      console.error(`Starting n8n Documentation MCP Server in ${mode} mode...`);
      console.error('Current directory:', process.cwd());
      console.error('Node version:', process.version);
    }
    
    if (mode === 'http') {
      // Check if we should use the fixed implementation
      if (process.env.USE_FIXED_HTTP === 'true') {
        // Use the fixed HTTP implementation that bypasses StreamableHTTPServerTransport issues
        const { startFixedHTTPServer } = await import('../http-server');
        await startFixedHTTPServer();
      } else {
        // HTTP mode - for remote deployment with single-session architecture
        const { SingleSessionHTTPServer } = await import('../http-server-single-session');
        const server = new SingleSessionHTTPServer();
        
        // Graceful shutdown handlers
        const shutdown = async () => {
          await server.shutdown();
          process.exit(0);
        };
        
        process.on('SIGTERM', shutdown);
        process.on('SIGINT', shutdown);
        
        await server.start();
      }
    } else {
      // Stdio mode - for local Claude Desktop / Cursor
      const server = new N8NDocumentationMCPServer();
      
      // Graceful shutdown handlers for stdio mode
      // Prevents orphaned processes when Cursor restarts the MCP server
      const shutdown = () => {
        logErrorToFile('shutdown', `Received shutdown signal, PID=${process.pid}`);
        process.exit(0);
      };
      
      process.on('SIGTERM', shutdown);
      process.on('SIGINT', shutdown);
      
      // Also handle stdin close (Cursor disconnected)
      process.stdin.on('end', () => {
        logErrorToFile('stdin-end', `stdin closed, Cursor disconnected, PID=${process.pid}`);
        process.exit(0);
      });
      
      await server.run();
    }
  } catch (error) {
    // In stdio mode, we cannot output to console at all
    if (mode !== 'stdio') {
      console.error('Failed to start MCP server:', error);
      logger.error('Failed to start MCP server', error);
      
      // Provide helpful error messages
      if (error instanceof Error && error.message.includes('nodes.db not found')) {
        console.error('\nTo fix this issue:');
        console.error('1. cd to the n8n-mcp directory');
        console.error('2. Run: npm run build');
        console.error('3. Run: npm run rebuild');
      } else if (error instanceof Error && error.message.includes('NODE_MODULE_VERSION')) {
        console.error('\nTo fix this Node.js version mismatch:');
        console.error('1. cd to the n8n-mcp directory');
        console.error('2. Run: npm rebuild better-sqlite3');
        console.error('3. If that doesn\'t work, try: rm -rf node_modules && npm install');
      }
    }
    
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch((error) => {
    // In stdio mode, we cannot output to console at all
    if (process.env.MCP_MODE !== 'stdio') {
      console.error(error);
    }
    logger.error('Failed to start MCP server', error);
    process.exit(1);
  });
}