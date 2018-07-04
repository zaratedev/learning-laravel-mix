let mix = require('laravel-mix');

mix.extend('foobar', (webpackConfig, ...args) => {

    webpackConfig.resolve.extensions.push('.assds');

    console.log(args);
});


mix
    .js('resources/assets/js/app.js', 'js')
    .sass('resources/assets/sass/app.scss', 'css')
    .foobar('path/to/file.js');