import { PostDTO } from "../dtos/output/PostDTO";

//Create a type of all attrbitues of PostEntity

export class PostEntity {
  public id: number;
  public title: string;
  public content: string | null;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(data: Omit<PostEntity, "toDTO">) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  toDTO(): PostDTO {
    const dto = new PostDTO(this);

    return dto;
  }
}
