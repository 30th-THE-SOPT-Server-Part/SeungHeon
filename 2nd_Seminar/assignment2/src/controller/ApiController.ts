import { Body, Get, HttpCode, JsonController, Param, Post, Res } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { UserService } from "../service/UserService";
import { Response } from "express";
import { CreateBlogDto } from "../dto/BlogDto";
import { CreateUserDto, ResponseUserDto } from "../dto/UserDto";
import { BlogService } from "../service/BlogService";

@JsonController("/api")
export class ApiController {
  constructor(private userService: UserService, private blogService: BlogService) {}

  @HttpCode(200)
  @Get("/")
  public async testGet(@Res() res: Response) {
    return res.status(200).send({ message: "테스트 성공!"});
  }

  @HttpCode(200)
  @Get("/user")
  @OpenAPI({
    summary: "사용자 정보",
    description: "임시로 만든 사용자 정보를 반환한다",
    statusCode: "200",
    responses: {
      "400": {
        description: "Bad request",
      },
    },
  })
  public async getUser(@Res() res: Response) {

    // 임시로 항상 1번 유저의 데이터를 반환
    const user = await this.userService.getUserById(1);

    if (!user) {
      return res.status(400).send({ message: "일치하는 사용자가 없습니다." });
    }

    return user;
  }

  @HttpCode(201)
  @Post("/blog")
  @OpenAPI({
    summary: "Post 작성",
    statusCode: "201",
    security: [{ bearerAuth: [] }],
  })
  public async createBlog(@Body() createBlogDto: CreateBlogDto, @Res() res: Response) {

    // 임시로 항상 1번 유저가 포스팅 생성
    const newPost = await this.blogService.createBlog(createBlogDto);

    return newPost;
  }

  @HttpCode(200)
  @Post("/signup")
  @OpenAPI({
    summary: "사용자 회원가입",
    statusCode: "200",
  })
  public async signup(@Body() createUserDto: CreateUserDto) {

    const newUser = await this.userService.createUser(createUserDto);

    const user: ResponseUserDto = {
      realName: newUser.realName,
      email: newUser.email,
    };

    return user
  }

  @HttpCode(200)
  @Get("/like")
  @OpenAPI({
    summary: "솝트 좋아요",
    description: `솝트가 좋아서 만든 API`,
    statusCode: "200",
  })
  public async like(@Res() res: Response) {
    return res.status(200).json({
      status:200,
      message: '솝트 좋아요'
    })
  }
}