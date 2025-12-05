import { Component, signal } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { LoginLogoutService } from '../../services/login-logout';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  erreur = signal<string | null>(null)
  user: User = { username: '', password: '', grantType: 'PASSWORD' }

  constructor(
    private router: Router, 
    private authService: AuthService,
    private logService: LoginLogoutService
  ) { }

  login() {
    this.authService.findByUsernameAndPassword(this.user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('tokens', JSON.stringify(res))
        localStorage.setItem('user', JSON.stringify(this.user))
        this.logService.isConnected(true)
        this.router.navigateByUrl('/personne')

      },
      error: (err) => {
        console.log(err);
        this.erreur.set("Identifiants incorrects")
      }
    })

  }
}
