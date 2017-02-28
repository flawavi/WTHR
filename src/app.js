'use strict'

import * as WUND from './functions.js'
import {buildNode} from './dom-builders.js'
import {weatherChart} from './charts.js'
// WUND.weatherNow()
// WUND.twoDayForecast()
// WUND.trinityLaneCam()
let highs = WUND.tenDayHighs()
let lows = WUND.tenDayLows()

console.log(highs, "TEN_DAY_HIGHS", lows, "TEN_DAY_LOWS")

buildNode('div', 'Here\'s today\'s forecast!', 'temp')
