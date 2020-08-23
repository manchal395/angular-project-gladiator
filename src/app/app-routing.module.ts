import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent} from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // component: Component's class name
  { path: '', component: SearchComponent}, 
  { path: 'search', component: SearchComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'search-result', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
