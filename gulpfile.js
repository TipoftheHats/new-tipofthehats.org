'use strict';

const gulp = require('gulp');
const vulcanize = require('gulp-vulcanize');
const crisper = require('gulp-crisper');
//const uglify = require('gulp-uglify');
const pump = require('pump');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

gulp.task('clean', () =>
	gulp.src('dist', {read: false})
		.pipe(clean())
);

gulp.task('vulcanize', ['clean'], () =>
	gulp.src('src/index.html')
		.pipe(vulcanize({
			abspath: '',
			excludes: [],
			stripExcludes: false,
			inlineScripts: true,
			inlineCss: true,
			stripComments: true
		}))
		.pipe(crisper(/* default options are fine! */))
		.pipe(gulp.dest('dist'))
);

gulp.task('minify', ['minify:js', 'minify:html', 'minify:images']);

gulp.task('minify:js', ['vulcanize'], cb => {
	return;
	pump([
		gulp.src('dist/**/*.js'),
		uglify(),
		gulp.dest('dist')
	], cb);
});

gulp.task('minify:html', ['vulcanize'], cb => {
	pump([
		gulp.src('dist/**/*.html'),
		htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			minifyCSS: true,
			minifyJS: true
		}),
		gulp.dest('dist')
	], cb);
});

gulp.task('minify:images', ['clean'], cb => {
	pump([
		gulp.src('src/img/**', {base: 'src'}),
		imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}),
		gulp.dest('dist')
	], cb);
});

gulp.task('default', ['vulcanize', 'minify']);
