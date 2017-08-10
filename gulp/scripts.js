var gulp = require('gulp');

gulp.task('scripts', function() {
  return gulp.src('src/js/**.*')
    .pipe(gulp.dest('build/js/'))
});

gulp.task('scripts:watch', function() {
    gulp.watch('src/js/*.*', ['scripts']);
});
