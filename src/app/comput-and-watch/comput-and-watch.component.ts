import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-comput-and-watch',
  template: `
    <div class="vcard">
    		<header>{{ title }}
    		</header>
    		<form #f="ngForm" (ngSubmit)="addItem(f)">
    			<input name="inputModel" ngModel/>
    			<button>Add Dinosaur</button>
    		</form>
    		<ul>
              
    			<li *ngFor="let item of items;index as idx">
    				<button (click)="item.quantity = item.quantity+1">+</button> {{ item.quantity }}
    				<button (click)="item.quantity = item.quantity-1">-</button> {{ item.text }}
                  <button (click)="removeItem(item)" class="extinct">Make Extinct</button>
    			</li>
    		</ul>
    		<ul>
    			<li>Total Dinosaurs: {{ totalDinos }} <span>Updated: {{ dinosUpdated }}</span></li>
    			<li>Total Species:  {{ totalSpecies }} <span>Updated: {{ speciesUpdated }}</span></li>
    		</ul>
    </div>
  `,
  styles: [`
  
    .extinct {
      float: right;
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
    .vcard span {
      font-size: 0.75em;
      font-weight: normal;
      font-style: italic;
      float: right;
    }
     div,
    p,
     form{
      padding: 1em;
    }

     ul {
      list-style: none;
      margin: 0;
      padding:  1em;
    }

     ul li {
      padding: 0.5em;
      border: 1px solid gray;
      margin: 0.5em 0;
      border-radius: 3px;
       text-align: left;

    }

    ul li span {
      float: right;
      color: darkred;
      font-weight: 600;
    }
  `]
})
export class ComputAndWatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = "Dinosaurs";
  speciesUpdated = 0;
  dinosUpdated = 0;
  items = [
      {text: "Tyrannosaurus", quantity: 5},
      {text: "Triceratops", quantity: 3},
      {text: "Stegosaurus", quantity: 6}
  ];

  //computed is a getter
  get totalDinos() {
      let sum = 0;


      this.dinosUpdated += 1;

      this.items.forEach((i) => {
          sum += i.quantity;
      });

      return sum;
  }

  //computed is a getter
  get totalSpecies() {
      this.speciesUpdated += 1;
      return this.items.length;
  }

  //watching    'input' field
  // @Watch('input')
  inputListener(newInp, oldInp) {
      console.log("new=" + newInp + " old=" + oldInp);
  }


  addItem(f: NgForm) {
      // e.preventDefault();
    const v=f.value;
      if (!v.inputModel) {
          return;
      }

      this.items.push({text: v.inputModel, quantity: 1});
      f.value.inputModel = "";
  }

  removeItem(item) {
      this.items.splice(item, 1);
  }

}
