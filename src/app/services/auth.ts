import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Token } from '@angular/compiler';
import { User } from '../models/user';
import { Observable } from 'rxjs';

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
}
