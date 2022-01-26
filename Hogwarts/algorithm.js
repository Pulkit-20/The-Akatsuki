function GetData() {
    // TO Loop all answewrs 
    var properties = new Array();
    for (var i = 1; i < 11; i++) {
        // common patter is ans[i]
        for (var j = 1; j < 5; j++) {
            if (document.getElementById(`ans${i}-${j}`).checked) {
                // console.log(document.getElementById(`ans${i}-${j}`).value);
                properties.push(document.getElementById(`ans${i}-${j}`).value);
            }
        }
    }
    console.log(properties);
    findMatch(properties);
}

function findMatch(answers) {
    var Array1 = [
        {
            house: "Gryffindor",
            url: "../Assets/Images/chrac/GD.png",
            property: "GD"
        },
        {
            house: "Slytherin",
            url: "../Assets/Images/chrac/ST.jpg",
            property: "ST"
        },
        {
            house: "Ravenclaw",
            url: "../Assets/Images/chrac/RC.png",
            property: "RC"
        },

        {
            house: "Hufflepuff",
            url: "../Assets/Images/chrac/HF.png",
            property: "HP"
        },
        
    ]
    console.log(answers);
    var score = [];
    Array1.forEach(House => {
        var internalScore = 0;
        answers.forEach(ans => {
            var prop = House.property;
            if (prop.indexOf(ans) >= 0) {
                internalScore = internalScore + 1;
            }
        });
        score.push(internalScore);
    });
    console.log(score);

    // Find Max Element Score
    var elementPosition = -1;
    var maxScore = -999;

    for (var i = 0; i < score.length; i++) {
        if (score[i] > maxScore) {
            maxScore = score[i];
            elementPosition = i;
        }
    }

    // Select In Object
    var finalHouse = Array1[elementPosition];
    console.log(finalHouse);
    
    // Remove Form
    var myobj = document.getElementById("demo");
    myobj.remove();


    // Add new Image and Data
    var newObj = document.createElement("div");
    const heading = document.createTextNode("Your house is - ");

    const breakTagOne = document.createElement("br");
    const breakTagTwo = document.createElement("br");
    newObj.appendChild(heading);
    newObj.appendChild(breakTagOne);

    const charImage = document.createElement("img");
    charImage.src = finalHouse.url;
    charImage.style.maxWidth = "40%";

    newObj.appendChild(charImage);
    newObj.appendChild(breakTagTwo);


    const name = document.createTextNode(finalHouse.house);
    newObj.appendChild(name);

    newObj.classList.add('NewDivClass');

    // add the text node to the newly created div
    console.log(newObj);

    document.body.appendChild(newObj);
}
