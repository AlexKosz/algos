//given min past midnight
//find angle between hour and minute hands
//hour not exactly on num for hour unless it is exactly that hour

const clockAngles = (minutes) => {
    let hour = Math.floor(minutes / 60);    //current hour = divide minutes by 60 rounding down
    minutes = minutes % 60;                 //current min = remainder of minutes divided by 60
    console.log(hour + ":" + minutes)       //current time (not nessicary)

    let minuteAngle = (minutes / 60) * 360;
    //divide minutes by time in an hour that return a decimal that is equal to what fraction of an hour it is. 
    //Multiply that by 360 (deg in circ)

    let hourAngle = ((hour / 12) * 360) + ((minutes / 60) * 30);
    //Start same as above but for hours, 12 instead of 60. 
    //Then, do minutes divided by 60 to get the fraction of hour that has passed. Multiply that by 30 (1/12th of a circle).
    //Add those two numbers together

    let angleBetween = minuteAngle > hourAngle ? minuteAngle - hourAngle : hourAngle - minuteAngle
    //if min angle is bigger, subtract hour angle from it; if hour angle is bigger, subtract minute angle
    return angleBetween;
}

console.log(clockAngles(750))