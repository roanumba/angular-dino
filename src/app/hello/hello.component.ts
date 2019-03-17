import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="hello">
        <h1>{{ msg }} world</h1>
    </div>
  `,
  styles: [`h3 {
      margin: 40px 0 0;
  }
  
  ul {
      list-style-type: none;
      padding: 0;
  }
  
  li {
      display: inline-block;
      margin: 0 10px;
  }
  
  a {
      color: #42b983;
  }
  .hello{
      color:red;
  }`]
})
export class HelloComponent implements OnInit {
  
 @Input() msg;

  constructor() { }

  ngOnInit() {
    this.msg="hello" ;
  }

  created(){
  }
}
