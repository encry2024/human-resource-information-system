const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const $ = require('jquery');

mix.js('resources/js/app.js', 'public/js')
    .ts('resources/ts/App.ts', 'public/ts/app.js')
    .copy('node_modules/jquery/dist/jquery.min.js', 'public/js')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .version();
