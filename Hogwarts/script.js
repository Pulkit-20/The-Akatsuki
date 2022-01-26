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
            name: "Harry Potter",
            url: "../Assets/Images/chrac/1.png",
            House: "Gryffindor",
            property: "SAA; PBBAHF; YHALOF; HHUATHAD; EE; FFYB; CD; VOL; FHWPC; GRY;"
        },
        {
            name: "Hermione Granger",
            url: "../Assets/Images/chrac/2.jpg",
            House: "Gryffindor",
            property: "RBAD; EWWYP; IASI; HHUATHAD; YFA; WERW; SS; DU; FYLOATTSTF; GRY;"
        },
        {
            name: "Ron Weasley",
            url: "../Assets/Images/chrac/3.jpg",
            House: "Gryffindor",
            property: "WMAT; PBBAHF; YHALOF; THTH; YFR; FFYB; CD; DU; AABTDAGT; GRY;"
        },

        {
            name: "Draco Malfoy",
            url: "../Assets/Images/chrac/9.jpg",
            House: "Slytherin",
            property: "SAA; BRBI; BPBHBE; PBNTF; JHOTH; YOU; FFYB; SS; LM; FYLOATTSTF; SLY;"
        },
        {
            name: "Luna Lovegood",
            url: "../Assets/Images/chrac/6.jpg",
            House: "Ravenclaw",
            property: "RBAD; EWWYP; KBLTBB; IASI; HHUATHAD; EE; P; SS; DU; THMETD; RAVEN;"
        },
        {
            name: "Ginny Weasley",
            url: "../Assets/Images/chrac/4.jpg",
            House: "Gryffindor",
            property: " CAG; PBBAHF; YHALOF; THHICAMO; YFA; FFYB; SB; BL; FHWPC; GRY;"
        },
        {
            name: "Albus Dumbeldore",
            url: "../Assets/Images/chrac/11.jpg",
            House: "Gryffindor",
            property: " RBAD; BRBI; PBNTF; THTH; EE; IAWTERY; SS; VOL; AABTDAGT; GRY;"
        },
        {
            name: "Severous Snape",
            url: "../Assets/Images/chrac/8.png",
            House: "Slytherin",
            property: "CAG; RBAD; EWWYP; KBLTBB; THHICAMO; YFR; IAWTERY; JP; LM; FYLOATTSTF; SLY; "
        }
    ]
    console.log(answers);
    var score = [];
    Array1.forEach(character => {
        var internalScore = 0;
        answers.forEach(ans => {
            var prop = character.property;
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
    var finalCharacter = Array1[elementPosition];
    console.log(finalCharacter);
    
    // Remove Form
    var myobj = document.getElementById("demo");
    myobj.remove();


    // Add new Image and Data
    var newObj = document.createElement("div");
    const heading = document.createTextNode("You Resemble to - ");

    const breakTagOne = document.createElement("br");
    const breakTagTwo = document.createElement("br");
    newObj.appendChild(heading);
    newObj.appendChild(breakTagOne);

    const charImage = document.createElement("img");
    charImage.src = finalCharacter.url;
    charImage.style.maxWidth = "40%";

    newObj.appendChild(charImage);
    newObj.appendChild(breakTagTwo);


    const name = document.createTextNode(finalCharacter.name);
    newObj.appendChild(name);

    newObj.classList.add('NewDivClass');

    // add the text node to the newly created div
    console.log(newObj);

    document.body.appendChild(newObj);
}
