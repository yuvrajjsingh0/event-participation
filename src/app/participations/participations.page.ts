import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { EventService } from '../api/event.service';
import { EventSubsService } from '../api/eventsubs.service';
import { UserService } from '../api/user.service';
import { EventT } from '../shared/event';
import { EventSubs } from '../shared/eventSubs';

@Component({
  selector: 'app-participations',
  templateUrl: './participations.page.html',
  styleUrls: ['./participations.page.scss'],
})
export class ParticipationsPage implements OnInit {

  events: Array<EventT> = [];
  loading;

  constructor(private userService: UserService, private eventSubService: EventSubsService, private eventService: EventService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.showLoading();
    let allEvents: Array<EventT> = [];
    this.eventSubService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.eventService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(data1 => {
        allEvents = data1;
        for (let eventSub of data){
          if(eventSub.paidBy == this.userService.userId){
            console.log( this.userService.userId);
            console.log( eventSub.eventId);
            this.events.push(allEvents[allEvents.findIndex(obj => obj.id == eventSub.eventId)]);
          }else if(eventSub.persons.findIndex(obj => obj.email == this.userService.email) != -1){
            let eventT: EventT = allEvents[allEvents.findIndex(obj => obj.id == eventSub.eventId)];
            if(this.events.findIndex(obj => obj.id == eventT.id) == -1){
              this.events.push(eventT);
            }
          }
        }
        this.hideLoading();
        console.log(this.events);
      });
      
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'dots',
    });

    loading.present();
  }

  async hideLoading(){
    this.loading.dismiss();
  }

}
