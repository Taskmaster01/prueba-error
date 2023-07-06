import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortalSService {

  constructor(private _http:HttpClient) { }
  public getPort(id: Number):Observable <any>{//id: Number entre el parentecis
    const httpOption = {//cambie let por const
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '7dc69b2486msh72a1eb21accdd1cp1bb989jsnea28cd9ab970',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    })
    }
    return this._http.get("https://deezerdevs-deezer.p.rapidapi.com/track/"+id,httpOption);
  }
}
