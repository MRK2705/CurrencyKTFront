import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCurrencyDto} from "../dto/response.currency.dto";
import {environment} from "../../environments/environment";
import {ChangeDto} from "../dto/change.dto";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }

  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto>{
    return this.http.get<ResponseCurrencyDto>(`${environment.API_URL}/api/v1/currency/obtain?from=${from}&to=${to}&amount=${amount}`);
  }

  public getChangesList(): Observable<any>{
    return this.http.get<any>(`${environment.API_URL}/api/v1/currency/list?page=0&size=10`);
  }

}
