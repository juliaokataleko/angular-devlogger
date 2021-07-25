import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.postUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this._http.post<Post>(this.postUrl, post, httpOptions);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;
    return this._http.get<Post>(url);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.postUrl}/${post.id}`
    return this._http.put<Post>(url, post, httpOptions);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post == 'number' ? post : post.id;
    const url = `${this.postUrl}/${id}`
    return this._http.delete<Post>(url, httpOptions);
  }
}
