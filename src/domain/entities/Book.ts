import IBookRepository from "../../infra/repositories/IBookRepository"

export class Book {
    private _name: string
    private _description: string
    private _releaseDate: Date

    constructor(data: IBookRepository) {
        this._name = data._name
        this._description = data._description
        this._releaseDate = data._releaseDate
    }

    get Name(): string {
        return this._name
    }

    get Description(): string{
        return this._description
    }

    get ReleaseDate(): Date{
        return this._releaseDate
    }
}