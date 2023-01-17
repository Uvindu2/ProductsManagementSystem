import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { EditCustomerComponent } from 'app/Pages/Customer/edit-customer/edit-customer.component';
import { CreateProductsComponent } from 'app/Pages/Products/create-products/create-products.component';
import { ViewProductlistComponent } from 'app/Pages/Products/view-productlist/view-productlist.component';
import { UpdateProductsComponent } from 'app/Pages/Products/update-products/update-products.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from 'app/Pages/Login/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { CartComponent } from 'app/Pages/Products/cart/cart.component';





@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    EditCustomerComponent,
    CreateProductsComponent,
    ViewProductlistComponent,
    UpdateProductsComponent,
    LoginComponent,
    CartComponent


  ]
})

export class AdminLayoutModule {}
