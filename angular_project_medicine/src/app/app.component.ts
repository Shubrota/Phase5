import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MedicinelistComponent } from './medicinelist/medicinetlist.component';
import { AddMedicineComponent } from './addMedicine/addMedicine.component';
import { MedicinelistV1Component } from './Medicinelist-v1/Medicinelist-v1.component';
import { AddMedicineV1Component } from './addMedicine-v1/addMedicine-v1.component';
import { NosuchpathComponent } from './nosuchpath/nosuchpath.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MedicinelistComponent, AddMedicineComponent,
     MedicinelistV1Component,
    AddMedicineV1Component, NosuchpathComponent],
    providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_with_service_routing';
  today:Date = new Date();

  constructor(private datePipe: DatePipe) {}
}
