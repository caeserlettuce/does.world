
// a list of init functions essentially, shared through all pages so i dont have to copy and paste new code to EVERY SUBDIRECTORy SITE AAAAAAAA

// as you can see, im being smart

// this file requires db.js as well so future jesse remember that

var sitemenu_open = false;
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var header_logo_big = true;
var big_logo_size = 0;
var sitem = document.getElementById("headermenu");
var first_load = true;
var scroll_rn = 0;
var backytm = document.getElementById("backy");
var scroll_factor = 50;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// logo stuff
var logo1_width = document.getElementById("logo_oes").clientWidth;
var logo2_width = document.getElementById("logo_orld").clientWidth;

document.getElementById("logo-sizefix").innerHTML = `#logo_oes { width: ${logo1_width}px;} #logo_orld {width: ${logo2_width}px;}`;


function init_sitemenu() {

    var sitemenu = document.getElementById("sitemenu");

    var final_html = "";

    for (i in sitemenu_links) {

        final_html += `<p class="menusection">${i}</p>`;


        for (e in sitemenu_links[i]) {

            var item = sitemenu_links[i][e];
            var url = 'https://does.world';
            var txt = "[someone scewed up on this db entry lmao]";
            if (item.url) {
                url = `${item.url}`;
            }
            if (item.text) {
                txt = `${item.text}`;
            }
    
            final_html += `<p class="menutext"><a href="${url}">${txt}</a></p>`;
        }
    }

    sitemenu.innerHTML = final_html;
}

function toggle_sitemenu() {
    sitemenu_open = !sitemenu_open;
    if (sitemenu_open == true) {
        sitem.style.left = `0px`;
    } else {
        sitem.style.left = `-${sitem.clientWidth}px`;
    }
}

function on_resize() {
    // on resize

    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    var header = document.getElementById("header");
    var header_badge = document.getElementById("header-logo");
    var logo_oes = document.getElementById("logo_oes");
    var logo_orld = document.getElementById("logo_orld");

    if (header_logo_big == true) {
        big_logo_size = header_badge.clientWidth;
    }


    if ( big_logo_size + 400 > windowWidth) {
        //uh oh!! the logo thing is too big!!

        if (header_logo_big == true) {
            //header_badge.src = "../assets/dw_logo.png";
            document.getElementById("sm-arrow").style.right = "10px";
            document.getElementById("header-menu-style").innerHTML = ".headermenu { width: 100vw;} .shrink-logo {width: 0px; transform: translateX(-1px)} .footer {padding-bottom: 15px;} .footerdiv {margin-top: 1rem;}";
            logo_oes.style.width = "0px";
            logo_orld.style.width = "0px";
            header_logo_big = false;
        }
    } else {
        if (header_logo_big == false) {
            //header_badge.src = "../assets/doesworld_logo.png";
            document.getElementById("header-menu-style").innerHTML = "";
            document.getElementById("sm-arrow").style.right = "";
            logo_oes.style.width = "";
            logo_orld.style.width = "";
            header_logo_big = true;
        }
    }

    var new_thing = ( header.clientWidth - header_badge.clientWidth ) / 2;

    header_badge.style.left = `${new_thing}px`;

    if (sitemenu_open == false) {
        if (header_logo_big == false) {
            sitem.style.left = `calc( -${sitem.clientWidth}px - 200px)`;
        } else {
            sitem.style.left = `calc( -${sitem.clientWidth}px - 200px)`;
        }
    }
    
    



    if (first_load == true) {
        first_load = false;
    }
}

function on_scroll() {
    scroll_rn = window.scrollY;

    var porcent = 100 + (scroll_rn / scroll_factor);

    var tm = (scroll_rn / scroll_factor);

    //backytm.style.transform = `scale(${porcent}%, ${porcent)}%)`;

    console.log(tm);
    
    if (tm < 6) {
        backytm.style.filter = `blur(${tm}px)`;
    } else {
        backytm.style.filter = `blur(6px)`;
    }

   


}


var img_int = getRandomInt(1, 17);

console.log(img_int);

backytm.style.backgroundImage = `url("../img/${img_int}.png")`;
document.getElementById("backy2").style.backgroundImage = `url("../img/${img_int}.png")`;
document.getElementById("backy-text").innerHTML = `image: ${background_info[img_int]} on DoeSMP`;


window.onresize = on_resize

window.onscroll = on_scroll

on_resize();


on_scroll();