import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostInfoComponent} from './components/post-info/post-info.component';

const routes: Routes = [{
  path: '', component: PostsComponent, children: [{
    path: ':id', component: PostInfoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
