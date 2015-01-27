define([
    'backbone',
    'modules/static/home.view'
], function(Backbone, HomeView) {

    /**
     * Router
     */
    return Backbone.Router.extend({
        routes: {
            '' : 'home',
            'profile': 'profile'
        },

        /**
         * Redefined navigate function
         * @param fragment {Object}
         * @param options {Object}
         * @returns {*} Backbone router
         */
        navigate: function (fragment, options) {
            if (this.currentView) {
                this.currentView.undelegateEvents();
                this.currentView.remove();
            }
            Backbone.history.navigate(fragment, options);
            return this;
        },

        /**
         * ROUTES:
         */
        home: function() {
            this.currentView = new HomeView();
            this.currentView.render();
        },

        profile: function() {
            var that = this;
        }
    });
});