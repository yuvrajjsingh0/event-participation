import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { EventT } from "../shared/event";

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private eventsDBPath = '/events';

    eventsRef: AngularFirestoreCollection<EventT>;

    constructor(private db: AngularFirestore) {
        this.eventsRef = db.collection(this.eventsDBPath);
    }

    getAll(): AngularFirestoreCollection<EventT> {
        return this.eventsRef;
    }

    create(Event: EventT): any {
        return this.eventsRef.add({ ...Event });
    }

    update(id: string, data: any): Promise<void> {
        return this.eventsRef.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.eventsRef.doc(id).delete();
    }
}