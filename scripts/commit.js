const { execSync } = require("child_process");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function release() {
    try {
        const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
        let [major, minor, patch] = pkg.version.split(".").map(Number);

        console.log(`\nCurrent version: \x1b[32m${pkg.version}\x1b[0m`);

        const bumpType = await ask("Bump type (patch | minor | major) [patch]: ");
        const commitType = await ask("Commit type (feat | fix | docs | chore | refactor | test | perf) [chore]: ");
        const scope = await ask("Scope (e.g. auth, user, shared): ");
        const message = await ask("Commit message: ");

        // 1. Versioning Logic
        switch ((bumpType || "patch").toLowerCase()) {
            case "major":
                major++;
                minor = 0;
                patch = 0;
                break;
            case "minor":
                minor++;
                patch = 0;
                break;
            default:
                patch++;
        }

        const newVersion = `${major}.${minor}.${patch}`;
        pkg.version = newVersion;

        // 2. Conventional Commit Formatting
        const finalType = commitType || "chore";
        const finalScope = scope ? `(${scope})` : "";
        const finalMsg = message || `release version ${newVersion}`;
        const commitFull = `${finalType}${finalScope}: ${finalMsg}`;

        // 3. Execution
        console.log(`\n\x1b[36m Releasing v${newVersion}...\x1b[0m`);

        fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));

        execSync("git add -A", { stdio: "inherit" });
        execSync(`git commit -m "${commitFull}"`, { stdio: "inherit" });

        execSync(`git tag -a v${newVersion} -m "Release v${newVersion}"`, {
            stdio: "inherit",
        });

        // push ke branch aktif
        const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
        execSync(`git push origin ${branch} --tags`, { stdio: "inherit" });

        console.log(`\n\x1b[32m Successfully released and pushed v${newVersion}\x1b[0m\n`);
    } catch (error) {
        console.error("\n\x1b[31m Release failed:\x1b[0m", error.message);
    } finally {
        rl.close();
    }
}

release();
