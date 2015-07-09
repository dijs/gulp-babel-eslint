'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var mocha = require('gulp-mocha');
var babelCompiler = require('babel/register');

gulp.task('clean', function(cb) {
	del(['dist'], cb);
});

gulp.task('build', ['clean'], function() {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('watcher', function() {
	gulp.watch(['src/**/*.js', 'test/*.js'], ['test']);
});

gulp.task('test', ['build'], function() {
	return gulp.src('test/*.js', {
			read: false
		})
		.pipe(mocha({
			compilers: {
				js: babelCompiler
			}
		}));
});

gulp.task('default', ['test', 'watcher']);
