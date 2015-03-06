require([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'router',
    'modules/app.view',
    'bootstrap',
    'bootstrap-sprockets',
    'bootflat-icheck',
    'bootflat-jquery.fs.selecter',
    'bootflat-jquery.fs.stepper',
    'respond',
], function($, _, Backbone, Handlebars, Router, AppView) {

    window.app = {};

    Backbone.$ = $;
    window.jQuery = window.jQuery || $;

    window.app.router = new Router();

    window.app.view = new AppView();

    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;
    Backbone.history.start();




});