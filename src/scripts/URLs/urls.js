import {WU_KEY} from '../../../keys/WUKeys.js'

const URLS = {
  currentConditions: `http://api.wunderground.com/api/${WU_KEY}/conditions/q/TN/Nashville.json`,
  currentForecast: `http://api.wunderground.com/api/${WU_KEY}/forecast10day/q/TN/Nashville.json`,
  webcams: `http://api.wunderground.com/api/${WU_KEY}/webcams/q/TN/Nashville.json`
}

export {URLS}
