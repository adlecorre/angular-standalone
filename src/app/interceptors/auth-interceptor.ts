import { HttpInterceptorFn } from '@angular/common/http';
import { User } from '../models/user';
import { Token } from '../models/token';

const AUTH_URL = '${environment.BACKEND_URL}/authenticate';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === AUTH_URL) {
    return next(req);
  }

  const tokensString: string = localStorage.getItem('tokens') ?? ''
  if (!tokensString) {
    return next(req);
  }
  const tokens: Token = JSON.parse(tokensString)


  const cloned = req.clone({
    setHeaders: { 'Authorization': `Bearer ${tokens.accessToken}` }
  })
  return next(cloned)
};
