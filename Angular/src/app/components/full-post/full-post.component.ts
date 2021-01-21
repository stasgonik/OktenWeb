import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input()
  post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
