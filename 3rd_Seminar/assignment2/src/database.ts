import { ConnectionOptions, createConnection } from 'typeorm';
import { env } from './env';

/**
 * 데이터베이스 커넥션 생성한다.
 */
export async function createDatabaseConnection(): Promise<void> {
  try {
    const connectionOpts: ConnectionOptions = {
      type: 'mysql',
      host: env.database.host,
      port: env.database.port,
      username: env.database.username,
      password: env.database.password,
      synchronize: env.database.synchronize,
      logging: env.database.logging,
      entities: [__dirname + '/entities/*{.ts,.js}'],
    };

    await createConnection(connectionOpts);
  } catch (error) {
    throw error;
  }
}
