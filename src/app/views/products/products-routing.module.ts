import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeaCardProductComponent} from "./tea-card-product/tea-card-product.component";
import {TeaCollectionsComponent} from "./tea-collections/tea-collections.component";

const routes: Routes = [
  {path: 'products', component: TeaCollectionsComponent},
  {path: 'products/:id', component: TeaCardProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
