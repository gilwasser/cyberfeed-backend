import { User } from '../../schemas/user.schema';

export class CreatePostDto {
  readonly text: string;
  readonly user: User;
}
