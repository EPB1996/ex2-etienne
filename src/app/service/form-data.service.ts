import { Injectable } from '@angular/core';
import { ContactData } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formData: ContactData | null = null;

  setFormData(data: ContactData) {
    this.formData = data;
  }

  getFormData(): ContactData | null {
    return this.formData;
  }
}
