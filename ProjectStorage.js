"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectStorage = /** @class */ (function () {
    function ProjectStorage(args) {
        this._projectName = args.projectName;
        this._version = args.version || 1;
        this._cleanDateAfter = args.cleanDateAfter || 24 * 60 * 60 * 1000;
        this._project = (JSON.parse(window.localStorage.getItem(this._projectName) || 'null'));
        this._defaultProject = {
            name: this._projectName,
            cleanDataAfter: this._cleanDateAfter,
            value: undefined,
            useTime: Date.now(),
            version: this._version,
        };
        if (!this._project) {
            this._project = this._defaultProject;
        }
        else {
            if (!this._project.useTime || !this._project.cleanDataAfter) {
                this._project = this._defaultProject;
            }
            else if (this._project.useTime + this._project.cleanDataAfter <
                Date.now()) {
                //clean out date value
                this._project.value = undefined;
            }
            else if (!this._project.version ||
                this._project.version < this._version) {
                //purge data when version update
                this._project.value = undefined;
            }
            this._project.useTime = Date.now();
        }
        this._project.version = this._version;
        if (this._project.value === undefined) {
            this._project.value =
                args.defaultValue === undefined ? {} : args.defaultValue;
        }
        window.localStorage.setItem(this._projectName, JSON.stringify(this._project));
    }
    Object.defineProperty(ProjectStorage.prototype, "value", {
        get: function () {
            var item = window.localStorage.getItem(this._projectName);
            var project = JSON.parse(item || '{}');
            return project.value;
        },
        set: function (value) {
            this._project.value = value;
            window.localStorage.setItem(this._projectName, JSON.stringify(this._project));
        },
        enumerable: true,
        configurable: true
    });
    ProjectStorage.prototype.cleanOutDateProjects = function () {
        //todo: clean others project
        //question: is this over boundary?
    };
    return ProjectStorage;
}());
exports.default = ProjectStorage;
