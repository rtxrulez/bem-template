var gulp = require('gulp');
var config = require("../package.json").config;
var pug = require('gulp-pug');
var runseq = require('run-sequence');

gulp.task('templates', function buildHTML() {
    return gulp.src(config.src.templates + '*.pug')
    .pipe(
        pug({
            pretty: true
        })
        .on('error', function(error) {
            console.log(error);
    }))
    .pipe(gulp.dest("build"));
});

gulp.task('templates:watch', function() {
    gulp.watch(config.src.templates + '**/*.pug', () => runseq('templates', 'inject'));
});
