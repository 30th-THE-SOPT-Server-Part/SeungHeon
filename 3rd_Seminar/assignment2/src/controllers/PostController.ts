import { Body, HttpCode, JsonController, Post, Res } from 'routing-controllers';
import { CreatePostDto } from '../dtos/request/CreatePostDto';
import { PostService } from '../services/PostService';
import { Response } from 'express';

@JsonController('/posts')
export class PostController {
  constructor(private postService: PostService) {}

  @HttpCode(201)
  @Post()
  public async create(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
    const newPost = await this.postService.createPost(createPostDto);

    return newPost;
  }
}
