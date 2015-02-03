define([
    'backbone',
    'doT'
], function(Backbone, doT) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#swap',
        template: doT.template('<h1>Profile</h1>'),
        /**
         * Initialization function
         */
        initialize: function() {
            console.log('profile init');
        },

        /**
         * Render
         */

        render: function () {
            this.$el.html(this.template);
            console.log('profile render');
        }
    });
});