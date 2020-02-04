import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { UploadService } from '../services/upload.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sharepic';
  isLogged = false;
  constructor(private authService: AuthentificationService, private uploadService: UploadService, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedUser();
  }

  onUserLogin(event: { email: string; password: string; }) {
    console.log(event);
    this.authService.login(event.email, event.password);
    this.isLoggedUser();
  }

  onUploadPicture(event: any) {
    console.log(event);
    this.uploadService.uploadPicture(event);
  }

  isLoggedUser() {
    const user = this.authService.isLogged();
    user.subscribe((data) => {
      if (data) {
        console.log(data);
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

  onUserCreation(event: any) {
    console.log(event);
    this.authService.creation(event.email, event.password);
    this.userService.addUserInDB(event);
    this.onUserLogin(event);
  }
}
