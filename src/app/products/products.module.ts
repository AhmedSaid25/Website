import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';
import { ProductsDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
