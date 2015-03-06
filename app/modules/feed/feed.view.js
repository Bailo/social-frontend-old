define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/feed.hbs',
    '../common/panel_post.view'
], function($,_,Backbone, Handlebars, FeedTemplate, PanelPostView) {

    /**
     * Feed View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: Handlebars.compile(FeedTemplate),


        /**
         * Initialization function
         */

        initialize: function() {
            console.log('Init Feed');
            this.panelpost = new PanelPostView();
        },

        /**
         * Render
         */

        render: function () {
            this.$el.html(this.template());
            this.panelpost.$el = this.$('#panel-post');
            this.panelpost.render();
            this.delegateEvents();

            return this;
        }
    });
});


