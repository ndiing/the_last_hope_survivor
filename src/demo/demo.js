import { Router } from "../material/router/router.js";
import { routes } from "./routes.js";

const router = new Router(routes, {
    // historyApiFallback: true,
});

router.listen()

export { router };
