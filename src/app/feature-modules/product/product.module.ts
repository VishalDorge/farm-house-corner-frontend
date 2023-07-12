import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddComponent } from './pages/add/add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [
    AddComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
