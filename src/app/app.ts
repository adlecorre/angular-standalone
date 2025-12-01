import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Particle {
  top: string;
  left: string;
  size: number;
  duration: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  particles: Particle[] = [];
  protected readonly title = signal('angular-standalone');

  constructor() {
    const count = 50; // nombre de points
    for (let i = 0; i < count; i++) {
      this.particles.push({
        top: Math.random() * 100 + '%', // position verticale aléatoire
        left: Math.random() * 100 + '%', // position horizontale aléatoire
        size: Math.random() * 12 + 5,   // taille aléatoire (5 à 17px)
        duration: Math.random() * 20 + 10 // durée animation aléatoire (10 à 30s)
      });
    }
  }
  
}
