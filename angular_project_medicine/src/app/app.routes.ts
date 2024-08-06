import { Routes } from '@angular/router';
import { MedicinelistV1Component } from './Medicinelist-v1/Medicinelist-v1.component';
import { AddMedicineV1Component } from './addMedicine-v1/addMedicine-v1.component';
import { MedicineV1Component } from './Medicine-v1/Medicine-v1.component';
import { NosuchpathComponent } from './nosuchpath/nosuchpath.component';
import { UpdateMedicineComponent } from './updatemedicine/updatemedicine.component';

export const routes: Routes = [

    { path: 'add-Medicine', component: AddMedicineV1Component },
    { path: 'list-Medicines', component: MedicinelistV1Component },
    { path: 'Medicine/:MedicineId', component: MedicineV1Component },
    { path: 'update-Medicine/:MedicineId', component: UpdateMedicineComponent },
    { path: '**', component: NosuchpathComponent },
];
