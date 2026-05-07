import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TeaCardType} from "../../../../types/tea.card.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'tea-card-product-component',
  templateUrl: './tea-card-product.component.html',
  styleUrls: ['./tea-card-product.component.scss']
})
export class TeaCardProductComponent implements OnInit {
  teaCardProduct: TeaCardType;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService,
              private router: Router) {

    this.teaCardProduct = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getTeaCard(+params['id'])
          .subscribe( {
            next: (data) => {
              this.teaCardProduct = data;
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          })
      }
    })
  }

  addToCart(title: string) {
    this.cartService.product = title;
    this.router.navigate(['/order'], {queryParams: {product: title}})
  }
}
