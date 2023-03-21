const timer = document.getElementById("numbers")
const rocketImage = document.createElement("img")

let initial_time = 11 // This will display 10 at the first second since we are decrementing --

const countDown = setInterval(() => {
    initial_time--
        timer.innerHTML = initial_time
    if (initial_time < 0){ // change to initial_time == 0 if you want to display the image as soon as it hits 0
        clearInterval(countDown)
        timer.innerHTML = "The Rocket has <br> Launched"
        rocketImage.setAttribute("src","rocket.png") //creates an image and appends it to the html
        const rocket = document.getElementById("rocketPhoto")
        rocket.appendChild(rocketImage)}
}, 1000);