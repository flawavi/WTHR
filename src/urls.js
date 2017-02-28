'use strict'

import {WU_KEY} from '../../keys/WUKeys.js'

export const URLS = {
  currentConditions: `http://api.wunderground.com/api/${WU_KEY}/conditions/q/TN/Nashville.json`,
  currentForecast: `http://api.wunderground.com/api/${WU_KEY}/forecast10day/q/TN/Nashville.json`,
  webCams: `http://api.wunderground.com/api/${WU_KEY}/webcams/q/TN/Nashville.json`
}
