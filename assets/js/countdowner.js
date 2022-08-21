const countdown = () => {
    const countDate = new Date("August 23, 2022 18:00:00").getTime();
    // console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;

    // time works

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the time

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    console.log(textDay);
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minutes').innerText = textMinute;
    document.querySelector('.seconds').innerText = textSecond;

};

// countdown();
setInterval(countdown,1000);