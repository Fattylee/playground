const yargs = require('yargs');
// const geo= require('./geocode/geocode');
const geo = require('./playground/geocode');
const weather = require('./weather/weather');

const argv = yargs
              .options({
                a: {
                  describe: 'Address of the location',
                  string: true,
                  demand: true,
                  alias: 'address'
                }
              })
              .help()
              .alias('help', 'h')
              .argv;

geo.getLocation(argv.a, (err, res) => {
/*  if (err) return console.log(err);
  console.log('Address:', res.address);
  console.log('Latitude:', res.latitude);
  console.log('Longitude:', res.longitude);
 
  weather.getWeather(res.latitude, res.longitude, (errMessage, weatherRes) => {
    if (errMessage) return console.log(errMessage);
    
    console.log(JSON.stringify(weatherRes, undefined, 2));
    
  }); */
})
.then(({address, latitude, longitude}) => {
  console.log('Address:', address);
  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);
  
  weather.getWeather(latitude, longitude, (errMessage, weatherRes) => {
    if (errMessage) return console.log(errMessage);
    
    console.log(JSON.stringify(weatherRes, undefined, 2));
  });
})
.catch(console.log);
// something else
