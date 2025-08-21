# Suggested Development Commands

## Package Management
- `bun install` - Install dependencies
- `bun update` - Update dependencies

## Development
- `bun run index.ts` - Run the TypeScript file directly (as shown in README)
- `bun src/index.ts` - Alternative way to run the main file
- `bun --hot ./src/index.ts` - Run with hot reload for development

## Build
- `bun run build` - Build the project (runs `tsc && chmod 755 dist/index.js`)
- `tsc` - TypeScript compilation only

## Testing
- `bun test` - Run tests (no test files exist yet, but this is the standard Bun test command)

## Execution
- `./dist/index.js` - Run the built binary
- `my-mcp` - Run via the bin entry (after build and proper installation)

## System Utilities (macOS/Darwin)
- `ls` - List directory contents
- `find` - Search for files and directories
- `grep` - Search text patterns in files
- `git` - Version control operations
- `cd` - Change directory
- `pwd` - Show current directory