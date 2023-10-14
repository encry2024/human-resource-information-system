const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const $ = require('jquery');

mix.js('resources/js/app.js', 'public/js')
    .ts([
        'resources/tsx/App.tsx',
        'resources/tsx/components/Login.tsx',
        'resources/tsx/Index.tsx'
    ], 'public/ts/app.js').react()
    .copy('node_modules/jquery/dist/jquery.min.js', 'public/js')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .version();
