import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Token } from '@angular/compiler';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url : string;
  constructor(private http:HttpClient) {
    this.url = environment.BACKEND_URL + '/authenticate'
  }

  findByUsernameAndPassword(user: User): Observable<Token> {
    return this.http.post<Token>(this.url, user)  
  }

  isExpired(token: string): Boolean {
    const decoded = jwtDecode(token);
    return Math.round(Date.now() / 1000) > (decoded.exp ?? 1);
  }

  getTokensUsingRefreshToken(user: User): Observable<Token> {
    return this.http.post<Token>(this.url, user)  
  }
}
