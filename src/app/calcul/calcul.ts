import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcul',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calcul.html',
  styleUrls: ['./calcul.css'],
})
export class Calcul implements OnInit {
  opParam: string | null = null;
  a: number | null = null;
  b: number | null = null;
  result: number | string | null = null;
  error: string | null = null;
  opSymbol: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((pm) => {
      this.opParam = pm.get('op');
      this.tryComputeFromQuery();
    });
  }

  parseMaybeNumber(v: any): number | null {
    if (v === null || v === undefined || v === '') return null;
    const n = Number(v);
    return isNaN(n) ? null : n;
  }

  tryComputeFromQuery() {
    this.error = null;
    this.result = null;

    if (this.opParam && this.a !== null && this.b !== null) {
      this.compute();
    }
  }

  compute() {
    if (!this.opParam) {
      this.error = "'Opération manquante dans l'URL (ex: /calcul/plus).";
      return;
    }

    if (this.a === null || this.b === null) {
      this.error = 'Les deux opérandes (a et b) sont nécessaires.';
      return;
    }

    switch (this.opParam.toLowerCase()) {
      case 'plus':
        this.result = this.a + this.b;
        this.opSymbol = '+';
        break;
      case 'moins':
        this.result = this.a - this.b;
        this.opSymbol = '-';
        break;
      case 'fois':
        this.result = this.a * this.b;
        this.opSymbol = '*';
        break;
      case 'div':
        if (this.b === 0) {
          this.result = 'Erreur : division par zéro';
        } else {
          this.result = this.a / this.b;
          this.opSymbol = ':';
        }
        break;
      default:
        this.error = `Opération inconnue: ${this.opParam}. Utilise plus|moins|fois|div`;
    }
  }

  onSubmitForm() {
    if (this.opParam && this.a !== null && this.b !== null) {
      this.compute();
    } else {
      this.error = 'Veuillez sélectionner une opération et entrer des valeurs pour a et b.';
    }
  }

  setOp(op: string) {
    this.opParam = op;
  }
}
