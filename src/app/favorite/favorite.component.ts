import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
 
})
export class FavoriteComponent implements OnInit {
//  @Input() isSelected!: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.isSelected = !this.isSelected;
  // }

}
