import { Component, OnInit } from '@angular/core';
const myFilters={
        capitalize(value) {
          if (!value) {
              return "";
          }
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
        },
        undercase(value) {
          if (!value) {
              return "";
          }
          value = value.toString();
          return value.toLowerCase();
        },
        url(value) {
          if (!value) {
              return "";
          }
          value = value.toString();
          return "https://en.wikipedia.org/wiki/" + value;
        }
      };

@Component({
  selector: 'app-filters',
  template: `
   
    <div class="vcard">
   		<header>{{ title | capitalize }}</header>
   		<ul>
   			<li *ngFor="let dino of dinos">
   				<h4>{{ dino.text | capitalize }}</h4>
   				<span>The {{ dino.text | undercase }} weighs {{ dino.weight }}.</span>
   				<br>
   				<a [href]="dino.text | url ">{{ dino.text | undercase | url }}</a>
   			</li>
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
  
      .vcard header {
        display: block;
        border-radius: 8px 8px 0 0;
        background: mediumturquoise;
        padding: 10px;
        color: white;
        font-size: 1.5em;
      }
  
      .vcard div,
      .card p{
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
  
      }`]
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title= "dinosaurs";
  dinos= [
    {
      text: "Velociraptor",
      weight: "15 kg"
    },
    {
      text: "triceratops",
      weight: "6,000 kg"
    },
    {
      text: "Stegosaurus",
      weight: "2,500 kg"
    }
  ];
}
