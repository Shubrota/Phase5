export class Order {

    id: number = -1;

    name: string = "Combiflame";
    prescription: string = "Combiflame";
    strips: string = "1";
    price:string="10"
 

    TransactionMedicine: string = "";
    TransactionPrescription: string = "";
    Transactionstripsno:string="";
    TransactionPrice:string="";

    constructor(id: number =-1, TransactionMedicine: string, TransactionPrescription: string, Transactionstripsno: string, TransactionPrice:string) {
        this.id = id;
        this.name = TransactionMedicine;
        this.prescription = TransactionPrescription;
        this.strips = Transactionstripsno;
        this.price = TransactionPrice;
        
    }

}
