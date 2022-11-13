export interface ICreatePostUseCase {
  execute(data: ICreatePostDTO): Promise<PostDTO>;
}
