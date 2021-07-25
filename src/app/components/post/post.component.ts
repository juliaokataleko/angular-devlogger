import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService,
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._postService.getPost(id).subscribe(post => this.post = post)   
  }

}
