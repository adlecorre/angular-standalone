import { Component } from '@angular/core';
import { Produit } from '../produit/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeur',
  standalone: true,
  imports: [FormsModule, Produit],
  templateUrl: './primeur.html',
})
export class Primeur {
  produits = [
    { nom: 'banane', prix: 3, quantite: 10 },
    { nom: 'fraise', prix: 10, quantite: 20 },
    { nom: 'poivron', prix: 5, quantite: 10 },
  ];

  total = 0;
  nouveauNom = '';
  nouveauPrix: number | null = null;
  nouvelleQuantite: number | null = null;

  ajouter() {
    if (!this.nouveauNom || this.nouveauPrix === null || this.nouvelleQuantite === null) {
      return;
    }

    this.produits.push({
      nom: this.nouveauNom,
      prix: this.nouveauPrix,
      quantite: this.nouvelleQuantite,
    });

    this.nouveauNom = '';
    this.nouveauPrix = null;
    this.nouvelleQuantite = null;
  }

  ajouterAuTotal(montant: number) {
    this.total += montant;
  }
}
