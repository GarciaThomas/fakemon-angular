import { Monster } from './monster';

export class Player {
    constructor(public id?: number,
        public nom?: string,
        public equipePlayer?: Array<Monster>, 
        public position?: [], //Attention, c'est un tableau apparement... Blob ?
        public idScene?: number,
        public maxRencontre?: number,
        public cptRencontre?: number,
        public maxArene?: number,
        public cptArene?: number) {
            
          }
}
