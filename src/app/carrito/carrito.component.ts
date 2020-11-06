import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Product } from '../product-list/product';
import { VoleyCartService } from '../voley-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cartList: Product[] = [];
  constructor(private cart : VoleyCartService) { 
    cart.cartList.subscribe((observable) => this.cartList = observable);
  
  }

  ngOnInit(): void {
  }

}
