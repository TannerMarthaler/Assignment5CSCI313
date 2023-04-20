import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { contacts } from './initial-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contactsList : Contact[] = contacts;

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
}
