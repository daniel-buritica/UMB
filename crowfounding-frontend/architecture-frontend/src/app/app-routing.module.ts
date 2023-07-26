import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import {CompleteRegistrationComponent} from './shared/pages/complete-registration/complete-registration.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RestAccountComponent } from './auth/rest-account/rest-account.component';
import { UpdateCustomerComponent } from './shared/pages/update-customer/update-customer.component';
import { RegisterProjectComponent } from './shared/pages/register-project/register-project.component';
import { UpdateProjectComponent } from './shared/pages/update-project/update-project.component';
import { ProfileComponent } from './shared/pages/profile/profile.component';
import { ButtonpageComponent } from './shared/pages/helpers/buttons/buttonpage/buttonpage.component';
import { PopupViewProjectComponent } from './shared/pages/helpers/popup-view-project/popup-view-project.component';
import { SubmitButtonPlaneComponent } from './shared/pages/helpers/buttons/submit-button-plane/submit-button-plane.component';
import { DeleteCustomerComponent } from './shared/pages/delete-customer/delete-customer.component';
import { DeleteProjectComponent } from './shared/pages/delete-project/delete-project.component';
import { ChangeStatusProjectComponent } from './shared/pages/change-status-project/change-status-project.component';
import { CardFromComponent } from './shared/pages/card-form/card-form.component';
import { ShoppingCartComponent } from './shared/pages/shopping-cart/shopping-cart.component';
import { AdministratorHomeComponent } from './shared/pages/administrator-home/administrator-home.component';
import { AdministorCustomerComponent } from './shared/pages/administor-customer/administor-customer.component';
import { AdministorProjectsComponent } from './shared/pages/administor-projects/administor-projects.component';
import { PackageCardsComponent } from './shared/pages/package-cards/package-cards.component';
import { PackageFormComponent } from './shared/pages/package-form/package-form.component';
import { HttpErrorResponse } from '@angular/common/http';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restAccount', component: RestAccountComponent },
  { path: 'registration', component: CompleteRegistrationComponent },
  { path: 'heater', component: HttpErrorResponse },  
  { path: 'updateCustomer', component: UpdateCustomerComponent },
  { path: 'registerProject', component: RegisterProjectComponent },
  { path: 'updateProject', component: UpdateProjectComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'butonproject', component: ButtonpageComponent },
  { path: 'popupViewProject', component: PopupViewProjectComponent },
  { path: 'submitButton', component: SubmitButtonPlaneComponent },
  { path: 'deleteCustomer', component:DeleteCustomerComponent },
  { path: 'deleteProject', component:DeleteProjectComponent },
  { path: 'Statusproject', component:ChangeStatusProjectComponent },
  { path: 'CardForm', component:CardFromComponent },
  { path: 'ShoppingCart', component:ShoppingCartComponent },
  { path: 'AdminHome', component:AdministratorHomeComponent },
  { path: 'AdminCustomer', component:AdministorCustomerComponent },
  { path: 'AdminProject', component:AdministorProjectsComponent },
  { path: 'PackageForm', component:PackageFormComponent },
  { path: 'Packagecards', component:PackageCardsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
