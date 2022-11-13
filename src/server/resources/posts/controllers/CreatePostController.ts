import { NextApiRequest, NextApiResponse } from "next";
import { CreatePostDTO } from "../dtos/input/CreatePostDTO";
import { ICreatePostUseCase } from "../interfaces/use-cases/createPostUseCase";

type Payload = CreatePostDTO;

export class CreatePostController {
  constructor(private createPostUseCase: ICreatePostUseCase) {}

  async handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const payload: Payload = req.body;

    const createPostDTO = new CreatePostDTO(payload);

    await createPostDTO.validate();

    const postDTO = await this.createPostUseCase.execute(createPostDTO);

    res.status(201).json(postDTO);
  }
}
