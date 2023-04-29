import { Component, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';
import { Input, Output } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {

  constructor(private contactService : ContactService){}

  @Input() contact? : Contact;
  @Output() editContact = new EventEmitter<boolean>();

  editInfo() : void{
    this.editContact.emit(true);
  }

  close() : void{
    this.contact = undefined;
  }
}
