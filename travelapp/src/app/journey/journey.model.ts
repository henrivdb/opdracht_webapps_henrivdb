export class Journey {
    private _id: string;
    private _name: string;
    private _destination: string;
    private _startDate: Date;
    private _endDate: Date;
    private _country: string;
    private _user: string[];
    private _resume: string[];

    constructor(name: string, destination: string, startDate: Date, endDate: Date,
        country: string, user: string[], resume: string[]) {
        this._name = name;
        this._destination = destination;
        this._country = country;
        this._endDate = new Date(endDate);
        this._startDate = new Date(startDate);
        this._user = user;
        this._resume = resume;
    }

    get destination(): string {
        return this._destination;
    }

    get id(): string {
        return this._id;
    }

    get user(): string[] {
        return this._user;
    }

    get resume(): string[] {
        return this._resume;
    }

    get name(): string {
        return this._name;
    }

    get country(): string {
        return this._country;
    }


    set resume(resume:string[])
    {
        this._resume=resume;
    }

    set id(id:string)
    {
        this._id=id;
    }

    static fromJSON(json): Journey {
        const jour = new Journey(json.name, json.destination, json.startDate, json.endDate,
            json.country, json.user, json.resume);
        jour._id = json._id;
        return jour;
    }

    getDateString(): string {
        return  ( this._startDate.getDate()+'/'+this._startDate.getMonth()+'/' + this._startDate.getFullYear()+
        ' - ' + this._endDate.getDate()+'/'+this._endDate.getMonth()+'/' + this._endDate.getFullYear());
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            country: this._country,
            user: this._user,
            destination: this._destination,
            resume: this._resume,
            startDate: this._startDate,
            endDate: this._endDate
        };
    }
}