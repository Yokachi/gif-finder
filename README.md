# This module

## gifFinder allow you to find gif by one key word in js

<br>
<br>

## Import module

<br>

```js
const gifFinder = require('gif-finder').gifFinder
```

<br>

## Find gif
#### all function must be start with await ^^

<br>

```js
const gifFinder = require('gif-finder').gifFinder

async function getGif() {
    let res = await gifFinder('shearch')

    console.log(res)
}

getGif()
```
