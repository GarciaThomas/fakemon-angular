import { Attaque } from "./attaque";

export class Monster {    


    constructor(public listAttaque?: Array<Attaque>, 
        public pv?: number, 
        public exp?: number, 
        public expNextLevel?: number) {
            
          }
}