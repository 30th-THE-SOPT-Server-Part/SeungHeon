import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { routingControllerOptions } from './util/RoutingConfig';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  /**
   * Express를 시작한다.
   * @param port 포트
   */
  public async createExpressServer(port: number): Promise<void> {
    try {
      useExpressServer(this.app, routingControllerOptions);

      this.app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
