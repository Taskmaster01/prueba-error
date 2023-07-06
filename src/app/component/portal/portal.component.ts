import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Artista } from 'src/app/models/artista';
import { PortalSService } from 'src/app/services/portal-s.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
   
 artista!:Artista;
 artistas!:Array<Artista>;
  
 
 ////
 /*
 constructor( private portalservice: PortalSService){
  this.cargaartistas();
 }
 cargaartistas(){
  this.portalservice.getPort().subscribe(
    result => {
      //Convertimos los players recibidos en JSON a objetos JavScript
      this.artistas= new Array<Artista>();
      result['artist'].forEach((element: any) => {
        this.artista = new Artista();
        Object.assign(this.artista,element); //convertimos
        this.artistas.push(this.artista);
        });
        console.log(this.artistas);
        //this.tit=result.title; 
      //  this.lin=result.link;
        },
        error => { alert("Error en la petición"); } 
        )
        }
        ngOnInit(){

        }
 
}*/
  constructor(private servicio: PortalSService){
   // this.obtener(15);
  }
 tit!:string;
 lin!:string;
 ngOnInit():void{

 }
 obtener(id:number){
  this.servicio.getPort(id).subscribe(//id: Number
    result=>{
      
        //console.log(this.artistas);
        //this.tit=result.title; 
      //  this.lin=result.link;
      ////
     console.log(result);
      this.tit=result.title; 
      this.lin=result.link;
    },
    error=>{}
  )
 }
}
