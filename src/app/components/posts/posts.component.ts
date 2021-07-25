import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  loading: boolean = true;
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };

  isEdit: boolean = false;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    })
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if(post.id == cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;

        // Reset current post data
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        };

      }
    })
  }

  removePost(post: Post) {
    if(confirm('Are you sure?')) {
      
      this.posts.forEach((cur, index) => {
        if(post.id == cur.id) {
          this.posts.splice(index, 1);
        }
      })


    }
  }

}
