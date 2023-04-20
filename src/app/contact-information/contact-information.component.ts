import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Input } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {

  constructor(private contactService : ContactService){}

  @Input() contact? : Contact;


}
