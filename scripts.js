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

/*Portflio page generation script
`
    <div role="shadowbox" hidden="${hidden}"
        style="background-image: url(thumbs/${filename}.jpg)"
        onclick="showArtbox(this, '${filename}.PNG', '${artname}')"
        class="${tagline}"
        date="${drawdate}"
        >   
    </div>
`
*/
function doSomething() {
    //get lines
    var b = document.getElementById("csv").innerHTML.trim().split("\n");
    
    //c0 = file name; c1 = art name; c2 = tags; c3 = date; c4 = hidden
    var c;
    var template;
    var html ="";
    
    // generate html
    for (var i = 0; i < b.length; i++){
        //if empty line
        if (b[i] == null || b[i].trim() === ""){ continue; }
        
        //extract elements, plug n play
        c = b[i].split(", ");
        template = `<div role="shadowbox" hidden="${c[4]}"
                        style="background-image: url(thumbs/${c[0]}.jpg)"
                        onclick="showArtbox(this, '${c[0]}.PNG', '${c[1]}')"
                        class="${c[2]}"
                        date="${c[3]}"
                        id="${c[0]}"
                        >
                            <div class="overlay">
                                <h1>${c[1]}</h1>
                            </div>
                        </div>`;
        html += template;
    }
    
    document.getElementById("gallery").innerHTML = html;   
    checkHash();
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
    var postdate = ele.getAttribute("date");
    document.getElementById("date").innerHTML = postdate;
}

/*Portfolio page tag script*/
function toggleImages(t, show) {
    var item, i;
    if (document.getElementById("gallery").getAttribute("initial") === "TRUE") {
        document.getElementById("gallery").setAttribute("initial", "FALSE");
        
        //hide all
        var viewable = document.querySelectorAll('[hidden="FALSE"]');
        for (i = 0; i < viewable.length; i++) {
            viewable[i].setAttribute("hidden", "TRUE");
        }
    }
    
    //then show or hide all with current tag
    var toToggle = document.getElementsByClassName(t);
    if (show) { //show
        for (i = 0; i < toToggle.length; i++) {
            toToggle[i].setAttribute("hidden", "FALSE");
        }
    } else { //hide
        for (i = 0; i < toToggle.length; i++) {
            toToggle[i].setAttribute("hidden", "TRUE");
        }
    }
    
}

function toggleTag(ele) {
    var status;
    if (ele.getAttribute("active") === "FALSE") {
        ele.setAttribute("active", "TRUE");
        status = true;
    } else {
        ele.setAttribute("active", "FALSE");
        status = false;
    }
    
    var tag = ele.innerText;
    tag = tag.replace('#', '');
    
    toggleImages(tag, status);
}

function showAll(btn) {
    var i, item;
    document.getElementById("gallery").setAttribute("initial", "FALSE");

    var inactiveTag = document.querySelectorAll('[active="FALSE"]');
    for (i = 0; i < inactiveTag.length; i++) {
        inactiveTag[i].setAttribute("active", "TRUE");
    }
    btn.setAttribute("active", "FALSE");
   
    var viewable = document.querySelectorAll('[hidden="TRUE"]');
    for (i = 0; i < viewable.length; i++) {
        viewable[i].setAttribute("hidden", "FALSE");
    }
}

function checkHash() {
    var hashTag = window.location.hash;
    
    if (hashTag === null) { //If no anchor, do nothing
        return;
    } else if (hashTag === "#all"){
        showAll(document.getElementById("all"));
    }    
    else if (hashTag.startsWith("#~")) { //if starts with ~, is art and open art
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
