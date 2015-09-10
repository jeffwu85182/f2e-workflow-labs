/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-05 14:26:52
 * @version $Id$
 */

var gulp = require('gulp');
var del = require('del');
var webpack = require('gulp-webpack');

var plugins = require('gulp-load-plugins')();

// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
var config = require('./config');

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
	gulp.src(config.path + '/**/*.module.js')
		.pipe(gulp.dest('src'))
		.pipe(plugins.concat('app.modules.js'))
		.pipe(gulp.dest('assets'))
		.pipe(plugins.uglify({mangle: false}))
		.pipe(plugins.rename({extname: '.min.js'}))
		.pipe(gulp.dest('assets'));

	gulp.src([config.app + '/**/*.js', '!app/**/*.module.js'])
		.pipe(gulp.dest('src'))
		.pipe(plugins.concat('app.bundles.js'))
		.pipe(gulp.dest('assets'))
		.pipe(plugins.uglify({mangle: false}))
		.pipe(plugins.rename({extname: '.min.js'}))
		.pipe(gulp.dest('assets'));
});

gulp.task('webpack', function() {
	gulp.src('app/app.module.js')
	    .pipe(webpack(require('./webpack.config.js')))
	    .pipe(gulp.dest('app/'));
});


















