# Nim Svelte Webview

Nim *desktop app* using Svelte into a webview (libwebkit2gtk)

## prerequisites

node npm

## install nim and webview gtk

```
sudo apt install nim libwebkit2gtk-4.0-dev # tested on debian
```

## install nim webview

```sh
nimble install webview
```

## install node deps

```sh
npm install
```

## rollup watch (html/js/svelte/css)

js/svelte/css files are generated into `public/`

```sh
npm start
```

## rollup build (svelte+nim)

```sh
npm run build

npm run build:svelte # build only html/js/svelte/css
npm run build:nim    # build only nim and run it
```

---

## Todo

- [ ] support browser sync?
  - [ ] use nim http server on localhost instead of `file://`? (websocket?)
- [ ] support sass (postcss?)
- [ ] support dev/prod environments
  - [ ] support ejs for index.html
- [ ] add css framework (bootstrap? spectre? foomantic-ui? material?)
- [ ] fix .map loading? (see webview console)
- [ ] support windows/macosx