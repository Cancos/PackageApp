export class Dependency {
    private _packageName: string;
    private _packageVersion: string;

    constructor(name: string, version: string) {
        this._packageName = name;
        this._packageVersion = version;
    }

    get packageName(): string {
        return this._packageName;
    }

    get packageVersion(): string {
        return this._packageVersion;
    }
}