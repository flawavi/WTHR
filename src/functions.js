'use strict'

import {CURRENT_WEATHER, CURRENT_FORECAST, WEB_CAMS} from './factory.js'
import {SELECTORS} from './selectors.js'



function weatherNow(){
  CURRENT_WEATHER.then(data => {
    let weather = JSON.parse(data),
        temp_f = weather["current_observation"]["temp_f"],
        temp_c = weather["current_observation"]["temp_c"]
    console.log(weather)

    SELECTORS.tempEl.innerHTML = `It is currently ${temp_f} degrees.`
  }).catch(error => console.error(error))
}

function twoDayForecast(){
  CURRENT_FORECAST.then(data => {
    let nashForecast = JSON.parse(data),
    dayOfWeek = nashForecast['forecast']['simpleforecast']['forecastday'][0]['date']['weekday'],
    lowToday = nashForecast['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit'],
    highToday = nashForecast['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit'],
    tmrwHigh = nashForecast['forecast']['simpleforecast']['forecastday'][1]['high']['fahrenheit'],
    tmrwLow = nashForecast['forecast']['simpleforecast']['forecastday'][1]['low']['fahrenheit'],
    chanceRainUrl = nashForecast['forecast']['simpleforecast']['forecastday'][0]['icon_url']
    console.log(nashForecast)

    SELECTORS.forecastEl.innerHTML = `The high for Nashville today - ${dayOfWeek} - is ${highToday} degrees, and the low is ${lowToday} degrees. Tomorrow's high will be ${tmrwHigh}, and the low will be ${tmrwLow}`

  }).catch(error => console.error(error))
}

function tenDayHighs(){
  let highs = []
  CURRENT_FORECAST.then(weather => {
    let weatherData = JSON.parse(weather)
    for(let i = 0; i < 10; i++){
      highs.push(weatherData['forecast']['simpleforecast']['forecastday'][i]['high']['fahrenheit'])
    }
  }).catch(error => console.error(error))
  return highs
}

function tenDayLows(){
  let lows = []
  CURRENT_FORECAST.then(weather => {
    let weatherData = JSON.parse(weather)
    for(let i = 0; i < 10; i++){
      lows.push(weatherData['forecast']['simpleforecast']['forecastday'][i]['low']['fahrenheit'])
    }
  }).catch(error => console.error(error))
  return lows
}

function trinityLaneCam(){
  WEB_CAMS.then(data => {
    let webCamData = JSON.parse(data)
    console.log(webCamData)
    let iFrameUrl = webCamData.webcams['29'].CAMURL
    SELECTORS.webCamEl.innerHTML = `<iframe class="iframe-webcam col-md-12" src="${iFrameUrl}" alt="webcam"></iframe>`
  })
}

export {weatherNow, twoDayForecast, trinityLaneCam, tenDayHighs, tenDayLows}
