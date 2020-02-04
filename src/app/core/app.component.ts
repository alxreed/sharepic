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
  userLogged: Promise<any>;
  constructor(private authService: AuthentificationService, private uploadService: UploadService, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedUser();
  }

  async onUserLogin(event: { email: string; password: string; }) {
    console.log(event);
    await this.authService.login(event.email, event.password);
    this.isLoggedUser();
  }

  onUploadPicture(event: any) {
    console.log(event);
    this.uploadService.uploadPicture(event);
  }

  isLoggedUser() {
    const user = this.authService.isLogged();
    user.subscribe(async (data) => {
      if (data) {
        console.log(data);
        this.userLogged = this.userService.getUserByEmail(data.email);
        console.log(this.userLogged);
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

  async onUserCreation(event: any) {
    console.log(event);
    await this.authService.creation(event.email, event.password);
    await this.userService.addUserInDB(event);
    await this.onUserLogin(event);
  }
}
