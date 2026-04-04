const fs = require("fs");
const path = require("path");

const demoExampleJs = fs.readFileSync("./dev/demo/example/example.js", { encoding: "utf8" });
const materialExampleJs = fs.readFileSync("./dev/material/example/example.js", { encoding: "utf8" });
const materialExampleScss = fs.readFileSync("./dev/material/example/example.scss", { encoding: "utf8" });

const components = [
    // "app-bar",
    // "badge",
    // // Button
    // // All Button
    // "button-group",
    // "button",
    // "extended-fab",
    // "fab-menu",
    // "fab",
    // "icon-button",
    // "segmented-button",
    // "split-button",
    // "card",
    // "carousel",
    // "checkbox",
    // "chip",
    // // Date & Time Picker
    // "date-picker",
    // "time-picker",
    // "dialog",
    // "divider",
    // "list",
    // // Loading & Progres
    // "loading-indicator",
    // "progress-indicator",
    // "menu",
    // // Navigation
    // "navigation-bar",
    // "navigation-drawer",
    // "navigation-rail",
    // "radio-button",
    // "search",
    // // Sheet
    // "bottom-sheet",
    // "side-sheet",
    // "slider",
    // "snackbar",
    // "switch",
    // "tab",
    // "text-field",
    // "toolbar",
    // "tooltip",
    // base
    // 'icon',
    // 'image',
    // 'avatar',
    // 'emoji',
    // 'form',
    // 'ripple',
    // 'tool',
    // 'tool-group',
    // 'text',
    // 'list-item',
    // 'breakpoint',
    // 'tree',
    // 'tree-item',
    // 'push-menu',
    // 'push-menu-item',
    // 'virtual-scroll'
];

function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, ($, $1, $2) => $2.toUpperCase());
}

function generate() {
    const source = {
        component: "example",

        demoClassName: "DemoExample",
        demoLocalName: "demo-example",
        demoClassSelector: ".demo-example",

        materialClassName: "MDExample",
        materialLocalName: "md-example",
        materialClassSelector: ".md-example",
    };

    for (const component of components) {
        const target = {
            component,

            demoClassName: `Demo${toPascalCase(component)}`,
            demoLocalName: `demo-${component}`,
            demoClassSelector: `.demo-${component}`,

            materialClassName: `MD${toPascalCase(component)}`,
            materialLocalName: `md-${component}`,
            materialClassSelector: `.md-${component}`,
        };

        const targetDemoJsPath = path.join("src", "demo", target.component, `${target.component}.js`);
        const targetMaterialJsPath = path.join("src", "material", target.component, `${target.component}.js`);
        const targetMaterialScssPath = path.join("src", "material", target.component, `${target.component}.scss`);

        const demoComponentJs = demoExampleJs.replaceAll(source.demoClassName, target.demoClassName).replaceAll(source.demoLocalName, target.demoLocalName).replaceAll(source.demoClassSelector, target.demoClassSelector).replaceAll(source.materialClassName, target.materialClassName).replaceAll(source.materialLocalName, target.materialLocalName).replaceAll(source.materialClassSelector, target.materialClassSelector);

        const materialComponentJs = materialExampleJs.replaceAll(source.materialClassName, target.materialClassName).replaceAll(source.materialLocalName, target.materialLocalName).replaceAll(source.materialClassSelector, target.materialClassSelector);
        const materialComponentScss = materialExampleScss.replaceAll(source.materialClassName, target.materialClassName).replaceAll(source.materialLocalName, target.materialLocalName).replaceAll(source.materialClassSelector, target.materialClassSelector);

        const list = [
            [targetDemoJsPath, demoComponentJs],
            [targetMaterialJsPath, materialComponentJs],
            [targetMaterialScssPath, materialComponentScss],
        ];

        for (const [file, data] of list) {
            const dir = path.dirname(file);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            if (fs.existsSync(file)) {
                continue;
            }
            fs.writeFileSync(file, data);
        }

        console.log(`{path:'/${target.component}',load:() => import('./${target.component}/${target.component}.js').then(module=>module.default),},`);

        console.log(`import "./${target.component}/${target.component}.js";`);

        console.log(`@use "./${target.component}/${target.component}.scss";`);

        // break;
    }
}
generate();
