import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Places for the routes to go
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactInformationComponent } from './contact-information/contact-information.component'

const routes : Routes = [
  { path : '', component : HomeComponent },
  { path : 'contact-list', component : ContactListComponent },
  { path : 'contact-information/:id', component : ContactInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
