import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { contacts } from './initial-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contactsList : Contact[] = contacts;

  editContact : boolean = false;

  getContacts() : Contact[]{
    return this.contactsList;
  }

  nullContact : Contact = {id : 0, firstName : 'Unknown', lastName : 'Unknown', phoneNumber : 1111111111, email : 'unknown@gmail.com'};

  getContact(id : number) : Contact{
    if( id >= 1 && id <= this.contactsList.length){
      for (let contact of this.contactsList){
        if( contact.id == id ){
          return contact;
        }
      }
    }
    return this.nullContact;
  }

  counter : number = 0;

  deleteContact(id : number) : void{
    this.counter = 0;
    for( let i of this.contactsList){
      if( i.id == id){
        this.contactsList.splice(this.counter, 1)
      }

      this.counter++;
    }
  }
}
