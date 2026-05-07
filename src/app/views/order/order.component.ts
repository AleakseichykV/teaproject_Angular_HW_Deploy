import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscribable, Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @ViewChild('orderTitle') orderTitle!: ElementRef;

  isOrderFormVisible: boolean = true;
  isErrorFormVisible: boolean = false;

  subsQueryParams: Subscription | null = null;

  orderForm = new FormGroup({
    productTitle: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    index: new FormControl(''),
    address: new FormControl(''),
    comments: new FormControl(''),
  })


  get productTitle() {return this.orderForm.get('productTitle');}

  get firstname() {return this.orderForm.get('firstname');}
  get lastname() {return this.orderForm.get('lastname');}
  get phone() {return this.orderForm.get('phone');}
  get country() {return this.orderForm.get('country');}
  get index() {return this.orderForm.get('index');}
  get address() {return this.orderForm.get('address');}

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }
  ngOnInit(): void {
    this.subsQueryParams = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.orderForm.patchValue({
          productTitle: params['product']
        });
      }
    })

    if (this.productTitle?.value) {
      this.productTitle.disable();
    } else {
      this.productTitle?.enable();
    }
  }

  createOrderTea(): void {
    if (this.productTitle?.value === '') {
      console.log('invalid')

    }
    if (this.orderForm.valid) {
      this.productService.createOrder({
        name: this.firstname?.value,
        last_name: this.lastname?.value,
        phone: this.phone?.value,
        country: this.country?.value,
        zip: this.index?.value,
        product: this.productTitle?.value,
        address: this.address?.value,
        comment: this.address?.value
      })
        .subscribe({
          next: response => {
            if (response.success && !response.message) {
              this.isOrderFormVisible = false;
              this.orderTitle.nativeElement.innerText = 'Спасибо за заказ!';
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 1000)
            }
          },
          error: () => {
            this.isErrorFormVisible = true;
          }
        })
    } else {
      this.orderForm.markAllAsTouched(); // Показать ошибки во всех полях
    }

  }
}
