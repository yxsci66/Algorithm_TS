# leetcode

This is a repository for leetcode, which supports debugging with mocha.

## debug config

### config tsconfig.json

  ```json
  {
    "compilerOptions": {
      "module": "commonjs",
      "target": "ES2020",
      "lib": ["ES2020", "DOM"],
      "sourceMap": true,
      "rootDir": "./",
      "strict": true,
      "noEmit": true,
      "noImplicitThis": true
    },
    "include": ["./debug.ts"]
  }
  ```

### config launch.json

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "mocha debugger",
      "request": "launch",
      "runtimeArgs": [
        "run-script",
        "test"
      ],
      "runtimeExecutable": "pnpm",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
    {
      "name": "TS Debugger",
      "type": "node",
      "request": "launch",
      "args": [
        "${workspaceRoot}/debug.ts" // entry file
      ],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "cwd": "${workspaceRoot}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "runtimeExecutable": "D:/my_tools/nvm/v18.16.0/node" // path of node
    }
  ]
}
```
