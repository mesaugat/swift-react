# reactd

[![NPM Version](https://img.shields.io/npm/v/reactd.svg?style=flat-square)](https://www.npmjs.com/package/reactd)

<div align="center">
<b>Quick and dirty way to run React.</b>
</div>

Note: `reactd` is strictly for development usage only and is helpful for quick prototyping and testing.

## Prerequisite

* [npx](https://github.com/npm/npx)

## Usage

Create an `index.js` file with a React component.

```js
// index.js

function App() {
  return (
    <h1>Hello reactd</h1>
  );
}

// Caution: You don't need to import React or ReactDOM for reactd to work.
ReactDOM.render(<App />, document.getElementById('root'));
```

Finally, run this command from the exact place where you created the `index.js` file.

```bash
$ npx reactd
```

This command will run a `webpack-dev-server` and serve your bundle.

## Motivation

Sometimes testing a small React quirkiness is too cumbersome.

## Caveats

* The main js file should be named `index.js`.
* The main component should be rendered to the `#root` DOM element.
* You do not need to import `React` or `ReactDOM` as it is automatically loaded by webpack under the hood.
* Works only with latest `React` and `ReactDOM` packages.

## License

[MIT](LICENSE)
