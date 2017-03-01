'use strict'

import * as WUND from './functions.js'
import {buildNode} from './dom-builders.js'
import {temperatures} from './charts.js'
import {URLS} from './urls.js'
// WUND.weatherNow()
// WUND.twoDayForecast()
// WUND.trinityLaneCam()
let highs = fetch(URLS.currentForecast)
.then(res => res.json())
.then(res => res.forecast.simpleforecast.forecastday.map(d => d.high.fahrenheit))

console.log(highs)
// let lows = WUND.tenDayLows()
// let storedHighs = highs.map(temp => window.localStorage.setItem(highs.indexOf(temp), temp))
// console.log(storedHighs)



buildNode('div', 'Here\'s today\'s forecast!', 'temp')
