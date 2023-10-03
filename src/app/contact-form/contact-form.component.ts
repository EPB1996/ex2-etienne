import { Component } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactData } from '../model/model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    hideEmail: [false],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required],
  });

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    if (this.form.valid) {
      const newContactData: ContactData = this.form.value;
      this.formDataService.setFormData(newContactData);
      alert('The form is valid');
      this.router.navigateByUrl('/aceuil');
    } else {
      alert('Something went wrong with the validation.');
    }
  }

  changeValidatorOnClick() {
    if (this?.form?.get('hideEmail')?.value) {
      this?.form?.get('email')?.clearValidators();
      this?.form?.get('email')?.updateValueAndValidity();
    } else {
      this?.form
        ?.get('email')
        ?.setValidators([Validators.required, Validators.email]);
      this?.form?.get('email')?.updateValueAndValidity();
    }
  }
}
