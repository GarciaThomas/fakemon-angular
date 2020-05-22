import { Monster } from './monster'

export class action{
    message : string = ""
    m : Monster = null

    constructor(m:Monster,message?:string){
        this.m = m
        this.message = message
    }

}