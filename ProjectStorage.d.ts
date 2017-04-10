import OPTIONS from './interface/OPTIONS';
export default class ProjectStorage {
    constructor(args: OPTIONS);
    private _project;
    private _projectName;
    private _version;
    private _cleanDateAfter;
    private _defaultProject;
    value: any;
    cleanOutDateProjects(): void;
}
