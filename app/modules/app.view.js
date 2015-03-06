define([
    'backbone'
], function(Backbone) {

    /**
     * Application View
     */
    return Backbone.View.extend({

        el: 'body',

        /**
         * Events
         */

        events: {
            'click #href-profile' : 'getProfile',
            'click #href-feed'    : 'getFeed',
            'click #href-dialogs'    : 'getDialogs',
            'click #href-files'    : 'getFiles',
            'click #href-groups'    : 'getGroups'
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

        getDialogs: function() {
            window.app.router.navigate('dialogs', {trigger: true, replace: true});
        },

        getFiles: function() {
            window.app.router.navigate('files', {trigger: true, replace: true});
        },

        getGroups: function() {
            window.app.router.navigate('groups', {trigger: true, replace: true});
        },

        /**
         * Initialization function
         */
        initialize: function() {
            this.render();
            console.log('Init App');
        },



        render: function(){
//            this.$el.html(this.template());
        }



    });
});