import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<Personne[]>(this.url)
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

  findById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.url}/${id}`)
  }

  update(id: number,p: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.url}/${id}`, p)
  }

}
