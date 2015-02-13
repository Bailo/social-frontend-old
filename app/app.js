require([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'modules/app.view'
], function($, _, Backbone, Router, AppView) {

    window.app = {};

    window.app.router = new Router();

    window.app.view = new AppView();
    Backbone.history.start();

});