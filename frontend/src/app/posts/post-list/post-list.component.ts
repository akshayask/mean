import { Component, Input } from '@angular/core';
import { Post } from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  // posts = [
  //   {title: 'First post', content: 'this is the first post\'s content'},
  //   {title: 'Second post', content: 'this is the second post\'s content'},
  //   {title: 'Third post', content: 'this is the third post\'s content'},
  //   {title: 'Fourth post', content: 'this is the fourth post\'s content'}
  // ]

  @Input() posts: Post [] = [];

}
