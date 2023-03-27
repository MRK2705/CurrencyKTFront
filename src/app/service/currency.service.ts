import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCurrencyDto} from "../dto/response.currency.dto";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  // @ts-ignore
  BACK_URL = environment.API_URL;
  constructor(private http: HttpClient) {

  }

  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto>{
    console.log("BACK_URL: " + this.BACK_URL);
    return this.http.get<ResponseCurrencyDto>(`${this.BACK_URL}/api/v1/currency/obtain?from=${from}&to=${to}&amount=${amount}`);
    // return this.http.get<ResponseCurrencyDto>(`http://localhost:8080/api/v1/currency/obtain?from=${from}&to=${to}&amount=${amount}`);
  }

  public getChangesList(): Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/currency/list?page=0&size=10`);
    // return this.http.get<any>(`http://localhost:8080/api/v1/currency/list?page=0&size=10`);
  }

}
