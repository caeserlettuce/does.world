/*
  https://www.youtube.com/channel/UC7GS0Pyg8J8xEkuLZwEYLyA

  blue
  #1068a9

  grey
  #6a7682

  dark grey
  #231f20

*/

var disable_dragging = [    // list of element IDs for elements that i dont want to be able to be dragged (like how you can drag an image from a page into a new tab)
    "header-logo",
    "header-burger",
    "sm-arrow",
]

var disable_rightclick = [  // same as previous but for disabling right click (nft websites, take notes)
    "header-logo",
    "header-burger",
    "sm-arrow",
    
]



for (i in disable_dragging) {
    document.getElementById(disable_dragging[i]).onmousedown = function() { return false; };
}

for (i in disable_rightclick) {
    document.getElementById(disable_rightclick[i]).addEventListener('contextmenu', event => event.preventDefault());
}

// i definitely didnt steal this code from benson.lol






init_sitemenu();

window.onresize = on_resize

on_resize();