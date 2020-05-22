export class Interaction{

    prop : Object
    pos : Array<number>
    event_type : string
    dialogs : Array<string>
    alreadyDone : Boolean = false

    constructor(pos:Array<number>,event_type:string,prop:Object,dialogs?:Array<string>){
        this.dialogs = dialogs
        this.pos = pos
        this.event_type = event_type
        this.prop = prop
    }


}