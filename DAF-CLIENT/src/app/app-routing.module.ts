import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogDetailComponent } from './pages/home/blog-carousel/blog-detail/blog-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientDashbaordComponent } from './pages/client-dashbaord/client-dashbaord.component';
import { AuthGuard } from './auth/auth.guatd';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path :"blog/:id",component: BlogDetailComponent},
  { path: 'contact', component: ContactUsComponent },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'client-dashboard', component: ClientDashbaordComponent,canActivate: [AuthGuard],data:{permittedRoles:["Admin"]}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
