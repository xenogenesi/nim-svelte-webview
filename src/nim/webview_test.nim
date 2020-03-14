# sudo apt install libwebkit2gtk-4.0-dev

import
  webview,
  os

# const ui = "data:text/html,<h1>Nim</h1><input id='data'><button onclick=api.cb(document.querySelector('#data').value) >OK</button>"

#let cwd = getCurrentDir()
#setCurrentDir("../../public")
setCurrentDir("public")
let cwd = getCurrentDir()
let index_url = "file://" & cwd & "/index.html" # & absolutePath("../../public/index.html")
#echo url.repr
let webviewindow = newWebView("NimSvelteWebview", debug = true, url = index_url)

webviewindow.bindProcs"api":
  proc cb(data: string) = (proc = echo data)()

webviewindow.run()
webviewindow.exit()
