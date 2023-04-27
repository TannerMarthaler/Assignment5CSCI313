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
    if( id >= 0 ){
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

  addContact(id : number, fName : string, lName : string, phoneNumber : number, email : string) : void{
    this.contactsList.push({id : id, firstName : fName, lastName : lName, phoneNumber : phoneNumber, email : email})
  }

  contactEdit(id : number, fName : string, lName : string, phoneNumber : number, email : string) : void{
    var index : number = 0;

    for( let i = 0; i < this.contactsList.length; i++ ){
      if( this.contactsList[i].id == id ){
        index = i;
        break;
      }
    }


    if( fName != '' ){
      this.contactsList[index].firstName = fName;
    }
    if( lName != '' ){
      this.contactsList[index].lastName = lName;
    }
    if( phoneNumber != 0 ){
      this.contactsList[index].phoneNumber = phoneNumber;
    }
    if( email != '' ){
      this.contactsList[index].email = email;
    }
  }
}
