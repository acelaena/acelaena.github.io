/*Open-close popup script*/
function popup(id) {
    "use strict";
    var element = document.getElementById(id);
    document.getElementById("background").style.display = "block";
    element.style.display = "block";

}

function closePopup() {
    "use strict";
    document.getElementById("background").style.display = "none";
    document.getElementById("sketch").style.display = "none";
    document.getElementById("chibi").style.display = "none";
    document.getElementById("lined").style.display = "none";
    document.getElementById("render").style.display = "none";
    document.getElementById("painted").style.display = "none";
}

function closeArtbox() {
    "use strict";
    document.getElementById("background").style.display = "none";
}

function showArtbox(art, title, description, tags) {

    "use strict";
    //Set background display
    document.getElementById("background").style.display = "block";
    
    //Set artbox art
    var url = "url('../portfolio/gallery/" + art + "')";
    document.getElementById("box").style.backgroundImage = url;
    
    
    //Set title 
    document.getElementById("title").innerHTML = title;
    
    //set description
    document.getElementById("desc").innerHTML = description;
    
    //set tags
    document.getElementById("tags").innerHTML = tags;
    
}