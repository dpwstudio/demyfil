import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  devisForm: FormGroup;
  endpoint: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createDevisForm();
  }

  ngOnInit() {
    this.endpoint = "https://www.demyfil.com/senddevis.php";
  }

  createDevisForm() {
    this.devisForm = this.formBuilder.group({
      email: [""],
      name: [""],
      entreprise: [""],
      typeEntreprise: [""],
      address: [""],
      cp: [""],
      phone: [""],
      country: [""],
      detail: [""]
    });
  }

  onSubmit() {
    console.log("Your form data : ", this.devisForm.value);
    if(this.devisForm.value.email){
      this.sendMail(JSON.stringify(this.devisForm.value));
      this.devisForm.reset();
    } else {
    }
  }

  sendMail(email: any) {
    if (this.devisForm.valid) {
      this.http.post(this.endpoint, email);
    }
  }

}
