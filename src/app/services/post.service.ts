import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/catch';



import { Observable, EMPTY, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get( this.url )
  }

  createPost(post:any){
   return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post:any){
     return this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead:true}))
  }

  deletePost(id: string | number){
   return this.http.delete(this.url + '/' + id)
  //  .pipe(
  //    catchError((error:Response) => {
  //   if (error.status===404)
  //   return Observable.throw(new NotFoundError(error));
  // return Observable.throw(new AppError(error));
  // }));
   
   }
} 






// deletePost(id: string | number){
//   return this.http.delete(this.url + '/' + id).pipe(
//     catchError(err => {
//       throw(err)
//     }),);
//   }
 