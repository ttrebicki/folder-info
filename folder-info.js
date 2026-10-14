import path from "node:path";
import process from "node:process";
import fs from "node:fs/promises";

const userInputFolder = process.argv[2];
const currentDir = userInputFolder
	? path.resolve(userInputFolder)
	: process.cwd();

let dirInfo;

try {
	dirInfo = await fs.readdir(currentDir, { withFileTypes: true });
} catch (error) {
	console.error(
		`error: could not read folder: ${userInputFolder || currentDir}`,
	);
	process.exitCode = 1;
}

if (dirInfo) {
	console.log("Folder:", path.basename(currentDir));
	console.log("Path:", currentDir);
	console.log("Files:", dirInfo.filter((item) => item.isFile()).length);
	console.log("Folders:", dirInfo.filter((item) => item.isDirectory()).length);
}
