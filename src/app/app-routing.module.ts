import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent} from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  // component: Component's class name
  { path: '', component: SearchComponent}, 
  { path: 'search', component: SearchComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'search-result', component: SearchResultComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: 'add-flight', component: AddFlightComponent },
      { path: 'delete-flight', component: DeleteFlightComponent },
    ], 
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
