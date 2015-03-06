require.config({

    deps: ['app'],

    paths: {
        'jquery' : 'components/jquery/dist/jquery.min',
        'underscore' : 'components/underscore/underscore',
        'backbone' : 'components/backbone/backbone',
        'handlebars': 'components/handlebars/handlebars.min',
        'text': 'components/text',
        'json2': 'components/json2',
        'bootstrap': 'components/bootstrap-sass/assets/javascripts/bootstrap.min',
        'bootstrap-sprockets': 'components/bootstrap-sass/assets/javascripts/bootstrap-sprockets',
        'bootflat-icheck': 'components/bootflat/bootflat/js/icheck.min',
        'bootflat-jquery.fs.selecter': 'components/bootflat/bootflat/js/jquery.fs.selecter.min',
        'bootflat-jquery.fs.stepper': 'components/bootflat/bootflat/js/jquery.fs.stepper.min',
        'respond': 'components/bootflat/js/respond.min'
    },
    
    shim: {
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },

        'backbone': {
            deps: ['jquery', 'underscore', 'json2'],
            exports: 'Backbone'
        },

        'json2': {
            exports: 'JSON'
        },

        'handlebars': {
            exports: 'Handlebars'
        },

        'bootstrap': ['jquery'],
        'bootstrap-sprockets': ['jquery'],
        'bootflat-icheck': ['jquery'],
        'bootflat-jquery.fs.selecter': ['jquery'],
        'bootflat-jquery.fs.stepper': ['jquery'],
        'respond': ['jquery'],

    }
});

