define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    '../own_profile/own_profile.model',
    'text!../templates/own_profile.hbs',
    '../common/panel_post.view'
], function($,_,Backbone, Handlebars, OwnProfileModel, OwnProfileTemplate, PanelPostView) {

    /**
     * Profile View
     */
    return Backbone.View.extend({
        el: '#central-swap',
        template: Handlebars.compile(OwnProfileTemplate),

        events: {
            'click #more-info': 'toggleInfo'
        },


        /**
         * Initialization function
         */

        initialize: function() {
            console.log('Init OwnProfile');
            this.panelpost = new PanelPostView();
            this.model = new OwnProfileModel();

            this.listenTo(this.model, 'change', this.render);
            this.model.fetch();

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
            this.$el.html(this.template({cur_user: this.model.toJSON()}));
            this.panelpost.$el = this.$('#panel-post');
            this.panelpost.render();
            this.delegateEvents();

            return this;
        }
    });
});


