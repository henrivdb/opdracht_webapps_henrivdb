export class Journey{
    private _destination:string;

    constructor(destination:string)
    {
        this._destination=destination;
    }

    get destination() : string {
        return this._destination;
    }
}