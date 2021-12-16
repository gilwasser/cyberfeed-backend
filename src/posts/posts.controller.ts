import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post('user')
  createUser(@Body() user) {
    return this.postService.createUser(user);
  }

  @Post()
  addPost(@Body() post): any {
    return this.postService.createPost(post);
  }

  //paginate posts
  @Get(':page/:size?')
  getPostByPage(@Param('page') page, @Param('size') size) {
    const jumps = parseInt(size);
    return this.postService.getPostsByPage(page, jumps).then((posts) => {
      if (posts.length == 0) {
        throw new NotFoundException();
      }
      return posts;
    });
  }

  @Put('like/:id')
  likePost(@Param('id') id) {
    console.log(id);
    this.postService.likePost(id);
    return;
  }
}
