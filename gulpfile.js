var gulp = require('gulp');
var watch = require('gulp-watch');

var rename = require("gulp-rename");
var minify = require('gulp-minify-css')
var concat = require('gulp-concat');
var csscomb = require('gulp-csscomb');
var prettify = require('gulp-html-prettify');
var uglify = require('gulp-uglify');

// Если вы знаете как улучшить этот файл, пожалуйста, скажите мне :)

var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('combCSS', function () {
  var cssImport = ['css/blocks/*.css'];
  console.log('css comb');
  gulp.src(cssImport)
    .pipe(csscomb())
    .pipe(gulp.dest('css/blocks'));
})

gulp.task('combHTML', function () {
  gulp.src('*.html')
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('.'))
})

gulp.task('concatMinify', function (){
  console.log('css concatMinify');
  var cssImport = [
    'css/normalize.css', 
    'css/fonts.css', 
    'css/blocks/*.css'
    ];
  gulp.src(cssImport)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('assets'))
    .pipe(minify())
    .pipe(rename({'suffix':'.min'}))
    .pipe(gulp.dest('assets'))
    ;
});

gulp.task('watchConcat', function () {
  gulp.watch('css/blocks/*.css', ['concatMinify'])
});

gulp.task('uglify', function() {
  gulp.src('js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets'))
    .pipe(uglify())
    .pipe(rename({'suffix':'.min'}))
    .pipe(gulp.dest('assets'));
});


gulp.task('default', ['combCSS', 'combHTML', 'uglify']);
