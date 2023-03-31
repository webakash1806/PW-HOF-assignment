function sub() {

    const delayTime = 2;

    // Display the countdown message every second until the random number is generated
    let countdown = delayTime;
    const countdownInterval = setInterval(() => {
        document.getElementById("delay").innerHTML = `${countdown} seconds remaining in generating new Number`
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            let a = Math.floor(Math.random() * 101)
            document.getElementById("num").innerHTML = `Number is ${a}`
            console.log(a);

        }
    }, 1000)
}

let btn = document.getElementById("sub")

btn.addEventListener("click", setInterval(() => sub(), 3000))
