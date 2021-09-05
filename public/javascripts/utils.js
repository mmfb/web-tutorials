async function includeHtml(file,id,homePath) {
    var response = await fetch(file);
    var html = await response.text();
    document.getElementById(id).innerHTML=html.replace(/{path}/g,homePath)
}

function showHide(show,hide,display) {
    if ( document.getElementById(show).style.display == "none") {
        document.getElementById(show).style.display = display;
        if (hide)
            document.getElementById(hide).style.display = "none";    
    } else {
        document.getElementById(show).style.display = "none";
    }
}