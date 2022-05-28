import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { createDatabaseConnection } from './database';
import { routingControllerOptions } from './utils/RoutingConfig';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setDatabase();
  }

  /**
   * 데이터베이스를 세팅한다.
   */
  private async setDatabase(): Promise<void> {
    try {
      await createDatabaseConnection();
      console.log('typeoORM DB 커넥션 생성됨');
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Express를 시작한다.
   * @param port 포트
   */
  public async createExpressServer(port: number): Promise<void> {
    try {
      useExpressServer(this.app, routingControllerOptions);

      this.app.listen(port, () => {
        console.log(`
            #############################################
                🛡️ Server listening on port: 8080 🛡️
            #############################################
                `);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
