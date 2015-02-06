define([
    'backbone',
//    'doT'
    'text!./templates/feed.html'
], function(Backbone, FeedTemplate) {

    /**
     * Feed View
     */
    return Backbone.View.extend({
        el: '#central-swap',
//        template: doT.template('<h1>Feed</h1>'),
        template: FeedTemplate,
        /**
         * Initialization function
         */
        initialize: function() {
            console.log('feed init');
        },

//        remove: function() {
//            this.undelegateEvents();
//            this.remove();
//        },

        /**
         * Render
         */
        render: function () {
            this.$el.html(this.template)
            console.log('feed render')
        }
    });
});