//npm install gulp-uglify, gulp-ruby-sass, (gulp-babel babel-preset-es2015) npm install --save-dev all;

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');


//Scripts task
//Uglifies,

gulp.task('scripts', function(){
   return gulp.src('preProcessedFiles/js/**/*.js')
    .pipe(babel({
      presets:['es2015']
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

//Styles task
gulp.task('styles', function(){
     return sass('preProcessedFiles/scss/**/*.scss', {style:'compressed'})
      .pipe(gulp.dest('public/css/'));
});

//Watch Task
//Watches JS

gulp.task('watch', function() {
  gulp.watch('preProcessedFiles/js/**/*.js', ['scripts']);
  gulp.watch('preProcessedFiles/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
