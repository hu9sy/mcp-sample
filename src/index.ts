import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { name, version } from '../package.json';
import { logger } from './utils/logger.js';

const server = new McpServer({
  name: name,
  version: version,
  capabilities: {
    resources: {},
    tools: {},
  },
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info("MCP Server running on stdio");
}

main().catch((error) => {
  logger.error("Fatal error in main()", error);
  process.exit(1);
});
