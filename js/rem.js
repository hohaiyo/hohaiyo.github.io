(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
<<<<<<< HEAD
      docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
=======
      docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
>>>>>>> wcy
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
