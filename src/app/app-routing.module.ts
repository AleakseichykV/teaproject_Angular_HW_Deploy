import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {TeaCollectionsComponent} from "./components/pages/tea-collections/tea-collections.component";
import {TeaCardProductComponent} from "./components/pages/tea-card-product/tea-card-product.component";
import {OrderComponent} from "./components/pages/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: TeaCollectionsComponent},
  {path: 'products/:id', component: TeaCardProductComponent},
  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
