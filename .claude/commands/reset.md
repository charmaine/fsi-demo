# Reset Demo

Reset the demo to its initial state for a fresh run.

## Steps

1. Kill any process running on port 5173
2. Run `git reset --hard` to discard all local changes
3. Run `git clean -fd -e node_modules` to remove untracked files (keep node_modules)
4. Move Jira ticket CF-1 back to "To Do" status using Atlassian MCP (transition ID: 11, cloudId: 017a620d-5937-4986-94a3-84b31588f76f)
5. Start the dev server with `npm run dev` in the background
6. Confirm the app is running at http://localhost:5173
