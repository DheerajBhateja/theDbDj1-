import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  // template:`
  // <p>this is sample</p>
  
  // `,
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
  today: string ;
  color: string;

  constructor() { 

    setInterval(() =>
      {
        let date:Date = new Date();        
        this.today = date.toDateString() + ' ' + date.toLocaleTimeString();
      } ,1000);
      this.color = "red";
      
  }

  changeColor(color: string){
    this.color = color;
  }

  ngOnInit() {
  }

}
