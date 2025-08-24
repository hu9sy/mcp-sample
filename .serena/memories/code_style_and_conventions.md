# Code Style and Conventions

## TypeScript Configuration
- **Strict mode enabled**: All strict type checking options are on
- **Target**: ESNext with module preservation
- **Module Resolution**: Bundler mode (Bun-compatible)
- **JSX**: react-jsx
- **Verbatim Module Syntax**: Required for proper ESM support

## Coding Standards
- **Type Safety**: Explicit types required, strict null checks
- **Imports**: ES modules with .js extensions for type imports
- **Error Handling**: Comprehensive try-catch blocks with typed errors
- **Logging**: Use Pino logger for all logging needs

## Architecture Patterns
- **Modular Design**: Capabilities organized in separate directories (tools, resources, prompts)
- **Type-Safe Tool Registration**: Tools defined with Zod schemas and TypeScript interfaces
- **Class-based Server**: StdioMcpServer extends BaseMcpServer
- **Dependency Injection**: Clean separation of concerns

## File Naming
- **Lowercase with hyphens**: Prefer kebab-case for file names
- **Descriptive names**: Clear purpose from filename
- **Extension consistency**: .ts for TypeScript files

## Tool Development
- Use the Tool interface from types.ts
- Define input schemas with Zod
- Return CallToolResult compatible responses
- Handle errors gracefully with isError flag