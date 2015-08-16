var gulp = require('gulp')
var babel = require('gulp-babel')
var rename = require('gulp-rename')
var chmod = require('gulp-chmod')

gulp.task('build', function () {
  return gulp.src('src/*')
    .pipe(babel())
    .pipe(rename(function (path) {
      path.extname = ""
    }))
    .pipe(chmod(755))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
  gulp.watch('src/*', ['build'])
})
