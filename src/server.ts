import { McpServer as BaseMcpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as promptDefinitions from "./capabilities/prompts/definitions";
import * as toolDefinitions from "./capabilities/tools/definitions";
import { name, version } from '../package.json';
import { logger } from './utils/logger';

export class StdioMcpServer extends BaseMcpServer {
    constructor() {
        super({ name: name, version: version });
    }

    async run(): Promise<void> {
        this.registerPromptDefinitions();
        this.registerToolDefinitions();

        // Start receiving messages on stdin and sending messages on stdout
        const transport = new StdioServerTransport();
        await this.connect(transport);
        logger.error("MCP Server running on stdio");
    }

    private registerPromptDefinitions(): void {
        const prompts = Object.values(promptDefinitions);
        try {
            prompts.forEach(prompt => {
                this.registerPrompt(
                    prompt.name,
                    {
                        title: prompt.title,
                        description: prompt.description,
                        argsSchema: prompt.inputSchema,
                    },
                    prompt.handler
                );
            });

            logger.info(`Successfully registered ${prompts.length} prompts`);
        } catch (error) {
            logger.error({ error }, "Error registering prompts");
            throw error;
        }
    }

    private registerToolDefinitions(): void {
        const tools = Object.values(toolDefinitions);
        try {
            tools.forEach(tool => {
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

            logger.info(`Successfully registered ${tools.length} tools`);
        } catch (error) {
            logger.error({ error }, "Error registering tools");
            throw error;
        }
    }
}
