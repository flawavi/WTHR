import {Get} from './scripts/requests.js'
import {URLS} from './scripts/URLs/urls.js'

let tempEl = document.querySelector('.temp'),
    forecast = document.querySelector('.forecast')

let currentWeather = Get(URLS.currentConditions)
currentWeather.then(data => {
  let jsonResponse = JSON.parse(data)

  let temp_f = jsonResponse["current_observation"]["temp_f"],
      temp_c = jsonResponse["current_observation"]["temp_c"]

  tempEl.innerHTML = `It is currently ${temp_f} degrees F, or ${temp_c} degrees C.`
  console.log(data)
})
currentWeather.catch(error => console.error(error))

let currentForecast = Get(URLS.currentForecast)
currentForecast.then(data => {
  let parseData = JSON.parse(data)
  console.log(parseData)
  let lowToday = parseData['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit']
  let highToday = parseData['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit']

  forecast.innerHTML = `The high for Nashville today is ${highToday} degrees, and the low is ${lowToday} degrees.`

})
currentForecast.catch(error => console.error(error))
