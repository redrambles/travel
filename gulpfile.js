var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function(){
  console.log("Hooray - Gulp task bonus challenge: Achieved!");
});

gulp.task('html', function(){
  console.log("Something happening to your HTML");
});
gulp.task('styles', function(){
  /* the 'return' is necessary to respect the asynchronous nature of postcss*/
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('rub_my_feet', function(){
  console.log("I am rubbing your feet right now. You are great.");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
      gulp.start('html');
    });
    watch('./app/assets/styles/styles.css', function(){
      gulp.start('styles');
      console.log("frak attack, yo");
    });
});