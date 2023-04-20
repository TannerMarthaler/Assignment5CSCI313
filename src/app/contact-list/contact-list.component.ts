import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  constructor(private contactService : ContactService){}

  ngOnInit() : void{
    this.getContacts();
  }

  getContacts() : void{
    this.contacts = this.contactService.getContacts();
  }

  selectedContact? : Contact;

  getContact(id : number) : void{
    this.selectedContact = this.contactService.getContact(id);
  }


  contacts : Contact[] = [];

  display : boolean = false;

  displayForm() : void{
    this.display = true;
  }

  closeForm() : void{
    this.display = false;
  }

  something : string = "";
  output : string = "";

  formatNumber(num : number) : string{
    this.something = String(num);
    this.output = '(' + this.something.substring(0, 2) + ')-' + this.something.substring(3, 5) + '-' + this.something.substring(6, 9);
    return this.output;
  }
}
