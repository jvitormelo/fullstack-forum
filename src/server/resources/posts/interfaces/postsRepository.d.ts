import { PostEntity } from "../entities/PostEntity";

export interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<PostEntity>;
}
