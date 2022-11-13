import { prisma } from "@/server/services/prisma";
import { CreatePostDTO } from "../dtos/input/CreatePostDTO";
import { PostEntity } from "../entities/PostEntity";
import { IPostsRepository } from "../interfaces/postsRepository";

class PostRepository implements IPostsRepository {
  async create(data: CreatePostDTO): Promise<PostEntity> {
    const createdPost = await prisma.post.create({
      data,
    });

    const post = new PostEntity(createdPost);

    return post;
  }
}

export default new PostRepository();
