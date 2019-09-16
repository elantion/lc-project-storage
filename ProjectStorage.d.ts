import OPTIONS from './interface/OPTIONS';
declare class ProjectStorage {
    constructor(args: OPTIONS);
    private _project;
    private _projectName;
    private _version;
    private _cleanDateAfter;
    private _defaultProject;
    value: any;
    cleanOutDateProjects(): void;
}
export default ProjectStorage;
