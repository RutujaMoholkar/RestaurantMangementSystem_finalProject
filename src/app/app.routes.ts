import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


export const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: HomeComponent },//admin+client
    { path: 'orders', component: OrdersComponent },//admin
    { path: 'products', component: ProductsComponent },//client
    { path: 'about', component: AboutComponent },//client
    { path: 'registration', component: RegistrationComponent },//admin+client
    { path: 'login', component: LoginComponent }//admin+client

];
@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule, HttpClientModule, ReactiveFormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }








