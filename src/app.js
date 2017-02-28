import {weatherNow, twoDayForecast, trinityLaneCam, tenDayHighs, tenDayLows} from '../src/functions.js'
import {buildNode} from '../src/dom-builders.js'
// weatherNow()
// twoDayForecast()
// trinityLaneCam()
let highs = tenDayHighs()
let lows = tenDayLows()

console.log(highs, "TEN_DAY_HIGHS", lows, "TEN_DAY_LOWS")

buildNode('div', 'Here\'s today\'s forecast!', 'temp')
