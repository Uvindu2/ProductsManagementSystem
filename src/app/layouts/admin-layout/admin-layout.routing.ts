import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { EditCustomerComponent } from 'app/Pages/Customer/edit-customer/edit-customer.component';
import { CreateProductsComponent } from 'app/Pages/Products/create-products/create-products.component';
import { ViewProductlistComponent } from 'app/Pages/Products/view-productlist/view-productlist.component';
import { UpdateProductsComponent } from 'app/Pages/Products/update-products/update-products.component';
import { LoginComponent } from 'app/Pages/Login/login/login.component';
import { CartComponent } from 'app/Pages/Products/cart/cart.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'customer/update/:id',  component: EditCustomerComponent },
    { path: 'product/create',  component: CreateProductsComponent },
    { path: 'product/view',  component: ViewProductlistComponent },
    { path: 'product/update/:id',  component: UpdateProductsComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'product/cart/:id',  component: CartComponent },






];
