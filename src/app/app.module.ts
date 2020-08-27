import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { BookingComponent } from './booking/booking.component';
import { CovidAlertComponent } from './covid-alert/covid-alert.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { CovidGuidelinesComponent } from './covid-guidelines/covid-guidelines.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MessageComponent } from './message/message.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    SearchResultComponent,
    AddFlightComponent,
    DeleteFlightComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    LogoutComponent,
    BookingComponent,
    CovidAlertComponent,
    ViewDashboardComponent,
    BookingTicketComponent,
    CovidGuidelinesComponent,
    AboutUsComponent,
    MessageComponent,
    ContactUsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
