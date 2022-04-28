import { env } from '../env';

export const routingControllerOptions = {
  routePrefix: env.app.apiPrefix,
  controller: [`${__dirname}/../controller/*{.ts,.js}`],
};
