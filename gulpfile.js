var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/assets/sass/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'))
});

gulp.task('default', function () {
    gulp.watch('src/assets/sass/**', ['sass']); 
});