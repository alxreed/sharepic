import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { UploadService } from '../services/upload.service';
import { UserService } from '../services/user.service';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sharepic';
  isLogged = false;
  userLogged;
  constructor(
    private authService: AuthentificationService,
    private uploadService: UploadService,
    private userService: UserService,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    this.isLoggedUser();
    this.setUserInService();
  }

  async onUserLogin(event: { email: string; password: string; }) {
    console.log(event);
    await this.authService.login(event.email, event.password);
    this.isLoggedUser();
  }

  async onUploadPicture(event: any) {
    console.log(event);
    await this.uploadService.uploadPicture(event);
    const pictureUrl = await this.uploadService.getPictureUrl(event);
    console.log(pictureUrl);
    await this.pictureService.addPictureInDB(event, pictureUrl, this.userLogged);

  }

  isLoggedUser() {
    const user = this.authService.isLogged();
    user.subscribe((data) => {
      if (data) {
        console.log(data);
        // tslint:disable-next-line: no-shadowed-variable
        this.userService.getUserByEmail(data.email).subscribe((data) => {
          this.userLogged = data[0];
          this.isLogged = true;
          console.log(this.userLogged);
        });
      } else {
        this.isLogged = false;
      }
    });
  }

  onUserLogout() {
    this.authService.logout();
    this.isLoggedUser();
  }

  setUserInService() {
    this.userService.setConnectedUser(this.userLogged);
  }

  async onUserCreation(event: any) {
    console.log(event);
    await this.authService.creation(event.email, event.password);
    await this.userService.addUserInDB(event);
    await this.onUserLogin(event);
  }
}
