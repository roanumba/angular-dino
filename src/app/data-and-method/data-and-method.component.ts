import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-and-method',
  template: `<div  class="vcard">
      <header>{{ title }}</header>
      <div [innerHTML]="content"></div>
  
  
      <div>
          <input [(ngModel)]="inputValue" (keyup.enter)="addItem()"/>
          <button (click)="addItem()">Add Dinosaur</button>
      </div>
  
      <ul>
          <ng-container *ngFor="let item of items;index as idx" >
            <ng-container *ngIf="idx !=2">
  
              <li>
                <button (click)="deleteItem(idx,$event)">X</button>
                {{ item.text }}
              </li>
            </ng-container>
  
          </ng-container>
      </ul>
  </div>`,
  styles: [`.vcard {
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
  
  .vcard div {
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
    text-align: left;
  
  }
  `]
})
export class DataAndMethodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Dinosaurs";
  content =
      "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period.";
  inputValue = '';
  toggle = true;
  items = [
      {text: "Velociraptor"},
      {text: "Triceratops"},
      {text: "Dog"},
      {text: "Stegosaurus"}
  ];


  addItem() {

      if (this.inputValue !== "") {
          this.items.push({
              text: this.inputValue
          });
          this.inputValue = "";
      }
  }

  deleteItem(index, e) {
      console.log(e);
      this.items.splice(index, 1);
  }
}
