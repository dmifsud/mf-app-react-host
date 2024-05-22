# Micro Frontend Setup Guide with TypeScript

This guide outlines the setup and usage of a host application consuming remote applications via module federation and TypeScript for type sharing.

## Prerequisites

Before running the host application, ensure the remote applications are installed and compiled. Check the other remote project's scripts for building and serving the application locally. Should be `npm run serve`

## Directory Structure

Ideally, all projects should be located adjacent to each other in the directory structure. However, this is not mandatory. If the projects are installed in completely separate locations, update the `package.local.json` file location reference accordingly, e.g., `"@mf-app/remote": "file:../remote/dist/types"`. This setup ensures type references for the module-federated remote distribution.

## Remote Application Setup (Development Testing)

1. Install dependencies:
 
 `> npm install`

2. Serve all the remote applications:

Before building or running this [host] app, the dependent remote apps (check their reference in `federation.config.ts`) need to be built and served locally:

Double check their scripts within their `package.json` file but should be:

` > npm run serve`

This command performs the following actions:

- Compiles the module-federated distribution entry file.
- Generates the type references under `./dist/types`.
- Serves the application at a fixed localhost such as `http://localhost:5000/`.



## Host Application Setup (this project)

1. Install Dependencies:

`> npm install`

A `postinstall` command is executed that checks for a `package.local.json` file with a structure simlar to this:

 ```
 {
    "devDependencies": {
        "@mf-app/remote": "file:../remote/dist/types",
        "@mf-app/store": "file:../shared-store/dist/types"
    }
}
```
This will install the types local package for type reference during development. This is not mandatory. Development can still be done without any errors. However, typings will not be available.

2. Run the host application:

`> npm run dev`

This command starts the host application with hot module replacement (HMR), utilizing the module-federated distribution package from the remote application.

## Notes

- Any changes made to the remote applications must be re-compiled for the updates to take effect in the host application and `npm install` needs to be exectued on this [host] app for the types to take effect.

## References

https://stackoverflow.com/questions/75850348/how-to-create-a-types-only-package-on-npm
