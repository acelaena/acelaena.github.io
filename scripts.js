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
function toggleImages(t, show) {
    var item, i;
    if (document.getElementById("gallery").getAttribute("initial") === "true") {
        document.getElementById("gallery").setAttribute("initial", "false");
        
        //hide all
        var viewable = document.querySelectorAll('[hidden="false"]');
        for (i = 0; i < viewable.length; i++) {
            item = viewable[i];
            item.setAttribute("hidden", "true");
        }
    }
    //then show or hide all with current tag
    
    var toToggle = document.getElementsByClassName(t);
    if (show) { //show
        for (i = 0; i < toToggle.length; i++) {
            item = toToggle[i];
            item.setAttribute("hidden", "false");
        }
    } else { //hide
        for (i = 0; i < toToggle.length; i++) {
            item = toToggle[i];
            item.setAttribute("hidden", "true");
        }
    }
    
}

function toggleTag(ele) {
    var status;
    if (ele.getAttribute("active") === "false") {
        ele.setAttribute("active", "true");
        status = true;
    } else {
        ele.setAttribute("active", "false");
        status = false;
    }
    
    var tag = ele.innerText;
    tag = tag.replace('#', '');
    
    toggleImages(tag, status);
}

function showAll(btn) {
    var i, item;
    if (document.getElementById("gallery").getAttribute("initial") === "true") {
        document.getElementById("gallery").setAttribute("initial", "false");

    }
    
    var inactiveTag = document.querySelectorAll('[active="false"]');
    for (i = 0; i < inactiveTag.length; i++) {
            item = inactiveTag[i];
            item.setAttribute("active", "true");
        }
    btn.setAttribute("active", "false");
   
    var viewable = document.querySelectorAll('[hidden="true"]');
    for (i = 0; i < viewable.length; i++) {
            item = viewable[i];
            item.setAttribute("hidden", "false");
        }
}

function checkHash(){
    
    var hashTag = window.location.hash;
    
    if (hashTag == null){ //If no anchor, do nothing
        return;
    }
    else { //if anchor exists, activate tag
        var ele = document.getElementById(hashTag);
        toggleTag(ele);
    }

}