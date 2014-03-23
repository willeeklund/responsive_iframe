/**
 * Script inside the iframe, the child frame
 */
(function (window, document) {
  var oldHeight = 0;
  setInterval(function() {
    var height = document.body.clientHeight;
    if (oldHeight != height) {
      parent.postMessage(JSON.stringify( {iframeid:window.location.hash, height:height} ), "*");
      oldHeight = height;
    }
  }, 100);
})(window, document);
