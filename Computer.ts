class Computer {
    private _serialNumber: string;
    private _brand: string;

    constructor(serialNumber: string, brand: string){
        this._serialNumber =serialNumber;
        this._brand = brand;
    }

    get serialNumber(){
        return this._serialNumber;
    }

    set serialNumber (serialNumber: string) {
        this._serialNumber = serialNumber;
    }

    get brand() {
        return this._brand;
    }

    set brand (brand: string) {
        this._brand =  brand;
    }

}