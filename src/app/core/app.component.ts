import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { UploadService } from '../services/upload.service';
import { UserService } from '../services/user.service';
import { PictureService } from '../services/picture.service';
import { CommentService } from '../services/comment.service';

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
    private pictureService: PictureService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.isLoggedUser();
    this.setUserInService();
  }

  async onUserLogin(event: { email: string; password: string; }) {
    await this.authService.login(event.email, event.password);
    this.isLoggedUser();
  }

  async onUploadPicture(event: any) {
    await this.uploadService.uploadPicture(event);
    const pictureUrl = await this.uploadService.getPictureUrl(event);
    await this.pictureService.addPictureInDB(event, pictureUrl, this.userLogged);
    const pictureId = await this.pictureService.getPictureId(event);
    await this.commentService.addEmptyCommentsOnUploadPicture(pictureId);

  }

  isLoggedUser() {
    const user = this.authService.isLogged();
    user.subscribe((data) => {
      if (data) {
        // tslint:disable-next-line: no-shadowed-variable
        this.userService.getUserByEmail(data.email).subscribe((data) => {
          this.userLogged = data[0];
          this.isLogged = true;
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
