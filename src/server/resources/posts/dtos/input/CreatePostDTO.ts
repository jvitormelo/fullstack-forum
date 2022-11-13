import { IsString, validateOrReject } from "class-validator";

export class CreatePostDTO {
  @IsString()
  public title: string;

  public content?: string;

  async validate(): Promise<void> {
    await validateOrReject(this);

    // use class validator to validate
  }

  constructor(data: CreatePostDTO) {
    this.title = data.title;
    this.content = data.content;
  }
}
