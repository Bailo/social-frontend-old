define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/files.hbs'
], function($,_,Backbone, Handlebars, FilesTemplate) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: Handlebars.compile(FilesTemplate),


        /**
         * Initialization function
         */

        initialize: function() {
            console.log('Init Files');
        },

        /**
         * Render
         */

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
});


