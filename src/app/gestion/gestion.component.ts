import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { FormDataInterface } from '../model/model';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {
  formData: FormDataInterface | null = null;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }
}
