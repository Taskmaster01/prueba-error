import { Component, OnInit } from '@angular/core';
import { HoroscopoSService } from 'src/app/services/horoscopo-s.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  constructor( private servicio:HoroscopoSService){}
signoel!:string;
textsi!:string;
datesi!:string;
  ngOnInit(): void {
    
  }
  obtener(signo:string){
    this.servicio.getTexHors(signo).subscribe(
      result=>{
       console.log(result);
       this.signoel=signo;
       this.textsi=result.text;
       this.datesi=result.date;
      },
      error=>{}
      
    )
    
  }
}
