import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private formDataService: FormDataService,private router: Router) {}

  public formData = {
    firstName: '',
    lastName: '',
    age: null,
    hideEmail: false,
    email: '',
    comment: '',
  };

  onSubmit() {
    this.formDataService.setFormData(this.formData);
    alert('The form is valid');
    this.router.navigateByUrl("/aceuil")
  }
}
