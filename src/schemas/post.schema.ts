import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true, minlength: 3 })
  text: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, default: 0 })
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
