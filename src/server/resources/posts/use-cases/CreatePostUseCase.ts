import { PostDTO } from "../dtos/output/PostDTO";
import { CreatePostDTO } from "../dtos/input/CreatePostDTO";
import { IPostsRepository } from "../interfaces/postsRepository";

export class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(data: CreatePostDTO): Promise<PostDTO> {
    const createdPost = await this.postsRepository.create(data);

    return createdPost.toDTO();
  }
}
