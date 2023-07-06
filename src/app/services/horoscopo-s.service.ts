import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoSService {

  constructor(private _http:HttpClient) { }
  getTexHors(signo:string):Observable<any>{
   
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '7dc69b2486msh72a1eb21accdd1cp1bb989jsnea28cd9ab970',
      'X-RapidAPI-Host': 'horoscope-api.p.rapidapi.com'
    })
    }
    return this._http.get("https://horoscope-api.p.rapidapi.com/pt/"+signo,httpOption);
  }
} 
