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
            /^\.git/, //
            /^app/, //
            /^data/, //
            // /^dev/, //
            /^node_modules/, //
            /^package-lock\.json/, //
            /^package\.json/, //
            /^\.prettierrc/, //
            /^nodemon\.json/, //
            /^README\.md/, //
            /^CHANGELOG\.md/, //
            /LICENSE/, //
        ],
        includes = [
            // /.*/, //
            // /^src\\material\\checkbox/, //
            // /^src\\test\\checkbox/, //
            // /^src\\material\\radio-button/, //
            // /^src\\test\\radio-button/, //
            // /^src\\material\\switch/, //
            // /^src\\test\\switch/, //

            // /^src\\material\\image/, //
            // /^src\\test\\image/, //

            // /^src\\material\\avatar/, //
            // /^src\\test\\avatar/, //

            /^src\\material\\text-field/, //
            // /^src\\test\\text-field/, //
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
