import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectModel(Post.name) private PostModel: Model<PostDocument>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    console.log('here');
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.text = createPostDto.text;
    post.user = createPostDto.user;
    post.date = new Date();
    post.likes = 0;
    const createdPost = new this.PostModel(post);
    return createdPost.save();
  }

  getPostsByPage(page: number, size: number) {
    return this.PostModel.find()
      .sort({ date: -1 })
      .skip(page > 0 ? (page - 1) * size : 0)
      .limit(size)
      .populate('user');
  }

  async likePost(id: string) {
    console.log(id);
    this.PostModel.updateOne({ _id: id }, { $inc: { likes: 1 } }).exec();
  }
}
