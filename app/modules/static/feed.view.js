define([
    'backbone',
    'doT'
//    'text!../templates/header'
], function(Backbone, doT) {

    /**
     * Feed View
     */
    return Backbone.View.extend({
        el: '#swap',
        template: doT.template('<h1>Feed</h1>'),

        /**
         * Initialization function
         */
        initialize: function() {
            console.log('feed init')
        },

        /**
         * Render
         */
        render: function () {
            this.$el.html(this.template)
            console.log('feed render')
        }
    });
});