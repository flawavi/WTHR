let xhr = new XMLHttpRequest();
xhr.open('GET', `http://api.wunderground.com/api/${WUKey}/conditions/q/TN/Nashville.json`);
xhr.send(null);

xhr.onreadystatechange = function () {
  const DONE = 4 // readyState 4 means the request is done.
  const OK = 200 // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK){
      let data = xhr.responseText
      console.log(data); // 'This is the returned text.'
    }
  } else {
    let status = xhr.status
    console.log('Error: ' + status); // An error occurred during the request.
  }
}
