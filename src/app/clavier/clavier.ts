import { Component } from '@angular/core';
import { Touche} from '../touche/touche';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clavier',
  standalone: true,
  imports: [Touche, CommonModule],
  templateUrl: './clavier.html',
})
export class Clavier {
  lettres = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n',  'o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x', 'y', 'z'
  ];

  texte = '';

  ajouterLettre(l: string) {
    this.texte += l;
  }
}
