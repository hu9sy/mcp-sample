import { StdioMcpServer } from './server';
import { logger } from './utils/logger';

// Create an MCP server
const server = new StdioMcpServer();

async function main() {
  await server.run();
  logger.error("MCP Server running on stdio");
}

main().catch((error) => {
  logger.error("Fatal error in main():", error);
  process.exit(1);
});
