'use strict';

const gulp = require('gulp');
const pump = require('pump');
const vulcanize = require('gulp-vulcanize');
const crisper = require('gulp-crisper');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

gulp.task('clean', cb => {
	pump([
		gulp.src('build', {read: false}),
		clean()
	], cb);
});

gulp.task('vulcanize', ['clean'], cb => {
	pump([
		gulp.src('src/index.html'),
		vulcanize({
			abspath: '',
			excludes: [],
			stripExcludes: false,
			inlineScripts: true,
			inlineCss: true,
			stripComments: true
		}),
		crisper(/* default options are fine! */),
		gulp.dest('build')
	], cb);
});

gulp.task('minify', ['minify:js', 'minify:html', 'minify:images']);

gulp.task('minify:js', ['vulcanize'], cb => {
	pump([
		gulp.src('build/**/*.js'),
		sourcemaps.init(),
		// Uglify can't handle ES2016, so we have to run it through babel first :/
		babel({
			presets: ['es2015']
		}),
		uglify(),
		sourcemaps.write('./'),
		gulp.dest('build')
	], cb);
});

gulp.task('minify:html', ['vulcanize'], cb => {
	pump([
		gulp.src('build/**/*.html'),
		htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			minifyCSS: true,
			minifyJS: true
		}),
		gulp.dest('build')
	], cb);
});

gulp.task('minify:images', ['clean'], cb => {
	pump([
		gulp.src('src/img/**', {base: 'src'}),
		imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}),
		gulp.dest('build')
	], cb);
});

gulp.task('default', ['vulcanize', 'minify']);
