define([
    'jquery',
    'underscore',
    'backbone'
], function(_, $, Backbone) {

    var model = Backbone.Model.extend({

        url: 'http://77.120.120.219:8082/server_side.html',

        sync: function(method, collections, options) {
            options.dataType = 'jsonp';
            return Backbone.sync(method, collections, options)
        },

        initialize: function() {
            console.log('init own_profile model');
        }





    });

    return model;

});