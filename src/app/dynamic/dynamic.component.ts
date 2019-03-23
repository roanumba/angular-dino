import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import {MessageComponent} from "./message.component";
import {ComponentCreationService} from "./component-creation.service";



@Component({
    selector: 'app-dynamic',
    template: `
        <div>
            <ng-template #hello>
            </ng-template>
        </div>
    `,
    styles: []
})
export class DynamicComponent implements OnInit, AfterViewInit {

    @ViewChild('hello', {read: ViewContainerRef}) helloTemplate;
    heroes;

    constructor( private compCreator:ComponentCreationService) {
    }

    ngAfterViewInit() {


    }

    ngOnInit() {
        console.log(this.helloTemplate);

        let compInstance: any =
            this.compCreator.loadComponent(this.helloTemplate, MessageComponent);
        compInstance.data = "Yes!";
       
    }


}
