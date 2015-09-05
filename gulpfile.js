/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-05 14:26:52
 * @version $Id$
 */

var gulp = require('gulp');
var del = require('del');

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


gulp.task('back', function (){
	gulp.src('assets/vendor/bootstrap/dist/**/*.js', { base: 'assets/vendor' })
		.pipe(gulp.dest('output2'));
});