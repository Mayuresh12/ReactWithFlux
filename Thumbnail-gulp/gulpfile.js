var gulp = require('gulp');// it is responsible for gulp process
var gutil = require('gulp-util');// it is used for consol loggin the build processes
var source = require('vinyl-source-stream'); // throwing the touch files from from one part of the build process to another process
var browserify = require('browserify');//tells what part of the code depends on what other part of the code
var watchify = require('watchify');//it is tool which run the gulpfile whenever the code changes in the files
var reactify = require('reactify');//it works hekp in converting all the jsx files into js files

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);
});




/*	var bundler = watchify(browserify([

		]))
 return gulp.src('src/**') //get all the files in the src folder
 .pipe(react())// convert all the jsx files into javascript files
 .pipe(concat('application.js'))// concat all the file sin application .js
 .pipe(gulp.dest('./'));

});*/


