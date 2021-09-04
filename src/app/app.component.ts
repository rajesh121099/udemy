import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses:any ;

loadCrouses(){
this.courses =[
  {id:1, name:'course'},
  {id:2, name:'course 2'},
  {id:3, name:'course 3'},
];
}
trackCourse(index: any,course: any){
 return course ? course.id : undefined; 
}

}
// onAdd() {
//   this.courses.push({id:4, name:'course 4'});
// }
// onchange(course: any){
//   course.name='UPDATED'; 
// }
// onRemove(_course: any){
//   let index=this.courses.indexOf(_course);
//   this.courses.splice(index,1);
// }



  // viewMode ='';
// courses = [1,2];
//   title = 'udemyproject';

    // post = {
    //     title:"list of courses",
    //     isFavorite: true
    // }



//     title = 'list of courses';
//     courses ;
//     imgUrl="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg";
//     colSpan = 2;
//     email: string = "rajesh@gmail.com";
//     isActive = false;
//     text=`That's why Angular is considered a frontend framework. Its capabilities do not include any of the features that you will find in a backend language. Angular 4 is front-end framework Powered by Google, it helps a lot in making fastest single page application and works 100% perfect`


//     col ={
//         title :"hello every one",
//         rating : 3.8555,
//         students : 333399,
//         price : 290.45,
//         releaseDate : new Date(2021,9,3)
    
//     }


//     onKeyUp(){
//         console.log(this.email);
//     }

//     onDivclicked(){
//         console.log("div is  saved")
//     }

//     onSave($event: any){
//         $event.stopPropagation();
//         console.log("button saved",$event)
//     }


//     getTitle(){
//         return this.title;
//     }
       
//     constructor(service:CoursesService){
//         this.courses = service.getCourses();
//        }




