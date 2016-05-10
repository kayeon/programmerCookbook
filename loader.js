// Helper function to load JSON files over the network.
function loadJSON(filename, callback) {
  var request = new XMLHttpRequest();
  request.overrideMimeType('application/json');
  request.open('GET', filename, true);
  request.onreadystatechange = function() {
    // TODO: Magic number. What is "4"?
    if (request.readyState == 4 && request.status == '200') {
      // Required use of an anonymous callback as .open will NOT return a value
      // but simply returns undefined in asynchronous mode
      callback(JSON.parse(request.responseText));
    }
  };
  request.send(null); // TODO: what is the "null" parameter for?
}
