import { IsNotEmpty } from 'class-validator';
import { Post } from '../../models/Post';

/**
 * 포스트 생성 DTO
 */
export class CreatePostDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public content: string;

  public toEntity(): Post {
    const { title, content } = this;

    const post = new Post();
    post.title = title;
    post.content = content;

    return post;
  }
}
