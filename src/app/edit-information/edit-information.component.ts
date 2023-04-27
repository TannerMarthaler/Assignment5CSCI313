import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent {
  constructor(private contactService : ContactService){}

  @Input() contact? : Contact;
  @Output() cancelEditCheck = new EventEmitter<boolean>();

  cancelEdit() : void{
    this.cancelEditCheck.emit(false)
  }

  submitChanges(newFName : string, newLName : string, newPhoneNumber : string, newEmail : string) : void{
    var phoneNumberSubmit : number;
    if( newPhoneNumber != '' ){
      phoneNumberSubmit = Number(newPhoneNumber);
      if( !(phoneNumberSubmit <= 9999999999 && phoneNumberSubmit >= 1111111111) ){
        phoneNumberSubmit = 0;
      }
    }
    else{
      phoneNumberSubmit = 0;
    }
    this.contactService.contactEdit(this.contact!.id, newFName, newLName, phoneNumberSubmit, newEmail);
    this.cancelEditCheck.emit(false)
  }
}
