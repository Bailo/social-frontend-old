require.config({
   deps: ['app'],

    paths: {
        'jquery' : 'components/jquery/dist/jquery.min',
        'underscore' : 'components/underscore/underscore',
        'backbone' : 'components/backbone/backbone',
        'doT': 'components/doT/doT.min',
        'bootstrap': 'styles/bootstrap-sass/assets/javascript/bootstrap.min',
        'bootflat-icheck': 'styles/Bootflat/bootflat/js/icheck.min',
        'bootflat-jquery.fs.selecter': 'styles/Bootflat/bootflat/js/jquery.fs.selecter.min',
        'bootflat-jquery.fs.stepper': 'styles/Bootflat/bootflat/js/jquery.fs.stepper.min'
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
