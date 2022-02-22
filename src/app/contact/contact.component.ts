import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contactModel = new ContactForm('', '', '')
  link : any = "";
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.link = 'mailto:shaan.idtindia@gmail.com?subject='+this.contactModel.subject+'&body='+this.contactModel.message
  }

  // mailMe(){
  //   this.mailText = "mailto:abc@abc.com+?subject=files&body="+this.links.join(" ,"); // add the links to body

  // }

  onClick(){
    window.location.href = this.link;
  }

}
