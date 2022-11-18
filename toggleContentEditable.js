// create a new bookmark, post this code in the URL field of the bookmark
// click it as needed
javascript: (function () {
  var bodyEle = document.querySelector("body");
  bodyEle.setAttribute(
    "contenteditable",
    String(!(bodyEle.getAttribute("contenteditable") === "true" ? true : false))
  );
  bodyEle.setAttribute("spellcheck", "false");
})();
