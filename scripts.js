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
    var url = "url('gallery/" + art + "')";
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

function checkHash() {
    var hashTag = window.location.hash;
    
    if (hashTag === null) { //If no anchor, do nothing
        return;
    } else if (hashTag.startsWith("#~")) { //if starts with ~, is art and open art
            var artTag = hashTag.replace("#~", "");
            var ele = document.getElementById(artTag);
            ele.click();
        } else { //if is tag, activate tag
            var ele = document.getElementById(hashTag);
            toggleTag(ele);
        }

}

/*SK page scripts*/
function openWidget(id) {
    var ele = document.getElementById(id);
    ele.style.height = "100%";
    ele.style.padding = "10% 8% 4%";
    ele.style.opacity = "1";
    ele.style.display = "block";
    ele.style.zIndex = "5";
}

function closeWidget(id) {
    var ele = document.getElementById(id);
    ele.style.height = "0";
    ele.style.padding = "0";
    ele.style.opacity = "0";
    ele.style.zIndex = "-1";
}

function myFunction() {
  alert("function triggered");
}

