import { Component, Input, OnInit, signal } from '@angular/core';
import { PersonneService } from '../../services/personne';
import { Personne } from '../../models/personne';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personne-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personne-details.html',
  styleUrls: ['./personne-details.css'],
})
export class PersonneDetailsComponent implements OnInit  {
  @Input() idInput?: number;

  id = signal<number | null>(null);
  personne = signal<Personne>({ nom: '', prenom: '', age: 0 });

  constructor(
    private personneService: PersonneService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get('id');
    const idFromRoute = routeId ? Number(routeId) : null;

    const finalId = this.idInput ?? idFromRoute;
    if (finalId == null || isNaN(finalId)) {
      console.warn('[PersonneDetails] id not provided (input or route)');
      return;
    }

    this.id.set(finalId);

    this.personneService.findById(finalId).subscribe({
      next: p => this.personne.set(p),
      error: err => console.error('[PersonneDetails] findById error', err)
    });
  }

  enregistrer() {
    const idVal = this.id();
    if (idVal == null) {
      console.error('[PersonneDetails] cannot save: id is null');
      return;
    }
    this.personneService.update(idVal, this.personne()).subscribe({
      next: () => this.router.navigateByUrl('/personne'),
      error: err => console.error('[PersonneDetails] update error', err)
    });
  }

}


