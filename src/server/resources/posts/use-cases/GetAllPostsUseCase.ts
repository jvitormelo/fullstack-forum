import { prisma } from "@/server/services/prisma";

export class GetAllPostsUseCase {
  //   constructor(private postRepository: PostRepository) {}

  async execute() {
    return await prisma.post.findMany();
  }
}
