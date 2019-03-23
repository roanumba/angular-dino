import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div>
     {{data}} 
      message works!
    </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  dd;
  @Input()
   data;

  constructor() { }

  ngOnInit() {
  }

}
