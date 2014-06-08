module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          imagePath: '/web/res/images',
          sourceMap: true
        },
        files: {
          'web/res/css/main.css': 'res/scss/main.scss',
        }
      },
      live: {
        options: {
          outputStyle: 'compressed',
          imagePath: '/web/res/images'
        },
        files: {
          'web/res/css/main.css': 'res/scss/main.scss',
        }
      }
    },
    shell: {
      "build-dev": {
        command: 'pub build --mode=dev'
      },
      "build-test": {
        command: 'pub build --mode=release'
      },
      "build-live": {
        command: 'pub build --mode=release'
      }
    },
    watch: {
      files: ['res/scss/**/*'],
      tasks: ['sass:dev']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['sass:dev']);
  grunt.registerTask('build-dev', ['sass:dev', 'shell:build-dev']);
  grunt.registerTask('build-test', ['sass:dev', 'shell:build-test']);
  grunt.registerTask('build-live', ['sass:live', 'shell:build-live']);
};
