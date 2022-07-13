const gifFinder = require('./index').gifFinder

async function getImage() {
    let res = await gifFinder('hug')

    console.log(res)
}

getImage()
