# generator-react-starter-app [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for Generating App to use with react-starter-app

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-starter-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-starter-app
```

Then generate your new project:

```bash
yo react-starter-app
webpack
node app.js
```

Adding a page (When queried for overwrite always say yes)

```bash
yo react-starter-app:page test/test-page && yo react-starter-app:updateIndex

```

Adding a component (When queried for overwrite always say yes)

```bash
yo react-starter-app:component test/test-page && yo react-starter-app:updateIndex

```



## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Ravi Kumar Hamsa]()


[npm-image]: https://badge.fury.io/js/generator-react-starter-app.svg
[npm-url]: https://npmjs.org/package/generator-react-starter-app
[travis-image]: https://travis-ci.org/ravihamsa/generator-react-starter-app.svg?branch=master
[travis-url]: https://travis-ci.org/ravihamsa/generator-react-starter-app
[daviddm-image]: https://david-dm.org/ravihamsa/generator-react-starter-app.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ravihamsa/generator-react-starter-app
