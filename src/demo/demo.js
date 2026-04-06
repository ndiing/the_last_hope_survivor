import { Router } from "../material/router/router.js";
import { routes } from "./routes.js";

// document.body.style.setProperty('--md-comp-font-loading','hidden')
// document.fonts.ready.then(() => {
//     document.body.style.removeProperty('--md-comp-font-loading')
// })

const router = new Router(routes, {
    // historyApiFallback: true,
});

router.listen();

export { router };
