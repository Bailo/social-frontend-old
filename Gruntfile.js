'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var appConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        appConfig: appConfig,

        /**
         * Connect
         */
        connect: {
            options: {
                port: grunt.option('port') || SERVER_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                livereload: LIVERELOAD_PORT
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, appConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },

        watch: {
            update: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= appConfig.app %>/**/*.js',
                    '<%= appConfig.app %>/**/*.css',
                    '<%= appConfig.app %>/**/*.html',


                ],
                tasks: ['requirejs:dev']
            }
        },

        requirejs: {
            dev: {
                options: {
                    name: "app",
                    baseUrl: './app',
                    mainConfigFile: './app/config.js',
                    out: './dist/config.js',
                    findNestedDependecies: true,
                    optimize: 'none', // if you need minification -- uglify2
                    preserveLicenseComments: false,
                    generateSourceMaps: true
                }
            },
            prod: {
                options: {
                    name: "app",
                    baseUrl: './app',
                    mainConfigFile: './app/config.js',
                    out: './dist/config.js',
                    findNestedDependecies: true,
                    optimize: 'uglify2',
                    generateSourceMaps: false
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= appConfig.app %>',
                        dest: '<%= appConfig.dist %>',
                        src: [
                            '*.{ico,txt}',
                            'images/{,*/}*.{webp,gif}',
                            'components/**/*.{js,map,css}',
                            '**/*.html'
                        ]
                    }
                ]
            }
        },

        clean: {
            dist: ['<%= appConfig.dist %>/*']
        }
    });

    grunt.registerTask('serve', [
        'clean:dist',
        'copy:dist',
        'requirejs:dev',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('serve', function (target) {
        if (target === 'prod') {
            return grunt.task.run([
                'clean:dist',
                'requirejs:prod'
            ]);
        }

        grunt.task.run([
            'clean:dist',
            'copy:dist',
            'requirejs:dev',
            'connect:livereload',
            'watch'
        ]);
    })

};
