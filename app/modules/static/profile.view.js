define([
    'backbone',
//    'doT'
    'text!./templates/profile.html'
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
            console.log('profile init');
        },

        toggleInfo: function() {
            $('#table-details').toggleClass('show');
        },

      remove: function(){
        Backbone.View.prototype.remove.apply(this, arguments);
          console.log('profile remove')
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