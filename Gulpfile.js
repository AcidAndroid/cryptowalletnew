//llamado de modulos
var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

//Tarea de gulp
gulp.task('generarestilos', function() {
    gulp //definicion de la tarea
        .src('css/main.scss') //toma un archivo
        .pipe(sass()) //lo pasa a sass
        .pipe(rename('main.css')) //le cambia el nombre al archivo de salida de sass
        .pipe(gulp.dest('public/css')); //el resultado lo pone en la carpeta public
})

//Tarea general que ejecuta todas
gulp.task('default', ['generarestilos'])