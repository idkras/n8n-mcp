import type { UIAppConfig } from './types';

export const UI_APP_CONFIGS: UIAppConfig[] = [
  {
    id: 'operation-result',
    displayName: 'Operation Result',
    description: 'Visual summary of workflow operations (create, update, delete, test)',
    uri: 'ui://n8n-mcp/operation-result',
    mimeType: 'text/html;profile=mcp-app',
    toolPatterns: [
      'n8n_create_workflow',
      'n8n_update_full_workflow',
      'n8n_update_partial_workflow',
      'n8n_delete_workflow',
      'n8n_test_workflow',
      'n8n_autofix_workflow',
      'n8n_deploy_template',
    ],
  },
  {
    id: 'validation-summary',
    displayName: 'Validation Summary',
    description: 'Visual summary of node and workflow validation results',
    uri: 'ui://n8n-mcp/validation-summary',
    mimeType: 'text/html;profile=mcp-app',
    toolPatterns: [
      'validate_node',
      'validate_workflow',
      'n8n_validate_workflow',
    ],
  },
  {
    id: 'workflow-list',
    displayName: 'Workflow List',
    description: 'Compact table of workflows with status, tags, and metadata',
    uri: 'ui://n8n-mcp/workflow-list',
    mimeType: 'text/html;profile=mcp-app',
    toolPatterns: [
      'n8n_list_workflows',
    ],
  },
  {
    id: 'execution-history',
    displayName: 'Execution History',
    description: 'Execution history table with status summary bar',
    uri: 'ui://n8n-mcp/execution-history',
    mimeType: 'text/html;profile=mcp-app',
    toolPatterns: [
      'n8n_executions',
    ],
  },
  {
    id: 'health-dashboard',
    displayName: 'Health Dashboard',
    description: 'Connection status, versions, and performance metrics',
    uri: 'ui://n8n-mcp/health-dashboard',
    mimeType: 'text/html;profile=mcp-app',
    toolPatterns: [
      'n8n_health_check',
    ],
  },
];
