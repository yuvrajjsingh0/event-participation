export interface EventSubs {
    id: string;
    eventId: string;
    paidBy: string;
    persons: Array<Person>;
}

export interface Person {
    name: string;
    email: string;
    course: string;
  }