#!/usr/bin/env node
import handleCommand from "../src/cli/handle-command.js"

try {
    handleCommand(process.argv, process.cwd())
}catch(error){
    console.error(error)
}
