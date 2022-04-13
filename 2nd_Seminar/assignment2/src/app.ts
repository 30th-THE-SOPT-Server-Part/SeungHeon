import "reflect-metadata";
import express, { NextFunction } from "express";
import { Container } from "typedi";
import {
    useContainer as routingUseContainer,
    useExpressServer,
} from "routing-controllers";
import { routingControllerOptions } from "./utils/RoutingConfig";

export class App {
    public app: express.Application;

    constructor() {
        this.app = express();
    }

    /**
     * Express를 시작합니다.
     * @param port
     */
    public async createExpressServer(port: number): Promise<void> {
        try {
            routingUseContainer(Container);
            useExpressServer(this.app, routingControllerOptions);

            this.app.use(express.json());

            this.app.listen(port, () => {
                console.log(`Server is running on http://localhost:${port}`);
            });
        } catch (error) {
            console.log(error);
        }
    }
}