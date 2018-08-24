import { Injectable } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from '../shared/models/contact';

// Importing Observable and Of from RxJS
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts: Contact[] = [
    {
      firstName: "Holley",
      lastName: "Highley",
      phoneNumber: '5129663300',
      email: 'holleyhighley@att.net'
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      phoneNumber: '5125870346',
      email: 'gaslogexpress@gmail.com'
    },
    {
      firstName: 'Brenden',
      lastName: 'Nightengale',
      phoneNumber: '8009515111',
      email: 'brendennightengale@protectamerica.com'
    }
  ];

  constructor() { }

  // getContacts returns Observable for an array of Contact objects
  // It uses of to to say it is going to return the array
  getContacts = (): Observable<Contact[]> => {
    return of(this.contacts);
  };
}
