import { App } from "./app";

try {
    const app = new App();
    const port: number = 8080;

    app.createExpressServer(port);
} catch (error) {
    console.log(error);
}