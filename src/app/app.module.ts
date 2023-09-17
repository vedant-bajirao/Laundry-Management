import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { VarifyEmailComponent } from './pages/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CartComponent } from './sharepage/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './sharepage/checkout/checkout.component';
import { OrderplaceComponent } from './sharepage/orderplace/orderplace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    VarifyEmailComponent,
    ForgotPasswordComponent,
    CartComponent,
    CheckoutComponent,
    OrderplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
