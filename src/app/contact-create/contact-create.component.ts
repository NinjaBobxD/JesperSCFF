import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../_services/contact.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact = {};

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactService.saveContact(this.contact).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/contact-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}