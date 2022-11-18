// It has been awhile since I wrote this, but I feel like I owe someone a shoutout on Stack overflow for teaching me how to map over classes.

javascript: document.getElementById("hireme").remove();
document.getElementById("hot-network-questions").remove();
[...document.getElementsByClassName("left-sidebar--sticky-container")].map(
  (ele) => ele && ele.remove()
);
[...document.getElementsByClassName("s-sidebarwidget")].map(
  (ele) => ele && ele.remove()
);
