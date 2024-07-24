#!/usr/bin/env node
import make from '../src/cli/make.js';
import harCreate from '../src/cli/har-route-builder.js';
import openApiCreate from '../src/cli/open-api-route-builder.js';
import curlCreate from '../src/cli/curl-route-builder.js';

//get command from command line arguments
const command = process.argv[2];

switch (command) {
    case undefined:
        make(process.argv.splice(2, 1), process.cwd(),);
        break;
    case ("curl"):
        curlCreate(process.argv.splice(2, 1), process.cwd())
        break;
    case ("har"):
        harCreate(process.argv.splice(2, 1), process.cwd())
        break;
    case "open-api":
        openApiCreate(process.argv.splice(2, 1), process.cwd())
        break;
    default:
        throw new Error("unknown command: " + command);
}