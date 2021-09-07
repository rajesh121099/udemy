import { AppError } from './../common/app-error';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any['post']=[];
 
 
  constructor(private service:PostService) { 
    // http.get( this.url )
    // .subscribe(response =>{
    //  this.posts = response;
    // });
  }
   
  // createPost(input: HTMLInputElement){
  //   let post:any ={ title: input.value};
  //   input.value = '';

  //   this.http.post(this.url, JSON.stringify(post))
  //   .subscribe(response =>{
  //     post.['id'] = response;
  //     this.posts.splice(0,0,post);
  //     // console.log(response);
  //   });
  // }
  // updatePost(post: any){
  //   this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead:true}))
  //   // this.http.put(this.url,JSON.stringify(post))
  //   .subscribe(response =>{
  //     console.log(response)
  //   });
  // }

  // deletePost(post:any){
  //   this.http.delete(this.url + '/' + post.id)
  //   .subscribe(response =>{
  //     let index =this.posts.indexOf(post); 
  //     this.posts.splice(index,1);
  //   });
  // }
  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response =>{
     this.posts = response;
    },
    error => {
      alert("an unexpected error occurred");
      console.log(error);
    }
    
    );
  }
 createPost(input: HTMLInputElement){
    let post:any ={ title: input.value};
    input.value = '';

    this.service.createPost(post)
    .subscribe(response =>{
      post['id'] = response;
      this.posts.splice(0,0,post);
      // console.log(response);
    });
  }
  updatePost(post: any){
    this.service.updatePost(post)
    // this.http.put(this.url,JSON.stringify(post))
    .subscribe(response =>{
      console.log(response)
    });
  }

  deletePost(post:any){
    this.service.deletePost(post.id)
    .subscribe(
      (_response: any) =>{
      let index =this.posts.indexOf(post); 
      this.posts.splice(index,1);
    },
    (error: AppError) => {
      if (error instanceof NotFoundError)
      alert('this post is already deleted ')
      else{
        alert("an unexpected error occurred");
        console.log(error);
      }
      });
  }
}
