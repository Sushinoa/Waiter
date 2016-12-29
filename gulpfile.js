var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});
gulp.task('bower',function(){
	gulp.src('./app/index.html')
	.pipe(wiredep({
		directory:"app/bower_componrnts"
	}))
	.pipe(gulp.dest('./app'));
});
gulp.task('watch',function(){
	gulp.watch('bower.json',['bower']);
})