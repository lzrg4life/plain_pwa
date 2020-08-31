'use strict';

class Route {
    name;
    htmlName;

    constructor(name, htmlName) {
        if (!name || !htmlName) {
            throw 'error: name and htmlName params are required.'
        }
        
        this.name = name;
        this.htmlName = htmlName;
    }

    isActiveRoute (hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}
