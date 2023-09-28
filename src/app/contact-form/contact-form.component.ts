import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  form: FormGroup;

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      hideEmail: [false],
      email: ['', [Validators.email]],
      comment: [''],
    });
  }
  /* public formData = {
    firstName: '',
    lastName: '',
    age: null,
    hideEmail: false,
    email: '',
    comment: '',
  }; */

  onSubmit() {
    this.formDataService.setFormData(this.form.value);
    alert('The form is valid');
    this.router.navigateByUrl('/aceuil');
  }
}

function conditionalRequiredValidator(
  checkboxControlName: string
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const checkbox = control.get(checkboxControlName);
    const field = control.get("email"); // Replace 'controlName' with the name of the form control to be conditionally required

    if (checkbox && checkbox.value && !field?.value) {
      return { conditionalRequired: true };
    }

    return null;
  };
}
