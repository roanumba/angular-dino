import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `  <div class="about">
      <h1>Yes This is an about page</h1>
    </div>`,
  styles: [`
    .about{
      text-align: center;
    }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
