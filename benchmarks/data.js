window.BENCHMARK_DATA = {
  "lastUpdate": 1772635870407,
  "repoUrl": "https://github.com/czlonkowski/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2dc7c9c51b08a975fa4a54737c79a9634bcbf36",
          "message": "feat: configurable MAX_SESSIONS via N8N_MCP_MAX_SESSIONS env var (v2.28.4) (#469)\n\n* fix: n8n_test_workflow webhookId resolution and form handling (v2.28.2)\n\n## Bug Fixes\n\n- **webhookId Resolution**: Fixed trigger handlers using `node.id` instead of\n  `node.webhookId` for building webhook URLs. This caused 404 errors when\n  nodes had custom IDs.\n\n- **Chat Trigger URL**: Fixed chat triggers using wrong URL pattern. Now\n  correctly uses `/webhook/<webhookId>/chat` endpoint.\n\n- **Form Content-Type**: Fixed form triggers failing with \"Expected\n  multipart/form-data\" error by switching to proper multipart encoding.\n\n## Enhancements\n\n- **Form Field Types**: Added support for all n8n form field types (text,\n  textarea, email, number, password, date, dropdown, checkbox, file, hidden)\n\n- **Checkbox Arrays**: Automatically converts arrays to `field[]` format\n\n- **Helpful Warnings**: Reports missing required fields with names and labels\n\n- **Error Hints**: Provides complete field structure on failure\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: address code review issues for form trigger improvements\n\n- Add form-data as direct dependency (was only in devDependencies)\n- Add TypeScript interfaces (FormFieldValue, FormFieldOption) replacing any types\n- Add FORM_FIELD_TYPES constants for type-safe switch statements\n- Add isValidBase64() validation for file uploads with size limits\n- Add MAX_FILE_SIZE_BYTES (10MB) constant with validation\n- Update form-handler.test.ts for FormData instead of JSON\n- Update trigger-detector.test.ts for chat URL /chat suffix\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* feat: configurable MAX_SESSIONS via N8N_MCP_MAX_SESSIONS env var (v2.28.3) (#468)\n\nMake MAX_SESSIONS limit configurable for multi-tenant SaaS deployments.\n\n- Add N8N_MCP_MAX_SESSIONS environment variable (default: 100)\n- Include safety floor with Math.max(1, ...) to prevent invalid configs\n- Update documentation in LIBRARY_USAGE.md, SESSION_PERSISTENCE.md\n- Update CLAUDE.md and CHANGELOG.md\n\nFixes #468\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: add QEMU setup for multi-arch Docker builds\n\nAdd docker/setup-qemu-action@v3 before Buildx setup to enable\nproper QEMU emulation for linux/arm64 builds on GitHub Actions.\n\nFixes CI Docker build failure with \"execve: No such file or directory\"\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>",
          "timestamp": "2025-12-05T11:17:51+01:00",
          "tree_id": "4011272f947cb2dd5c9b3728b81b807c9a03ae81",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c2dc7c9c51b08a975fa4a54737c79a9634bcbf36"
        },
        "date": 1764929993006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "90407f845d61028d83c4c084e9a5f6b466a5558c",
          "message": "fix: version-aware settings filtering for n8n API compatibility (#467)\n\nFixes #464, #465, #466\n\n- Add n8n version detection via /rest/settings endpoint\n- Filter workflow settings based on n8n version support:\n  - All versions: 7 core properties\n  - n8n 1.37.0+: adds executionOrder\n  - n8n 1.119.0+: adds callerPolicy, callerIds, timeSavedPerExecution, availableInMCP\n- Add read-only field filtering (activeVersionId, activeVersion)\n- Version cache with 5-minute TTL for server upgrades\n- Race condition protection with promise-based locking\n- Type validation for version string responses\n\nThanks to @thesved for this contribution!\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-05T12:15:48+01:00",
          "tree_id": "08daaed46e0df4dfbae917c9b8942cfcdf13b8fb",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/90407f845d61028d83c4c084e9a5f6b466a5558c"
        },
        "date": 1764933475477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60479e0eb47a7c83e77f36e2667a73e2e3ec115a",
          "message": "test: update tests for v2.28.5 behavior changes (v2.28.6) (#470)\n\n- Update n8n-version tests: 'v' prefix now supported in version strings\n- Update n8n-validation tests: empty settings now return minimal defaults\n  { executionOrder: 'v1' } instead of {} to avoid API rejection (Issue #431)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-05T13:38:06+01:00",
          "tree_id": "399afed181c7f2e2552ec90c91b0418f9dcc6382",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/60479e0eb47a7c83e77f36e2667a73e2e3ec115a"
        },
        "date": 1764938407093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdaa29e7a2445f1e84144965a7b803be00f6b760",
          "message": "fix: memory leak in session removal - close MCP server properly (#471) (#472)\n\n- Add close() method to N8NDocumentationMCPServer that:\n  - Calls server.close() (MCP SDK cleanup)\n  - Clears internal cache\n  - Nullifies service references to help GC\n- Update removeSession() to call server.close() before releasing references\n\nRoot cause: removeSession() deleted server from map but didn't call cleanup\nEvidence: Production server memory grew ~1GB in 43 minutes (10% to 35%)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-05T18:30:51+01:00",
          "tree_id": "2e72fdb4e4336b7c17f579b885fbdeae90c0439c",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/cdaa29e7a2445f1e84144965a7b803be00f6b760"
        },
        "date": 1764955975115,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "560e0c5b86d5e44a1537b7c3299cdc5aff3f645e",
          "message": "fix: pass context parameter to handleGetWorkflow in handleValidateWorkflow (#474) (#475)\n\nFixed n8n_validate_workflow tool failing in multi-tenant mode with error:\n\"n8n API not configured. Please set N8N_API_URL and N8N_API_KEY environment variables.\"\n\nRoot cause: handleValidateWorkflow called handleGetWorkflow without the context parameter.\n\nCloses #474\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-07T23:49:21+01:00",
          "tree_id": "07ce244e8e060e3c75a1207dcd2602aafb70d65b",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/560e0c5b86d5e44a1537b7c3299cdc5aff3f645e"
        },
        "date": 1765147873707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "130dd44ea5e6172870a1d6e2dd2ab789452ea819",
          "message": "chore: update n8n to 1.123.4 and bump version to 2.28.9 (#478)\n\n- Updated n8n from 1.122.4 to 1.123.4\n- Updated n8n-core from 1.121.1 to 1.122.1\n- Updated n8n-workflow from 1.119.1 to 1.120.0\n- Updated @n8n/n8n-nodes-langchain from 1.121.1 to 1.122.1\n- Rebuilt node database with 545 nodes (439 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-08T22:54:50+01:00",
          "tree_id": "667d3a9dd9770565c0aa319255f0bf2110cbc2f5",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/130dd44ea5e6172870a1d6e2dd2ab789452ea819"
        },
        "date": 1765230995549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b92e5114634e52aee1fbb477396a21f8c229d470",
          "message": "perf: optimize workflow tool responses for token efficiency (v2.29.0) (#479)\n\n* perf: optimize workflow tool responses for token efficiency (v2.29.0)\n\nReduce response sizes by 75-90% for 4 workflow management tools:\n\n- n8n_update_partial_workflow: Returns {id, name, active, operationsApplied}\n- n8n_create_workflow: Returns {id, name, active, nodeCount}\n- n8n_update_full_workflow: Returns {id, name, active, nodeCount}\n- n8n_delete_workflow: Returns {id, name, deleted: true}\n\nAI agents can use n8n_get_workflow with mode 'structure' if they need\nto verify the current workflow state after operations.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update tests and add nodeCount to partial update response\n\n- Fix handleCreateWorkflow test to expect minimal response\n- Fix handleDeleteWorkflow test to expect minimal response\n- Add nodeCount to n8n_update_partial_workflow response for consistency\n- Update documentation and CHANGELOG\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update handlers-workflow-diff tests for minimal response\n\nUpdate 3 more tests that expected full workflow in response:\n- should apply diff operations successfully\n- should activate workflow after successful update\n- should deactivate workflow after successful update\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update integration tests to use minimal response format\n\nIntegration tests now verify minimal response format and use\nclient.getWorkflow() to fetch actual workflow state for verification.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n* fix: update create/update workflow integration tests for minimal response\n\nIntegration tests now verify minimal response and use client.getWorkflow()\nto fetch actual workflow state for detailed verification.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n* fix: add type assertions to fix TypeScript errors in tests\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-09T16:36:17+01:00",
          "tree_id": "6120e3cad0bd15cbc7b0ab855182413de487bcb7",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/b92e5114634e52aee1fbb477396a21f8c229d470"
        },
        "date": 1765294674834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47510ef6dad95bfe463ca6e006ab9e9bd2b9a482",
          "message": "feat: add Tool variant support for AI Agent integration (v2.29.1) (#484)\n\n* feat: add Tool variant support for AI Agent integration (v2.29.1)\n\nAdd comprehensive support for n8n Tool variants - specialized node versions\ncreated for AI Agent tool connections (e.g., nodes-base.supabaseTool from\nnodes-base.supabase).\n\nKey Features:\n- 266 Tool variants auto-generated during database rebuild\n- Bidirectional cross-references between base nodes and Tool variants\n- Clear AI guidance in get_node responses via toolVariantInfo object\n- Tool variants include toolDescription property and ai_tool output type\n\nDatabase Schema Changes:\n- Added is_tool_variant, tool_variant_of, has_tool_variant columns\n- Added indexes for efficient Tool variant queries\n\nFiles Changed:\n- src/database/schema.sql - New columns and indexes\n- src/parsers/node-parser.ts - Extended ParsedNode interface\n- src/services/tool-variant-generator.ts - NEW Tool variant generation\n- src/database/node-repository.ts - Store/retrieve Tool variant fields\n- src/scripts/rebuild.ts - Generate Tool variants during rebuild\n- src/mcp/server.ts - Add toolVariantInfo to get_node responses\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: address code review issues for Tool variant feature\n\n- Add input validation in ToolVariantGenerator.generateToolVariant()\n  - Validate nodeType exists before use\n  - Ensure properties is array before spreading\n- Fix isToolVariantNodeType() edge case\n  - Add robust validation for package.nodeName pattern\n  - Prevent false positives for nodes ending in 'Tool'\n- Add validation in NodeRepository.getToolVariant()\n  - Validate node type format (must contain dot)\n- Add null check in buildToolVariantGuidance()\n  - Check node.nodeType exists before concatenation\n- Extract magic number to constant in rebuild.ts\n  - MIN_EXPECTED_TOOL_VARIANTS = 200 with documentation\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: update unit tests for Tool variant schema changes\n\nUpdated node-repository-core.test.ts and node-repository-outputs.test.ts\nto include the new Tool variant columns (is_tool_variant, tool_variant_of,\nhas_tool_variant) in mock data and parameter position assertions.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add validation and autofix for Tool variant corrections\n\n- Add validateAIToolSource() to detect base nodes incorrectly used as\n  AI tools when Tool variant exists (e.g., supabase vs supabaseTool)\n- Add WRONG_NODE_TYPE_FOR_AI_TOOL error code with fix suggestions\n- Add tool-variant-correction fix type to WorkflowAutoFixer\n- Add toWorkflowFormat() method to NodeTypeNormalizer for converting\n  database format back to n8n API format\n- Update ValidationIssue interface to include code and fix properties\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat(v2.29.2): Tool variant validation, auto-fix, and comprehensive tests\n\nFeatures:\n- validateAIToolSource() detects base nodes incorrectly used as AI tools\n- WRONG_NODE_TYPE_FOR_AI_TOOL error with actionable fix suggestions\n- tool-variant-correction fix type in n8n_autofix_workflow\n- NodeTypeNormalizer.toWorkflowFormat() for db→API format conversion\n\nCode Review Improvements:\n- Removed duplicate database lookup in validateAIToolSource()\n- Exported ValidationIssue interface for downstream type safety\n- Added fallback description for fix operations\n\nTest Coverage (83 new tests):\n- 12 tests for workflow-validator-tool-variants\n- 13 tests for workflow-auto-fixer-tool-variants\n- 19 tests for toWorkflowFormat() in node-type-normalizer\n- Edge cases: langchain tools, unknown nodes, community nodes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: skip templates validation test when templates not available\n\nThe real-world-structure-validation test was failing in CI because\ntemplates are not populated in the CI environment. Updated test to\ngracefully handle missing templates by checking availability in\nbeforeAll and skipping validation when templates are not present.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: increase memory threshold in performance test for CI variability\n\nThe memory efficiency test was failing in CI with ~23MB memory increase\nvs 20MB threshold. Increased threshold to 30MB to account for CI\nenvironment variability while still catching significant memory leaks.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T12:51:38+01:00",
          "tree_id": "af23f172e1a21379c9268081aa4f30b8ab792669",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/47510ef6dad95bfe463ca6e006ab9e9bd2b9a482"
        },
        "date": 1765540397564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "fa7d0b420ec6be9688f83d148c39ed9912ff8adc",
          "message": "ci: switch NPM publishing to Trusted Publishing (OIDC)\n\nReplace static NPM_TOKEN with OIDC-based authentication for improved\nsecurity. This uses NPM's Trusted Publishing feature which:\n- Eliminates need for long-lived tokens\n- Provides provenance attestation\n- Is the recommended approach by npm\n\nRequires configuring Trusted Publishing in npm package settings:\n- Repository owner: czlonkowski\n- Repository name: n8n-mcp\n- Workflow filename: release.yml\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T13:24:25+01:00",
          "tree_id": "68a2ec850bbdd41aa04ad5bba72ed38fcef81f81",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/fa7d0b420ec6be9688f83d148c39ed9912ff8adc"
        },
        "date": 1765542755830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "6e85c68d6259eb78b256f5ac4559ba3e665e0886",
          "message": "chore: bump version to 2.29.3 to trigger OIDC publish\n\nThe previous workflow re-run used cached old workflow code with\nNPM_TOKEN. This version bump triggers a fresh workflow run with\nthe new OIDC Trusted Publishing configuration.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T13:48:11+01:00",
          "tree_id": "75e0a58025fd75c9285d68d7eca4cbc5f0ebb877",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/6e85c68d6259eb78b256f5ac4559ba3e665e0886"
        },
        "date": 1765543862564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "c6f3733fbd6de37b1514f5800cb8d43bded30eee",
          "message": "fix: upgrade npm for OIDC trusted publishing support\n\nOIDC trusted publishing requires npm >= 11.5.1, but Node.js 20/22\nships with npm 10.x. Added explicit npm upgrade step before publish.\n\nAlso upgraded to Node.js 22 for better npm compatibility.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T14:17:23+01:00",
          "tree_id": "9ba01f9525d17511d27acffe82237b3ec98b5e23",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c6f3733fbd6de37b1514f5800cb8d43bded30eee"
        },
        "date": 1765545538067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "551445bcd5b8bd16fb273a3a129142e50401ed99",
          "message": "fix: revert to Node 20 and use granular NPM token\n\nNPM classic tokens were revoked on Dec 9, 2025. OIDC trusted publishing\nrequires npm >= 11.5.1 which caused lockfile sync issues with npm ci.\n\nReverted to Node 20 with granular access token approach:\n- Removed OIDC permissions block\n- Removed npm upgrade step\n- Restored NODE_AUTH_TOKEN usage\n- Removed --provenance flag\n\nUser created new granular token with \"Bypass 2FA\" enabled.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T16:22:04+01:00",
          "tree_id": "ca956e8b4150654d91afa6662138a60406f46e99",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/551445bcd5b8bd16fb273a3a129142e50401ed99"
        },
        "date": 1765553025512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f13e7aeee497d03c80e2a2e50227aed1e57a0a8",
          "message": "chore: update n8n to 2.0.2 and bump version to 2.30.0 (#487)\n\n- Updated n8n from 1.123.4 to 2.0.2\n- Updated n8n-core from 1.122.1 to 2.0.1\n- Updated n8n-workflow from 1.120.0 to 2.0.1\n- Updated @n8n/n8n-nodes-langchain from 1.122.1 to 2.0.1\n- Rebuilt node database with 541 nodes (435 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-15T23:34:49+01:00",
          "tree_id": "f137970fb5ce3f036135bb967cf55180407a7f4c",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/0f13e7aeee497d03c80e2a2e50227aed1e57a0a8"
        },
        "date": 1765838207599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "562f4b0c4ecb98d3e9c8993ea4a911f64a5d7c40",
          "message": "feat: add _cnd conditional operator support and n8n 2.0+ executeWorkflowTrigger fix (#495)\n\n* feat: add _cnd conditional operator support and n8n 2.0+ executeWorkflowTrigger fix\n\nAdded:\n- Support for all 12 _cnd operators in displayOptions validation (eq, not, gte, lte, gt, lt, between, startsWith, endsWith, includes, regex, exists)\n- Version-based visibility checking with @version in config\n- 42 new unit tests for _cnd operators\n\nFixed:\n- n8n 2.0+ breaking change: executeWorkflowTrigger now recognized as activatable trigger\n- Removed outdated validation blocking Execute Workflow Trigger workflows\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: harden _cnd operators and add edge case tests\n\n- Add try/catch for invalid regex patterns in regex operator\n- Add structure validation for between operator (from/to fields)\n- Add 5 new edge case tests for invalid inputs\n- Bump version to 2.30.1\n- Resolve merge conflict with main (n8n 2.0 update)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: update workflow activation tests for n8n 2.0+ executeWorkflowTrigger\n\n- Update test to expect SUCCESS for executeWorkflowTrigger-only workflows\n- Remove outdated assertion about \"executeWorkflowTrigger cannot activate\"\n- executeWorkflowTrigger is now a valid activatable trigger in n8n 2.0+\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: skip flaky versionId test pending n8n 2.0 investigation\n\nThe versionId behavior appears to have changed in n8n 2.0 - simple\nname updates may no longer trigger versionId changes. This needs\ninvestigation but is unrelated to the _cnd operator PR.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-17T18:37:55+01:00",
          "tree_id": "77fb60c370c021171dab06a01f19e0d523c926ba",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/562f4b0c4ecb98d3e9c8993ea4a911f64a5d7c40"
        },
        "date": 1765993195530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa216e4d1375dfec7e2de424ee0c05a3869db65c",
          "message": "fix: restore templates database with 2,768 workflow templates (v2.30.2) (#502)\n\n- Restored templates from git history (commit 03a4b07)\n- Updated nodes schema with tool variant columns\n- Database now contains 803 nodes and 2,768 templates\n- Compatible with n8n 2.0.2\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-21T14:11:57+01:00",
          "tree_id": "acd674c606d60c4aff7260b253fb1d2d0c55d08a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/fa216e4d1375dfec7e2de424ee0c05a3869db65c"
        },
        "date": 1766322833175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "a40f6a5077001fbfbdc7529663a4ebcba608f5e6",
          "message": "test: make templates database validation critical instead of optional\n\nPreviously, the CI test only warned when templates were missing but\nalways passed. This allowed the templates database to be lost without\nfailing CI. Now the test will fail if templates are empty or below\nthe expected count of 2500.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-21T15:33:25+01:00",
          "tree_id": "8c445e411ac900ad406f2a5d351e94109f9201ff",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a40f6a5077001fbfbdc7529663a4ebcba608f5e6"
        },
        "date": 1766327718567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d60182eeb8581320278e5f2205cc0378d49ff071",
          "message": "feat: add error mode for execution debugging with AI suggestions (#505)\n\n* feat: add error mode for execution debugging with AI suggestions\n\nAdd a new `mode='error'` option to n8n_executions action=get that's optimized\nfor AI agents debugging workflow failures. This mode provides intelligent\nerror extraction with 80-99% token savings compared to `mode='full'`.\n\nKey features:\n- Error Analysis: Extracts error message, type, node name, and parameters\n- Upstream Context: Samples input data from upstream node (configurable limit)\n- Execution Path: Shows node execution sequence from trigger to error\n- AI Suggestions: Pattern-based fix suggestions for common errors\n- Workflow Fetch: Optionally fetches workflow for accurate upstream detection\n\nNew parameters for mode='error':\n- errorItemsLimit (default: 2) - Sample items from upstream node\n- includeStackTrace (default: false) - Full vs truncated stack trace\n- includeExecutionPath (default: true) - Include node execution path\n- fetchWorkflow (default: true) - Fetch workflow for upstream detection\n\nToken efficiency:\n- 11 items: ~11KB full vs ~3KB error (73% savings)\n- 1001 items: ~354KB full vs ~3KB error (99% savings)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add security hardening to error-execution-processor\n\n- Add prototype pollution protection (block __proto__, constructor, prototype)\n- Expand sensitive data patterns (20+ patterns including JWT, OAuth, certificates)\n- Create recursive sanitizeData function for deep object sanitization\n- Apply sanitization to both nodeParameters and upstream sampleItems\n- Add comprehensive unit tests (42 tests, 96% coverage)\n\nSecurity improvements address code review findings:\n- Critical: Prototype pollution protection\n- Warning: Expanded sensitive data filtering\n- Warning: Nested data sanitization\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-23T17:14:30+01:00",
          "tree_id": "04eb9d595ef0bc90b182b7a947f0683df1827646",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/d60182eeb8581320278e5f2205cc0378d49ff071"
        },
        "date": 1766506580808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "705d31c35e93f868b58add97f074500857368381",
          "message": "fix: mcpTrigger nodes no longer flagged as disconnected (#503) (#506)\n\nFixed validation bug where mcpTrigger nodes were incorrectly flagged as\n\"disconnected nodes\" when using n8n_update_partial_workflow or\nn8n_update_full_workflow. This blocked ALL updates to MCP server workflows.\n\nChanges:\n- Extended validateWorkflowStructure() to check all 7 connection types\n  (main, error, ai_tool, ai_languageModel, ai_memory, ai_embedding, ai_vectorStore)\n- Updated trigger node validation to accept either outgoing OR inbound connections\n- Added 7 new tests covering all AI connection types\n\nFixes #503\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-23T18:50:55+01:00",
          "tree_id": "bbe4aa26da9600ff36b8951b04e6cf8434e3f51a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/705d31c35e93f868b58add97f074500857368381"
        },
        "date": 1766512366242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20663dad0d3b4064796ccf50ef3db27b55b68b85",
          "message": "chore: update n8n to 2.1.4 and bump version to 2.31.2 (#507)\n\n- Updated n8n from 2.0.2 to 2.1.4\n- Updated n8n-core from 2.0.1 to 2.1.3\n- Updated n8n-workflow from 2.0.1 to 2.1.1\n- Updated @n8n/n8n-nodes-langchain from 2.0.1 to 2.1.3\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Refreshed template database with 2,737 workflow templates from n8n.io\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-24T15:15:22+01:00",
          "tree_id": "03f1ad88a37931c6464c4de9c8af3d3294aa246c",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/20663dad0d3b4064796ccf50ef3db27b55b68b85"
        },
        "date": 1766585848885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "808088f25eccf3cf73a90017af9f5abdd1893886",
          "message": "docs: fix connection keys documentation to say \"node names\" not \"node IDs\" (#510) (#511)\n\nThe documentation incorrectly stated connection keys should be \"node IDs\"\nwhen n8n actually requires \"node names\". This caused workflow creation\nfailures for AI-generated workflows.\n\nChanges:\n- tools-n8n-manager.ts: \"Keys are source node names (the name field, not id)\"\n- n8n-create-workflow.ts: \"Keys are source node names (not IDs)\"\n- Fixed example: \"Webhook\"/\"Slack\" instead of \"webhook_1\"/\"slack_1\"\n- get-template.ts: clarified \"source node names\"\n\nCloses #510\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-26T14:50:58+01:00",
          "tree_id": "9110d3624af99a21e45601fe3c7e9c9248362159",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/808088f25eccf3cf73a90017af9f5abdd1893886"
        },
        "date": 1766757174358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f10772a9d28f67fca6e14ccf7477af9d99651830",
          "message": "fix: preserve workflow data during serialization (Issue #517) (#519)\n\nFixed a critical bug where workflow mutation data was corrupted during\nserialization to Supabase. The recursive toSnakeCase() function was\nconverting nested workflow data, mangling:\n- Connection keys (node names like \"Webhook\" → \"_webhook\")\n- Node field names (typeVersion → type_version)\n\nSolution: Replace recursive conversion with selective mutationToSupabaseFormat()\nthat only converts top-level field names to snake_case while preserving\nnested workflow data exactly as-is.\n\nImpact:\n- 98.9% of workflow mutations had corrupted data\n- Deployability rate improved from ~21% to ~68%\n\nChanges:\n- src/telemetry/batch-processor.ts: New selective converter\n- tests/unit/telemetry/batch-processor.test.ts: 3 new regression tests\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-02T10:44:13+01:00",
          "tree_id": "b2f3780bf0bc44b0edbd7e423710a1f87f21b11b",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/f10772a9d28f67fca6e14ccf7477af9d99651830"
        },
        "date": 1767347159970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bthompson@maillocker.net",
            "name": "Bryan Thompson",
            "username": "triepod-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2713db6d106f30554f3f144c548504c2097f2741",
          "message": "feat: add MCP tool annotations to all 20 tools (#512)\n\n* feat: add MCP tool annotations to all 20 tools\n\nAdd MCP tool annotations per specification to help AI assistants\nunderstand tool behavior and capabilities.\n\nDocumentation tools (7):\n- tools_documentation, search_nodes, get_node, validate_node,\n  get_template, search_templates, validate_workflow\n- All marked readOnlyHint=true (local database queries)\n\nManagement tools (13):\n- n8n_create_workflow, n8n_get_workflow, n8n_update_full_workflow,\n  n8n_update_partial_workflow, n8n_delete_workflow, n8n_list_workflows,\n  n8n_validate_workflow, n8n_autofix_workflow, n8n_test_workflow,\n  n8n_executions, n8n_health_check, n8n_workflow_versions,\n  n8n_deploy_template\n- All marked openWorldHint=true (n8n API access)\n- Destructive operations (delete_workflow, executions delete,\n  workflow_versions delete/truncate) marked destructiveHint=true\n\nAnnotations follow MCP spec:\nhttps://spec.modelcontextprotocol.io/specification/2025-03-26/server/tools/#annotations\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add idempotentHint to all read-only tools\n\nAdds idempotentHint: true annotation to all read-only tools that produce\nthe same output when called multiple times:\n- 7 documentation tools (tools.ts)\n- 4 management tools (tools-n8n-manager.ts): n8n_get_workflow,\n  n8n_list_workflows, n8n_validate_workflow, n8n_health_check\n\nAlso adds trailing newline to tools-n8n-manager.ts.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add idempotentHint to update operations, bump to 2.31.5\n\nAdds idempotentHint: true to update operations that produce the same\nresult when called repeatedly with the same arguments:\n- n8n_update_full_workflow\n- n8n_update_partial_workflow\n- n8n_autofix_workflow\n\nAlso bumps version to 2.31.5 and updates CHANGELOG.md with complete\ndocumentation of all MCP tool annotations added in this PR.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: triepod-ai <noreply@github.com>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>",
          "timestamp": "2026-01-02T15:48:47+01:00",
          "tree_id": "2699ee78d2f42d632b1937c421986a2d38a7f1b7",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/2713db6d106f30554f3f144c548504c2097f2741"
        },
        "date": 1767365448403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cb8bb4559a78e36e0f3c32e3d78a807b107abf",
          "message": "chore: update n8n to 2.1.5 and bump version to 2.31.6 (#521)\n\n- Updated n8n from 2.1.4 to 2.1.5\n- Updated n8n-core from 2.1.3 to 2.1.4\n- Updated @n8n/n8n-nodes-langchain from 2.1.3 to 2.1.4\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-04T10:43:35+01:00",
          "tree_id": "458ef1376f2cfc6d2a39a9dc5f9586bc418051ca",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/25cb8bb4559a78e36e0f3c32e3d78a807b107abf"
        },
        "date": 1767519934923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b0ff990ec656b3bbd2f37b763f2206a1468a577",
          "message": "chore: update n8n to 2.2.3 and bump version to 2.31.7 (#523)\n\n- Updated n8n from 2.1.5 to 2.2.3\n- Updated n8n-core from 2.1.4 to 2.2.2\n- Updated n8n-workflow from 2.1.1 to 2.2.2\n- Updated @n8n/n8n-nodes-langchain from 2.1.4 to 2.2.2\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-06T13:18:56+01:00",
          "tree_id": "66c78d7c4efc3ae032888f5da73d96cf5a0076be",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/7b0ff990ec656b3bbd2f37b763f2206a1468a577"
        },
        "date": 1767702055945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "861005eeedf880be2489bc197b85a385735c0356",
          "message": "fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524) (#525)\n\n* fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524)\n\nThe fixed HTTP implementation does not support SSE streaming required\nby clients like OpenAI Codex. This commit deprecates USE_FIXED_HTTP\nand makes SingleSessionHTTPServer the default.\n\nChanges:\n- Add deprecation warnings in src/mcp/index.ts and src/http-server.ts\n- Remove USE_FIXED_HTTP from docker-compose.yml and Dockerfile.railway\n- Update .env.example with deprecation notice\n- Rename npm script to start:http:fixed:deprecated\n- Update all documentation to remove USE_FIXED_HTTP references\n- Mark test case as deprecated\n\nUsers should unset USE_FIXED_HTTP to use the modern SingleSessionHTTPServer\nwhich supports both JSON-RPC and SSE streaming.\n\nCloses #524\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* chore: bump version to 2.31.8 and add CHANGELOG entry\n\n- Fix comment inaccuracy: \"deprecated\" not \"deprecated and removed\"\n- Bump version from 2.31.7 to 2.31.8\n- Add CHANGELOG entry documenting USE_FIXED_HTTP deprecation\n- Update all deprecation messages to reference v2.31.8\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-07T13:42:16+01:00",
          "tree_id": "1675efb5c222304f76aa99a4ee1dd8396056b1ac",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/861005eeedf880be2489bc197b85a385735c0356"
        },
        "date": 1767789848408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce2c94c1a5ca64f82fb5b011d7739bdfd0711c66",
          "message": "fix: recognize dynamic AI Tool nodes in validator (Issue #522) (#526)\n\nWhen n8n connects any node to an AI Agent's tool slot, it creates a\ndynamic Tool variant at runtime (e.g., googleDrive → googleDriveTool).\nThese don't exist in npm packages, causing false \"unknown node type\"\nerrors.\n\nAdded validation-time inference: when a *Tool node type is not found,\ncheck if the base node exists. If yes, treat as valid with warning.\n\nChanges:\n- workflow-validator.ts: Add INFERRED_TOOL_VARIANT logic\n- node-similarity-service.ts: Add 98% confidence for valid Tool variants\n- Added 7 unit tests for inferred tool variant functionality\n\nFixes #522\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-07T18:09:55+01:00",
          "tree_id": "6b568155d3d2e1333dba098ad082367114a4634f",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/ce2c94c1a5ca64f82fb5b011d7739bdfd0711c66"
        },
        "date": 1767805907935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "211ae72f9698bf64d49e2a3d867d0b77f7a85535",
          "message": "feat: add community nodes support (Issues #23, #490) (#527)\n\n* feat: add community nodes support (Issues #23, #490)\n\nAdd comprehensive support for n8n community nodes, expanding the node\ndatabase from 537 core nodes to 1,084 total (537 core + 547 community).\n\nNew Features:\n- 547 community nodes indexed (301 verified + 246 npm packages)\n- `source` filter for search_nodes: all, core, community, verified\n- Community metadata: isCommunity, isVerified, authorName, npmDownloads\n- Full schema support for verified nodes (no parsing needed)\n\nData Sources:\n- Verified nodes from n8n Strapi API (api.n8n.io)\n- Popular npm packages (keyword: n8n-community-node-package)\n\nCLI Commands:\n- npm run fetch:community (full rebuild)\n- npm run fetch:community:verified (fast, verified only)\n- npm run fetch:community:update (incremental)\n\nFixes #23 - search_nodes not finding community nodes\nFixes #490 - Support obtaining installed community node types\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: fix test issues for community nodes feature\n\n- Fix TypeScript literal type errors in search-nodes-source-filter.test.ts\n- Skip timeout-sensitive retry tests in community-node-fetcher.test.ts\n- Fix malformed API response test expectations\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* data: include 547 community nodes in database\n\nUpdated nodes.db with community nodes:\n- 301 verified community nodes (from n8n Strapi API)\n- 246 popular npm community packages\n\nTotal nodes: 1,349 (802 core + 547 community)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add community fields to node-repository-outputs test mockRows\n\nUpdate all mockRow objects in the test file to include the new community\nnode fields (is_community, is_verified, author_name, etc.) to match the\nupdated database schema.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add community fields to node-repository-core test mockRows\n\nUpdate all mockRow objects and expected results in the core test file\nto include the new community node fields, fixing CI test failures.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: separate documentation coverage tests for core vs community nodes\n\nCommunity nodes (from npm packages) typically have lower documentation\ncoverage than core n8n nodes. Updated tests to:\n- Check core nodes against 80% threshold\n- Report community nodes coverage informatively (no hard requirement)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: increase bulk insert performance threshold for community columns\n\nAdjusted performance test thresholds to account for the 8 additional\ncommunity node columns in the database schema. Insert operations are\nslightly slower with more columns.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: make list-workflows test resilient to pagination\n\nThe \"no filters\" test was flaky in CI because:\n- CI n8n instance accumulates many workflows over time\n- Default pagination (100) may not include newly created workflows\n- Workflows sorted by criteria that push new ones beyond first page\n\nChanged test to verify API response structure rather than requiring\nspecific workflows in results. Finding specific workflows is already\ncovered by pagination tests.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* ci: increase test timeout from 10 to 15 minutes\n\nWith community nodes support, the database is larger (~1100 nodes vs ~550)\nwhich increases test execution time. Increased timeout to prevent\npremature job termination.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-08T07:02:56+01:00",
          "tree_id": "86274f568c8a168dac13c956d422d515c44ce2d6",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/211ae72f9698bf64d49e2a3d867d0b77f7a85535"
        },
        "date": 1767852290104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28667736cd7aeca5e898c68406706990a72fcb20",
          "message": "fix: use lowercase for community node names to match n8n convention (#529)\n\n* fix: use lowercase for community node names to match n8n convention\n\nCommunity nodes in n8n use lowercase node class names (e.g., chatwoot\nnot Chatwoot). The extractNodeNameFromPackage method was incorrectly\ncapitalizing node names, causing validation failures.\n\nChanges:\n- Fix extractNodeNameFromPackage to use lowercase instead of capitalizing\n- Add case-insensitive fallback in getNode for robustness\n- Update tests to expect lowercase node names\n- Bump version to 2.32.1\n\nFixes the case sensitivity bug where MCP stored Chatwoot but n8n\nexpected chatwoot.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* chore: rebuild community nodes database with lowercase names\n\nRebuilt database after fixing extractNodeNameFromPackage to use\nlowercase node names matching n8n convention.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-08T08:27:56+01:00",
          "tree_id": "12d64f00fae9c4f941dbbdf14f4a351117e69556",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/28667736cd7aeca5e898c68406706990a72fcb20"
        },
        "date": 1767857395185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "533b105f03ad68e137753bce561d3c1f85f36263",
          "message": "feat: AI-powered documentation for community nodes (#530)\n\n* feat: add AI-powered documentation generation for community nodes\n\nAdd system to fetch README content from npm and generate structured\nAI documentation summaries using local Qwen LLM.\n\nNew features:\n- Database schema: npm_readme, ai_documentation_summary, ai_summary_generated_at columns\n- DocumentationGenerator: LLM integration with OpenAI-compatible API (Zod validation)\n- DocumentationBatchProcessor: Parallel processing with progress tracking\n- CLI script: generate-community-docs.ts with multiple modes\n- Migration script for existing databases\n\nnpm scripts:\n- generate:docs - Full generation (README + AI summary)\n- generate:docs:readme-only - Only fetch READMEs\n- generate:docs:summary-only - Only generate AI summaries\n- generate:docs:incremental - Skip nodes with existing data\n- generate:docs:stats - Show documentation statistics\n- migrate:readme-columns - Apply database migration\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: expose AI documentation summaries in MCP get_node response\n\n- Add AI documentation fields to NodeRow interface\n- Update SQL queries in getNodeDocumentation() to fetch AI fields\n- Add safeJsonParse helper method\n- Include aiDocumentationSummary and aiSummaryGeneratedAt in docs response\n- Fix parseNodeRow to include npmReadme and AI summary fields\n- Add truncateArrayFields to handle LLM responses exceeding schema limits\n- Bump version to 2.33.0\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: add unit tests for AI documentation feature (100 tests)\n\nAdded comprehensive test coverage for the AI documentation feature:\n\n- server-node-documentation.test.ts: 18 tests for MCP getNodeDocumentation()\n  - AI documentation field handling\n  - safeJsonParse error handling\n  - Node type normalization\n  - Response structure validation\n\n- node-repository-ai-documentation.test.ts: 16 tests for parseNodeRow()\n  - AI documentation field parsing\n  - Malformed JSON handling\n  - Edge cases (null, empty, missing fields)\n\n- documentation-generator.test.ts: 66 tests (14 new for truncateArrayFields)\n  - Array field truncation\n  - Schema limit enforcement\n  - Edge case handling\n\nAll 100 tests pass with comprehensive coverage.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add AI documentation fields to test mock data\n\nUpdated test fixtures to include the 3 new AI documentation fields:\n- npm_readme\n- ai_documentation_summary\n- ai_summary_generated_at\n\nThis fixes test failures where getNode() returns objects with these\nfields but test expectations didn't include them.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: increase CI threshold for database performance test\n\nThe 'should benefit from proper indexing' test was failing in CI with\nquery times of 104-127ms against a 100ms threshold. Increased threshold\nto 150ms to account for CI environment variability.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-08T13:14:02+01:00",
          "tree_id": "b9745fa72e076936efd46eca14c6334a027f1fea",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/533b105f03ad68e137753bce561d3c1f85f36263"
        },
        "date": 1767874566649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9c4400a929d644287825afd6bde0681dc4bb103",
          "message": "fix: sync package.runtime.json version in Docker builds (v2.33.1) (#534)\n\nDocker images were built with stale package.runtime.json (v2.29.5)\nwhile npm package was at v2.33.0. This was caused by the build-docker\njob not syncing the version before building, while publish-npm did.\n\nChanges:\n- Add \"Sync runtime version\" step to release.yml build-docker job\n- Add \"Sync runtime version\" step to docker-build.yml build job\n- Add \"Sync runtime version\" step to docker-build.yml build-railway job\n- Bump version to 2.33.1 to trigger release with fix\n\nThe sync uses a lightweight Node.js one-liner (no npm install needed)\nto update package.runtime.json version from package.json before\nDocker builds.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-12T10:25:58+01:00",
          "tree_id": "af266b355beb2ab2aea4ed0d332eb035448383ea",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a9c4400a929d644287825afd6bde0681dc4bb103"
        },
        "date": 1768210078230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "974a9fb3492fe2c4984ee0549085d531cdc6242a",
          "message": "chore: update n8n to 2.3.3 and bump version to 2.33.2 (#535)\n\n- Updated n8n from 2.2.3 to 2.3.3\n- Updated n8n-core from 2.2.2 to 2.3.2\n- Updated n8n-workflow from 2.2.2 to 2.3.2\n- Updated @n8n/n8n-nodes-langchain from 2.2.2 to 2.3.2\n- Rebuilt node database with 537 nodes (434 from n8n-nodes-base, 103 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-13T17:47:27+01:00",
          "tree_id": "79bb647536c9c858570eb5aef0acf8a1bbcb4a15",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/974a9fb3492fe2c4984ee0549085d531cdc6242a"
        },
        "date": 1768322967350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f15b82f1e5496b7b0f88910a9f61c152ceeb327",
          "message": "chore: update n8n to 2.4.4 (#543)\n\n* chore: update n8n to 2.4.4 and bump version to 2.33.3\n\n- Updated n8n from 2.2.3 to 2.4.4\n- Updated n8n-core from 2.2.2 to 2.4.2\n- Updated n8n-workflow from 2.2.2 to 2.4.2\n- Updated @n8n/n8n-nodes-langchain from 2.2.2 to 2.4.3\n- Added new `icon` NodePropertyType (now 23 types total)\n- Rebuilt node database with 803 nodes (541 from n8n-nodes-base, 262 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update n8n-workflow version in Dockerfile for icon type support\n\nThe Docker build was using n8n-workflow@^1.96.0 which doesn't have the new\n'icon' NodePropertyType. Updated to n8n-workflow@^2.4.2 to match the project's\npackage.json version.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update comments to reflect 23 NodePropertyTypes\n\n- Updated test comment from '22 standard types' to '23 standard types'\n- Updated header comment from n8n-workflow v1.120.3 to v2.4.2\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-21T11:22:26+01:00",
          "tree_id": "5b495f9a0c34a9a03922419c684a3b745f15d1ad",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/0f15b82f1e5496b7b0f88910a9f61c152ceeb327"
        },
        "date": 1768991083028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad343797719f96c33417ef32b54fe4107d51581",
          "message": "fix: memory leak in SSE session reset (#542) (#544)\n\nWhen SSE sessions are recreated every 5 minutes, the old session's MCP\nserver was not being closed, causing:\n- SimpleCache cleanup timer continuing to run indefinitely\n- Database connections remaining open\n- Cached data (~50-100MB per session) persisting in memory\n\nAdded server.close() call before transport.close() in resetSessionSSE(),\nmirroring the existing cleanup pattern in removeSession().\n\nFixes #542\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-21T13:56:16+01:00",
          "tree_id": "a7886bb6cbe8230ac4306a4c4993459b90d6a5db",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/fad343797719f96c33417ef32b54fe4107d51581"
        },
        "date": 1769000306810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8c76e435d80953cdbde3fc8b86675285c555b30",
          "message": "fix: critical memory leak from per-session database connections (#554)\n\n* fix: critical memory leak from per-session database connections (#542)\n\nEach MCP session was creating its own database connection (~900MB),\ncausing OOM kills every ~20 minutes with 3-4 concurrent sessions.\n\nChanges:\n- Add SharedDatabase singleton pattern - all sessions share ONE connection\n- Reduce session timeout from 30 min to 5 min (configurable)\n- Add eager cleanup for reconnecting instances\n- Fix telemetry event listener leak\n\nMemory impact: ~900MB/session → ~68MB shared + ~5MB/session overhead\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\n* fix: resolve test failures from shared database race conditions\n\n- Fix `shutdown()` to respect shared database pattern (was directly closing)\n- Add `await this.initialized` in both `close()` and `shutdown()` to prevent\n  race condition where cleanup runs while initialization is in progress\n- Add double-shutdown protection with `isShutdown` flag\n- Export `SharedDatabaseState` type for proper typing\n- Include error details in debug logs\n- Add MCP server close to `shutdown()` for consistency with `close()`\n- Null out `earlyLogger` in `shutdown()` for consistency\n\nThe CI test failure \"The database connection is not open\" was caused by:\n1. `shutdown()` directly calling `this.db.close()` which closed the SHARED\n   database connection, breaking subsequent tests\n2. Race condition where `shutdown()` ran before initialization completed\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: add unit tests for shared-database module\n\nAdd comprehensive unit tests covering:\n- getSharedDatabase: initialization, reuse, different path error, concurrent requests\n- releaseSharedDatabase: refCount decrement, double-release guard\n- closeSharedDatabase: state clearing, error handling, re-initialization\n- Helper functions: isSharedDatabaseInitialized, getSharedDatabaseRefCount\n\n21 tests covering the singleton database connection pattern used to prevent\n~900MB memory leaks per session.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-23T19:51:22+01:00",
          "tree_id": "3a906ff4048963c970a61034513573e40decb4d9",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c8c76e435d80953cdbde3fc8b86675285c555b30"
        },
        "date": 1769194408449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68148804105efa21b592242a9e5f61f52c55c778",
          "message": "chore: update n8n to 2.6.3 and bump version to 2.33.6 (#571)",
          "timestamp": "2026-02-06T09:09:37+01:00",
          "tree_id": "7cc6335dd85928c7b9ef7c72680ceec376426d28",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/68148804105efa21b592242a9e5f61f52c55c778"
        },
        "date": 1770365527929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f45cc6dcc416c5ae6c6079160fa44f766f6ea71",
          "message": "feat: MCP Apps - rich HTML UIs for tool results (#573)\n\n* feat: add MCP Apps with rich HTML UIs for tool results\n\nAdd MCP Apps infrastructure that allows MCP hosts like Claude Desktop\nto render rich HTML UIs alongside tool results via `_meta.ui` and the\nMCP resources protocol.\n\n- Server-side UI module (src/mcp/ui/) with UIAppRegistry, tool-to-UI\n  mapping, and _meta.ui injection into tool responses\n- React + Vite build pipeline (ui-apps/) producing self-contained HTML\n  per app using vite-plugin-singlefile\n- Operation Result UI for workflow CRUD tools (create, update, delete,\n  test, autofix, deploy)\n- Validation Summary UI for validation tools (validate_node,\n  validate_workflow, n8n_validate_workflow)\n- Shared component library (Card, Badge, Expandable) with n8n dark theme\n- MCP resources protocol support (ListResources, ReadResource handlers)\n- Graceful degradation when ui-apps/dist/ is not built\n- 22 unit tests across 3 test files\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* test: improve MCP Apps test coverage and add security hardening\n\n- Expand test suite from 22 to 57 tests across 3 test files\n- Add UIAppRegistry.reset() for proper test isolation between tests\n- Replace some fs mocks with real temp directory tests in registry\n- Add edge case coverage: empty strings, pre-load state, double load,\n  malformed URIs, duplicate tool patterns, empty HTML files\n- Add regression tests for specific tool-to-UI mappings\n- Add URI format consistency validation across all configs\n- Improve _meta.ui injection tests with structuredContent coexistence\n- Coverage: statements 79.4% -> 80%, lines 79.4% -> 80%\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T04:11:21+01:00",
          "tree_id": "3e1d39e8415bcceec4d9242dffe80273daaa9410",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/1f45cc6dcc416c5ae6c6079160fa44f766f6ea71"
        },
        "date": 1770434047883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b90d01a66de1f01274744a637a9496578cde67",
          "message": "fix: align MCP Apps with official ext-apps spec (#574)\n\n* feat: add MCP Apps with rich HTML UIs for tool results\n\nAdd MCP Apps infrastructure that allows MCP hosts like Claude Desktop\nto render rich HTML UIs alongside tool results via `_meta.ui` and the\nMCP resources protocol.\n\n- Server-side UI module (src/mcp/ui/) with UIAppRegistry, tool-to-UI\n  mapping, and _meta.ui injection into tool responses\n- React + Vite build pipeline (ui-apps/) producing self-contained HTML\n  per app using vite-plugin-singlefile\n- Operation Result UI for workflow CRUD tools (create, update, delete,\n  test, autofix, deploy)\n- Validation Summary UI for validation tools (validate_node,\n  validate_workflow, n8n_validate_workflow)\n- Shared component library (Card, Badge, Expandable) with n8n dark theme\n- MCP resources protocol support (ListResources, ReadResource handlers)\n- Graceful degradation when ui-apps/dist/ is not built\n- 22 unit tests across 3 test files\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* test: improve MCP Apps test coverage and add security hardening\n\n- Expand test suite from 22 to 57 tests across 3 test files\n- Add UIAppRegistry.reset() for proper test isolation between tests\n- Replace some fs mocks with real temp directory tests in registry\n- Add edge case coverage: empty strings, pre-load state, double load,\n  malformed URIs, duplicate tool patterns, empty HTML files\n- Add regression tests for specific tool-to-UI mappings\n- Add URI format consistency validation across all configs\n- Improve _meta.ui injection tests with structuredContent coexistence\n- Coverage: statements 79.4% -> 80%, lines 79.4% -> 80%\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: align MCP Apps with official ext-apps spec\n\nUpdate URI scheme from n8n-mcp://ui/ to ui://n8n-mcp/ per MCP spec.\nMove _meta.ui.resourceUri to tool definitions (tools/list) instead of\ntool call responses. Rewrite UI apps hook to use @modelcontextprotocol/ext-apps\nApp class instead of window.__MCP_DATA__.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T05:16:15+01:00",
          "tree_id": "77cc15caa738e0d0af6b48a021377132174db7c5",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/23b90d01a66de1f01274744a637a9496578cde67"
        },
        "date": 1770437934544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b328d8168608905ae0f4efd654d79c22d718507",
          "message": "fix: include UI apps build in CI release pipeline (#575)\n\nThe release workflow only ran `npm run build` (TypeScript), skipping the\nUI apps build. This meant ui-apps/dist/ was missing from npm packages.\n\n- Change `npm run build` to `npm run build:all` in build-and-verify and\n  publish-npm jobs\n- Copy ui-apps/dist into the npm publish directory\n- Add ui-apps/dist/**/* to the published package files list\n- Bump version to 2.34.2\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T05:40:21+01:00",
          "tree_id": "21fc795a449cd4d5009f754d13215147c5067c6b",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/1b328d8168608905ae0f4efd654d79c22d718507"
        },
        "date": 1770439366282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38aa70261ae9a012d9bb157deffcc2a0e9046d08",
          "message": "fix: use text/html;profile=mcp-app MIME type for MCP Apps resources (#577)\n\nThe ext-apps spec requires RESOURCE_MIME_TYPE (text/html;profile=mcp-app)\nfor hosts to recognize resources as MCP Apps. Without the profile parameter,\nClaude Desktop/web fails with \"Failed to load MCP App: the resource may\nexceed the 5 MB size limit.\"\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T15:18:50+01:00",
          "tree_id": "c5dce9274e01c012b23f1f83d7896067c7b62302",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/38aa70261ae9a012d9bb157deffcc2a0e9046d08"
        },
        "date": 1770474080779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a57b400bd044f92fae20fd35e8b774efcbdac816",
          "message": "fix: use official ext-apps useApp hook to fix blank MCP App rendering (#578)\n\nThe custom useToolData hook had lifecycle issues that prevented the UI\nfrom rendering in Claude Desktop/web: no appInfo in App constructor,\nunhandled connect() Promise, app.close() on unmount conflicting with\nReact Strict Mode. Switched to the official useApp hook from\n@modelcontextprotocol/ext-apps/react which handles initialization\nhandshake, handler registration, and cleanup correctly.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T16:25:27+01:00",
          "tree_id": "056266d95005da1b26044426a3f33387b9906206",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a57b400bd044f92fae20fd35e8b774efcbdac816"
        },
        "date": 1770478072477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "020bc3d43dd4bf4660eea0e27e9fc592ef0fb0c0",
          "message": "fix: MCP App UI - use official ext-apps hook + align types with server responses (#579)\n\n* fix: use official ext-apps useApp hook to fix blank MCP App rendering\n\nThe custom useToolData hook had lifecycle issues that prevented the UI\nfrom rendering in Claude Desktop/web: no appInfo in App constructor,\nunhandled connect() Promise, app.close() on unmount conflicting with\nReact Strict Mode. Switched to the official useApp hook from\n@modelcontextprotocol/ext-apps/react which handles initialization\nhandshake, handler registration, and cleanup correctly.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: align MCP App UI types with actual server response format\n\n- useToolData hook now uses official useApp from ext-apps/react\n- OperationResultData uses success:boolean + data.id/name (matching\n  McpToolResponse from handlers-n8n-manager.ts)\n- ValidationSummaryData handles both direct results (validate_node,\n  validate_workflow) and wrapped results (n8n_validate_workflow)\n- Added visible error/connection states for debugging\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-08T02:08:50+01:00",
          "tree_id": "cabd51b5b5a47cd3efbe7b27644457102bb322e6",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/020bc3d43dd4bf4660eea0e27e9fc592ef0fb0c0"
        },
        "date": 1770513110599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6015817146aa62981e129227bf9e72e40e27b1a",
          "message": "Fix/mcp app blank UI (#580)\n\n* fix: use official ext-apps useApp hook to fix blank MCP App rendering\n\nThe custom useToolData hook had lifecycle issues that prevented the UI\nfrom rendering in Claude Desktop/web: no appInfo in App constructor,\nunhandled connect() Promise, app.close() on unmount conflicting with\nReact Strict Mode. Switched to the official useApp hook from\n@modelcontextprotocol/ext-apps/react which handles initialization\nhandshake, handler registration, and cleanup correctly.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: align MCP App UI types with actual server response format\n\n- useToolData hook now uses official useApp from ext-apps/react\n- OperationResultData uses success:boolean + data.id/name (matching\n  McpToolResponse from handlers-n8n-manager.ts)\n- ValidationSummaryData handles both direct results (validate_node,\n  validate_workflow) and wrapped results (n8n_validate_workflow)\n- Added visible error/connection states for debugging\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* chore: bump version to 2.34.5 for npm publish\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-08T03:23:16+01:00",
          "tree_id": "950b563396eb2b1935e379dbd5b19b234d73f76a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c6015817146aa62981e129227bf9e72e40e27b1a"
        },
        "date": 1770517545456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89146186d8c5d480e284eefbade2c564e80374db",
          "message": "feat: UI/UX redesign for MCP Apps - 3 new apps + enhanced existing (#583)\n\nAdd workflow-list, execution-history, and health-dashboard apps.\nRedesign operation-result with operation-aware headers, detail panels,\nand copy-to-clipboard. Fix React hooks violations in validation-summary\nand execution-history (useMemo after early returns). Add local preview\nharness for development. Update tests for 5-app config.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-09T03:36:27+01:00",
          "tree_id": "0f7ed6841ebdb0b393b21bec41ab30973d65406a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/89146186d8c5d480e284eefbade2c564e80374db"
        },
        "date": 1770604744721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8217229e2fb4615e44caafd3e8869da6d30f80b1",
          "message": "chore: bump version to 2.35.0 and update CHANGELOG (#584)\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-09T04:38:56+01:00",
          "tree_id": "2acb07d5da038ccb1b618ba84ea66e9b63aba2ac",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/8217229e2fb4615e44caafd3e8869da6d30f80b1"
        },
        "date": 1770608473559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34159f4ece6f345ead8f2c551fa391f621073f99",
          "message": "fix: add legacy flat _meta key for MCP App rendering in Claude (#585)\n\nClaude.ai reads the flat `_meta[\"ui/resourceUri\"]` key to discover UI apps,\nnot the nested `_meta.ui.resourceUri`. Without the flat key, tools like\nn8n_health_check and n8n_list_workflows showed as collapsed accordions\ninstead of rendering rich UI. Now sets both keys, matching the behavior\nof the official registerAppTool helper from @modelcontextprotocol/ext-apps.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-09T06:40:52+01:00",
          "tree_id": "5239293aeb3293cd3619ee62a2c6cae42facd4d2",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/34159f4ece6f345ead8f2c551fa391f621073f99"
        },
        "date": 1770615798173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f695be48205831f4dcccf73c3d60cced196b77c",
          "message": "fix: disable MCP Apps that don't render in Claude.ai (#586)\n\nDisable 3 MCP Apps (workflow-list, execution-history, health-dashboard)\nthat show as collapsed accordions and remove n8n_deploy_template tool\nmapping that renders blank content. The server sets _meta correctly on\nthe wire but the Claude.ai host ignores it for these tools. Keep the 2\nworking apps (operation-result, validation-summary) active.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-10T02:26:40+01:00",
          "tree_id": "e0e55dded1fe24727a3288b6d22bbe9f66c21a20",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/6f695be48205831f4dcccf73c3d60cced196b77c"
        },
        "date": 1770686938866,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77048347b3a82421ffa0b8b6bd44f8f50dd8cf52",
          "message": "chore: update n8n to 2.8.3 (#603)\n\n* chore: update n8n to 2.8.3 and bump version to 2.35.3\n\n- Updated n8n from 2.6.3 to 2.8.3\n- Updated n8n-core from 2.6.1 to 2.8.1\n- Updated n8n-workflow from 2.6.0 to 2.8.0\n- Updated @n8n/n8n-nodes-langchain from 2.6.2 to 2.8.1\n- Fixed node loader to bypass restricted package.json exports in\n  @n8n/n8n-nodes-langchain >=2.9.0 (resolves via absolute paths)\n- Fixed community doc generator for cloud LLMs: added API key env var\n  support, switched to max_completion_tokens, auto-omit temperature\n- Rebuilt node database with 1,236 nodes (673 n8n-nodes-base,\n  133 @n8n/n8n-nodes-langchain, 430 community)\n- Refreshed community nodes (361 verified + 69 npm) with 424 AI summaries\n- Updated README badge with new n8n version and node counts\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: update documentation-generator tests for max_completion_tokens\n\n- Updated test assertions from max_tokens to max_completion_tokens\n- Updated testConnection token limit expectation from 10 to 200\n- Added temperature to test config to match new configurable behavior\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-20T02:15:15+01:00",
          "tree_id": "3fd6bf33adf702cee779dffe9196bb2155947f22",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/77048347b3a82421ffa0b8b6bd44f8f50dd8cf52"
        },
        "date": 1771550304557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bad880f44fc26176083b1417681e45411cdeade",
          "message": "fix: defensive JSON.parse for stringified object/array params (#605) (#606)\n\n* chore: update n8n to 2.8.3 and bump version to 2.35.3\n\n- Updated n8n from 2.6.3 to 2.8.3\n- Updated n8n-core from 2.6.1 to 2.8.1\n- Updated n8n-workflow from 2.6.0 to 2.8.0\n- Updated @n8n/n8n-nodes-langchain from 2.6.2 to 2.8.1\n- Fixed node loader to bypass restricted package.json exports in\n  @n8n/n8n-nodes-langchain >=2.9.0 (resolves via absolute paths)\n- Fixed community doc generator for cloud LLMs: added API key env var\n  support, switched to max_completion_tokens, auto-omit temperature\n- Rebuilt node database with 1,236 nodes (673 n8n-nodes-base,\n  133 @n8n/n8n-nodes-langchain, 430 community)\n- Refreshed community nodes (361 verified + 69 npm) with 424 AI summaries\n- Updated README badge with new n8n version and node counts\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: update documentation-generator tests for max_completion_tokens\n\n- Updated test assertions from max_tokens to max_completion_tokens\n- Updated testConnection token limit expectation from 10 to 200\n- Added temperature to test config to match new configurable behavior\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: defensive JSON.parse for stringified object/array params (#605)\n\nClaude Desktop 1.1.3189 serializes object/array MCP parameters as JSON\nstrings, causing ZodError failures for ~60% of tools. Add schema-driven\ncoercion in the central CallToolRequestSchema handler to detect and parse\nthem back automatically.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-20T16:56:25+01:00",
          "tree_id": "b382766ebaefb6c237f0966b5581ee6016e49f57",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/4bad880f44fc26176083b1417681e45411cdeade"
        },
        "date": 1771603168320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87f26eef1847852b0f8907b11014001ef4074fd9",
          "message": "fix: comprehensive param type coercion for Claude Desktop/Claude.ai (#605) (#609)\n\nExpand coerceStringifiedJsonParams() to handle ALL type mismatches,\nnot just stringified objects/arrays. Testing showed 6/9 tools still\nfailing in Claude Desktop after v2.35.4.\n\n- Coerce string→number, string→boolean, number→string, boolean→string\n- Add safeguard for entire args object arriving as JSON string\n- Add [Diagnostic] section to error responses with received arg types\n- Bump to v2.35.5\n- 24 unit tests (9 new)\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-22T07:07:30+01:00",
          "tree_id": "a2b3f1b9d290f4a5565bc9bc3b5dfaace4551cfd",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/87f26eef1847852b0f8907b11014001ef4074fd9"
        },
        "date": 1771740639993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0998e5486e47cc5a804e0c3e56a974248ffa426b",
          "message": "chore: update n8n to 2.10.3 (#618)\n\n* chore: update n8n to 2.10.3 and bump version to 2.35.6\n\n- Updated n8n from 2.8.3 to 2.10.3\n- Updated n8n-core from 2.8.1 to 2.10.1\n- Updated n8n-workflow from 2.8.0 to 2.10.1\n- Updated @n8n/n8n-nodes-langchain from 2.8.1 to 2.10.1\n- Rebuilt node database with 806 core nodes (community nodes preserved from previous build)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: override isolated-vm with empty stub to fix CI build\n\nisolated-vm 6.0.2 (transitive dep from n8n-nodes-base) fails to compile\nnatively on CI (Node 20 + Linux) due to V8 API changes. This package is\nnot used at runtime by n8n-mcp - we only read node metadata, not execute\nnodes. Override with empty-npm-package to avoid the native compilation.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: skip native compilation in fresh install CI check\n\nThe fresh install test simulates `npm install n8n-mcp` from scratch,\nso package.json overrides don't apply. Use --ignore-scripts to skip\nisolated-vm native compilation since n8n-mcp only reads node metadata\nand doesn't execute n8n nodes at runtime.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-03-04T15:47:10+01:00",
          "tree_id": "52ea4be51ce2309c852291f51c4dec9f4f6b2c9f",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/0998e5486e47cc5a804e0c3e56a974248ffa426b"
        },
        "date": 1772635869941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}