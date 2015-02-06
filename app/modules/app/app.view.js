define([
    'backbone'
//    'doT',
], function(Backbone) {

    /**
     * Application View
     */
    return Backbone.View.extend({

        el: 'body',
//        template: doT.template(Header),

        /**
         * Events
         */

        events: {
            'click #href-profile' : 'getProfile',
            'click #href-feed'    : 'getFeed',
            'click #href-dialogs'    : 'getDialogs'
        },

        /**
         * Navigation list
         */

        getProfile: function() {
            window.app.router.navigate('profile', {trigger: true, replace: true});
        },

        getFeed: function() {
            window.app.router.navigate('', {trigger: true, replace: true});
        },

        getDialogs: function() {
            window.app.router.navigate('dialogs', {trigger: true, replace: true});
        },

        /**
         * Initialization function
         */
        initialize: function() {
            this.render();
            console.log('app init')
        },



        render: function(){
//            this.$el.html(this.template());
        }



    });
});