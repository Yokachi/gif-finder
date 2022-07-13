function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function findGif(key) {
    if(!key) return 'no key defined'
    if(key !== key.toString()) return 'key must be a string'
    let linkarray = [];
    const DabiImages = require("dabi-images");
    const DabiClient = new DabiImages.Client();

    const url = `https://tenor.com/search/${key}-gifs`

    const matches = await DabiClient.custom.do(url, /<img.*?>/gm);
    int = 1
    for(link of matches){
        const test = link.split('src="')[1]
        const tests = `${test}`
        const URL = tests.split('"')[0]
        if(URL.startsWith('https')){
            linkarray.push(URL)
        }
    }
   
    var result = linkarray[getRandomInt(linkarray.length)]

    return result
}

module.exports = {
    findGif: findGif,
}
