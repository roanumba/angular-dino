import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    <p>
      dynamic works!
    </p>
  `,
  styles: []
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
