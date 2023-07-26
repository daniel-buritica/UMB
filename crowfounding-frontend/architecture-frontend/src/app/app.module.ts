import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CamelCasePipe } from './shared/pages/profile-card/camel-case.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from "../app/shared/services/authentication.service";


//inicio
import{ CargarScriptsService } from "./shared/services/cargar-scripts.service";
//fin


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RestAccountComponent } from './auth/rest-account/rest-account.component';
import { HomeComponent } from '../app/shared/pages/home/home.component';

import { HeaderComponent } from './shared/pages/helpers/header/header.component';
import { CompleteRegistrationComponent } from './shared/pages/complete-registration/complete-registration.component';
import { UpdateCustomerComponent } from './shared/pages/update-customer/update-customer.component';
import { RegisterProjectComponent } from './shared/pages/register-project/register-project.component';
import { UpdateProjectComponent } from './shared/pages/update-project/update-project.component';
import { ProfileComponent } from './shared/pages/profile/profile.component';
import { ButtonpageComponent } from './shared/pages/helpers/buttons/buttonpage/buttonpage.component';
import { PopupViewProjectComponent } from './shared/pages/helpers/popup-view-project/popup-view-project.component';
import { SubmitButtonPlaneComponent } from './shared/pages/helpers/buttons/submit-button-plane/submit-button-plane.component';
import { DeleteCustomerComponent } from './shared/pages/delete-customer/delete-customer.component';
import { DeleteProjectComponent } from './shared/pages/delete-project/delete-project.component';
import { ProjectCardsComponent } from './shared/pages/project-cards/project-cards.component';
import { ChangeStatusProjectComponent } from './shared/pages/change-status-project/change-status-project.component';
import { StatusButtonComponent } from './shared/pages/helpers/buttons/status-button/status-button.component';
import { CardFromComponent } from './shared/pages/card-form/card-form.component';
import { ProjectCardsSellerComponent } from './shared/pages/project-cards-seller/project-cards-seller.component';
import { ProfileCardComponent } from './shared/pages/profile-card/profile-card.component';
import { ShoppingCartComponent } from './shared/pages/shopping-cart/shopping-cart.component';
import { AdministratorHomeComponent } from './shared/pages/administrator-home/administrator-home.component';
import { AdministorCustomerComponent } from './shared/pages/administor-customer/administor-customer.component';
import { AdministorProjectsComponent } from './shared/pages/administor-projects/administor-projects.component';
import { ProjectImagesComponent } from './shared/pages/helpers/project-images/project-images.component';
import { PackageFormComponent } from './shared/pages/package-form/package-form.component';
import { TransferFormComponent } from './shared/pages/transfer-form/transfer-form.component';
import { PackageCardsComponent } from './shared/pages/package-cards/package-cards.component';
import { ButtonCompleteOrderComponent } from './shared/pages/helpers/buttons/button-complete-order/button-complete-order.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RestAccountComponent,
    HomeComponent,
    HeaderComponent,
    CompleteRegistrationComponent,
    UpdateCustomerComponent,
    RegisterProjectComponent,
    UpdateProjectComponent,
    ProfileComponent,
    ButtonpageComponent,
    PopupViewProjectComponent,
    SubmitButtonPlaneComponent,   
    CamelCasePipe, DeleteCustomerComponent, DeleteProjectComponent, ProjectCardsComponent, ChangeStatusProjectComponent, StatusButtonComponent, CardFromComponent, ProjectCardsSellerComponent, ProfileCardComponent, ShoppingCartComponent, AdministratorHomeComponent, AdministorCustomerComponent, AdministorProjectsComponent, ProjectImagesComponent, PackageFormComponent, TransferFormComponent, PackageCardsComponent, ButtonCompleteOrderComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthService,CargarScriptsService],
  bootstrap: [AppComponent]

})
export class AppModule { }
