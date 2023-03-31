function sub() {
    let inpMain = document.getElementById("inpMain").value
    let splitString = inpMain.split("")
    let revString = splitString.reverse()
    let joinString = revString.join("")
    // console.log(joinString);
    setTimeout(function () {
        document.getElementById("res").innerHTML = `Result : ${joinString}`
    }, 2000)

}