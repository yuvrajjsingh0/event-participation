import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  login( email: any, password: any ){
    this.userService.SignIn(email.value, password.value).then(res => {
      console.log("Logged In Successfully");
      this.router.navigate(['']);
    }).catch(async error => {
      console.log("An error: " + error);
      const toast = await this.toastController.create({
        message: 'Invalid Credentials',
        duration: 3000,
        position:'top'
      });
      await toast.present();
    });
  }

}
