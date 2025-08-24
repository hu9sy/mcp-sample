import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerCurrentWeatherTool } from './current-weather';

export const register = (server: McpServer) => {
    // Register all tools
    registerCurrentWeatherTool(server);
}
