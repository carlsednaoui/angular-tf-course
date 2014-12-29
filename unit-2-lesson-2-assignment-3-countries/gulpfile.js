var gulp = require('gulp'); 
var webserver = require('gulp-webserver');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

gulp.task('copy-html-files', function() {
     gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});

gulp.task('copy-images', function() {
     gulp.src('./app/images/**/*', {base: './app/images'})
    .pipe(gulp.dest('build/_assets/images/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copy-html-files', 'copy-images', 'usemin']);


// server

gulp.task('webserver', function() {
  // gulp.src('build')
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
gulp.task('default', ['webserver', 'build']);
