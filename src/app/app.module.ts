import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DressesComponent } from './dresses/dresses.component';
import { NgFor } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { DressComponent } from './dress/dress.component';
import { ClothesComponent } from './clothes/clothes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DressesComponent,
    MainComponent,
    ProductsComponent,
    OrderConfirmationComponent,
    DressComponent,
    ClothesComponent,
    CheckoutComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    NgFor,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
