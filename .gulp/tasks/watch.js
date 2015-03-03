var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('watch', function () {
    watch('../**/*.js', function () {
        gulp.start('lint');
    });
});
