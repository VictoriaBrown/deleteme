import { Component, OnInit } from '@angular/core';
import { Message } from '../../shared/models/message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model: Message = new Message();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
  }

}
