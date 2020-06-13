window.addEventListener('load', function() {

    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hoursHand = document.querySelector('.hour-hand');
    const body = document.querySelector('body');


    let div = document.createElement('div');
    div.classList.add('digital');
    body.insertAdjacentElement('afterbegin', div);


    function setDate() {
        const now = new Date();
        let seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`

        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hoursDegrees = ((hours / 12) * 360) + 90;
        hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        div.textContent = hours + " : " + minutes + " : " + seconds;

    }

    setInterval(setDate, 1000);
});