var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var angularTemplates = require('gulp-angular-templates');

gulp.task('default', function () {
	return gulp.src('src/app/**/*.html')
		.pipe(angularTemplates({basePath: "", module: "blog"}))
		.pipe(gulp.dest('src/app/'));

});

gulp.task('deploy', function () {
	return browserify('./src/app/app.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist/'));
});