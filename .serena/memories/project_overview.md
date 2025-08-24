# Project Overview

## Purpose
This is a Model Context Protocol (MCP) server implementation called "my-mcp". It's designed to provide tools and capabilities to LLM clients through the MCP standard.

## Tech Stack
- **Runtime**: Bun (v1.2.20+) - preferred over Node.js
- **Language**: TypeScript with strict type checking
- **Main Dependencies**:
  - `@modelcontextprotocol/sdk` (v1.17.3) - MCP SDK for TypeScript
  - `axios` - HTTP client for external API calls
  - `zod` - Schema validation
  - `pino` / `pino-pretty` - Logging
  - `@t3-oss/env-core` - Environment variable management

## Project Structure
```
src/
├── index.ts                     # Entry point
├── server.ts                    # Main MCP server class (StdioMcpServer)
├── capabilities/
│   ├── tools/
│   │   ├── types.ts            # Tool type definitions
│   │   ├── definitons/
│   │   │   ├── index.ts        # Tool registry
│   │   │   └── sample.ts       # Sample weather tool implementation
│   ├── resources/
│   │   └── registry.ts         # Resource definitions
│   └── prompts/
│       └── registry.ts         # Prompt definitions
└── utils/
    ├── logger.ts               # Pino logger setup
    └── env.ts                  # Environment variable validation
```

## Key Features
- Stdio-based MCP server communication
- Modular tool architecture with type-safe registration
- Weather API integration (sample implementation)
- Structured logging with Pino
- Environment-based configuration