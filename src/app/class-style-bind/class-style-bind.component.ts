import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-bind',
  template: `
    <div class="vcard">
    	<header>{{ title }}</header>
    	<button [ngClass]=" {'rounded': isRounded,'large':sizeToggle}"
                   [ngStyle]="styles"
                   [disabled]="disabled">Start Tour</button>
    	<hr>
    	<h4>Options</h4>
    	<ul>
    		<li><input type="checkbox" [(ngModel)]="sizeToggle"><label>Large</label></li>
    		<li><input type="checkbox" id="round" [(ngModel)]="isRounded"><label for="round">Rounded</label></li>
    		<li><input type="checkbox" [(ngModel)]="disabled"><label>Disabled</label></li>
    		<li><input type="text" [(ngModel)]="backgroundColor" /><label>Background Color</label></li>
    		<li><input type="text" [(ngModel)]="fontColor" /><label>Font Color</label></li>
    		<li><input type="range" [(ngModel)]="range" min="15" max="75"><label>Position</label></li>
    	</ul>
    </div>
  `,
  styles: [`    body {
        padding: 2em;
        font-family: sans-serif;
      }
  
      .vcard {
        border: 2px solid Gray;
        border-radius: 10px;
      }
      .rounded {
        border-radius: 10px;
      }
      .large {
        font-size: 2em;
      }
      label {
        margin-left: 1em;
      }
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .vcard header {
        display: block;
        border-radius: 8px 8px 0 0;
        background: mediumturquoise;
        padding: 10px;
        color: white;
        font-size: 1.5em;
        margin-bottom: 1em;
      }
  
      .vcard div,
      .vcard p {
        padding: 1em;
      }
  
      .vcard ul {
        list-style: none;
        margin: 0;
        padding: 0 1em 1em;
      }
  
      .vcard ul li {
        padding: 0.25em;
        border: 1px solid gray;
        margin: 0.5em 0;
        border-radius: 3px;
      }
  `]
})
export class ClassStyleBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
        title= "Style Bindings";
          isRounded= false;
          sizeToggle= false;
          disabled= false;
          backgroundColor= "#CCCCCC";
          fontColor= "#000000";
          range= 50;

          get styles() {
                   return {
                     "color": this.fontColor,
                     "background": this.backgroundColor,
                     "margin-left": this.range + "%"
                   };
                 }




}
