define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/common/panel_post.hbs'
], function($,_,Backbone, Handlebars, PanelPostTemplate) {

    /**
     * Panel Post View
     */
    return Backbone.View.extend({
        el: '#panel-post',
        template: Handlebars.compile(PanelPostTemplate),



        /**
         * Initialization function
         */

        initialize: function() {
            console.log('Init Panel Post');
            this.render();
        },

        /**
         * Render
         */

        render: function () {
            console.log('Append Panel Post');
            this.$el.html(this.template());

            return this;
        }
    });
});


