import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from 'zod';

/**
 * Utility type for functions that may or may not return a Promise
 */
type MaybePromise<T> = T | Promise<T>;

/**
 * Tool response type
 */
type Response = {
    content: Array<{ type: "text"; text: string }>;
    isError?: boolean;
};

/**
 * Tool definition interface for type-safe tool registration
 */
export interface Tool<T extends Record<string, z.ZodType> = Record<string, z.ZodType>> {
    name: string;
    title: string;
    description: string;
    inputSchema: T;
    handler: (args: z.infer<z.ZodObject<T>>) => MaybePromise<Response>;
}

/**
 * Register all tools with the MCP server
 */
export const registerAllTools = (server: McpServer) => {
    try {
        allTools.forEach(tool => {
            server.registerTool(
                tool.name,
                {
                    title: tool.title,
                    description: tool.description,
                    inputSchema: tool.inputSchema
                },
                tool.handler
            );
        });

        console.error(`Successfully registered ${allTools.length} tools`);
    } catch (error) {
        console.error("Error registering tools:", error);
        throw error;
    }
};

/**
 * Import all tool definitions
 */
import { currentWeatherTool } from './current-weather';

/**
 * All available tools
 */
const allTools: Tool<any>[] = [
    currentWeatherTool,
];
