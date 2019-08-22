// const url = 'https://api.darksky.net/forecast/b3598ea0213449bb7b1c866058f9e1e6/37.8267,-122.4233?units=si'

// request({ url: url, json: true}, (error, response) => {
//     // console.log(response.body.timezone)
//     if(error){
//         console.log('Unable to connect to Weather Service!')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location')
//     }
//     else{
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

// //GeoCoding

// const urlw = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFyOTciLCJhIjoiY2p6ZHBuOHF0MDBkcjNwcGg4bXo2cXplZCJ9.pJLqB0xIoca7Ry98jcB3Eg'

// request({url: urlw, json:true}, (error, response) => {
//     if(error){
//         console.log('Unable to Connect to the Location Services')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to fetch location')
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const Longitude = response.body.features[0].center[0]
//     console.log('Latitude is : ' + latitude + ' Longitude is: ' + Longitude)
//     }
// })
