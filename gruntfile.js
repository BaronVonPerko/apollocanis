module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            build: {
                files: {
                    "build/style.css": "style/**.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['style/**.less'],
                tasks: ['less'],
            },
            partials: {
              files: ['partials/**.jade'],
              tasks: ['jade']
            },
            scripts: {
              files: ['scripts/**.js'],
              tasks: ['copy']
            }
        },
        browserSync: {
          dev: {
            bsFiles: {src: [
              './build/**'
            ]},
            options: {
              watchTask: true,
              debugInfo: true,
              logConnections: true,
              server: {baseDir: 'build/'},
              notify: true
            }
          }
        },
        jade: {
          compile: {
            files: {
              'build/index.html':
                ['partials/index.jade']
            }
          }
        },
        copy: {
          main: {
            files: [
              {
                expand: true,
                src: [
                  'scripts/*.js',
                  'images/*'
                ],
                dest: 'build/'
              }
            ]
          }
        }
    });

    grunt.registerTask('default',
      ['less', 'jade', 'browserSync', 'watch', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
};
