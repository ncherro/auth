var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    rev = required('gulp-rev'),
    coffee = require('gulp-coffee');

gulp.task('less', function() {
  return gulp.src('frontend/src/css/app.less')
    .pipe(less())
    .pipe(gulp.dest('frontend/dist'));
});

gulp.task('watch', ['less'], function() {
  gulp.watch('frontend/src/css/**/*.less', ['less']);
});

gulp.task('watch', ['less', 'scripts'], function() {
  gulp.watch('frontend/src/css/**/*.less', ['less']);
  gulp.watch('frontend/src/js/**/*.coffee', ['scripts']);
});

gulp.task('coffee', function() {
  gulp.src('frontend/src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('frontend/dist/'));
});

gulp.task('rev', ['less', 'scripts'], function() {
  return gulp.src(['frontend/dist/css/**/*.css', 'frontend/dist/js/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});
