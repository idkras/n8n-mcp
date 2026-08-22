#!/usr/bin/env npx tsx
/**
 * Direct telemetry test with registry-injected credentials
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Launch through credentials_registry.service_env n8n');
  process.exit(1);
}

async function testDirect() {
  console.log('🧪 Direct Telemetry Test\n');

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    }
  });

  const testEvent = {
    user_id: 'direct-test-' + Date.now(),
    event: 'direct_test',
    properties: {
      source: 'test-telemetry-direct.ts',
      timestamp: new Date().toISOString()
    }
  };

  console.log('Sending event:', testEvent);

  const { data, error } = await supabase
    .from('telemetry_events')
    .insert([testEvent]);

  if (error) {
    console.error('❌ Failed:', error);
  } else {
    console.log('✅ Success! Event sent directly to Supabase');
    console.log('Response:', data);
  }
}

testDirect().catch(console.error);
