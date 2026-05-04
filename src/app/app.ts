import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Main, } from './main/main';
import { Cart } from './cart/cart';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, Main, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shoe-cart');
}
