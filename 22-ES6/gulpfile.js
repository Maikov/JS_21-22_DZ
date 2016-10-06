var gulp = require('gulp');
var babel = require('gulp-babel');

   
// JS babel watch

gulp.task('watch', () => {
    gulp.watch(
        ['src/js/script.js'],
        ['babel']
    );
});

// JS babel compilation

gulp.task('babel', () => {
    return gulp.src('src/js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js'));
});

// Default task

gulp.task('default', function() {
  gulp.start('babel', 'watch');
});


