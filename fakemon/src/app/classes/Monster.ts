import { Attaque } from "./attaque";

export class Monster {    


    constructor(public id?: number,
        public type?: string,
        public espece?: string,
        public level?: number,
        public pv?: number,
        public pvMax?: number,
        public atk?: number,
        public def?: number,
        public aSp?: number,
        public dSp?: number,
        public vit?: number,
        public listAttaque?: Array<Attaque>, 
        public expNextLevel?: number, 
        public exp?: number) {
            
          }
}