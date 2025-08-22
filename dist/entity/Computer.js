export default class Computer {
    _serialNumber;
    _brand;
    constructor(serialNumber, brand) {
        this._serialNumber = serialNumber;
        this._brand = brand;
    }
    get serialNumber() {
        return this._serialNumber;
    }
    set serialNumber(serialNumber) {
        this._serialNumber = serialNumber;
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
}
//# sourceMappingURL=Computer.js.map