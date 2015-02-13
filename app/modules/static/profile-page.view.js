define([
    'backbone',
//    'doT'
    'text!./templates/own_profile.html'
], function(Backbone, ProfileTemplate) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: ProfileTemplate,

        events: {
          'click #more-info': 'toggleInfo'
        },

        /**
         * Initialization function
         */
        initialize: function() {
            console.log('own_profile init');

        },

        toggleInfo: function() {
            $('#table-details').toggleClass('show');
        },

      remove: function(){
        Backbone.View.prototype.remove.apply(this, arguments);
          console.log('own_profile remove')
      },



        /**
         * Render
         */

        render: function () {
            this.$el.html(this.template);
            console.log('own_profile render');
        }
    });
});