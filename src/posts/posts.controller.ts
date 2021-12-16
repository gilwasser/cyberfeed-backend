import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) { }

  @Post('user')
  createUser(@Body() user) {
    return this.postService.createUser(user);
  }

  @Post()
  addPost(@Body() post): any {
    return this.postService.createPost(post);
  }
}
