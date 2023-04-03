function sub() {
    let inpPro = document.getElementById("inpPro").value
    let urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/?$/;


    if (urlPattern.test(inpPro)) {
        alert("Matched")
    }
    else {
        alert("invalid")
    }
}



