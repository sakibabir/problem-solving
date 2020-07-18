// feetToMile

function feetToMile (feet){
    if (feet <= 0){
        return "Fale input";
    }
    else{
        var mile = feet / 5280;
        mile = mile.toFixed(4);
        return mile;
    }
}

// woodCalculator

function woodCalculator (chair, table, bed){
    if (chair <0 || table <0 || bed <0  ){
        return "Fale input";
    }
    else{
        var chairCount = chair;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
        totalWood = totalWood + " cubic-feet";
        return totalWood;
    }
}

// brickCalculator

function brickCalculator (floorNumber){
    if (floorNumber <0){
        return "Fale input";
    }
    else if (floorNumber<= 10){
        totalBrick = floorNumber*15*1000;
        return totalBrick;
    }
    else if (floorNumber<=20){
        secondCriteria = floorNumber-10;
        secondCriteriaBrick = secondCriteria*12*1000;
        totalBrick = secondCriteriaBrick+150000;
        return totalBrick;
    }
    else if (floorNumber>20){
        thirdCriteria = floorNumber-20;
        thirdCriteriaBrick = thirdCriteria *10*1000;
        totalBrick = thirdCriteriaBrick+150000+120000;
        return totalBrick;
    }
}

// tinyFriend

function tinyFriend (friendNameList){
    let shortLength = Infinity;
    let shortest = "";
    if (friendNameList.length > 0) {
        for (let i = 0; i < friendNameList.length; i++) {
            if (typeof friendNameList[i] === 'string' && friendNameList[i].length < shortLength) {
                shortest = friendNameList[i];
                shortLength = friendNameList[i].length;
            }
        }
    }
    return shortest;
}