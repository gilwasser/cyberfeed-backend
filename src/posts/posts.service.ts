import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    console.log('here');
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }
}
