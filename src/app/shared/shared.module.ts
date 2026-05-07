import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {TeaCardComponent} from "./components/tea-card/tea-card.component";
import {AddressValidatorDirective} from "./directives/address-validator.directive";
import {IndexValidatorDirective} from "./directives/index-validator.directive";
import {NameValidatorDirective} from "./directives/name-validator.directive";
import {PhoneValidatorDirective} from "./directives/phone-validator.directive";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TeaCardComponent,
    AddressValidatorDirective,
    IndexValidatorDirective,
    NameValidatorDirective,
    PhoneValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TeaCardComponent,
    AddressValidatorDirective,
    IndexValidatorDirective,
    NameValidatorDirective,
    PhoneValidatorDirective
  ]
})
export class SharedModule { }
