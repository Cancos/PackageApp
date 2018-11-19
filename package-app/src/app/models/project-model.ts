import { Dependency } from "./dependency-model";
import { DevDependency } from "./devDependency-model";

export class Project {
    private _name: string;
    private _dependencies: Dependency[];
    private _devDependencies: DevDependency[];
    private _preferredName: string;

    constructor(projectName: string, dependencies?: Dependency[], devDependencies?: DevDependency[]) {
        this._name = projectName;
        this._dependencies = dependencies;
        this._devDependencies = devDependencies;
    }

    get name(): string {{
        return this._name;
    }}

    set name(value: string) {
        this._name = value;
    }

    get preferredName(): string {{
        return this._preferredName;
    }}

    set preferredName(value: string) {
        this._preferredName = value;
    }

    get dependencies(): Dependency[]{
        return this._dependencies;
    }

    set dependencies(dependencies: Dependency[]) {
        this._dependencies = dependencies;
    }

    get devDependencies(): DevDependency[] {
        return this._devDependencies;
    }

    set devDependencies(devDependencies: DevDependency[]) {
        this._devDependencies = devDependencies;
    }
}