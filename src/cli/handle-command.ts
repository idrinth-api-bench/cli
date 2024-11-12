import make from "./make.js";
import create from "./curl-route-builder.js";

export default function handleCommand(args: string[], cwd: string) {
  const command = args[2];

  if (command === undefined) {
    make(args, cwd);
  } else {
    if (command === "curl" || command === "har" || command === "open-api") {
      create(args, cwd);
    } else {
      throw new Error("unknown command: " + command);
    }
  }
}
