import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  endpoint: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createContactForm();
  }

  ngOnInit() {
    this.endpoint = 'https://www.demyfil.com/sendemail.php';
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      email: [''],
      name: [''],
      firstname: [''],
      message: ['']
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value);
    if (this.contactForm.value.email) {
      this.sendMail(JSON.stringify(this.contactForm.value));
      this.contactForm.reset();
    } else {
    }
  }

  sendMail(email: any) {
    if (this.contactForm.valid) {
      this.http.post(this.endpoint, email);
    }
  }
}
