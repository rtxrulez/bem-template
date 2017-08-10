var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('src/images/*.*')
    .pipe(gulp.dest('build/images/'))
});

gulp.task('copy:watch', function() {
    gulp.watch('src/**/*', ['copy']);
});
