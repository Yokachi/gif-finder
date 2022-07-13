async function findGif(key) {
    const DabiImages = require("dabi-images");
    const DabiClient = new DabiImages.Client();

    const url = `https://tenor.com/search/${key}-gifs`

    const matches = await DabiClient.custom.do(url, /<img.*?>/gm);
    int = 1
    for(link of matches){
        const test = link.split('src="')[1]
        const tests = `${test}`
        const test2 = tests.split('"')[0]
        if(test2.startsWith('https')){
            console.log(test2)
        }
    }
}

module.exports = {
    findGif: findGif,
}