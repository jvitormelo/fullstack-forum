export class PostDTO {
  id: number;
  title: string;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: PostDTO) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
