async function includeHtml(file,id,homePath) {
    var response = await fetch(file);
    var html = await response.text();
    document.getElementById(id).innerHTML=html.replace(/{path}/g,homePath)
}