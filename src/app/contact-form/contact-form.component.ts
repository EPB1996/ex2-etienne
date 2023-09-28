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
      email: ['', [requiredIfValidator()]],
      comment: [''],
    });
  }

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
}

function requiredIfValidator() {
  return (formControl: any) => {
    if (!formControl.parent) {
      return null;
    }
    if (formControl.parent.get('hideEmail').value) {
      return null;
    }
    return Validators.required(formControl);
  };
}
