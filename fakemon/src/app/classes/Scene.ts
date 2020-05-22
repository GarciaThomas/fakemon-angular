import { Interaction } from './interaction'

export class Scene{
    id : number = 1
    nowalk : Object = {}
    startpos : Array<number> = []
    style : Object = {}
    background : string = ""
    triggers : Object = {}

    constructor(id?:number,nowalk?:Object,startpos?:Array<number>,background?:string,style?:Object,triggers?:Object){
        this.id = id
        this.nowalk = nowalk
        this.startpos = startpos
        this.background = background
        this.style = style
        this.triggers = triggers
    }

    getScenes<Object>(){
        var scenes : Array<any> = new Array<any>()
        for(let s of this.triggers['scenes']){
            let css = {}
            console.log(s)
            if(s['orientation'] == "north"){
                css = {
                    'background' : `url(${this.style['portail']})`,
                    'transform' : 'rotate(180deg)',
                    'position' : 'absolute',
                    'z-index':1,
                    'left' : `${s['pos'][0]}`,
                    'top' : `${s['pos'][1]}`
                }
            }else if(s['orientation'] == "south"){
                css = {
                    'background' : `url(${this.style['portail']})`,
                    'position' : 'absolute',
                    'z-index':1,
                    'left' : `${s['pos'][0]}`,
                    'top' : `${s['pos'][1]}`
                }               
            }
            scenes.push(css);
        }
        return scenes
    }
    getTriggersInteractionsSelect(){

        let interactionsTrainees : Array<any> = []
        for(let inter of this.triggers['interact']) {
            interactionsTrainees.push(new Interaction(inter['pos'],inter['event_type'],inter['prop'],inter['dialogs']))
        }
        console.log(interactionsTrainees)
        return interactionsTrainees.filter(i => i.event_type=="selection_starter")
    }
    getTriggersInteractionsTrainers(){
        let interactionsTrainees : Array<any> = []
        for(let inter of this.triggers['interact']) {
            interactionsTrainees.push(new Interaction(inter['pos'],inter['event_type'],inter['prop'],inter['dialogs']))
        }
        console.log(interactionsTrainees)
        return interactionsTrainees.filter(i => i.event_type=="trainer")
    }
}