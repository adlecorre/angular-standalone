import { Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne';
import { PersonneDetailsComponent } from './components/personne-details/personne-details';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: 'calcul', loadComponent: () => import('./calcul/calcul').then(m => m.Calcul) },
    { path: 'primeur', loadComponent: () => import('./primeur/primeur').then(m => m.Primeur) },
    { path: 'clavier', loadComponent: () => import('./clavier/clavier').then(m => m.Clavier) },
    { path: 'personne', component: PersonneComponent, canActivate: [authGuard] },
    { path: 'personne/:id', component: PersonneDetailsComponent, canActivate: [authGuard] },
    { path: 'auth', loadComponent: () => import('./components/auth/auth').then(m => m.Auth) },
];
