/**
 * Script for parent frame, listening to messages from the iframe, to update iframe height
 */
(function () {
  var listen = function (e, t, f) {
    return typeof e.addEventListener === "function" ? e.addEventListener(t, f, false) : e.attachEvent('on' + t, f);
  };
  // Listen for events from the projects themselves
  listen(window, 'message', function (e) {
    var data = JSON.parse(e.data);
    if (!data.hasOwnProperty('iframeid')) {
      return;
    }
    if (data.iframeid.substr(0, 1) === '#') {
      data.iframeid = data.iframeid.substr(1);
    }
    // Find the iframe with updated height
    var iframe = document.getElementById(data.iframeid);
    if (!iframe ) {
      return;
    }
    // Update iframe height
    if (data.hasOwnProperty('height')) {
      iframe.style.height = parseInt(data.height, 10) + 'px';
    }
  });
})();
