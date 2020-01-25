import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs';
import { Usertype } from '../../Usertype';
import { CountryOrderData } from '../../@core/data/country-order';

@Injectable()
export class TBService {
	 token: string;
user:Usertype;
	 constructor(private http: HttpClient, private authService: NbAuthService) {

		this.authService.getToken()
			.subscribe((token: NbAuthJWTToken) => {
				if (token.isValid()) {
					this.token = 'Bearer ' + token.getValue();
					this.user = token.getPayload();
					console.log(this.user.sub);
				}
			});
	 }
	 addNewCustomer(name: string, telephone: string,
		anotherTelephone: string, address: string): Observable<any> {
		return this.http.post<any>('http://127.0.0.1:8081/addCustomer', {
			'name': name,
			'telephone': telephone,
			'anotherTelephone': anotherTelephone,
			'address': address,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token},
			});
	}
	Dsell(Gram_Type: string, Details: string,
		weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
		No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/Dirctsell', {
			'Gram_Type': Gram_Type,
			'Details': Details,
			'weight': weight,
			'Payment': Payment,	'gram_card_price': gram_card_price,
			'gram_cash_price': gram_cash_price,
			'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}
	updatesSaveWhenDebtpurshace(Gram_Type: string, dept_grams: string,
		Payment: string, No_Of_grams_Paid_card: string,weight:string,No_Of_grams_Paid_cash:string,gram_cash_price:string,gram_card_price:string): Observable<any> {
			console.log("Gram_Type="+Gram_Type);
			console.log("dept_grams="+dept_grams);
			console.log("Payment="+Payment);
			console.log("No_Of_grams_Paid_card="+No_Of_grams_Paid_card);
			console.log("weight="+weight);
			console.log("No_Of_grams_Paid_cash="+No_Of_grams_Paid_cash);
			console.log("gram_cash_price="+gram_cash_price);
			console.log("gram_card_price="+gram_card_price);
		
			return this.http.post<any>('http://127.0.0.1:8081/updatesSaveWhenDebtpurshace', {
			'Gram_Type': Gram_Type,
			'dept_grams': dept_grams,
			'weight':weight,
			'Payment': Payment,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'No_Of_grams_Paid_cash':No_Of_grams_Paid_cash,
			'gram_card_price':gram_card_price,
			'gram_cash_price':gram_cash_price,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	updatesSaveWhenDirctsell(Gram_Type: string, Details: string,
		weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
		No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/updatesSaveWhenDirctsell', {
			'Gram_Type': Gram_Type,
			'Details': Details,
			'weight': weight,
			'Payment': Payment,	'gram_card_price': gram_card_price,
			'gram_cash_price': gram_cash_price,
			'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}
	updatesSaveWhenDebtSell(Gram_Type: string, dept_grams: string,
		Payment: string, No_Of_grams_Paid_card: string,weight:string,No_Of_grams_Paid_cash:string,gram_cash_price:string,gram_card_price:string): Observable<any> {
		return this.http.post<any>('http://127.0.0.1:8081/updatesSaveWhenDebtSell', {
			'Gram_Type': Gram_Type,
			'dept_grams': dept_grams,
			'weight':weight,
			'Payment': Payment,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'No_Of_grams_Paid_cash':No_Of_grams_Paid_cash,
			'gram_card_price':gram_card_price,
			'gram_cash_price':gram_cash_price,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	updatesSaveWhenDerctbuy(Gram_Type: string, Details: string,
		weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
		No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/updatesSaveWhenDerctbuy', {
			'Gram_Type': Gram_Type,
			'Details': Details,
			'weight': weight,
			'Payment': Payment,	
			'gram_card_price': gram_card_price,
			'gram_cash_price': gram_cash_price,
			'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			
			});
	}
	Dpurchase(Gram_Type: string, Details: string,
		weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
		No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/Dirctspurchase', {
			'Gram_Type': Gram_Type,
			'Details': Details,
			'weight': weight,
			'Payment': Payment,	'gram_card_price': gram_card_price,
			'gram_cash_price': gram_cash_price,
			'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}
	

	debt(customer_id: string, dept_grams: string,
		gram_cash_price: string, gram_card_price: string,weight:string,duedate:Number): Observable<any> {
		return this.http.post<any>('http://127.0.0.1:8081/Debt', {
			'customer_id': customer_id,
			'dept_grams': dept_grams,
			'weight':weight,
			'gram_cash_price': gram_cash_price,
			'gram_card_price': gram_card_price,
			'date':new Date().getTime(),
			'duedate':duedate,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token},
			});
	}
	debtpurchase(customer_id: string, dept_grams: string,
		gram_cash_price: string, gram_card_price: string,weight:string,duedate:Number): Observable<any> {
		return this.http.post<any>('http://127.0.0.1:8081/Debtpurchase', {
			'customer_id': customer_id,
			'dept_grams': dept_grams,
			'weight':weight,
			'gram_cash_price': gram_cash_price,
			'gram_card_price': gram_card_price,
			'date':new Date().getTime(),
			'duedate':duedate,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	addNewpaymentCustomer(id: string, no_of_grams: string,
		cash_paid: string, card_paid: string,remaning:string,duedate:Number): Observable<any> {
		
		return this.http.post<any>('http://127.0.0.1:8081/postdebtdetailsbyid', {
			'id': id,
			'no_of_grams': no_of_grams,
			'cash_paid': cash_paid,
			'card_paid': card_paid,
			'date':new Date().getTime(),
			'duedate':duedate,
			'remaning':remaning,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	updatesSaveWhendebtpaid(id: string, no_of_grams: string,
		cash_paid: string, card_paid: string,remaning:string,duedate:Number): Observable<any> {
		
		return this.http.post<any>('http://127.0.0.1:8081/updatesSaveWhendebtpaid', {
			'id': id,
			'no_of_grams': no_of_grams,
			'cash_paid': cash_paid,
			'card_paid': card_paid,
			'date':new Date().getTime(),
			'duedate':duedate,
			'remaning':remaning,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	updatesSaveWhenpurshaseloanpaid(id: string, no_of_grams: string,
		cash_paid: string, card_paid: string,remaning:string,duedate:Number): Observable<any> {
		
		return this.http.post<any>('http://127.0.0.1:8081/updatesSaveWhenpurshaseloanpaid', {
			'id': id,
			'no_of_grams': no_of_grams,
			'cash_paid': cash_paid,
			'card_paid': card_paid,
			'date':new Date().getTime(),
			'duedate':duedate,
			'remaning':remaning,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	addNewdebtpaymentforCustomer(id: string, no_of_grams: string,
		cash_paid: string, card_paid: string,remaning:string,duedate:Number): Observable<any> {
		
		return this.http.post<any>('http://127.0.0.1:8081/postdebtpdetailsbyid', {
			'id': id,
			'no_of_grams': no_of_grams,
			'cash_paid': cash_paid,
			'card_paid': card_paid,
			'date':new Date().getTime(),
			'duedate':duedate,
			'remaning':remaning,
			'employee_in_charge':this.user.sub
			
		}, {
				headers: {'Authorization':this.token
				},
			});
	}
	getdebt(): Observable<any> {
		return this.http.get<any>('http://127.0.0.1:8081/getdebt',{headers: {'Authorization':this.token}});
	}
	getdebtpurchase(): Observable<any> {
		return this.http.get<any>('http://127.0.0.1:8081/getdebtpurchase',{headers: {'Authorization':this.token}});
	}
	getdebtdetails(id:any): Observable<any> {
		return this.http.get<any>('http://127.0.0.1:8081/getdebtpaymentdetailsbyid/'+id,{headers: {'Authorization':this.token}});
	}
	getdebtforcustomer(id:any): Observable<any> {
		return this.http.get<any>('http://127.0.0.1:8081/getdebtforcustomer/'+id,{headers: {'Authorization':this.token}});
	}
	getdebtpurchasepaymentdetailsbyid(id:any): Observable<any> {
		return this.http.get<any>('http://127.0.0.1:8081/getdebtpurchasepaymentdetailsbyid/'+id,{headers: {'Authorization':this.token}});
	}

	findcreditforcustomer(id:any): Observable<any> {
		return this.http.get<any>('http://127.0.0.1:8081/findcreditforcustomer/'+id,{headers: {'Authorization':this.token}});
	}
	getCustomers(): Observable<any> {
		console.log("request", this.http.get<any>('http://127.0.0.1:8081/findCustomer',{headers: {'Authorization':this.token}}));
		
		return this.http.get<any>('http://127.0.0.1:8081/findCustomer',{headers: {'Authorization':this.token}});
	}
	getsave(): Observable<any> {
		console.log("request", this.http.get<any>('http://127.0.0.1:8081/getSaveinfo',{headers: {'Authorization':this.token}}));
		
		return this.http.get<any>('http://127.0.0.1:8081/getSaveinfo',{headers: {'Authorization':this.token}});
	}
	getHD(): Observable<any> {
		console.log("request", this.http.get<any>('http://127.0.0.1:8081/getHD',{headers: {'Authorization':this.token}}));
		
		return this.http.get<any>('http://127.0.0.1:8081/getHD',{headers: {'Authorization':this.token}});
	}
	addHD(type: string,country:string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/addHD', {
			'type': type,
			'country':country,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}
	DsellHD(id: string,amount:string, 
		cashpaid: string, cardpaid: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/DsellHD', {
			'hcid': id,
			'amount':amount,
			'cashpaid':cashpaid,
			'cardpaid':cardpaid,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
		}
		DbuyHD(id: string,amount:string, 
			cashpaid: string, cardpaid: string): Observable<any> {
			console.log("direct sell employee in charge"+this.user.sub)
				return this.http.post<any>('http://127.0.0.1:8081/DbuyHD', {
				'hcid': id,
				'amount':amount,
				'cashpaid':cashpaid,
				'cardpaid':cardpaid,
				'date':new Date().getTime(),
				'employee_in_charge':this.user.sub
				}, {
					headers: {'Authorization':this.token},
				});
			}

	updatesavewhenDsellHD(cashpaid: string, cardpaid: string): Observable<any> {
		console.log("direct HD sell pppppp employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/updatesavewhenDsellHD', {
				'cashpaid':cashpaid,
				'cardpaid':cardpaid,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}
	updatesavewhenDbuyHD(cashpaid: string, cardpaid: string): Observable<any> {
		console.log("direct HD sell pppppp employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/updatesavewhenDbuyHD', {
				'cashpaid':cashpaid,
				'cardpaid':cardpaid,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}

	updateHdamountwhenDsell(id: string, amount: string): Observable<any> {
		console.log("updateHdamountwhenDsell"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/updateHdamountwhenDsell', {
				'hcid':id,
				'amount':amount,
			}, {
				headers: {'Authorization':this.token},
			});
	}

	updateHdamountwhenDbuy(id: string, amount: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/updateHdamountwhenDbuy', {
				'hcid':id,
				'amount':amount,
			}, {
				headers: {'Authorization':this.token},
			});
	}



	DpurchaseHD(type: string,amount:string, payment: string,
		cashprice: string, cardprice: string,paid:string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/Dirctsell', {
			'type': type,
			'amount':amount,
			'paid':paid,
			'cashprice': cashprice,
			'cardprice': cardprice,
			
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
		}

	updatesavewhenDpurchaseHD(type: string, Details: string,
		weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
		No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
		console.log("direct sell employee in charge"+this.user.sub)
			return this.http.post<any>('http://127.0.0.1:8081/Dirctsell', {
			'type': type,
			'Details': Details,
			'weight': weight,
			'Payment': Payment,
			'gram_card_price': gram_card_price,
			'gram_cash_price': gram_cash_price,
			'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
			'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
			'date':new Date().getTime(),
			'employee_in_charge':this.user.sub
			}, {
				headers: {'Authorization':this.token},
			});
	}
	// DebtpurchaseHHD(Gram_Type: string, Details: string,
	// 	weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
	// 	No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
	// 	console.log("direct sell employee in charge"+this.user.sub)
	// 		return this.http.post<any>('http://127.0.0.1:8081/Dirctsell', {
	// 		'Gram_Type': Gram_Type,
	// 		'Details': Details,
	// 		'weight': weight,
	// 		'Payment': Payment,	'gram_card_price': gram_card_price,
	// 		'gram_cash_price': gram_cash_price,
	// 		'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
	// 		'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
	// 		'date':new Date().getTime(),
	// 		'employee_in_charge':this.user.sub
	// 		}, {
	// 			headers: {'Authorization':this.token},
	// 		});
	// }
	// updatesavewhenDebtpurchaseHHD(Gram_Type: string, Details: string,
	// 	weight: string, Payment: string, gram_card_price: string, gram_cash_price: string,
	// 	No_Of_grams_Paid_cash: string, No_Of_grams_Paid_card: string): Observable<any> {
	// 	console.log("direct sell employee in charge"+this.user.sub)
	// 		return this.http.post<any>('http://127.0.0.1:8081/Dirctsell', {
	// 		'Gram_Type': Gram_Type,
	// 		'Details': Details,
	// 		'weight': weight,
	// 		'Payment': Payment,	'gram_card_price': gram_card_price,
	// 		'gram_cash_price': gram_cash_price,
	// 		'No_Of_grams_Paid_cash': No_Of_grams_Paid_cash,
	// 		'No_Of_grams_Paid_card': No_Of_grams_Paid_card,
	// 		'date':new Date().getTime(),
	// 		'employee_in_charge':this.user.sub
	// 		}, {
	// 			headers: {'Authorization':this.token},
	// 		});
	// }
}