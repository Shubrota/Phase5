package com.sl.app;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="medicine")
public class Medicine{

	@Id
	@GeneratedValue
	@Column(name="idMedicine")
	int Id;
	
	@Column(name="Medicine name")
	String medName;
	
	String MedicineBrand;	
	String MedicineSymptom;
	
	String sessionName;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getMedName() {
		return medName;
	}

	public void setMedName(String medName) {
		this.medName = medName;
	}

	public String getMedicineBrand() {
		return MedicineBrand;
	}

	public void setMedicineBrand(String medicineBrand) {
		MedicineBrand = medicineBrand;
	}

	public String getMedicineSymptom() {
		return MedicineSymptom;
	}

	public void setMedicineSymptom(String medicineSymptom) {
		MedicineSymptom = medicineSymptom;
	}

	public String getSessionName() {
		return sessionName;
	}

	public void setSessionName(String sessionName) {
		this.sessionName = sessionName;
	}
	

	

}

