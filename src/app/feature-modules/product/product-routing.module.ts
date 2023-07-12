import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "add", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
