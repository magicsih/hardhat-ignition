import { execSync } from "child_process";
import os from "os";

export function open(filePath: string): void {
  let command: string;
  switch (os.platform()) {
    case "win32":
      command = "start";
      break;
    case "darwin":
      command = "open";
      break;
    default:
      command = "xdg-open";
  }

  try {
    execSync(`${command} ${filePath}`, { stdio: "ignore" });
  } catch {
    console.log(
      "No program found to open the file. Please open the file manually in your browser."
    );
  }
}
