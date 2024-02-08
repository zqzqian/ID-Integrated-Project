console.log('Need to wait');

setTimeout(function() {
  console.log('setting window location');
  window.location.href = "home.html";
}, 4000);