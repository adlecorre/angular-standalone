import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Personne } from './models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private url = `http://localhost:8080/ws/personnes`
  private personnes: Personne[]

  constructor(private http: HttpClient) {
    this.personnes = [
      { id: 1, nom: "Wick", prenom: "John", age: 45 },
      { id: 2, nom: "Dalton", prenom: "Jack", age: 55 },
      { id: 3, nom: "Maggio", prenom: "Candice", age: 27 },
      { id: 4, nom: "Linus", prenom: "Sophie", age: 67 },
    ]
  }

  findAll(): Observable<Personne[]> {
    console.log('[PersonneService] findAll: GET', this.url);
    return this.http.get<Personne[]>(this.url, { observe: 'response' as const }).pipe(
      tap(resp => {
        console.log('[PersonneService] response status:', resp.status);
        try { console.log('[PersonneService] response headers:', resp.headers?.keys()); } catch(e) {}
        console.log('[PersonneService] response body preview:', Array.isArray(resp.body) ? (resp.body as Personne[]).slice(0,5) : resp.body);
      }),
      map(resp => resp.body as Personne[]),
      catchError(err => {
        console.error('[PersonneService] findAll error (rethrow):', err);
        return throwError(() => err);
      })
    );
  }

  save(p: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.url, p)
  }
  remove(id: number) {
    // `http://localhost:8080/ws/personnes/1`
    // `http://localhost:8080/ws/personnes/2`
    // this.personnes.splice(ind, 1)
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
