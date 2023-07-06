import { Component } from '@angular/core';
import { Climam } from 'src/app/models/climam';
import { ClimasService } from 'src/app/services/climas.service';

@Component({
  selector: 'app-climac',
  templateUrl: './climac.component.html',
  styleUrls: ['./climac.component.css']
})
export class ClimacComponent {
  texto!:string;
  pr!:Climam;
  prs!: Array<Climam>;
  constructor(private qrservice: ClimasService){}
  ngOnInit():void{}
   crear(){
     //this,this.qrservice.getGenerar(this.texto).subscribe(
       this.qrservice.getGenerar(this.texto).subscribe(
       result=>{
        this.prs=new Array<Climam>();
        result['weather'].forEach((element:any)=>{
          this.pr=new Climam();
          Object.assign(this.pr,element);
          this.prs.push(this.pr);
        // console.log(result);
        // this.imgg=result.result;
         //console.log("donde texto="+this.texto); 
        
       });
       console.log(this.prs);
       // console.log(result);
      },
       error=>{
         console.log("error")
       }
       
     );
   }
}
