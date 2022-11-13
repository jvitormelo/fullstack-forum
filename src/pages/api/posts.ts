// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CreatePostController } from "@/server/resources/posts/controllers/CreatePostController";
import PostRepository from "@/server/resources/posts/repositories/PostRepository";
import { CreatePostUseCase } from "@/server/resources/posts/use-cases/CreatePostUseCase";
import { GetAllPostsUseCase } from "@/server/resources/posts/use-cases/GetAllPostsUseCase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST":
        const createPostController = new CreatePostController(
          new CreatePostUseCase(PostRepository)
        );
        await createPostController.handle(req, res);
        break;

      default:
        const posts = await new GetAllPostsUseCase().execute();
        res.status(200).json(posts);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err instanceof Error ? err.message : "Internal Server Error",
    });
  }
}
