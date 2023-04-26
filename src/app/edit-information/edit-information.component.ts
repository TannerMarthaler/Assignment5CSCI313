import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact'

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent {
  @Input() contact? : Contact;
  @Output() cancelEditCheck = new EventEmitter<boolean>();

  cancelEdit() : void{
    this.cancelEditCheck.emit(false)
  }

}
