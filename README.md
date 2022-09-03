# Minimal Typescript based Command Line Interface (CLI) with Node.js

Our goal is to create a Node.js based Command Line Interface (CLI) using Typescript. This setup includes top-Level await support and ES module importing. 

## What We’re Going to Build

For this tutorial, we’re going to create a CLI called `inspace`.
When executed the CLI will output the current people in space.

![inspace cli executed example](./img/inspace.png)

## Getting Started

Create a new directory for the project. Call it whatever you want, I'm using `inspace`:
```shell
mkdir inspace
cd inspace
```

Setup a new npm package be creating a `package.json` file:
```shell
npm init -y
```

To support importing ES modules add the `type` property to the generated `package.json` file:
```json
{
  "type": "module",
  // rest...
}
```

To enable executing the CLI add the `bin` property to the generated `package.json` file:
```json
{
  "bin": "src/index.ts",
  // rest...
}
```

Create an `tsconfig.json` file in the same folder and include the following to enable importing ES modules and include top level await support:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "esModuleInterop": true,
    "moduleResolution": "Node"
  }
}
```

Create the Typescript entrypoint `src/index.ts` file, to match the `package.json` bin property.
Include the following shebang as the first line of the file:
```typescript
#!/usr/bin/env npx ts-node --esm
```
The esm flag is include to support 
Ensure the file includes execution permission. Execution permission can be added using the following command:
```shell
chmod u+x ./src/index.ts
```

Add Typescript to the file to help test execution:
```typescript
console.log("Typescript executed successfully");
```

The file (CLI) can now be executed directly as if it was a binary.
```typescript
./src/index.ts
```

## Publishing the CLI to NPM

The npm package can now be published if logged into npm using the following command:
```shell
npm publish
```

Once the package is published it can be installed globally using the following command:
```shell
npm install -g inspace
```

After installation the npm package can now be executed using the package name:
```shell
inspace
```






