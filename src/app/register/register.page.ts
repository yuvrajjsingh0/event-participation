import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userService: UserService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  register(email, password){
    this.userService.RegisterUser(email.value, password.value).then(res => {
      console.log("Registered Successfully");
      this.router.navigate(['']);
    }).catch(async error => {
      console.log("Error: "+ error);
      const toast = await this.toastController.create({
        message: 'Error occured while Signing up',
        duration: 3000,
        position:'top'
      });
      await toast.present();
    })
  }

}
