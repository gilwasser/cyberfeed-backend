import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import confing from './config/key';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [MongooseModule.forRoot(confing.mongoURI), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
