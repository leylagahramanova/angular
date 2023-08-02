import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';


const routes: Routes = [
  {path:'', component:ProductPageComponent},
  {path:'about', component:AboutPageComponent},
  {path:'cart', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
