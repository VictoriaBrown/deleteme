import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact';
import { ContactServiceService } from '../../services/contact-service.service';

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit {
  contacts: Contact[];
  model: Contact = new Contact();

  constructor(private contactServiceService: ContactServiceService) {
    this.contacts= contactServiceService.contacts;
  }
  
  // ngOnInit gets the data from service, calling the function of getContacts that gives us an
  // observable that this component subscribes to
  // Because it is subscribed, it passes a callback that updates local contacts with the results
  // This should be run anytime data changes, so that this component can continually update
  // itself with the new data
  // Currently, with how this app is built, this will only becalled one time since the service is
  // using static mock data
  ngOnInit() {
    this.contactServiceService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
  }

}
