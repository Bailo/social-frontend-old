// require path

require.config({
   deps: ['app'],

    paths: {
        'jquery' : 'components/jquery/dist/jquery.min',
        'underscore' : 'components/underscore/underscore',
        'backbone' : 'components/backbone/backbone'
    },
    
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'underscore': {
            deps: ['jquery'],
            exports: '_'
        }
    }
});