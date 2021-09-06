import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethod=[
    { id:1, name:'email'},
    { id:2, name:'phone'},
  ];
  log(x: any){
    console.log(x);
  }

  submit(f:any){
    // console.log(f);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
