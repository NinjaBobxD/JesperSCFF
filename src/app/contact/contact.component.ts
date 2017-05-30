import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   contacts: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContactList();
  }

  getContactList() {
    this.contactService.getAllContacts().then((res) => {
      this.contacts = res;
    }, (err) => {
      console.log(err);
    });
  }

  

}