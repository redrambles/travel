var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

gulp.task('default', function(){
  console.log("Hooray - Gulp task bonus challenge: Achieved!");
});

gulp.task('html', function(){
  console.log("Something happening to your HTML");
});
gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
      gulp.start('html');
    });
    watch('./app/assets/styles/styles.css', function(){
      gulp.start('styles');
      console.log("fuck you");
    });
});