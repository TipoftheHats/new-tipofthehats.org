'use strict';

process.on('unhandledRejection', r => {
	console.error('UNHANDLED PROMISE REJECTION:\n', r.stack ? r.stack : r);
});

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pump = require('pump');

gulp.task('minify:images', cb => {
	pump([
		gulp.src('src/img/**', {base: 'src'}),
		imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}),
		gulp.dest('build/default/src')
	], cb);
});
