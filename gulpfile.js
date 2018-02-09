var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var useref = require('gulp-useref');
var del = require('del');

gulp.task('default', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('uglify-css', function(){
  return gulp.src('app/css/**/*.css')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('uglify-js', function(){
  return gulp.src('app/js/**/*.js')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('compress', function(){
  return gulp.src('app/js/**/*.js')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})
