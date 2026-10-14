# folder-info

A Node.js CLI that inspects a folder and prints how many files and subfolders it contains.

Based on the [Folder Info](https://roadmap.sh/projects/nodejs-folder-info) project on roadmap.sh.

## What it does

By default the tool inspects the folder where you ran the command. Pass a path to inspect that folder instead.

It prints the folder name, the resolved path, the number of files, and the number of subfolders. Counts are for the folder itself, not nested contents.

If the folder cannot be read, the tool prints an error to stderr and exits with a non-zero status.

## Usage

```bash
node folder-info.js
node folder-info.js src
node folder-info.js missing-folder
```

Successful output:

```text
Folder: my-project
Path: /Users/you/my-project
Files: 6
Folders: 3
```

When the folder cannot be read:

```text
error: could not read folder: missing-folder
```

## Requirements

Node.js 20 or newer. The script uses `process.cwd()`, `node:path`, and `node:fs/promises`.
