'use strict';

const gulp = require('gulp');
const pump = require('pump');
const vulcanize = require('gulp-vulcanize');
const crisper = require('gulp-crisper');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
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

		// We have to avoid the global 'use strict'; that babel adds, because it breaks the web animations polyfill:
		// https://github.com/web-animations/web-animations-next/issues/402
		// You'd think we could just use babili, but it chokes on some huge regex in Polymer so no go there either.
		babel({presets: ['es2015-nostrict']}),
		uglify(),
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
