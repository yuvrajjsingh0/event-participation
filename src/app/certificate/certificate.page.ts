import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';
import { EventT } from '../shared/event';
import { EventSubs, Person } from '../shared/eventSubs';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.page.html',
  styleUrls: ['./certificate.page.scss'],
})
export class CertificatePage implements OnInit {

  username: string;
  eventname: string;

  constructor(public activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        //store the temp in data
        this.eventname = (JSON.parse(params.event) as EventT).name;
        let persons: Array<Person> = (JSON.parse(params.eventSub) as EventSubs).persons;
        this.username = persons[persons.findIndex(obj => obj.email = this.userService.email)].name;
        console.log(params);
      }
    });
  }

  print(): void {
    window.print();
}

}
