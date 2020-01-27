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

  onUserLogin() {
    this.authService.login();
    this.isLoggedUser();
  }

  isLoggedUser() {
    const user = this.authService.isLogged();
    user.subscribe((data) => console.log(data));
  }

  onUserLogout() {
    this.authService.logout();
  }
}
