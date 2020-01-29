import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sharepic';
  isLogged = false;
  constructor(private authService: AuthentificationService) {}

  ngOnInit() {
    this.isLoggedUser();
  }

  onUserLogin(event: { email: string; password: string; }) {
    console.log(event);
    this.authService.login(event.email, event.password);
    this.isLoggedUser();
  }

  isLoggedUser() {
    const user = this.authService.isLogged();
    user.subscribe((data) => {
      if (data) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

  onUserLogout() {
    this.authService.logout();
    this.isLoggedUser();
  }
}
