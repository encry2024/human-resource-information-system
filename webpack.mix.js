const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const $ = require('jquery');

mix.js('resources/js/app.js', 'public/js')
    .ts([
        'resources/tsx/App.tsx',
        'Modules/User/Resources/assets/tsx/Provider/User/UserProvider.tsx',
        'Modules/User/Resources/assets/tsx/model/User.tsx',
        'resources/tsx/Components/Login.tsx',
        'resources/tsx/Index.tsx',
        'resources/tsx/Interfaces/IHRInput.tsx',
        'resources/tsx/Interfaces/IUserInput.tsx',
        'resources/tsx/Model/User/Authentication.tsx',
        'resources/tsx/Helper.tsx',

    ], 'public/ts/app.js').react()
    .copy('node_modules/jquery/dist/jquery.min.js', 'public/js')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .version();
