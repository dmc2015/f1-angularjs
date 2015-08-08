var gulp = require('gulp'),
    jsconcat = require('gulp-concat'),
    jhint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    uglyjs = require('gulp-uglify'),
    stylejh = require('jshint-stylish');




gulp.task('lint', function(){
  return gulp.src('source/**/*.js')
  .pipe(jhint())
  .pipe(jhint.reporter('jshint-stylish'));
});

gulp.task('default', ['lint']);
