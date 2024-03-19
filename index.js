function distanceFromHqInBlocks(pickuplocation) {
    const hqlocation = 42;
    return Math.abs(pickuplocation-hqlocation);
}

function distanceFromHqInFeet(pickuplocation)  {
    const blocks= distanceFromHqInBlocks(pickuplocation);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blocks= Math.abs(destination-start);
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    let fare;
  
    if (distance <= 400) {
      fare = 0.00; 
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25.00;
    } else {
      return 'cannot travel that far';
    }

    return parseFloat(fare.toFixed(2));
}
