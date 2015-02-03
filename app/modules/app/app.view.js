define([
    'backbone',
    'doT',
    'text!../static/templates/header.dot'
], function(Backbone, doT, Header) {

    /**
     * Application View
     */
    return Backbone.View.extend({

        el: 'body',
        template: doT.template(Header),

        /**
         * Events
         */

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
            window.app.router.navigate('', {trigger: true, replace: true});
        },

        /**
         * Initialization function
         */
        initialize: function() {
            this.render();
            console.log('app init')
        },

        data:  {
                'name' : 'nik',
                'age'  : 23
        },

        render: function(){
//            this.$el.html(this.template());
        }



    });
});