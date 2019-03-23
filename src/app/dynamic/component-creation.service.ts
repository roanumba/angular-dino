import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentCreationService {

  constructor(private resolver: ComponentFactoryResolver) { }

   loadComponent  ( viewContainerRef: ViewContainerRef, component) {
      let componentFactory = this.resolver.resolveComponentFactory(component);
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      return componentRef.instance;

  }
}
