import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService, private router: Router) {}

  initializeApp(){
    if(this.userService.isLoggedIn){
      this.router.navigate(['events']);
    }else{
      this.router.navigate(['login']);
    }
  }
}
