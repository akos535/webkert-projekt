// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import {HeaderComponent} from "./pages/header/header.component";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, RegisterComponent, ContactsComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkeret';
}