import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private contactService : ContactService ){}

  topContacts : Contact[] = [];
  time : string = '';
  dt : Date = new Date();
  morningCheck : boolean = false;

  ngOnInit(){
    this.topContacts = this.contactService.getContacts();
    this.time = Date().toLocaleUpperCase();
    this.time = this.dt.toLocaleString()
    this.checkTime();
  }

  checkTime() : void {
    var hour = Number(this.dt.toLocaleTimeString().slice(0, 2));
    if( hour <= 12 ){
      this.morningCheck = true;
    }
    else{
      this.morningCheck = false;
    }
  }

}
