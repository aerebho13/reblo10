let hunger=80;
let happiness=50;
let energy=40;
function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`JS-Hunger ${hunger}`;
    document.getElementById("happinessInfo").innerHTML=`JS-Happiness ${happiness}`;
    document.getElementById("energyInfo").innerHTML=`JS-Energy ${energy}`;
};

function feed(){
    console.log("Feed Function");
    hunger=hunger-10;
    happiness=happiness-10;
    energy= energy + 10;
    displayInfo();
};

function pet(){
    console.log("Pet Function");
    happiness=happiness + 10;
    displayInfo();
};

function play(){
    console.log("Play Function");
    energy= energy-10;
    happiness= happiness + 10;
    hunger= hunger + 10;
    displayInfo();
};

displayInfo();