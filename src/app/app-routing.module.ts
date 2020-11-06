import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoleyAboutComponent } from './voley-about/voley-about.component';
import { VoleyProductsComponent } from './voley-products/voley-products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component: VoleyProductsComponent
  },
  {
    path:'about',
    component: VoleyAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
