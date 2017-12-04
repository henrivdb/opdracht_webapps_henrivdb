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
        this._endDate = endDate;
        this._startDate = startDate;
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

    get dateString(): string {
        if (this._startDate != null && this._endDate != null) {
            return this._startDate.toString() + ' ' + this._endDate.toString();
        }
        return null;
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