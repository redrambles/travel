var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
  /* the 'return' is necessary to respect the asynchronous nature of postcss*/
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorDescription){
    console.log(errorDescription.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
