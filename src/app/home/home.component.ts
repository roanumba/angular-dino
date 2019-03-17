import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <img src="assets/logo.png">
      <app-hello msg="Welcome to Your Vue.js + TypeScript App"></app-hello>
    </div>
  `,
  styles: [`  .home{
      text-align: center;
    }`]
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}
