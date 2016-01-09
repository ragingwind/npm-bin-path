# npm-bin-path [![Build Status](https://travis-ci.org/ragingwind/npm-bin-path.svg?branch=master)](https://travis-ci.org/ragingwind/npm-bin-path)

> Get path of npm bin directory for executing locally and globally


## Install

```
$ npm install --save npm-bin-path
```


## Usage

```js
const npmBinPath = require('npm-bin-path');

npmBinPath().then(p => {
	//=> ['./node_modules/.bin', '/.nvm/versions/node/v4.1.2/bin']
});

```


## API

### npmBinPath()

return array of npm paths.

## License

MIT © [ragingwind](http://ragingwind.me)
