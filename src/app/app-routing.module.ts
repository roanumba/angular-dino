import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataAndMethodComponent} from "./data-and-method/data-and-method.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

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
          // {
          //     path: '/computeNwatch',
          //     component: ComputeAndWatch,
          // },
          // {
          //     path: '/classStyleBind',
          //     component: ClassStyleBind,
          // },
          // {
          //     path: '/filter',
          //     component: Filters,
          // },
          // {
          //     path: '/vueComponent',
          //     component: VueComponent,
          // },
          // {
          //     path: '/vuetifyMaterial',
          //     component: VuetifyMaterial,
          // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
