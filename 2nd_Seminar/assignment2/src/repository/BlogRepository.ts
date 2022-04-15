import {EntityRepository, Repository} from "typeorm";
import { Blog } from "../entity/Blog";

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {}