import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { ToastController } from '@ionic/angular';
import { throwIfEmpty } from 'rxjs/operators';
import { EventSubsService } from '../api/eventsubs.service';
import { UserService } from '../api/user.service';
import { EventT } from '../shared/event';
import { EventSubs } from '../shared/eventSubs';
const { AllInOneSDK } = Plugins;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  event:EventT;
  people: Array<Person> = [];
  toShowForm: boolean = true;
  toShowDone: boolean = false;

  constructor(public router: Router, public activatedRoute: ActivatedRoute, private toastController: ToastController,  private eventSubsService: EventSubsService, private userService: UserService) { }

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        //store the temp in data
        this.event = JSON.parse(params.event);
        console.log(params);
        console.log(this.event.id);
      }
    });
    /*    
    let response = await AllInOneSDK.startTransaction({
      mid: 'EfiFpd08551040625765', amount: '', orderId: '', callbackUrl: "", 
     txnToken: '', isStaging: false, restrictAppInvoke: true });*/
  }

  addPerson(name:any, course:any, email:any){
    this.toShowDone = true;
    if(this.event.maxNoOfPeople > this.people.length){
      this.people.push({
        name: name.value,
        email: email.value,
        course: course.value
      });
    }
    
    if(this.event.maxNoOfPeople == this.people.length){
      console.log(this.people);
      this.toShowForm = false;
    }
  }

  removePerson(person: Person){
    this.people.splice(this.people.findIndex(obj => obj.name == person.name));
    if(this.event.maxNoOfPeople != this.people.length){
      console.log(this.people);
      this.toShowForm = true;
    }
    if(this.people.length == 0){
      this.toShowDone = false;
    }
  }

  async done(){
    let eventSubs: EventSubs = <EventSubs> {
      persons: this.people,
      eventId: this.event.id,
      paidBy: this.userService.userId
    };
    try{
      await this.eventSubsService.create(eventSubs);
      this.router.navigate(['']);
    }catch(e){
      const toast = await this.toastController.create({
        message: 'An error occured',
        duration: 3000,
        position:'top'
      });
      console.log(e);
      await toast.present();
    }
  }

}

interface Person {
  name: string;
  email: string;
  course: string;
}