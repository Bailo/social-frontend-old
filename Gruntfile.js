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

        pkg: grunt.file.readJSON('package.json'),
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
                    '<%= appConfig.app %>/styles/**/*.scss'
//                    '<%= appConfig.app %>/*.html'

                ],

//                html: {
//                    files: ['index.html']
//                },

                tasks: ['requirejs:dev', 'sass:dist']

            }
        },

        sass: {
            dev: {
                options: {
                    preserveLicenseComments: true,
                    sourceMap: true
                },

                files: {
                    '<%= appConfig.dist %>/styles/main.css' : '<%= appConfig.app %>/styles/sass/main.scss'
                }

            }

        },


        requirejs: {
            dev: {
                options: {
                    name: "app",
                    baseUrl: './app',
                    mainConfigFile: './app/config.js',
                    out: './dist/js/config.js',
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
                    out: './dist/js/config.min.js',
                    findNestedDependecies: true,
                    optimize: 'uglify2',
                    generateSourceMaps: false
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.dist %>/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= appConfig.dist %>/styles',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= appConfig.app %>',
                        dest: '<%= appConfig.dist %>',
                        src: [
                            '*.{ico,txt}',
                            'img/{,*/}*.{webp,gif,jpg,png}',
                            'fonts/**/*.{eot,svg,ttf,woff,woff2}',
                            'components/**/*.{js,map}',
                            'style/**/*.{map,css}',
                            '**/*.html'
                        ]
                    }
                ]
            }

        },

        clean: {
            dev: ['<%= appConfig.dist %>/*'],
            prod: ['<%= appConfig.dist %>/styles/main.css', '<%= appConfig.dist %>/styles/main.css.map']
        }
    });
    grunt.registerTask('serve', [
        'clean:dev',
        'copy:dev',
        'sass:dev',
        'requirejs:dev',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('serve', function (target) {

        switch (target) {
            case 'test':
                return grunt.task.run([
                    'clean:dev',
//                    'copy:dev',
                    'sass:dev',
                    'requirejs:dev'
                ]);
            break;

            case 'prod':
                return grunt.task.run([
                    'clean:dev',
                    'sass:dev',
                    'cssmin',
                    'clean:prod',
                    'requirejs:prod'
                ]);
            break;
        }

        grunt.task.run([
            'clean:dev',
            'copy:dev',
            'sass:dev',
            'requirejs:dev',
            'connect:livereload',
            'watch'
        ]);
    })

};
