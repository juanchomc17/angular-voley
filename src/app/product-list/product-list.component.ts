import { Component, OnInit } from '@angular/core';
import { VoleyCartService } from '../voley-cart.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      "name": "Nike Protector",
      "type": "Rodillera",
      "price": 500,
      "stock": 20,
      "image":"assets/img/rodillera-nike.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "Adidas Protector",
      "type": "Manga",
      "price": 300,
      "stock": 0,
      "image":"assets/img/manga-adidas.jpg",
      "clearance": true,
      "quantity": 0,
    },
    {
      "name": "DRB Protector",
      "type": "Rodillera",
      "price": 400,
      "stock": 30,
      "image":"assets/img/rodillera-drb.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "Mikasa Protector",
      "type": "Manga",
      "price": 700,
      "stock": 10,
      "image":"assets/img/manga-mikasa.jpg",
      "clearance": false,
      "quantity": 0,
    },
  ];

  constructor(private cart : VoleyCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(product): void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
  
 maxReached(m: string) {
   alert(m);

 }

}
