import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
   items;
  checkoutForm;


  constructor(
    private cartService: CartService
    //private formBuilder: FormBuilder,
  ) { }
ngOnInit() {
    this.items = this.cartService.getItems();
  }
}