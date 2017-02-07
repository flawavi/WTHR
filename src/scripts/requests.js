function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (xhr.status == 200) {
        // Resolve the promise with the response text
        console.log(xhr.responseText)
        resolve(xhr.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error

        reject(Error(xhr.statusText));
      }
    };

    // Handle network errors
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    xhr.send();
  });
}

// get(`http://api.wunderground.com/api/${WUKey}/conditions/q/TN/Nashville.json`)
