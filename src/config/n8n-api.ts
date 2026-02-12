import { z } from 'zod';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';
import { execSync } from 'child_process';

// n8n API configuration schema
const n8nApiConfigSchema = z.object({
  N8N_API_URL: z.string().url().optional(),
  N8N_API_KEY: z.string().min(1).optional(),
  N8N_API_TIMEOUT: z.coerce.number().positive().default(30000),
  N8N_API_MAX_RETRIES: z.coerce.number().positive().default(3),
});

// Track if we've loaded env vars
let envLoaded = false;

// Keychain: для N8N_API_KEY используется запись "IK Cursor n8n flow.rick.ai" / account "IK Cursor" (как в credentials_manager.py)
const N8N_KEYCHAIN_SERVICE = 'IK Cursor n8n flow.rick.ai';
const N8N_KEYCHAIN_ACCOUNT = 'IK Cursor';

// Function to get credential from Mac Keychain
function getKeychainCredential(key: string): string | null {
  const tryEntry = (service: string, account?: string): string | null => {
    try {
      const cmd = account
        ? `security find-generic-password -s "${service}" -a "${account}" -w`
        : `security find-generic-password -s "${service}" -w`;
      const result = execSync(cmd, {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      return result.trim();
    } catch {
      return null;
    }
  };

  if (key === 'N8N_API_KEY') {
    const fromIkcursor = tryEntry(N8N_KEYCHAIN_SERVICE, N8N_KEYCHAIN_ACCOUNT);
    if (fromIkcursor) return fromIkcursor;
    const fromLegacy = tryEntry('N8N_API_KEY');
    return fromLegacy;
  }

  try {
    const result = execSync(`security find-generic-password -s "${key}" -w`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return result.trim();
  } catch (error) {
    logger.debug(`Failed to get credential ${key} from keychain: ${error}`);
    return null;
  }
}

// Parse and validate n8n API configuration
export function getN8nApiConfig() {
  // Load environment variables on first access
  if (!envLoaded) {
    dotenv.config();
    envLoaded = true;
  }
  
  const result = n8nApiConfigSchema.safeParse(process.env);
  
  if (!result.success) {
    return null;
  }
  
  const config = result.data;
  
  // Get API URL
  let apiUrl = config.N8N_API_URL;
  if (!apiUrl) {
    apiUrl = getKeychainCredential('N8N_API_URL') || undefined;
  }
  
  // Get API Key
  let apiKey = config.N8N_API_KEY;
  if (!apiKey || apiKey === 'from_keychain') {
    apiKey = getKeychainCredential('N8N_API_KEY') || undefined;
  }
  
  // Check if both URL and API key are provided
  if (!apiUrl || !apiKey) {
    logger.debug('N8N API not configured: missing URL or API key');
    return null;
  }
  
  return {
    baseUrl: apiUrl,
    apiKey: apiKey,
    timeout: config.N8N_API_TIMEOUT,
    maxRetries: config.N8N_API_MAX_RETRIES,
  };
}

// Helper to check if n8n API is configured (lazy check)
export function isN8nApiConfigured(): boolean {
  const config = getN8nApiConfig();
  return config !== null;
}

// Type export
export type N8nApiConfig = NonNullable<ReturnType<typeof getN8nApiConfig>>;