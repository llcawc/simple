# Simple starter template for the front-end

_Revision 0.0.3 from 2022.01.07_

Starter uses only npm scripts as dependencies for front-end's works. On board: HTML-Minifier, SassDark, PostCSS witch Autoprefixer and Nanocss plugins, Rollup witch JSON and Terser plufins, Imagemin. In addition you can load a library of jQuery, bootstrap and bootstap-icons.

## Getting started

Use the [npm](https://www.npmjs.com/) package manager:
```
npm install
```

To update dependencies, just use the [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) package.

Default directory:
- For development source files: `src`,
- For server and production: `dist` (will be created after run "dev" or "build")

## Command

### Develop in browser (default 'chrome', var: 'firefox', 'msedge', 'opera' etc.), watching files and live server reload.
_You can open the link too in any browser: `http://localhost:3000`_
```
npm run dev
```

### Building files for production.
```
npm run build
```

### Run server (if "dist" exist :) in browser.
_Also you can open in any browser: `http://localhost:3000`_
```
npm run serve
```

## NPM Dependencies for development
If you need to develop [bootstrap](https://getbootstrap.com/), [jquery](https://jquery.com/) or [bootstrap-icons](https://icons.getbootstrap.com/) libraries, you can install or update them using the npm package manager.Install the [node](https://nodejs.org) and npm, type this command into the wsl or mac terminal and find all packages in the node_modules directory.
```
npm install jquery bootstrap bootstrap-icons
```

----

&copy;&nbsp;2021 [llcawc](https://github.com/llcawc), all rights reserved. Made&nbsp;with&nbsp;<span style="color: #e60f0a;">&#10084;</span>&nbsp;for&nbsp;the&nbsp;best&nbsp;architecture.
