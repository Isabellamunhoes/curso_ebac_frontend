const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.parallel('sass', 'images', 'scripts'));
