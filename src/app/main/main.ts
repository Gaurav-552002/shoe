import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  SearchText: string = '';
  Text: string = '';
  cartCount:number = 0;
  AddedToCart: any= [];

  Searchbutton(){
    this.Text = this.SearchText;
  }

  addToCart(index:any){
    this.AddedToCart.push(this.products[index]);
    this.cartCount++;
    console.log(this.AddedToCart);
  }

  products= [
    {
      id: 1,
      image: 'assets/shoe1.jpg' ,
      name: 'Begin Walk Lite For Men : Black',
      price:'₹ 3,499',
      aprice:'₹ 3,499',
      inStock: true
    },
    {
      id: 2,
      image: 'assets/shoe2.jpg' ,
      name: 'Begin Walk Plush For Men : Grey',
      price:'₹ 4,499',
      aprice:'₹ 4,499',
      inStock: false
    },
    {
      id: 3,
      image: 'assets/shoe3.jpg' ,
      name: 'Urban Strive Sneakers For Men : Black',
      price:'₹ 2,999',
      aprice:'₹ 2,999',
      inStock: true 
    },
    {
      id: 4,
      image: 'assets/shoe4.jpg' ,
      name: 'Everyday Rise Sneakers For Men : Olive',
      price:'₹ 1,599',
      aprice:'₹ 1,599',
      inStock: false
    },
    {
      id: 5,
      image: 'assets/shoe5.jpg' ,
      name: 'Begin Walk Pulse For Men : Red',
      price:'₹ 2,599',
      aprice:'₹ 2,599',
      inStock: true
    },
    {
      id: 6,
      image: 'assets/shoe6.jpg' ,
      name: 'Everyday Routine Sneakers For Men : Grey',
      price:'₹ 1,399',
      aprice:'₹ 1,399',
      inStock: true
    }

    
    
  ]
}
