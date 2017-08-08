var gulp = require('gulp');
var stylus = require('gulp-stylus');
var config = require("../package.json").config;
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var runseq = require('run-sequence');
console.log("config", config);

gulp.task('styles', function() {
    return gulp.src(config.src.styles + '**/*.{styl,styl}')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.build.css));
});

gulp.task('styles:watch', function() {
    gulp.watch(config.src.styles + '**/*.{styl, styl}', ()=>runseq('copy', 'styles', 'inject'));
});
