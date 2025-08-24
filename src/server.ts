import { McpServer as BaseMcpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as promptDefinitions from "./capabilities/prompts/definitions";
import * as resourceDefinitions from "./capabilities/resources/definitions";
import * as toolDefinitions from "./capabilities/tools/definitions";
import { name, version } from '../package.json';
import { logger } from './utils/logger';
import { UriTemplate } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";

export class StdioMcpServer extends BaseMcpServer {
    constructor() {
        super({ name: name, version: version });
    }

    async run(): Promise<void> {
        this.registerPromptDefinitions();
        this.registerResourceDefinitions();
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

    private registerResourceDefinitions(): void {
        const resources = Object.values(resourceDefinitions);
        try {
            resources.forEach(resource => {
                this.registerResource(
                    resource.name,
                    resource.uri,
                    {
                        title: resource.title,
                        description: resource.description,
                        mimeType: resource.mimeType,
                    },
                    resource.handler
                )
            });

            logger.info(`Successfully registered ${resources.length} resources`);
        } catch (error) {
            logger.error({ error }, "Error registering resources");
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
