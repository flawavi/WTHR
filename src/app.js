import {GetCurrentTemp} from './scripts/requests'
import {WU_KEY} from '../keys/WUKeys'


let weatherData = GetCurrentTemp(`http://api.wunderground.com/api/${WU_KEY}/conditions/q/TN/Nashville.json`)
weatherData.then(data => {
  let jsonResponse = JSON.parse(data),
  temp_f = jsonResponse["current_observation"]["temp_f"],
  temp_c = jsonResponse["current_observation"]["temp_c"],
  tempEl = document.querySelector('.temp')
  tempEl.innerHTML = `It is currently ${temp_f} degrees F, or ${temp_c} degrees C.`
  console.log(data)
})
weatherData.catch(error => console.error(error))
