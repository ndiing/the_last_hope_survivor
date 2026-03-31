const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "../");

function readDir(pathName, excludes = [], includes = [/.*/], result = []) {
    const dirents = fs.readdirSync(pathName, {
        withFileTypes: true,
    });

    for (const dirent of dirents) {
        const currentPathName = path.join(dirent.parentPath, dirent.name);

        if (dirent.isDirectory()) {
            result = readDir(currentPathName, excludes, includes, result);
        } else {
            const pathToMatch = currentPathName.replace(rootDir, "");
            if (excludes.some((regexp) => regexp.test(pathToMatch))) continue;
            if (!includes.some((regexp) => regexp.test(pathToMatch))) continue;
            const data = fs.readFileSync(currentPathName, {
                encoding: "utf8",
            });
            result.push([currentPathName, data]);
        }
    }

    return result;
}

function generateCode() {
    const codeDir = path.join(rootDir, "dev", "code");
    if (fs.existsSync(codeDir)) {
        fs.rmSync(codeDir, {
            recursive: true,
        });
    }
    fs.mkdirSync(codeDir, { recursive: true });

    const excludes = [
            /^\.git/,
            /^dev/,
            /^node_modules/,
            // /^src/,
            /^xliff/,
            /^\.prettierrc/,
            /^\.babel\.config\.json/,
            /^index\.html/,
            /^lit-localize\.json/,
            /^package-lock\.json/,
            /^package\.json/,
            /^postcss\.config\.json/,
            /^README.md/,
            /^webpack\.config\.js/,
        ],
        includes = [
            // /.*/, //
            // /src\\material\\tree/, //
            // /src\\material\\tree-item/, //
            // /src\\material\\checkbox/, //
            // /src\\material\\radio-button/, //
            // /src\\material\\switch/, //
            // /src\\demo\\icon\\/, //
            // /src\\demo\\emoji\\/, //
            // /src\\material\\icon-button/, //
        ];

    const items = readDir(rootDir, excludes, includes);

    const total = items.length;
    const limit = 50;
    const pages = Math.ceil(total / limit);

    for (let i = 0; i < pages; i++) {
        const start = i * limit;
        const end = start + limit;

        const docs = items.slice(start, end);

        const data = docs
            .map(([pathName, data]) => {
                const cleanedPathName = pathName.replace(rootDir, "");
                console.log(cleanedPathName);
                return ["// " + cleanedPathName, data].join("\r\n");
            })
            .join("\r\n");
        const fileName = path.join(codeDir, i + ".txt");

        fs.writeFileSync(fileName, data);
    }
}

generateCode();
