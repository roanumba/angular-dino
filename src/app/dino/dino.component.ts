import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dino',
  template: `
    <div>
        <div class="vcard">
        		<header>{{ title }}</header>
        		<ul>
        			<li *ngFor="let dino of dinos">
        				<dino-counter
                                [initial-quantity]="dino.quantity"
                                [name]="dino.name"
                                (increase)="incrementTotal($event)">
                     
                        </dino-counter>
                        <button class="extinct" (click)="removeDino(dino)">delete</button>
        			</li>
        		</ul>
        		<div>
                    Total Dinosaurs: {{ total }}  <button (click)="addDino()">Add</button>
                </div>
        	</div>

    </div>
  `,
  styles: [
      `   
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
      }`]
})
export class DinoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title= "Dinosaurs";
     input= "";
     total= 0;
     dinos= [
       { name: "Tyrannosaurus", quantity: 5 },
       { name: "Triceratops", quantity: 4 },
       { name: "Stegosaurus", quantity: 6 }
     ];

     incrementTotal(amount) {
       this.total += amount;
     }

    addDino() {
         const name="Name"+this.dinos.length;
         const quantity= this.dinos.length;
        this.dinos.push({name, quantity })
    }

    removeDino(dino) {
        this.total -= dino.quantity;
      this.dinos.splice(dino,1)
    }
}
