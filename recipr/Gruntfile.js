module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          imagePath: '/public/assets/images',
          sourceMap: true
        },
        files: {
          'public/assets/css/main.css': 'res/scss/main.scss'
        }
      },
      live: {
        options: {
          outputStyle: 'compressed',
          imagePath: '/public/assets/images'
        },
        files: {
          'public/assets/css/main.css': 'res/scss/main.scss'
        }
      }
    },
    concat: {
      app: {
        src:[
           'res/js/app/app.js',
           'res/js/app/store.js',
           'res/js/app/router.js',
           'res/js/app/*/*.js'
        ],
        dest: 'public/assets/js/app.js',
      },
      lib: {
        src:[
           'res/lib/jquery/dist/jquery.min.js',
           'res/lib/handlebars/handlebars.js',
           'res/lib/ember/ember.js',
           'res/lib/ember-data/ember-data.js'
        ],
        dest: 'public/assets/js/lib.js',
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'res/js/app/**/*.js', 'test/**/*.js']
    },
    emberhandlebars: {
        compile: {
            options: {
                templateName: function(sourceFile) {
                    var newSource = sourceFile.replace('res/templates/', '');
                    return newSource.replace('.hbs', '');
                }
            },
            files: ['res/templates/**/*.hbs'],
            dest: 'public/assets/js/tmpl.js'
        }
    },
    watch: {
      files: [
        'res/scss/**/*.scss',
        'res/js/app/**/*.js',
        'res/templates/**/*.hbs',
        'res/templates/*.hbs'
      ],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ember-template-compiler');

  grunt.registerTask('default', ['sass:dev', 'jshint:all', 'concat:app', 'concat:lib', 'emberhandlebars']);
};
