define([
    'jquery',
    'underscore',
    'backbone'
], function($,_,Backbone) {

    var model = Backbone.Model.extend({

        defaults: {
//            login: 'Nik'
        },

        url: function() {
            return 'http://77.120.120.219:8082/api/profile.html';
        },

//        parse: function(response) {
//            // parse can be invoked for fetch and save, in case of save it can be undefined so check before using
//            if (response) {
//                if (response.success ) {
//                    // here you write code to parse the model data returned and return it as a js object
//                    // of attributeName: attributeValue
//
//                    return {login: response.login};      // just an example,
//                }
//            }
//        },

        // override backbone synch to force a jsonp call
        sync: function(method, model, options) {
            // Default JSON-request options.
            var that = this;
            var params = _.extend({
                type:           'GET',
                dataType:       'jsonp',
                url:			that.url() + '?callback=?',
                processData:    false
            }, options);

            // Make the request.
            return $.ajax(params);
        },

        parse: function(response, options) {
            // parse can be invoked for fetch and save, in case of save it can be undefined so check before using
            if (response) {
                if (response.success ) {
                    // here you write code to parse the model data returned and return it as a js object
                    // of attributeName: attributeValue
                console.log('Parse response: ' + response);
                console.log('Parse options: '+ options);

//                    return {login: response.login};      // just an example,
                }
            }

        },


        initialize: function() {

        }





    });

    return model;

});