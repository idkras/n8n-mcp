#!/usr/bin/env node
/**
 * Test script: sends JSON-RPC initialize to the MCP server and checks response.
 * Usage: node test_jsonrpc.js
 */
const { spawn } = require('child_process');
const path = require('path');

const distPath = path.join(__dirname, 'dist/mcp/index.js');
console.log('Starting MCP server from:', distPath);

const child = spawn('node', [distPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, NODE_DB_PATH: undefined }
});

let stdout = '';
let stderr = '';

child.stdout.on('data', (d) => {
  stdout += d.toString();
  console.log('[STDOUT chunk]:', d.toString().substring(0, 300));
});
child.stderr.on('data', (d) => {
  stderr += d.toString();
  console.log('[STDERR chunk]:', d.toString().substring(0, 300));
});
child.on('exit', (code, signal) => {
  console.log('[EXIT] code=' + code + ' signal=' + signal);
});
child.on('error', (err) => {
  console.log('[ERROR]', err.message);
});

// Give server time to init DB (~5s)
setTimeout(() => {
  const initMsg = {
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'test-client', version: '1.0' }
    }
  };
  const data = JSON.stringify(initMsg) + '\n';
  console.log('[SENDING] ' + data.length + ' bytes: ' + data.trim());
  const written = child.stdin.write(data);
  console.log('[WRITE RESULT]:', written);
}, 5000);

// Wait and report
setTimeout(() => {
  console.log('\n=== FINAL REPORT ===');
  console.log('stdout bytes:', stdout.length);
  console.log('stderr bytes:', stderr.length);
  if (stdout.length > 0) {
    try {
      const parsed = JSON.parse(stdout.trim());
      console.log('Parsed response:', JSON.stringify(parsed, null, 2).substring(0, 500));
    } catch {
      console.log('Raw stdout:', stdout.substring(0, 500));
    }
  } else {
    console.log('*** NO RESPONSE FROM SERVER ***');
  }
  
  child.kill('SIGTERM');
  setTimeout(() => process.exit(0), 1000);
}, 20000);
