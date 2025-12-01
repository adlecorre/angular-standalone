import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './produit.html',
})
export class Produit {
  @Input() produit!: { nom: string; prix: number; quantite: number };
  @Output() achat = new EventEmitter<number>();

  qteAchetee: number | null = null;
  disabled = false;

  acheter() {
    if (this.qteAchetee === null || this.qteAchetee <= 0) return;
    if (this.qteAchetee > this.produit.quantite) return;

    const montant = this.qteAchetee * this.produit.prix;
    this.produit.quantite -= this.qteAchetee;
    this.achat.emit(montant);

    this.disabled = true;
  }
}
