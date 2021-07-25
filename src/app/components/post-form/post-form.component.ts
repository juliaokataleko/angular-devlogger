import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  loading: boolean = false;

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private _postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if(!title || !body) {
      alert("Please fill all fields");
    } else {
      this.loading = true;
      this._postService.savePost({title,body} as Post)
        .subscribe(post => {
          this.newPost.emit(post)
          this.loading = false;
        })
    }   
  }

  updatePost() {
    this.loading = true;
    this._postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.loading = false;
      this.isEdit = false;
      this.updatedPost.emit(post)
    });
  }

}
