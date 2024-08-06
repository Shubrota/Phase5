export class Medicine {

    id: number = -1;

    name: string = "Combiflame";
    brand: string = "Combiflame";
    symptom: string = "Head ache";
 

    medicinebrand: string = "";
    medicinesymptom: string = "";
    medicineInStock:boolean=true;

    constructor(id: number =-1, medicineName: string, medicinebrand: string, medicinesymptom: string, medicineInStock:boolean=true) {
        this.id = id;
        this.name = medicineName;
        this.brand = medicinebrand;
        this.symptom = medicinesymptom;
        this.medicineInStock= medicineInStock;
    }

}
