import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit() {
    this?.form?.get('hideEmail')?.valueChanges.subscribe((value) => {
      this?.form?.get('email')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    this.formDataService.setFormData(this.form.value);
    alert('The form is valid');
    this.router.navigateByUrl('/aceuil');
  }

  changeValidatorOnClick() {
    if (this?.form?.get('hideEmail')?.value) {
      console.log('remove Validators');
      this?.form?.get('email')?.clearValidators();
      this?.form?.get('email')?.updateValueAndValidity();
    } else {
      console.log('setValidators');
      this?.form
        ?.get('email')
        ?.setValidators([Validators.required, Validators.email]);
      this?.form?.get('email')?.updateValueAndValidity();
    }
  }
}
