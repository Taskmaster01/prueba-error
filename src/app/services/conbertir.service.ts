import { Injectable } from '@angular/core';
// Importamos los componentes que vamos a usar
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConbertirService {

  constructor(private _http: HttpClient) { }
    public getCambio(from_value:string,from_type:string,to_type:string): Observable<any> {
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '7dc69b2486msh72a1eb21accdd1cp1bb989jsnea28cd9ab970',
		'X-RapidAPI-Host': ''//'community-neutrino-currency-conversion.p.rapidapi.com'
 
      }),
    }
    const body =new HttpParams()
    .set('from-value',from_value)
    .set('from-type',from_value)
    .set('to_type', to_type)
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
  }

}
