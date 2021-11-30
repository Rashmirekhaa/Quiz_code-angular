import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {path: '',redirectTo: 'HomeComponent',pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'test',component: TestComponent},
  {path: 'forms',component: FormsComponent},
  {path: 'product-list',component:ProductListComponent},
  {path: 'user-login',component:UserLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ContactComponent,TestComponent,FormsComponent,ProductListComponent]
