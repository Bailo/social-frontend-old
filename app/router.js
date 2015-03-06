define([
    'backbone',
    'modules/feed/feed.view',
    'modules/own_profile/own_profile.view',
    'modules/dialogs/dialogs.view',
    'modules/files/files.view',
    'modules/groups/groups.view'
], function(Backbone, FeedView, OwnProfileView, DialogsView, FilesView, GroupsView) {

    /**
     * Router
     */
    return Backbone.Router.extend({
        routes: {
            ''          : 'feed',
            'profile'   : 'profile',
            'dialogs'   : 'dialogs',
            'files'     : 'files',
            'groups'    : 'groups'

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
            this.currentView = new OwnProfileView();
            this.currentView.render();
        },

        dialogs: function() {
            this.currentView = new DialogsView();
            this.currentView.render();
        },

        files: function() {
            this.currentView = new FilesView();
            this.currentView.render();
        },

        groups: function() {
            this.currentView = new GroupsView();
            this.currentView.render();
        }
    });
});