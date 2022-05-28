import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { CreatePostDto } from '../dtos/request/CreatePostDto';
import { Post } from '../models/Post';
import { PostRepository } from '../repositories/PostRepository';

@Service()
export class PostService {
  constructor(@InjectRepository() private postRepository: PostRepository) {}

  /**
   * 포스트를 생성한다.
   * @param createPostDto 포스트 생성 DTO
   */
  public async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const post = createPostDto.toEntity();
    post.previewContent = post.content.substring(0, 100);

    const newPost = await this.postRepository.save(post);
    return newPost;
  }
}
