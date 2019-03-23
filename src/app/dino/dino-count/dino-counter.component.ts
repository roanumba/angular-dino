import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";


@Component({
    selector: 'dino-counter',
    template: `
        <div>
            <button (click)="increment()">{{ quantity }}</button>
            {{ name }}
        </div>
    `,
    styles: []
})
export class DinoCounterComponent implements OnInit {
    @Input() name;
    @Input("initial-quantity") initialQuantity:number;
    @Output() increase = new EventEmitter();

    quantity: number = 0;


    increment() {
        this.quantity += 1;
        this.increase.emit(1);
    }

    constructor() {
    }

    ngOnInit() {
        this.quantity = this.initialQuantity;
        this.increase.emit(this.initialQuantity);
    }

}
