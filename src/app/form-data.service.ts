import { Injectable } from '@angular/core';
import { FormDataInterface } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formData: FormDataInterface | null = null;

  setFormData(data: FormDataInterface) {
    this.formData = data;
  }

  getFormData(): FormDataInterface | null {
    return this.formData;
  }
}
