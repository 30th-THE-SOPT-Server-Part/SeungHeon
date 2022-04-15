import { Blog } from "../entity/Blog";

export class CreateBlogDto {
    private title: string;
    private content: string;

    public toEntity(): Blog {
      const {title, content } = this;
    
      const blog = new Blog();
      blog.title = title;
      blog.content = content;

      return blog
  }
}