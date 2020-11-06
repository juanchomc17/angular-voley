import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { VoleyAboutComponent } from './voley-about/voley-about.component';
import { VoleyProductsComponent } from './voley-products/voley-products.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    VoleyAboutComponent,
    VoleyProductsComponent,
    CarritoComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
