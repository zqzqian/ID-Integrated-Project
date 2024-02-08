//this code waits for 4 seconds after the current page loads, logs a message to the console, 
//and then redirects the browser to the "home.html" page.

console.log('Need to wait');

setTimeout(function() {
  console.log('setting window location');
  window.location.href = "home.html";
}, 4000);