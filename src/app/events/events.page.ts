import { Component, OnInit } from '@angular/core';
import { EventService } from '../api/event.service';
import { map } from 'rxjs/operators';
import { LoadingController, NavController } from '@ionic/angular';
import { EventT } from '../shared/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  type = 'paidSeg';
  paidEvents = [];
  freeEvents = [];
  events?: EventT[];
  loading;

  constructor(private eventService: EventService, private loadingCtrl: LoadingController, private router: Router, private navController: NavController) { }

  ngOnInit() {
    this.freeEvents = [];
    this.paidEvents = [];
    this.showLoading();
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.events = data;
      for (let event of this.events){
        if(event.hasEnded){
          continue;
        }
        if(event.price == 0){
          this.freeEvents.push(event);
        }else{
          this.paidEvents.push(event);
        }
      }
      this.hideLoading();
      console.log(this.events);
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

  joinEvent(event: EventT){
    this.navController.navigateForward('checkout', {queryParams: {event: JSON.stringify(event)}});
  }

}
