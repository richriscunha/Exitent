const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('compress', function() {
  gulp.src('dist/exitent.js')
    .pipe(minify({
        mangle: true,
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dist'))
});
