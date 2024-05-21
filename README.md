# Sample Deno Service in TypeScript

This project presents a straightforward service API built with Deno.

Project Status: Draft

For those unfamiliar with Deno, it's a secure runtime for JavaScript and TypeScript. You can find more information about Deno at:

- [Deno Official Website](https://deno.com/)
- [Deno Examples Repository](https://examples.deno.land/)

This service executes requests to a sample API. Here's the API specification: [Open Library API Search](https://openlibrary.org/dev/docs/api/search)

## Getting Started

To begin, you'll need to install Deno. You can do this by running the following command:

```bash
irm https://deno.land/install.ps1 | iex
```

Once Deno is installed, navigate your terminal to the `src` folder of this project and execute the following command:

```bash
deno run --allow-net server.ts
```

This command starts the server, granting network access as required.s

deno.json settings:

https://docs.deno.com/runtime/manual/getting_started/configuration_file

routing:
https://docs.deno.com/examples/http-server-routing

redis:

https://docs.deno.com/examples/redis

json:
https://docs.deno.com/examples/parsing-serializing-json

enviroment:
https://docs.deno.com/runtime/manual/basics/env_variables

https://docs.deno.com/examples/environment-variables


cronjob
https://deno.com/blog/cron#using-deno-crons

If you're using Visual Studio Code, consider installing the Deno extension for better integration:

- [Deno Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
