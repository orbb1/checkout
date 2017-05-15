var gulp = require('gulp');

var DIR_DIST = './public';
var DIR_SOURCE = './src';

gulp.task('assets', function() {
    return gulp.src(DIR_SOURCE + '/assets/**/*.{svg,js,css,png}')
        .pipe(gulp.dest(DIR_DIST + '/assets'));
});