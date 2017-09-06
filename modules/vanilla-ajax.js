function fetchData(method, api, callback, payload = null) {
  let xhr = new XMLHttpRequest();

  xhr.open(method, api, true);
  xhr.send(payload);

  xhr.onreadystatechange = function() {
    let DONE = 4;
    let OK = 200;

    if (xhr.readyState === DONE) {
      if (xhr.status == OK) {
        let data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  }
}

module.exports = fetchData;
