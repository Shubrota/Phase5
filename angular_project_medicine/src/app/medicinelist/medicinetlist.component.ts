import { Component, OnInit } from '@angular/core';
import { Medicine } from '../model/medicine';
import { MedicineService } from '../service/Medicine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Medicinelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Medicinelist.component.html',
  styleUrl: './Medicinelist.component.css'
})
export class MedicinelistComponent implements OnInit {

  Medicines!: Medicine[];

  MedicineService!: MedicineService;

  constructor(MedicineService: MedicineService) {
    this.MedicineService = MedicineService;
  }


  ngOnInit(): void {
    this.Medicines = this.MedicineService.getAllMedicines();
  }

  deleteMedicine = (id:number ) => {    
    this.MedicineService.deleteMedicine(id);
    this.Medicines = this.MedicineService.getAllMedicines();
   }

  

}
