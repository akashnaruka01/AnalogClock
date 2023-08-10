setInterval(() => {
    d = new Date();
    hours = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    
    hrotation = 30*hours + min/2;
    mrotation = 6*min;
    srotation = 6*sec;
    
    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
}, 1000);