#!/usr/bin/env node
/**
 * N8N MCP Server with Mac Keychain Integration
 * 
 * This wrapper gets credentials from Mac Keychain and passes them to the n8n-mcp server
 * 
 * Usage:
 *     node main_keychain.js
 */

const { spawn } = require('child_process');
const { execSync } = require('child_process');
const path = require('path');

/**
 * Get credential from Mac Keychain
 * @param {string} service - Service name in keychain
 * @param {string} account - Account name in keychain
 * @returns {string|null} - Credential value or null if not found
 */
function getKeychainCredential(service, account) {
    try {
        const command = `security find-generic-password -s "${service}" -a "${account}" -w`;
        const result = execSync(command, { encoding: 'utf8', timeout: 5000 });
        return result.trim();
    } catch (error) {
        console.error(`❌ Failed to get credential ${service} for ${account}: ${error.message}`);
        return null;
    }
}

/**
 * Get N8N credentials from Mac Keychain
 * @param {string} user - User name (default: ilyakrasinsky)
 * @returns {Object} - Credentials object
 */
function getN8nCredentials(user = 'ilyakrasinsky') {
    console.log(`🔐 Getting N8N credentials for user: ${user}`);
    
    const apiKey = getKeychainCredential('N8N_API_KEY', user);
    const apiUrl = getKeychainCredential('N8N_API_URL', user);
    
    if (!apiKey) {
        console.error('❌ N8N_API_KEY not found in keychain');
        process.exit(1);
    }
    
    if (!apiUrl) {
        console.error('❌ N8N_API_URL not found in keychain');
        process.exit(1);
    }
    
    console.log('✅ N8N credentials retrieved from Mac Keychain');
    
    return {
        N8N_API_KEY: apiKey,
        N8N_API_URL: apiUrl
    };
}

/**
 * Main function
 */
function main() {
    // Get user from environment variable
    const user = process.env.N8N_USER || 'ilyakrasinsky';
    
    // Get credentials from keychain
    const credentials = getN8nCredentials(user);
    
    // Set environment variables
    process.env.N8N_API_KEY = credentials.N8N_API_KEY;
    process.env.N8N_API_URL = credentials.N8N_API_URL;
    
    // Path to the actual n8n-mcp server
    const serverPath = path.join(__dirname, 'dist', 'mcp', 'index.js');
    
    console.log('🚀 Starting N8N MCP server...');
    
    // Spawn the n8n-mcp server with credentials
    const server = spawn('node', [serverPath], {
        stdio: 'inherit',
        env: {
            ...process.env,
            N8N_API_KEY: credentials.N8N_API_KEY,
            N8N_API_URL: credentials.N8N_API_URL
        }
    });
    
    server.on('error', (error) => {
        console.error(`❌ Failed to start N8N MCP server: ${error.message}`);
        process.exit(1);
    });
    
    server.on('close', (code) => {
        console.log(`N8N MCP server exited with code ${code}`);
        process.exit(code);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down N8N MCP server...');
        server.kill('SIGINT');
    });
    
    process.on('SIGTERM', () => {
        console.log('\n🛑 Shutting down N8N MCP server...');
        server.kill('SIGTERM');
    });
}

// Run main function
if (require.main === module) {
    main();
}

module.exports = { getN8nCredentials, getKeychainCredential };
