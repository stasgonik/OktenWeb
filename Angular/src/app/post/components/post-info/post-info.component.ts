import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
    });
  }

  ngOnInit(): void {
  }

}
