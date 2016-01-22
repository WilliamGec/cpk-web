var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
});


 
gulp.task('sass', function () {
  gulp.src('./public/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./public/stylesheets/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/**/*.scss', ['sass']);
});