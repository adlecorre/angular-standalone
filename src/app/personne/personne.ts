import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonneService } from '../personne';
import { Personne } from '../models/personne';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personne',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './personne.html',
  styleUrls: ['./personne.css'],
})
export class PersonneComponent implements OnInit {
  personnes = signal<Personne[]>([])
  personne: Personne = { nom: '', prenom: '', age: 0 }

  // constructor(private ps: PersonneService) { }
  ps = inject(PersonneService)
  ngOnInit(): void {
    this.ps.findAll().subscribe(res => {
      console.log(res);

      this.personnes.set(res)
    })
  }

  ajouter() {
    this.ps.save(this.personne).subscribe(p => {
      this.personnes.set([...this.personnes(), p])
    })
    this.personne = { nom: '', prenom: '', age: 0 }
  }
  supprimer(id: number | undefined = 0) {
    this.ps.remove(id).subscribe(() => {
      this.personnes.set(this.personnes().filter(p => p.id != id))
    })
  }

}
