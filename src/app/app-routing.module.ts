import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupUpPageComponent } from    './components/signup-up-page/signup-up-page.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:'login', component:LoginPageComponent},
  {path:'signUp', component:SignupUpPageComponent},
  {path:'home', component:HomeComponent},
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }