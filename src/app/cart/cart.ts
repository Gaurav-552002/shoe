import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  total:number=0;

  addedProducts=[
    {
      id: 1,
      image: 'assets/shoe1.jpg' ,
      name: 'Begin Walk Lite For Men : Black',
      price:3499,
      aprice:'₹ 3,499',
      inStock: true
    },
    {
      id: 2,
      image: 'assets/shoe2.jpg' ,
      name: 'Begin Walk Plush For Men : Grey',
      price:4499,
      aprice:'₹ 4,499',
      inStock: false
    }
  ]

  subtotal(){
    this.total = 0;
    for(let i=0; i<this.addedProducts.length;i++){
      this.total = this.total + this.addedProducts[i].price;
    }
  }

   removeAll(){
      for(let i=0; i<=this.addedProducts.length; i++){
        this.addedProducts.pop();
      }
    }
}
