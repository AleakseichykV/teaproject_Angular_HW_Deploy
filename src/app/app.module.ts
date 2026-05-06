import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { TeaCollectionsComponent } from './components/pages/tea-collections/tea-collections.component';
import { TeaCardComponent } from './components/pages/tea-card/tea-card.component';
import { TeaCardProductComponent } from './components/pages/tea-card-product/tea-card-product.component';
import { OrderComponent } from './components/pages/order/order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NameValidatorDirective} from "./directives/name-validator.directive";
import {PhoneValidatorDirective} from "./directives/phone-validator.directive";
import {IndexValidatorDirective} from "./directives/index-validator.directive";
import {AddressValidatorDirective} from "./directives/address-validator.directive";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TeaCollectionsComponent,
    TeaCardComponent,
    TeaCardProductComponent,
    OrderComponent,
    NameValidatorDirective,
    PhoneValidatorDirective,
    IndexValidatorDirective,
    AddressValidatorDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
