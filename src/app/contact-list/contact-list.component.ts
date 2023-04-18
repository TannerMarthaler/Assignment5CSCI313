import { Component } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {


  testContact : Contact = {
    firstName : 'Tanner',
    lastName : 'Marthaler',
    phoneNumber : 3203394356,
    email : 'tannermarthaler@gmail.com'
  };

  testContact2 : Contact = {
    firstName : 'Bob',
    lastName : 'Riley',
    phoneNumber : 3333334444,
    email : 'bobriley@gmail.com'
  };

  contacts : Contact[] = [this.testContact, this.testContact2];

}
