import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuccessOrder } from 'src/app/utils/Models/SuccessOrder';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private cors_http = "https://cors-anywhere.herokuapp.com/";
  private url_test = `${this.cors_http}http://82.253.71.109/prod/bdc_v11_04/api/index.php`;
  private url = `http://82.253.71.109/prod/bdc_v11_04/api/index.php`;
  private DOLAPIKEY = "3-8-13-12-7-8-24-8";

  constructor(private http: HttpClient) { }

  limitForm = new FormGroup({
    limit: new FormControl('25')
  });

  getOrders(value): Observable<SuccessOrder>{
    console.log("url : ", this.url_test+`/edisuiviapi/orders/of-user?socId=${value.socId}&status_mode=${value.status_mode}&sortfield=${value.sortfield}&sortorder=${value.sortorder}&limit=${value.limit}&page=${value.page}&DOLAPIKEY=${this.DOLAPIKEY}`);
    return this.http.get<SuccessOrder>(this.url_test+`/edisuiviapi/orders/of-user?socId=${value.socId}&status_mode=${value.status_mode}&sortfield=${value.sortfield}&sortorder=${value.sortorder}&limit=${value.limit}&page=${value.page}&DOLAPIKEY=${this.DOLAPIKEY}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  getOrderById(id): Observable<any>{
    console.log("url : ", this.url_test+`/orders/${id}?contact_list=1&DOLAPIKEY=${this.DOLAPIKEY}`);
    // return this.http.get<any>(this.url_test+`/orders/${id}?contact_list=1&DOLAPIKEY=${this.DOLAPIKEY}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    return this.http.get<any>(`${this.cors_http}http://82.253.71.109/prod/bdc_v11_04/api/index.php/orders/672?contact_list=1&DOLAPIKEY=${this.DOLAPIKEY}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

  }

}
