import { Artista } from "./artista";
export class PortalM {
    private _id!:number;
    set id(id: number) {
        this._id = id + 100;
        }
       
        get id(){
        return this._id;
        }
       
}
