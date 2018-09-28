import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = "";
  videoUrl : "https://www.google.com/"
  constructor (

  ) {}

  ngOnInit() {
  }
}