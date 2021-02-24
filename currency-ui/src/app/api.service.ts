import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }


  public GetCurrency(): Observable<any> {

      return this.http.get(API_URL).pipe(map(res => res));
    }


    public GetCurrencyExchange(url: any): Observable<any> {

      let params = new HttpParams();
      params = params.append('base', url);
    
        return this.http.get("https://api.exchangeratesapi.io/latest",{params:params}).pipe(map(res => res));
      }
}
