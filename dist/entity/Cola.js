export default class Cola {
    _putFirstTask = [];
    _getFirstValue;
    constructor(putFirstValue, getFirstValue) {
        this._putFirstTask = putFirstValue;
        this._getFirstValue = getFirstValue;
    }
    get putFirstTask() {
        return this.putFirstTask;
    }
    set putFirstTask(putFirstValue) {
        this._putFirstTask = putFirstValue;
    }
    get getFirstValue() {
        return this._getFirstValue;
    }
    set getFirstValue(getFirstValue) {
        this._getFirstValue = getFirstValue;
    }
}
//# sourceMappingURL=Cola.js.map