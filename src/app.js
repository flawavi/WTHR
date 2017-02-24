import {CURRENT_WEATHER, CURRENT_FORECAST, WEB_CAMS} from '../src/factory.js'
import {tempEl, forecastEl, webCamEl} from '../src/scripts/selectors.js'
import {buildNode} from '../src/functions.js'

CURRENT_WEATHER.then(data => {
  let weather = JSON.parse(data),
      temp_f = weather["current_observation"]["temp_f"],
      temp_c = weather["current_observation"]["temp_c"]
  console.log(weather)

  tempEl.innerHTML = `It is currently ${temp_f} degrees.`
}).catch(error => console.error(error))

CURRENT_FORECAST.then(data => {
  let nashForecast = JSON.parse(data),
      dayOfWeek = nashForecast['forecast']['simpleforecast']['forecastday'][0]['date']['weekday'],
      lowToday = nashForecast['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit'],
      highToday = nashForecast['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit'],
      tmrwHigh = nashForecast['forecast']['simpleforecast']['forecastday'][1]['high']['fahrenheit'],
      tmrwLow = nashForecast['forecast']['simpleforecast']['forecastday'][1]['low']['fahrenheit'],
      chanceRainUrl = nashForecast['forecast']['simpleforecast']['forecastday'][0]['icon_url']
  console.log(nashForecast)

  forecastEl.innerHTML = `The high for Nashville today - ${dayOfWeek} - is ${highToday} degrees, and the low is ${lowToday} degrees. Tomorrow's high will be ${tmrwHigh}, and the low will be ${tmrwLow}`

}).catch(error => console.error(error))

WEB_CAMS.then(data => {
  let webCamData = JSON.parse(data)
  console.log(webCamData)
  let iFrameUrl = webCamData.webcams['29'].CAMURL
  webCamEl.innerHTML = `<iframe class="iframe-webcam col-md-12" src="${iFrameUrl}" alt="webcam"></iframe>`
})


buildNode('div', 'testing', 'temp')
