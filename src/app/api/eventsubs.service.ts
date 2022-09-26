import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { EventSubs } from "../shared/eventSubs";

@Injectable({
    providedIn: 'root',
})
export class EventSubsService {
    private eventsDBPath = '/eventSubs';

    eventsRef: AngularFirestoreCollection<EventSubs>;

    constructor(private db: AngularFirestore) {
        this.eventsRef = db.collection(this.eventsDBPath);
    }

    getAll(): AngularFirestoreCollection<EventSubs> {
        return this.eventsRef;
    }

    create(Event: EventSubs): any {
        return this.eventsRef.add({ ...Event });
    }

    update(id: string, data: any): Promise<void> {
        return this.eventsRef.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.eventsRef.doc(id).delete();
    }
}