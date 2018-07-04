let mix = require('laravel-mix');

require('./laravel-mix-tailwind');

mix
    .js('resources/assets/js/app.js', 'js')
    .less('resources/assets/less/app.less', 'css')
    .tailwind();