define([
    'backbone',
//    'doT'
    'text!./templates/dialogs.html'
], function(Backbone, DialogsTemplate) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: DialogsTemplate,
        /**
         * Initialization function
         */
        initialize: function() {
            console.log('dialogs init');
        },

        /**
         * Render
         */

//        remove: function() {
//            this.undelegateEvents();
//            this.remove();
//        },

        render: function () {
            this.$el.html(this.template);
            console.log('dialogs render');
        }
    });
});