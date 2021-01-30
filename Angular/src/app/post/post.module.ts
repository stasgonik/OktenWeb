import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostService} from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PostsComponent, PostComponent, PostInfoComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
