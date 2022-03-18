// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.random.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hibbard.eu
// @grant        none
// ==/UserScript==
var pushed = 0

window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='number'){e.preventDefault();return false;}}},true);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function getInputsByValue(value)
{
    var allInputs = document.getElementsByTagName("input");
    var results = [];
    for(var x=0;x<allInputs.length;x++){
        if(allInputs[x].value == value){
            results.push(allInputs[x]);}}
    return results;
}
function randomNumber(aia){
    pushed++
    if (pushed % 5 == 0){
        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var dateTime = date+' '+time;
        document.getElementById(aia.path[0].id.split("-")[0]+"-result").innerHTML = `<center><span style="font-size:100%;font-weight:bold;">`+getRandomIntInclusive(document.getElementById(aia.path[0].id.split("-")[0]+"-min").value,document.getElementById(aia.path[0].id.split("-")[0]+"-max").value)+`<br></span><span style="font-size:70%;">Min:&nbsp;`+document.getElementById(aia.path[0].id.split("-")[0]+"-min").value+`, Max:&nbsp;`+document.getElementById(aia.path[0].id.split("-")[0]+"-max").value+`<br>+`+dateTime+`</span></center>`
        document.getElementById(aia.path[0].id.split("-")[0]+"-result").style = "font-size:100%;font-weight:bold;"
    }else{
        console.log(document.getElementById(aia.path[0].id.split("-")[0]+"-min").value)
        var possonouscire = []
        possonouscire.push(document.getElementById(aia.path[0].id.split("-")[0]+"-min").value)
        possonouscire.push(document.getElementById(aia.path[0].id.split("-")[0]+"-max").value)
        possonouscire.push(parseInt(document.getElementById(aia.path[0].id.split("-")[0]+"-min").value)+1)
        console.log(possonouscire)

        let today = new Date();

        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let dateTime = date+' '+time;
        document.getElementById(aia.path[0].id.split("-")[0]+"-result").innerHTML = `<center><span style="font-size:100%;font-weight:bold;">`+possonouscire[Math.floor(Math.random()*possonouscire.length)]+`<br></span><span style="font-size:70%;">Min:&nbsp;`+document.getElementById(aia.path[0].id.split("-")[0]+"-min").value+`, Max:&nbsp;`+document.getElementById(aia.path[0].id.split("-")[0]+"-max").value+`<br>+`+dateTime+`</span></center>`
        document.getElementById(aia.path[0].id.split("-")[0]+"-result").style = "font-size:100%;font-weight:bold;"
    }
}

(async function() {
    'use strict';
    var a = document.getElementsByTagName("span")
    salve:
    while (true){
        if (getInputsByValue("Generate").length > 0){
            var bottone = getInputsByValue("Generate")[0]
            bottone.removeAttribute("onclick");
            bottone.addEventListener("click", randomNumber);
            break salve;
        }else{console.log("ciao");await new Promise(r => setTimeout(r, 500));}

    }
    // Your code here...
})();
