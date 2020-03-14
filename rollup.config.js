// rollup.config.js

//import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
  external: ['api'],
  input: 'src/js/main.js',
  output: {
    name: 'svelteBundle',
    file: 'public/js/bundle.min.js',
    format: 'iife',
    //format: 'es',
    sourcemap: true,
    globals: {
      api: 'api'
    }
  },
  plugins: [
    resolve({
      // resolve modules that are designed to run in browser
      browser: true,
      // a dependency in node_modules may have svelte inside it's node_modules folder
      // dedupe option prevents bundling those duplicates
      dedupe: ['svelte']
    }),
    svelte({
      // By default, all .svelte and .html files are compiled
      //extensions: ['.my-custom-extension'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      //include: 'src/components/**/*.svelte',

      // By default, the client-side compiler is used. You
      // can also use the server-side rendering compiler
      //generate: 'ssr',

      // ensure that extra attributes are added to head
      // elements for hydration (used with ssr: true)
      // hydratable: true,

      // Optionally, preprocess components with svelte.preprocess:
      // https://svelte.dev/docs#svelte_preprocess
      // preprocess: {
      //     style: ({ content }) => {
      //         return transformStyles(content);
      //     }
      // },
      preprocess: autoPreprocess(),

      css: css => {
        css.write('public/css/main.min.css');
      }

      // // Emit CSS as "files" for other plugins to process
      // emitCss: true,

      // // Extract CSS into a separate file (recommended).
      // // See note below
      // css: function (css) {
      //     //console.log(css.code); // the concatenated CSS
      //     //console.log(css.map); // a sourcemap

      //     // creates `main.css` and `main.css.map` — pass `false`
      //     // as the second argument if you don't want the sourcemap
      //     css.write('public/css/main.css');
      // },

      // Warnings are normally passed straight to Rollup. You can
      // optionally handle them here, for example to squelch
      // warnings with a particular code
      // onwarn: (warning, handler) => {
      //     // e.g. don't warn on <marquee> elements, cos they're cool
      //     if (warning.code === 'a11y-distracting-elements') return;

      //     // let Rollup handle all other warnings normally
      //     handler(warning);
      // }
    }),
    babel({
      babelrc: false,
      presets: ["@babel/preset-env"],
      // plugins: ['external-helpers'],
      // externalHelpers: true,
      exclude: 'node_modules/**'
    }),
    terser()
  ]
};
