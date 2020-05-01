import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'suppliers', component: SuppliersComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
