import {  HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrSService {

  constructor(private _http:HttpClient) { }
  getGenerar(texto:string):Observable<any>{
   
    let httpOption = {
      headers: new HttpHeaders({ 
    'X-RapidAPI-Key': '7dc69b2486msh72a1eb21accdd1cp1bb989jsnea28cd9ab970',
		'X-RapidAPI-Host': 'qrcode-generator-base64.p.rapidapi.com'

    })
    }
    return this._http.get("https://qrcode-generator-base64.p.rapidapi.com/qrcode?name="+texto,httpOption); 
  }
}
