/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-05 14:26:52
 * @version $Id$
 */

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['output2', 'clean'], function (){
	console.log('My Default Task');
});

gulp.task('output2', ['clean'], function (){
	gulp.src('assets/vendor/bootstrap/dist/**/*.js', { base: 'assets/vendor' })
		.pipe(gulp.dest('output2'));
});

gulp.task('output3', ['clean'], function() {
	gulp.src(['assets/vendor/**/*.js',
		'assets/vendor/**/*.css'], { base: 'assets/vendor' })
		.pipe(gulp.dest('output3'));
});

gulp.task('clean', function(cb) {
	del(['output2/bootstrap/**', '!output2/bootstrap'])
		.then(function (paths) {
    		console.log('Deleted files/folders:\n', paths.join('\n'));
    	})
    	.then(cb)
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js',['default']);
});

gulp.task('concat-app', function() {
	gulp.src('app/**/*.module.js')
		.pipe(gulp.dest('src'))
		.pipe(concat('app.modules.js'))
		.pipe(gulp.dest('assets'))
		.pipe(uglify({mangle: false}))
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest('assets'));

	gulp.src(['app/**/*.js', '!app/**/*.module.js'])
		.pipe(gulp.dest('src'))
		.pipe(concat('app.bundles.js'))
		.pipe(gulp.dest('assets'))
		.pipe(uglify({mangle: false}))
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest('assets'));
});



















