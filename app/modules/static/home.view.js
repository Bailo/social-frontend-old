define([
    'backbone'
], function(Backbone) {

    /**
     * Home View
     */
    return Backbone.View.extend({

        /**
         * Initialization function
         */
        initialize: function() {
            console.log('home init')
        },

        /**
         * Render
         */
        render: function () {
            console.log('home render')
        }
    });
});