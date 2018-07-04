let mix = require('laravel-mix');


class Tailwind {
    dependencies() {
        this.requiresReload = "Tailwind is different from frameworks like Bootstrap, Foundation, or Bulma in that it's not a UI kit";
        return ['tailwindcss'];
    }

    register(configPath = './tailwind.js') {
        this.configPath = configPath;
    }

    boot() {
        if (Mix.components.has('sass')) {
            Config.processCssUrls = false;
        }

        let tailwindcss = require('tailwindcss');

        Config.postCss.push(tailwindcss(this.configPath));
    }
}



mix.extend('tailwind', new Tailwind());