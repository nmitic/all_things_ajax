function fetchData(method, api, payload = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, api, true);
    xhr.send(payload);

    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);

  })
}

module.exports = fetchData;
