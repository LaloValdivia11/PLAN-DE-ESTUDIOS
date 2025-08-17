export default class Cola {
    _putFirstTask: string[] = [];
    _getFirstValue: string;

    constructor(putFirstValue:string[], getFirstValue: string){
        this._putFirstTask = putFirstValue;
        this._getFirstValue = getFirstValue;
    }

    get putFirstTask(): any {
        return this.putFirstTask;
    }

    set putFirstTask (putFirstValue)  {
        this._putFirstTask = putFirstValue;
    }

    get getFirstValue() {
        return this._getFirstValue
    }
}
