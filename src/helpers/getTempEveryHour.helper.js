export const getTempEveryHour = (everyThreeHours) => {
    if (typeof everyThreeHours !== "object") {
        return false;
    }

    const checkNewDay = (hour) => {
        if (hour > 23) {hour -= 24}
        return hour;
    };

    const get12HourClock = (hour) => {
        if (hour > 11) {hour -= 12}
        return hour
    };

    let data = [];
    for (let i = 0; i < 4; i++) {
        let changeOverThreeHours = everyThreeHours[i+1].temp - everyThreeHours[i].temp;
        let changeOverOneHour = changeOverThreeHours/3;
        for (let count = 0; count < 3; count++) {
            let measurement = {};
            let newTime = checkNewDay(everyThreeHours[i].time + count);
            measurement["time"] = get12HourClock(newTime);
            measurement["temp"] = parseFloat((everyThreeHours[i].temp + (changeOverOneHour * count)).toFixed(2));
            data.push(measurement);
        }
    }

    return data;

};