import { McpServer as BaseMcpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { definitions as toolDefinitions } from "./capabilities/tools/definitons";
import { name, version } from '../package.json';
import { logger } from './utils/logger';

export class StdioMcpServer extends BaseMcpServer {
    constructor() {
        super({ name: name, version: version });
    }

    async run(): Promise<void> {
        this.registerToolDefinitions();

        // Start receiving messages on stdin and sending messages on stdout
        const transport = new StdioServerTransport();
        await this.connect(transport);
        logger.error("MCP Server running on stdio");
    }

    private registerToolDefinitions(): void {
        try {
            toolDefinitions.forEach(tool => {
                this.registerTool(
                    tool.name,
                    {
                        title: tool.title,
                        description: tool.description,
                        inputSchema: tool.inputSchema
                    },
                    tool.handler
                );
            });

            console.error(`Successfully registered ${toolDefinitions.length} tools`);
        } catch (error) {
            console.error("Error registering tools:", error);
            throw error;
        }
    }
}
