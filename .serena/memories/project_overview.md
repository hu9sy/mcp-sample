# Project Overview

## Purpose
This is a Model Context Protocol (MCP) server project named "my-mcp". Based on the dependencies (@modelcontextprotocol/sdk), this project is designed to create an MCP server that can integrate with various AI assistants and tools. Currently, it appears to be in early development stage with just a basic hello world implementation.

## Tech Stack
- **Runtime**: Bun (fast all-in-one JavaScript runtime)
- **Language**: TypeScript
- **Main Framework**: Model Context Protocol SDK (@modelcontextprotocol/sdk v1.17.3)
- **Type Definitions**: @types/node, @types/bun

## Project Structure
```
my-mcp/
├── src/
│   └── index.ts          # Main entry point (currently just "Hello via Bun!")
├── dist/                 # Build output directory
├── package.json          # Project configuration and dependencies
├── tsconfig.json         # TypeScript configuration
├── bun.lock             # Bun lockfile
├── README.md            # Basic project documentation
├── CLAUDE.md            # Claude-specific instructions (Bun preferences)
└── .gitignore           # Git ignore rules
```

## Current Status
The project is in its initial state with only a basic console.log statement in the main file. It's set up as a CLI tool with a binary entry point at "./dist/index.js".