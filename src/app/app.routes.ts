import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'calcul', loadComponent: () => import('./calcul/calcul').then(m => m.Calcul) },
    { path: 'primeur', loadComponent: () => import('./primeur/primeur').then(m => m.Primeur) },
];
