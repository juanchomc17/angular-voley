import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product = {
    "name": "Nike Protector",
    "type": "Rodillera",
    "price": 500,
    "stock": 20,
    "image":"assets/img/rodillera-nike.jpg"
  }
  product2 = {
    "name": "Adidas Protector",
    "type": "Manga",
    "price": 300,
    "stock": 25,
    "image":"assets/img/manga-adidas.jpg"
  }
  product3 = {
    "name": "DRB Protector",
    "type": "Rodillera",
    "price": 400,
    "stock": 30,
    "image":"assets/img/rodillera-drb.jpg"
  }
  product4 = {
    "name": "Mikasa Protector",
    "type": "Manga",
    "price": 700,
    "stock": 10,
    "image":"assets/img/manga-mikasa.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
