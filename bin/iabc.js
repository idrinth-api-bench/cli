#!/usr/bin/env node
import make from '../src/cli/make.js';
import create from '../src/cli/curl-route-builder.js';

// Retrieve command-line arguments
const args = process.argv.slice(2);
const command = args[0];

if (command === undefined) {
    make(process.argv, process.cwd(),);
}
else {
    if (command === "curl" || command === "har" || command === "open-api"){
        create(process.argv, process.cwd(),);
    }
    else {
        throw new Error("unknown command: " + command);
    }
}


