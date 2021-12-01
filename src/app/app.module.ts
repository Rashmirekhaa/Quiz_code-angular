import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { SharedComponent } from './shared/shared/shared.component';
import { StarComponent } from './shared/star/star.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './components/header/header.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { MatDividerModule } from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { QuizComponent } from './components/quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    FormsComponent,
    ProductListComponent,
    CovertToSpacesPipe,
    SharedComponent,
    StarComponent,
    UserLoginComponent,
    HeaderComponent,
    AssessmentComponent,
    QuizComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatRadioModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
