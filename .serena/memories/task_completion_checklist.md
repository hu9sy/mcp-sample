# Task Completion Checklist

## Standard Development Workflow

### Code Quality Checks
Since this is a TypeScript project with strict settings, after completing any coding task:

1. **Type Check**: Run `tsc --noEmit` to verify TypeScript compilation
2. **Build**: Run `bun run build` to ensure the project builds successfully
3. **Test**: Run `bun test` if tests exist (currently no tests in the project)

### Pre-Commit Checklist
- [ ] Code follows TypeScript strict mode requirements
- [ ] No TypeScript compilation errors
- [ ] Build completes successfully
- [ ] All tests pass (when tests are added)
- [ ] Code follows Bun API preferences from CLAUDE.md

### MCP-Specific Considerations
Since this is an MCP server project:
- [ ] Ensure MCP protocol compliance
- [ ] Verify server can be started and responds correctly
- [ ] Test with MCP client if applicable
- [ ] Check that all required MCP server methods are implemented

### File Management
- [ ] New files are in appropriate directories (`src/` for source code)
- [ ] Ensure binary remains executable after build (`chmod 755 dist/index.js` is included in build script)
- [ ] Update package.json if new dependencies are added

### Documentation
- [ ] Update README.md if significant features are added
- [ ] Update CLAUDE.md if new conventions or commands are established

### Notes
- Currently no linting or formatting tools are configured
- No test framework is set up yet
- Consider adding these tools as the project grows