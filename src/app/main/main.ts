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
  discount:string = '₹ 2000 50% Off';
  Text: string = '';

  Searchbutton(){
    this.Text = this.SearchText;
  }

  products= [
    {
      image: 'assets/shoe1.jpg' ,
      name: 'Begin Walk Lite For Men : Black',
      price:'₹ 3,499'
    },
    {
      image: 'assets/shoe2.jpg' ,
      name: 'Begin Walk Plush For Men : Grey',
      price:'₹ 4,499'
    },
    {
      image: 'assets/shoe3.jpg' ,
      name: 'Urban Strive Sneakers For Men : Black',
      price:'₹ 2,999'
    },
    {
      image: 'assets/shoe4.jpg' ,
      name: 'Everyday Rise Sneakers For Men : Olive',
      price:'₹ 1,599'
    },
    {
      image: 'assets/shoe5.jpg' ,
      name: 'Begin Walk Pulse For Men : Red',
      price:'₹ 2,599'
    },
    {
      image: 'assets/shoe6.jpg' ,
      name: 'Everyday Routine Sneakers For Men : Grey',
      price:'₹ 1,399'
    }

    
    
  ]
}
