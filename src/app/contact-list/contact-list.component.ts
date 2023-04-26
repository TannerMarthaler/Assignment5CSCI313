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
  editContactCheck : boolean = false;

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
    this.editContactCheck = false;
  }



  displayForm() : void{
    this.display = true;
    setTimeout(() => 
      { window.scrollTo(0, document.body.scrollHeight); }, 5
    );
    
  }

  closeForm() : void{
    this.display = false;
  }

  changeContactCheck() : void{
    this.editContactCheck = true;
  }

  cancelContactCheck() : void{
    this.editContactCheck= false;
  }

  deleteContact(id : number): void{
    this.contactService.deleteContact(id);
  }
}
