/**
 * Created by JKosmoski on 10/28/2014.
 */
module.exports = function(grunt) {
    var banner = '/*\n<%= pkg.name %> <%= pkg.version %>';
    banner += '- <%= pkg.description %>\n<%= pkg.repository.url %>\n';
    banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

    grunt.initConfig({
        filedef: {
            source: ['gruntfile.js', '*.js', 'routes/*.js',
                'test/*.js', 'bin/www.js']
        },
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: '<%=filedef.source %>',
            options: {
                jshintrc: true
            }
        },
        concat: {
            options: {
                separator: ';\n',
                banner: banner
            },
            build: {
                files: [{
                    src: '<%=filedef.source%>',
                    dest: 'build/<%= pkg.name %>.js'
                }]
            }        },
        uglify: {
            options: {
                banner: banner
            },
            build: {
                files: {
                    'build/<%= pkg.name %>.min.js':
                        ['build/<%= pkg.name %>.js'],
                }
            }
        },
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },
            all: { src: ['test/*.js'] }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.registerTask('default',
        ['jshint', 'simplemocha', 'concat', 'uglify']);
};