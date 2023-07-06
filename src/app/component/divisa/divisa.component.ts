import { Component, OnInit } from '@angular/core';
import { Cambio } from 'src/app/models/cambio';
import { ConbertirService } from 'src/app/services/conbertir.service';
 

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})

export class DivisaComponent  {
  valor!:string;

  from_value!:string;
  from_type!:string;
  to_type!:string;
 constructor(private conbertirService:ConbertirService) {}
   ngOnInit():void{
   }

   cotizar(){
    this,this.conbertirService.getCambio(this.from_value,this.from_type,this.to_type).subscribe(
      result=>{
        this.valor=result.result;
        console.log("donde valor="+this.from_value+" donde tipo="+this.from_type+" tipo="+this.to_type);
        console.log(this.valor + "valor");
      },
      error=>{
        console.log("error")
      }
    );
   }

}