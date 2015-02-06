define([
    'backbone',
    'modules/static/feed.view',
    'modules/static/profile.view',
    'modules/static/dialogs.view'
], function(Backbone, FeedView, ProfileView, DialogsView) {

    /**
     * Router
     */
    return Backbone.Router.extend({
        routes: {
            '' : 'feed',
            'profile': 'profile',
            'dialogs': 'dialogs'

        },

        /**
         * Redefined navigate function
         * @param fragment {Object}
         * @param options {Object}
         * @returns {*} Backbone router
         */
        navigate: function (fragment, options) {
//            if (this.currentView) {
//                this.currentView.undelegateEvents();
//                this.currentView.remove();
//            }

            Backbone.history.navigate(fragment, options);

            return this;
        },

        /**
         * ROUTES:
         */
        feed: function() {
            this.currentView = new FeedView();
            this.currentView.render();
        },

        profile: function() {
            this.currentView = new ProfileView();
            this.currentView.render();
        },

        dialogs: function() {
            this.currentView = new DialogsView();
            this.currentView.render();
        }
    });
});