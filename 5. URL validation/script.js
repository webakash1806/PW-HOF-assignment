function sub() {
    const urlInp = document.getElementById("urlInp").value

    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    if (urlInp.match(urlPattern)) {
        alert("URL is Valid")
    }
    else {
        alert("URL is not valid")
    }
}