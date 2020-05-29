import { Player } from './player'

export class Compte{
    id : number = 0
    characters : Array<Player>
    login : string = ""
    password : string =""

    constructor(id?:number,characters?:Array<Player>,login?:string){
        this.id = id,
        this.characters = characters
        this.login = login
    }
}