define([
    'jquery',
    'underscore',
    'backbone',
//    'doT',
    '../own_profile/own_profile.model',
    'text!../templates/own_profile.html'
], function($,_,Backbone, OwnProfileModel, OwnProfileTemplate) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: OwnProfileTemplate,

        events: {
            'click #more-info': 'toggleInfo'
        },

        /**
         * Initialization function
         */
        initialize: function() {
            console.log('own_profile init');
            this.model = new OwnProfileModel();
//            _.bindAll(this);
            this.model.fetch();
            this.render();
            this.model.on('change', this.render);
        },

        toggleInfo: function() {
            $('#table-details').toggleClass('show');
        },

//        remove: function(){
//            Backbone.View.prototype.remove.apply(this, arguments);
//            console.log('own_profile remove')
//        },



        /**
         * Render
         */

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('own_profile render');
        }
    });
});


