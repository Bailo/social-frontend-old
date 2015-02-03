require.config({
   deps: ['app'],

    paths: {
        'jquery' : 'components/jquery/dist/jquery.min',
        'underscore' : 'components/underscore/underscore',
        'backbone' : 'components/backbone/backbone',
        'doT': 'components/doT/doT.min'
//        'text': 'components/text',
//        'jst': 'components/jst'
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

//        'jst': {
//            deps: ['text', 'underscore'],
//            exports: 'jst'
//        }
    }
});
