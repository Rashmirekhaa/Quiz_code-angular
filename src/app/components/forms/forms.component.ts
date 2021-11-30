import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['../../app.component.css']
 
})
export class FormsComponent implements OnInit {

  public name ="";
  public colors = ["a", "b","c"];

  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any){
    console.log(event);
  }
}
