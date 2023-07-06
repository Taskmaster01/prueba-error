import { Component } from '@angular/core';
import { QrSService } from 'src/app/services/qr-s.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent  {
 texto!:string;
 imgg!:string;
 constructor(private qrservice: QrSService){}
 ngOnInit():void{}
  crear(){
    //this,this.qrservice.getGenerar(this.texto).subscribe(
      this.qrservice.getGenerar(this.texto).subscribe(
      result=>{
        console.log(result);
        this.imgg=result.result;
        //console.log("donde texto="+this.texto); 
       
      },
      error=>{
        console.log("error")
      }
      
    );
  }
}
