import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    if(!this.userService.isLoggedIn){
      this.router.navigate(['login']);
    }
  }


}
