async function includeHtml(file,id,homePath) {
    let response = await fetch(file);
    let html = await response.text();
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

async function loadHTMLTextInto(file,id) {
    let response = await fetch(file);
    let res = await response.text();
    let text = res.replace(/</g,'&lt;').replace(/>/g,'&gt;');
    let html = `<pre><code class='language-html'>${text}</code></pre>
    <p>You can also <a href="${file}" download>download the file</a></p>`;
    /*let pre = document.createElement("pre");
    let code = document.createElement("code");
    pre.appendChild(code);
    code.classList.add("language-html");
    code.innerText = res;
    */
    //`<pre><code class=>${text}</code></pre>`
    document.getElementById(id).innerHTML = html;   
    
    //document.getElementById(id).appendChild(pre);
} 