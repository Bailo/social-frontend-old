define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/groups.hbs'
], function($,_,Backbone, Handlebars, GroupsTemplate) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: Handlebars.compile(GroupsTemplate),


        /**
         * Initialization function
         */

        initialize: function() {
            console.log('Init Groups');
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


