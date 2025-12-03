import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('user')
  const router = inject(Router)
  if (user) {
    // si user est différent de null, on autorise l'accès à la route demandée
    return true;
  }
  // ici l'utilisateur n'est pas authentifié
  return router.createUrlTree(['/auth'])
};
