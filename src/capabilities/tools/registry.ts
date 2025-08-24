import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z, type ZodRawShape } from 'zod';
import { currentWeatherTool } from './current-weather';

const targets: Tool[] = [
    currentWeatherTool,
];

export type ToolResult = {
    content: Array<{
        type: "text";
        text: string;
    }>;
    isError?: boolean;
};

export type Tool = {
    name: string;
    description: string;
    inputSchema: z.ZodObject<any>;
    handler: (input: any) => Promise<ToolResult> | ToolResult;
};

export const register = (server: McpServer) => {
    targets.forEach(tool => {
        server.tool(
            tool.name,
            tool.description,
            tool.inputSchema.shape,
            async (args: Record<string, unknown>) => {
                const validatedInput = tool.inputSchema.parse(args);
                return await tool.handler(validatedInput);
            }
        );
    });
}
