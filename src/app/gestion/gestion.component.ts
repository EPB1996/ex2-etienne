import { Component } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { ContactData } from '../model/model';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {
  formData: ContactData | null = null;

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();
    console.log(this.formData)
  }
}
