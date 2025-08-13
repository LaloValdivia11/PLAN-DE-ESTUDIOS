export default class Cola {
    _putFirstValue: string[] = ["TM-1", "TM-2", "TM-3"];
    _getFirstValue: string;

    constructor(putFirstValue:string[], getFirstValue: string){
        this._putFirstValue = putFirstValue;
        this._getFirstValue = getFirstValue;
    }

    get putFirstValue() {
        return this.putFirstValue;
    }

    set putFirstValue (putFirstValue)  {
        this._putFirstValue = putFirstValue;
    }

    get getFirstValue() {
        return this._getFirstValue
    }
}