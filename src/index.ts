import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { env } from './utils/env';
import axios from 'axios';

// Create an MCP server
const server = new McpServer({
  name: "my-mcp",
  version: "0.0.1"
});

// Add current weather tool
server.registerTool(
  "current-weather",
  {
    title: "Current Weather",
    description: "Fetch current weather by location",
    inputSchema: {
      latitude: z.number().min(-90).max(90).describe('Latitude of location'),
      longitude: z.number().min(-180).max(180).describe('Longitude of location'),
    }
  },
  async ({ latitude, longitude }) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: env.MCP_API_KEY,
          lat: latitude,
          lon: longitude,
          units: 'metric',
        }
      });
      return {
        content: [{
          type: "text",
          text: JSON.stringify(response.data, null, 2)
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Failed to fetch weather data: ${error instanceof Error ? error.message : 'Unknown error'}`
        }],
        isError: true
      };
    }
  }
);

async function main() {
  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
