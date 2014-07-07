var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    rev = required('gulp-rev');

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
  gulp.watch('frontend/src/js/**/*.js', ['scripts']);
});


gulp.task('rev', ['less', 'scripts'], function() {
  return gulp.src(['dist/**/*.css', 'dist/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});
