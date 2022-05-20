import { Get, HttpCode, JsonController, Res } from 'routing-controllers';
import { Response } from 'express';

@JsonController('/test')
export class TestController {
  @HttpCode(200)
  @Get()
  public async test() {
    return '테스트 성공';
  }
}
