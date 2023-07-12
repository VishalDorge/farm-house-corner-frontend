import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputComponent } from './components/input/input.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    InputComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    InputComponent,
    FooterComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
