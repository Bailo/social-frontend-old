define([
    'backbone'
], function(Backbone) {

    /**
     * Application View
     */
    return Backbone.View.extend({

        /**
         * Events
         */

        el: 'body',

        events: {
            'click #profile' : 'getProfile',
            'click #feed'    : 'getFeed'
        },

        /**
         * Navigation list
         */

        getProfile: function() {
            window.app.router.navigate('profile', {trigger: true, replace: true});
        },

        getFeed: function() {
            window.app.router.navigate('feed', {trigger: true, replace: true});
        },

        /**
         * Initialization function
         */
        initialize: function() {
            console.log('app init')
        }



    });
});