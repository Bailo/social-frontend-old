define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/dialogs.hbs'
], function($,_,Backbone, Handlebars, DialogsTemplate) {

    /**
     * Dialog View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: Handlebars.compile(DialogsTemplate),


        /**
         * Initialization function
         */

        initialize: function() {
            console.log('Init Dialogs');
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


