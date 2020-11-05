import { Component, OnInit } from '@angular/core';
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
      "stock": 0,
      "image":"assets/img/rodillera-nike.jpg",
      "clearance": false,
    },
    {
      "name": "Adidas Protector",
      "type": "Manga",
      "price": 300,
      "stock": 25,
      "image":"assets/img/manga-adidas.jpg",
      "clearance": true,
    },
    {
      "name": "DRB Protector",
      "type": "Rodillera",
      "price": 400,
      "stock": 30,
      "image":"assets/img/rodillera-drb.jpg",
      "clearance": false,
    },
    {
      "name": "Mikasa Protector",
      "type": "Manga",
      "price": 700,
      "stock": 10,
      "image":"assets/img/manga-mikasa.jpg",
      "clearance": false,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
