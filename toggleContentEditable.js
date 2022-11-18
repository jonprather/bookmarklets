// This script is for making a webpages text editable.
// It allows for toggling the feature on or off as needed.
// Toggling the feature off is useful in certain cases such as when links break.
// This script also sets spellcheck to false because it can be annoying.

javascript: (function () {
  var bodyEle = document.querySelector("body");
  bodyEle.setAttribute(
    "contenteditable",
    String(!(bodyEle.getAttribute("contenteditable") === "true" ? true : false))
  );
  bodyEle.setAttribute("spellcheck", "false");
})();
