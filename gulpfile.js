var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var babel   = require('gulp-babel');
var bower   = require('main-bower-files');
var concat  = require('gulp-concat');

var notifyError = function() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}

gulp.task('watch', function() {

  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./src/*.js', ['babel']);
  gulp.watch('bower.json', ['bower']);

});

gulp.task('sass', function(){

  gulp.src('./scss/*.scss')
    .pipe( notifyError() )
    .pipe( sass() )
    .pipe( gulp.dest('./css') );

});

gulp.task('babel', function() {
  gulp.src('./src/*.js')
    .pipe( notifyError() )
    .pipe( babel() )
    .pipe( gulp.dest('./js') );
});

gulp.task('bower', ['bower:js', 'bower:css']);

gulp.task('bower:js', function() {
  var files = bower({filter: '**/*.js'});

  gulp.src(files)
    .pipe( notifyError() )
    .pipe( concat('vendor.js') )
    .pipe(gulp.dest('./js'));
});

gulp.task('bower:css', function() {
  var files = bower({filter: '**/*.css'});

  gulp.src(files)
    .pipe( notifyError() )
    .pipe( concat('vendor.css') )
    .pipe(gulp.dest('./css'));
});
