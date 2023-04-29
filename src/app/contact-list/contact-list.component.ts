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
  selectedContact? : Contact;


  display : boolean = false;
  editContactCheck : boolean = false;

  ngOnInit() : void{
    this.getContacts();
  }

  getContacts() : void{
    this.contacts = this.contactService.getContacts();
  }


  getContact(id : number) : void{
    this.selectedContact = this.contactService.getContact(id);
    this.editContactCheck = false;
    window.scrollTo(0, 0);
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
    this.selectedContact = undefined;
    this.editContactCheck = false;
  }

  
  idCounter : number = 6;

  addContact(fName : string, lName : string, phoneNumber : string, email : string) : void{
    this.idCounter++;
    var phoneNumberNum : number = Number(phoneNumber)
    if( phoneNumberNum <= 9999999999 && phoneNumberNum >= 1111111111){
      this.contactService.addContact(this.idCounter, fName, lName, phoneNumberNum, email);
      this.display = false;
    }
    else{
    }
  }
}
