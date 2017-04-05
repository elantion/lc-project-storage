"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectStorage = (function () {
    function ProjectStorage(args) {
        this._projectName = args.projectName;
        this._cleanDateAfter = args.cleanDateAfter || 24 * 60 * 60 * 1000;
        this._project = JSON.parse(window.localStorage.getItem(this._projectName));
        this._defaultProject = {
            name: this._projectName,
            cleanDataAfter: this._cleanDateAfter,
            value: undefined,
            useTime: Date.now()
        };
        if (!this._project) {
            this._project = this._defaultProject;
        }
        else {
            if (!this._project.useTime || !this._project.cleanDataAfter) {
                this._project = this._defaultProject;
            }
            else if (this._project.useTime + this._project.cleanDataAfter < Date.now()) {
                //clean out date value
                this._project.value = undefined;
            }
            this._project.useTime = Date.now();
        }
        window.localStorage.setItem(this._projectName, JSON.stringify(this._project));
    }
    Object.defineProperty(ProjectStorage.prototype, "value", {
        get: function () {
            return this._project.value;
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
