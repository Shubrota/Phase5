import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../service/medicine.service';
import { Medicine } from '../model/medicine';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'updateMedicine',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './updateMedicine.component.html',
  styleUrl: './updateMedicine.component.css'
})
export class UpdateMedicineComponent {

  MedicineForm!: FormGroup;
  MedicineV1Service!: MedicineV1Service;
  fb!: FormBuilder;

  Medicine!:Medicine;

  router: Router;
  route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute, MedicineService: MedicineV1Service, fb: FormBuilder, ) {
    this.MedicineV1Service = MedicineService;
    this.fb =fb;
    this.route=route; 
    this.router=router;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(

      params => {
        const MedicineId = params.get('MedicineId');

        if (MedicineId !== null) {
          this.MedicineV1Service.getMedicine(Number(MedicineId)).subscribe(
            prod => {
              this.Medicine = prod;
              this.MedicineForm = this.fb.group(
                {
                  MedicineName: [this.Medicine.name, [Validators.required, Validators.minLength(3)]],
                  MedicinePrice: [this.Medicine.price, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.max(100000)]],
                  MedicineImage: [this.Medicine.MedicineImage]
                }
              );             
            },

            err => console.log(err)
          );
        }

      }
    );
  }

  updateMedicine= ():void =>  {
    let name=this.MedicineForm.value.MedicineName;
    let price = this.MedicineForm.value.MedicinePrice;
    let image = this.MedicineForm.value.MedicineImage ;
    this.MedicineV1Service.updateMedicine(this.Medicine.id,name,price,image).subscribe(
      result => this.router.navigate(['/list-Medicines']),
      error => console.error('Error adding Medicine:', error)
    );

  }


}
