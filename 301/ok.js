/* eslint-disable */

// document.getElementById("ok").onclick = okClick; // null

// function okClick(){alert(" You clicked ok!! " ) }  

function pageLoad() { document.getElementById("ok").onclick = okClick; } 

function okClick() { 
    alert(" You clicked ok!!"); 
    const okButton = document.getElementById("ok");
    okButton.className = "fancy";
    setTimeout(reset, 3000);
} 

function reset(){
    const okButton = document.getElementById("ok");
    okButton.className = "";
}

window.onload = pageLoad;
