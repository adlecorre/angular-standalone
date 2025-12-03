import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  username: string = '';
  password: string = '';
  error: string = '';
  erreur = signal<string>('');
  user: User = { username: '', password: '' }
  users: User[] = [
    { username: 'user', password: 'user' },
    { username: 'admin', password: 'admin' },
    { username: 'sadmin', password: 'sadmin' },
  ]

  constructor(private router: Router) { }

  login() {
    if (this.users.some(u => u.password == this.user.password && u.username == this.user.username)) {
      localStorage.setItem('user', JSON.stringify(this.user))
      this.router.navigateByUrl('/personne')

    } else {
      this.erreur.set("Identifiants incorrects")
    }
  }
}
