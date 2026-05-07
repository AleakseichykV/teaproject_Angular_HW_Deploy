import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaCardType} from "../../../../types/tea.card.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'tea-collections-component',
  templateUrl: './tea-collections.component.html',
  styleUrls: ['./tea-collections.component.scss']
})
export class TeaCollectionsComponent implements OnInit {
  teaCards: TeaCardType[] = [];
  constructor(private http: HttpClient,
              private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getTeaCards()
      .subscribe((data) => {
        this.teaCards = data;
        console.log(data)
      })
  }

  getTeaCards() {
    return this.teaCards;
  }
}








// import { Component, OnInit } from '@angular/core';
// import {ProductService} from "../../services/product.service";
// import {TeaCardType} from "../../types/tea.card.type";
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'tea-collections-component',
//   templateUrl: './tea-collections.component.html',
//   styleUrls: ['./tea-collections.component.scss']
// })
// export class TeaCollectionsComponent implements OnInit {
//   teaCards: TeaCardType[] = [];
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//     // this.teaCards = this.productService.getTeaCards();
//
//     this.http.get<TeaCardType[]>('https://testologia.ru/tea')
//       .subscribe((data) => {
//         this.teaCards = data;
//       })
//   }
//
//   getTeaCards() {
//     return this.teaCards;
//   }
// }
