# Suggested Commands

## Development Commands

### Building and Type Checking
- `bun run build` - Compile TypeScript and make dist/index.js executable
- `bun run typecheck` - Run TypeScript type checking without emitting files

### Running the Project
- `bun run index.ts` - Run the MCP server directly
- `bun ./dist/index.js` - Run the compiled version

### Package Management
- `bun install` - Install dependencies (preferred over npm/yarn)
- `bun add <package>` - Add new dependencies
- `bun remove <package>` - Remove dependencies

### Testing
- `bun test` - Run tests (when available)

### Git Operations
- `git status` - Check working tree status
- `git add <files>` - Stage changes
- `git commit -m "message"` - Commit changes
- `git log --oneline -n` - View recent commits

### System Utilities (macOS/Darwin)
- `ls` - List directory contents
- `find` - Search for files (though prefer ripgrep/rg)
- `grep` / `rg` - Search in files (ripgrep preferred)
- `cat` - Display file contents

## MCP Server Usage
The server runs on stdio and communicates with MCP clients. It exposes tools for weather data and other capabilities through the MCP protocol.