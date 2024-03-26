function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit) {
        return 0;
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        return demeritPoints;
    }
}

function main() {
    const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));
    
    const demeritPoints = calculateDemeritPoints(speed);
    if (demeritPoints === 0) {
        console.log("Ok");
    } else {
        console.log(`Demerit points: ${demeritPoints}`);
    }
}

main();
