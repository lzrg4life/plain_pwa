'use strict';

class Router {
    routes;
    defaultRoute;
    rootElem;

    constructor(rootElem, routes, defaultRouteIndex) {
        if (!routes) {
            throw 'error: routes param is required.';
        }

        if (routes.length === 0) {
            throw 'error: routes param must have at least one element.'
        }
        
        this.routes = routes;
        this.defaultRoute = defaultRouteIndex ? this.routes[defaultRouteIndex] : this.routes[0];
        this.rootElem = rootElem;

        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.hashChanged());
        this.hashChanged();
    }

    hashChanged() {
        if (window.location.hash.length > 0) {
            this.routes.forEach(route => {
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    this.goToRoute(route.htmlName);
                }
            });
        } 
        else {
            this.goToRoute(this.defaultRoute.htmlName);
        }
    }

    goToRoute(htmlName) {
        let url = 'views/' + htmlName;

        fetch(url)
            .then(response => response.text())
            .then(html => this.rootElem.innerHTML = html)
            .catch(error => this.rootElem.innerHTML = `Error loading ${htmlName}: ${error}`);
    }
}