'use strict';

(() => {

    const router = new Router(document.getElementById('app'), [
        new Route('home', 'home.html'),
        new Route('about', 'about.html')
    ]);

    router.init();
})();
