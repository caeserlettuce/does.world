/*
  https://www.youtube.com/channel/UC7GS0Pyg8J8xEkuLZwEYLyA

    https://simpleicons.org/

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
    "doefooterlogo",
    "doecoin",
    "title-main",
    "socials",
]

var disable_rightclick = [  // same as previous but for disabling right click (nft websites, take notes)
    "header-logo",
    "header-burger",
    "sm-arrow",
    "doefooterlogo",
    "doecoin",
    "title-main",
    "socials",
    
]



for (i in disable_dragging) {
    document.getElementById(disable_dragging[i]).onmousedown = function() { return false; };
}

for (i in disable_rightclick) {
    document.getElementById(disable_rightclick[i]).addEventListener('contextmenu', event => event.preventDefault());
}

// i definitely didnt steal this code from benson.lol

var bloop_prog = false;

var mario = new Audio("../assets/mario.mp3");

function bloop() {
    if (bloop_prog == false) {
        bloop_prog = true;
        mario.play();
        document.getElementById("title-main").style.animationName = "title-bloop";
        setTimeout(() => {
            document.getElementById("title-main").style.animationName = "";
            bloop_prog = false;
        }, 500);
    }
}



init_sitemenu();

window.onresize = on_resize

on_resize();