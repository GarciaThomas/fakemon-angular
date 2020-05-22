import { Attaque } from "./attaque";
export class Monster{

    nom : string;
    pv : number;
    pvMax : number;
    exp : number;
    expNextLevel : number;
    id?:number
    aSp?:number
    dSp?: number
    aTk?:number
    def?:number
    vit?:number
    equipeJoueur?:string
    baseAsp?: number
    baseDef?: number
    baseAtk?: number
    basePv?: number
    baseVit?: number
    espece?: string
    expGain?:number
    ivASp?: number
    ivAtk?:number
    ivDSp?:number
    ivDef?:number
    ivPv?:number
    ivVit?:number
    level?:number
    listAttaque?:Array<Attaque>
    situation?:string
    type?:string

    constructor(nom?:string,
                pv?:number,
                pvMax?:number,
                exp?:number,
                expNextLevel?:number,
                id?:number,
                aSp?:number,
                dSp?: number,
                aTk?:number,
                def?:number,
                vit?:number,
                equipeJoueur?:string,
                baseAsp?: number,
                baseDef?: number,
                baseAtk?: number,
                basePv?: number,
                baseVit?: number,
                espece?: string,
                expGain?:number,
                ivASp?: number,
                ivAtk?:number,
                ivDSp?:number,
                ivDef?:number,
                ivPv?:number,
                ivVit?:number,
                level?:number,
                listAttaque?:Array<Attaque>,
                situation?:string,
                type?:string,
                ){

        this.nom = nom
        this.pv = pv
        this.pvMax = pvMax
        this.exp = exp
        this.expNextLevel = expNextLevel
        this.id=id
        this.aSp=aSp
        this.dSp=dSp 
        this.aTk=aTk
        this.def=def
        this.vit=vit
        this.equipeJoueur=equipeJoueur
        this.baseAsp=baseAsp 
        this.baseDef=baseDef 
        this.baseAtk=baseAtk 
        this.basePv=basePv 
        this.baseVit=baseVit 
        this.espece=espece 
        this.expGain=expGain
        this.ivASp=ivASp 
        this.ivAtk=ivAtk
        this.ivDSp=ivDSp
        this.ivDef=ivDef
        this.ivPv=ivPv
        this.ivVit=ivVit
        this.level=level
        this.listAttaque=listAttaque
        this.situation=situation
        this.type=type
    }

}