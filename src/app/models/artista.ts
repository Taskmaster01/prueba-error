export class Artista {
    id!:number;
link!:string;
name!:string;
picture!:string;
picture_big!:string;//imagen
picture_medium!:string;//imagen
picture_small!:string;//imagen
 picture_xl!:string;//imagen
radio!:boolean;
share!:string;
 tracklist!:string; 
constructor(id:number=0,link:string="", name:string="",picture:string="",
    picture_big:string="",//imagen
    picture_medium:string="",//imagen
    picture_small:string="",//imagen
     picture_xl:string="",//imagen
     radio:boolean=true,
    share:string="",
     tracklist:string=""){
        this.id=id; 
        this.link=link;
        this.name=name;
        this.picture=picture;
        this.picture_big=picture_big;
        this.picture_medium=picture_medium;
        this.picture_small=picture_small;
        this.picture_xl=picture_xl;
        this.radio=radio;
        this.share=share;
        this.tracklist=tracklist;
        
}
}
