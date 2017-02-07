let tempEl = document.querySelector('.temp')
tempEl.innerHTML = get(`http://api.wunderground.com/api/${WUKey}/conditions/q/TN/Nashville.json`)
