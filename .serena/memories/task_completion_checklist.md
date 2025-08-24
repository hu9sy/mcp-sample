# Task Completion Checklist

## Before Committing Code

### 1. Type Checking
- Run `bun run typecheck` to ensure no TypeScript errors
- Verify all imports are correctly resolved
- Check that new code follows strict typing requirements

### 2. Build Verification
- Run `bun run build` to ensure compilation succeeds
- Verify the dist/index.js file is created and executable

### 3. Code Quality
- Ensure new tools are properly registered in definitons/index.ts
- Verify error handling is comprehensive
- Check that logging uses the Pino logger from utils/logger.ts

### 4. Environment Variables
- Ensure any new environment variables are defined in utils/env.ts
- Update .env.example if needed (when it exists)

### 5. Testing (when applicable)
- Run `bun test` if tests exist
- Verify new functionality works as expected

## Git Workflow
1. Check `git status` for modified files
2. Review `git diff` for changes
3. Stage changes with `git add`
4. Commit with descriptive messages
5. DO NOT push unless explicitly requested

## MCP Specific Checks
- Verify tools return proper CallToolResult format
- Test that the MCP server starts without errors
- Ensure stdin/stdout communication works properly