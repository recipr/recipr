var gulp = require("gulp");
var rename = require("gulp-rename");
var sketch = require("gulp-sketch");
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

var fontName = 'recipr-icons';
var fontPath = '/fonts/';

gulp.task('icons', function(){
  gulp.src("../client/icons/recipr_icons.sketch")
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(gulp.dest('../client/icons/svg'))
    .pipe(iconfont({ fontName: fontName }))
    .on('codepoints', function(codepoints) {
      var options = {
        glyphs: codepoints,
        fontName: fontName,
        fontPath: fontPath,
        className: 'icon'
      };
      gulp.src('../client/icons/_template.scss')
        .pipe(consolidate('lodash', options))
        .pipe(rename("_icons.scss"))
        .pipe(gulp.dest('../client/styles/gui/'));
    })
    .pipe(gulp.dest('../public/fonts/'));
});