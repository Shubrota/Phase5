import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicineService } from '../service/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'medicine',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class AddMedicineComponent {

  medicineForm!: FormGroup;
  MedicineService!: MedicineService;
  fb!: FormBuilder;

  router: Router;

  constructor(router: Router, medicineService: MedicineService, fb: FormBuilder, ) {
    this.MedicineService = medicineService;
    this.fb =fb;
    this.router=router;
    
    this.medicineForm = this.fb.group(
      {
        medicineName: ['', [Validators.required, Validators.minLength(3)]],
        medicinebrand: ['', [Validators.required, Validators.minLength(3)]],
        medicinesymptom: ['', [Validators.required, Validators.minLength(3)]]
      }
    );
  }

  addMedicine= ():void =>  {
    let name=this.medicineForm.value.medicineName;
    let brand = this.medicineForm.value.medicinebrand;
    let symptom = this.medicineForm.value.medicinesymptom;
    
    this.MedicineService.addmedicine(name,brand,symptom).subscribe(
      result => this.router.navigate(['/list-medicines']),
      error => console.error('Error adding medicine:', error)
    );

  }

}

/*
ng g c addMedicine
html file same as in addmedicine
ts File, use MedicineService
*/
