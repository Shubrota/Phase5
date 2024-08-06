package com.sl.app;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="transaction")
public class Order{

	@Id
	@GeneratedValue
	@Column(name="idTransaction")
	int tranId;
	
	@Column(name="TransactionMedicine")
	String medName;
	
	String TransactionPrescription;	
	String Transactionstripsno;
	String TransactionPrice;	
	String sessionName;
	public int getTranId() {
		return tranId;
	}
	public void setTranId(int tranId) {
		this.tranId = tranId;
	}
	public String getMedName() {
		return medName;
	}
	public void setMedName(String medName) {
		this.medName = medName;
	}
	public String getTransactionPrescription() {
		return TransactionPrescription;
	}
	public void setTransactionPrescription(String transactionPrescription) {
		TransactionPrescription = transactionPrescription;
	}
	public String getTransactionstripsno() {
		return Transactionstripsno;
	}
	public void setTransactionstripsno(String transactionstripsno) {
		Transactionstripsno = transactionstripsno;
	}
	public String getTransactionPrice() {
		return TransactionPrice;
	}
	public void setTransactionPrice(String transactionPrice) {
		TransactionPrice = transactionPrice;
	}
	public String getSessionName() {
		return sessionName;
	}
	public void setSessionName(String sessionName) {
		this.sessionName = sessionName;
	}

	

}

