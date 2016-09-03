const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const rollup = require('gulp-rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const SRC = 'src/exitent.js';
const DEST = 'dist';

gulp.task('build', function() {
  return gulp.src(SRC)
    .pipe(rollup({
      allowRealFiles: true,
      entry: SRC,
      plugins: [
        nodeResolve({ jsnext: true, main: true })
      ],
      format: 'umd',
      moduleName: 'Exitent',
    }))
    .pipe(babel({
      comments: false,
      presets: ['es2015']
    }))
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});
