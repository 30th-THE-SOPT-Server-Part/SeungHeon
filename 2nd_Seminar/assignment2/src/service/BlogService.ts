import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CreateBlogDto } from "../dto/BlogDto";
import { Blog } from "../entity/Blog";
import { BlogRepository } from "../repository/BlogRepository";

@Service()
export class BlogService {
    constructor (
        //@InjectRepository() private blogRepository: BlogRepository
    ) {}

    /**
     * 게시글 생성
     */
    public async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
        const blog = createBlogDto.toEntity();
        console.log(blog);

        return blog;
    }
}