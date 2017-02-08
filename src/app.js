import {Get} from './scripts/requests'
import {WU_KEY} from '../keys/WUKeys'

let tempEl = document.querySelector('.temp')
tempEl.innerHTML = Get(`http://api.wunderground.com/api/${WU_KEY}/conditions/q/TN/Nashville.json`)
