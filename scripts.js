"use strict";


/*Commissions page popup script*/
function popup(id) {

    var element = document.getElementById(id);
    document.getElementById("background").style.display = "block";
    element.style.display = "block";

}

function closePopup() {
    document.getElementById("background").style.display = "none";
    document.getElementById("sketch").style.display = "none";
    document.getElementById("chibi").style.display = "none";
    document.getElementById("lined").style.display = "none";
    document.getElementById("render").style.display = "none";
    document.getElementById("painted").style.display = "none";
}


/*Portflio page popup script*/
function closeArtbox() {
    document.getElementById("background").style.display = "none";
}

function showArtbox(ele, art, title) {

    //Set background display
    document.getElementById("background").style.display = "block";
    
    //Set artbox art
    var url = "url('../portfolio/gallery/" + art + "')";
    document.getElementById("box").style.backgroundImage = url;
    
    //Set title 
    document.getElementById("title").innerHTML = title;
        
    //set tags
    var taglist = ele.className.replace(/ /g, " #");
    taglist = '#' + taglist;
    document.getElementById("tags").innerHTML = taglist;
    
    //set description
    var desc = ele.getAttribute("caption");
    document.getElementById("desc").innerHTML = desc;
    
}

/*Portfolio page tag script*/