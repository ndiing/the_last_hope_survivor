import { Router } from "../material/router/router.js";
import { routes } from "./routes.js";

document.body.style.setProperty('--md-comp-font-not-ready','hidden')
document.fonts.ready.then(() => {
    document.body.style.removeProperty('--md-comp-font-not-ready')
})

const router = new Router(routes, {
    // historyApiFallback: true,
});

router.listen();

export { router };
