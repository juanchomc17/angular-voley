import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class VoleyCartService {
  
  private _cartList: Product [] = [] ;
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  
  constructor() { }
  
  addToCart(product: Product) {
    let item: Product = this._cartList.find((v1) => v1.name == product.name);
    if(!item){
      this._cartList.push({... product});
    } else{
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
    
  }

  
}
