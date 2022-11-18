javascript: (function () {
  var bodyEle = document.querySelector("body");
  bodyEle.setAttribute(
    "contenteditable",
    String(!(bodyEle.getAttribute("contenteditable") === "true" ? true : false))
  );
  bodyEle.setAttribute("spellcheck", "false");
})();
