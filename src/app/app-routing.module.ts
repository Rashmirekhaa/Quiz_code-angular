import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserLoginComponent } from './user-login/user-login.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { QuizComponent } from './components/quiz/quiz.component';


const routes: Routes = [
  {path: '',component: UserLoginComponent, pathMatch:'full'},
  {path: 'assessment',component: AssessmentComponent},
  {path: 'quiz',component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ContactComponent,TestComponent,FormsComponent,ProductListComponent]
