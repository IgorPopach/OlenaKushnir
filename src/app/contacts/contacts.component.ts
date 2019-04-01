import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  showLoginForm = false;
  confirm() {
    this.showLoginForm = !this.showLoginForm;
  }
  constructor() { }

  ngOnInit() {
  }

}
