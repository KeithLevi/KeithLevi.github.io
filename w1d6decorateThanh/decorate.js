function loadPage() {
    "use strict";
    const decorateBtn = document.getElementById("decorateBtn");
    decorateBtn.onclick = bindIntervalDecorate;
    const blingChb = document.getElementById("blingChb");
    blingChb.onchange = bindBlingChb;
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = bindConvertBtn;
    const malkovichBtn = document.getElementById("malkovichBtn");
    malkovichBtn.onclick = bindMalkovichBtn;

}

function bindIntervalDecorate() {
    setInterval(bindDecorateAction, 500);
}

function bindDecorateAction() {
    // alert("Hello, world!");
    const sampleTxtArea = document.getElementById("sampleTxtArea");
    //Modify your JS function so that it now changes the text area's font size to 24pt
    //sampleTxtArea.style.fontSize ="24pt";

    //Use proper units, such as "4em", and proper naming conventions.
    // sampleTxtArea.style.fontSize ="4em";

    if (sampleTxtArea.style.fontSize === "") {
        sampleTxtArea.style.fontSize = "12pt";
    }
    sampleTxtArea.style.fontSize = parseInt(sampleTxtArea.style.fontSize) + 2 + "pt";
}

function bindBlingChb() {
    // alert("Hello, world!");
    const sampleTxtArea = document.getElementById("sampleTxtArea");
    const blingChb = document.getElementById("blingChb");

    if (blingChb.checked) {
        sampleTxtArea.style.fontWeight = "bold";
        sampleTxtArea.style.color = "green";
        sampleTxtArea.style.textDecoration = "underline";

        document.body.style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        sampleTxtArea.style.fontWeight = "normal";
        sampleTxtArea.style.color = "black";
        sampleTxtArea.style.textDecoration = "unset";
        document.body.style.backgroundImage = "";
    }
}

function bindConvertBtn() {

    const sampleTxtArea = document.getElementById("sampleTxtArea");
    let contentTxt = sampleTxtArea.textContent;

    if (contentTxt !== "") {
        let lineArr = contentTxt.split("\n");
        let line = "";
        for (let k = 0; k < lineArr.length; k++) {
            if (lineArr[k].trim() === "") {
                continue;
            }
            let wordArr = lineArr[k].split(" ");
            let retTxt = "";
            for (let j = 0; j < wordArr.length; j++) {
                let word = wordArr[j];
                let needToMoveStr = "";
                let newword = word;
                //convert 1 word
                for (let i = 0; i < word.length; i++) {
                    if (!isVowel(word[i])) {
                        needToMoveStr += word[i];
                        newword = newword.substring(1, newword.length);
                    } else {
                        break;
                    }
                }

                if (needToMoveStr === "") {
                    newword += "ay";
                } else {
                    newword += needToMoveStr + "ay";
                }
                retTxt += newword + " ";
            }

            line += retTxt + "\n";
        }
        sampleTxtArea.innerText = line;
    }
}

function bindMalkovichBtn() {

    const sampleTxtArea = document.getElementById("sampleTxtArea");
    let contentTxt = sampleTxtArea.textContent;

    if (contentTxt !== "") {
        let line = "";
        let lineArr = contentTxt.split("\n");

        for (let k = 0; k < lineArr.length; k++) {
            if (lineArr[k].trim() === "") {
                continue;
            }
            line +=  lineArr[k].split(" ").map(function (e, i, array) {
                return e.length >= 5 ? "Malkovich" : e;
            }).join(" ") + "\n";
        }
        sampleTxtArea.innerText = line;
    }
}
function isVowel(a) {
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < vowel.length; i++) {
        if (a === vowel[i]) {
            return true;
        }
    }
    return false;
}

window.onload = loadPage;