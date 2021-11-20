//API KEY = coinrankingb2c724462ca9093fb0b7f399aa6b4eb95e6ee8774e20011b

var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankingb2c724462ca9093fb0b7f399aa6b4eb95e6ee8774e20011b";

fetch (`${proxyUrl}${baseUrl}`, {
    method: 'GET',
    headers: {
        'Content-type' : 'application/json',
        'x-access-token' : `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)

            let coinsData = json.data.coins

            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            //For Loop Starts
            coinsData.forEach((coins) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coins.btcPrice} </td>`;
                cryptoCoins += `<td> ${coins.rank} </td>`;
                cryptoCoins += `<td> ${coins.tier} </td>`;
                cryptoCoins += `<td> ${coins.name} </td>`;
                cryptoCoins += `<td>$${Math.round(coins.price)} </td>`;
                cryptoCoins += `<td> ${coins.symbol} </td>`; "<tr>"
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error) => {
    console.log(console.error)
})



//Interactive Shapes
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX *  scaleFactor;
    const y = event.clientY *  scaleFactor
    console.log(x,y)

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booInt}px, ${y * booInt}px)`
    }
}