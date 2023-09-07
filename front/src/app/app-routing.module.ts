import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-page/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditAddPageComponent } from './components/edit-add-page/edit-add-page.component';

const routes: Routes = [
  {path: 'projects', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit-add', component: EditAddPageComponent},
  {path: 'edit-add/:id', component: EditAddPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
