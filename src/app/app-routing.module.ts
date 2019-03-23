import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataAndMethodComponent} from "./data-and-method/data-and-method.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ComputAndWatchComponent} from "./comput-and-watch/comput-and-watch.component";
import {ClassStyleBindComponent} from "./class-style-bind/class-style-bind.component";
import {FiltersComponent} from "./filters/filters.component";
import {DinoComponent} from "./dino/dino.component";
import {DynamicComponent} from "./dynamic/dynamic.component";

const routes: Routes = [
  {
              path: '',
              component: HomeComponent,
          },
          {
              path: 'about',
              component: AboutComponent,
          },
          {
              path: 'dataNmethod',
              component: DataAndMethodComponent,
          },
          {
              path: 'computeNwatch',
              component: ComputAndWatchComponent,
          },
          {
              path: 'classStyleBind',
              component: ClassStyleBindComponent,
          },
          {
              path: 'filter',
              component: FiltersComponent,
          },
          {
              path: 'dinoComponent',
              component: DinoComponent,
          },
    {
        path: 'dynamicComponent',
        component: DynamicComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
