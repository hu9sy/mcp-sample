import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerAllTools } from './capabilities/tools/registry';
import { logger } from './utils/logger';
import { name, version } from '../package.json';

// Create an MCP server
const server = new McpServer({
  name: name,
  version: version
});

// Register all tools using the registry
registerAllTools(server);

async function main() {
  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.error("MCP Server running on stdio");
}

main().catch((error) => {
  logger.error("Fatal error in main():", error);
  process.exit(1);
});
