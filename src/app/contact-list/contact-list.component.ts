import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService : ContactService){}

  contacts : Contact[] = [];
  formatedPhoneNumbers : string[] = [];

  display : boolean = false;

  ngOnInit() : void{
    this.getContacts();
    // this.contacts.forEach(contact => {
    //   this.formatedPhoneNumbers.push(this.formatNumber(contact.phoneNumber))
    // });
  }

  getContacts() : void{
    this.contacts = this.contactService.getContacts();
  }

  selectedContact? : Contact;

  getContact(id : number) : void{
    this.selectedContact = this.contactService.getContact(id);
  }



  displayForm() : void{
    this.display = true;
  }

  closeForm() : void{
    this.display = false;
  }

  something : string = "";
  output : string = "";

  formatNumber(id : number) : string{
    this.something = String(this.contacts[id].phoneNumber);
    this.output = '(' + this.something.substring(0, 2) + ')-' + this.something.substring(3, 5) + '-' + this.something.substring(6, 9);
    return this.output;
  }
}
