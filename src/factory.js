import {URLS} from './scripts/URLs/urls.js'
import {Get} from './scripts/requests.js'


const CURRENT_WEATHER = Get(URLS.currentConditions)
const CURRENT_FORECAST = Get(URLS.currentForecast)
const WEB_CAMS = Get(URLS.webCams)


export {CURRENT_WEATHER, CURRENT_FORECAST, WEB_CAMS}
