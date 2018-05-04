import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingRoutingModule } from './shopping-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UsersService } from '../services/users.service';
import { CategoryProductService } from '../services/category-product.service';
import { EmailValidationDirective } from './email-validation.directive';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { HomeComponent } from './home/home.component';
import { CategoryItemsComponent } from './category-items/category-items.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailValidationDirective,
    ShoppingItemsComponent,
    HomeComponent,
    CategoryItemsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(    //used for intercepting http requests
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ UsersService, CategoryProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
