import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'contacts',
        loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
