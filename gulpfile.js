//Gulp Sass plugins
var gulp = require("gulp"),
  gutil = require('gulp-util'),
  browserSync = require('browser-sync').create(),
  rename = require('gulp-rename')
argv = require('yargs').argv;

//generates a new template
gulp.task('generate-template', function() {
  argv.n = '' ? 'untitled-element' : argv.n;
  argv.base = !argv.base ? 'template' : argv.base;
  //rename files  
  gulp.src(['./app/' + argv.base + '/**/*'])
    .pipe(rename(function(path) {
      if (argv.e === path.extname) {
        path.basename = argv.n;
      } else if (argv.e === '*') {
        path.basename = argv.n;
      }
    }))

  .pipe(gulp.dest('./app/elements/' + argv.n));
})

//serve
gulp.task('serve', function() {
  browserSync.init({
    server: "./app/"
  });

  gulp.watch("./app/**/*.html").on('change', browserSync.reload);
});

// gist
gulp.task("default", ["serve"]);
gulp.task('gt', ["generate-template"])
