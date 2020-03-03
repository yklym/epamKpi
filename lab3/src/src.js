(function () {
    const gameArr = [{
            button: document.getElementById("childCountButton"),
            field: document.getElementById("childCountField"),
            currVar: null,
            answerVariants: [0, 1, 4, 7, 100],
            answerString: "The number of children you'll have:",
        },
        {
            button: document.getElementById("professionButton"),
            field: document.getElementById("professionField"),
            currVar: null,
            answerVariants: ["python-dev", "js-dev", "ruby-dev", "java-dev"],
            answerString: "Your profession will be:"
        },
        {
            button: document.getElementById("loverNameButton"),
            field: document.getElementById("loverNameField"),
            currVar: null,
            answerVariants: ["Anton", "Dron", "Valik", "Hacker9000"],
            answerString: "Your future lover's name is:"
        },
        {
            button: document.getElementById("countryButton"),
            field: document.getElementById("countryField"),
            currVar: null,
            answerVariants: ["Ukraine", "USA", "Russia", "Poland"],
            answerString: "You will live in:",
        }
    ]
    const firstTaskResultButton = document.getElementById("firstTaskResultButton");

    gameArr.forEach(elem => {
        elem.button.addEventListener("click", () => {
            elem.currVar = elem.answerVariants.find(variant => {
                return confirm(`${elem.answerString}: [${variant}]`);
            });

            if (elem.currVar === undefined) {
                elem.currVar = prompt(elem.answerString);
            }
            elem.field.innerHTML = elem.currVar;
        })
    });

    firstTaskResultButton.addEventListener("click", () => {
        const answers = gameArr.map(elem => {
            //get's random default variants or the one user choosed 
            return elem.currVar || elem.answerVariants[Math.floor(Math.random() * elem.answerVariants.length)]
        });
        const answerString = `You'll marry [${answers[2]}], together you'll have [${answers[0]}] children. After you'll work as [${answers[1]}] and live in [${answers[3]}]`;
        alert(answerString);
    });
}());
//Task 2
(function () {
    const secondTaskResultButton = document.getElementById("secondTaskResultButton"),
        secondTaskMaxNumber = document.getElementById("secondTaskMaxNumber"),
        secondTaskField = document.getElementById("secondTaskField");

    secondTaskResultButton.addEventListener("click", () => {
        let maxIndex = secondTaskMaxNumber.value;
        let resStr = "";
        let triangWidth = maxIndex * 2 + 1;

        const pascalTriangRes = createPascalTriangle(maxIndex);

        for (let i = 0; i < pascalTriangRes.length; i++) {
            resStr += getPascalRow(pascalTriangRes[i], maxIndex);
        }

        secondTaskField.innerHTML = `<pre>${resStr}</pre>`;

        function getPascalRow(pascalRow) {
            const indents = triangWidth - (pascalRow.length * 2 - 1);
            let pascString = "";
            for (let i = 0; i < pascalRow.length; i++) {
                pascString += pascalRow[i];
                if (pascalRow.length - 1 === i) {
                    break;
                }
                pascString += " "
            }
            const retStr = " ".repeat(indents / 2).concat(pascString, " ".repeat(indents / 2), "\n");
            return retStr;
        }

        function createPascalTriangle(numRows) {
            let pascalTriangle = [];

            for (let i = 0; i < numRows; i++) {
                pascalTriangle[i] = new Array(i + 1);

                for (let j = 0; j < i + 1; j++) {
                    if (j === 0 || j === i) {
                        pascalTriangle[i][j] = 1;
                    } else {
                        pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
                    }
                }
            }
            return pascalTriangle;
        }

    });
}());

// Task 3 
(function () {
    const thirdTaskClearButton = document.getElementById("thirdTaskClearButton"),
        thirdTaskResultButton = document.getElementById("thirdTaskResultButton"),
        thirdTaskMaxNumber = document.getElementById("thirdTaskMaxNumber"),
        thirdTaskField = document.getElementById("thirdTaskField");

    let clearFlag = true;

    thirdTaskClearButton.addEventListener("click", () => {
        if (clearFlag) {
            clearFlag = false;
        } else {
            thirdTaskField.innerHTML = "";
        }
    });

    thirdTaskResultButton.addEventListener("click", () => {
        clearFlag = true;
        thirdTaskField.innerHTML = "";
        const maxBottlesNumber = thirdTaskMaxNumber.value || 1;
        let currBottleNumber = maxBottlesNumber;

        let delay = 500;

        let timerId = setTimeout(function request() {

            if (currBottleNumber >= 0 && clearFlag) {
                thirdTaskField.appendChild(createParagh(currBottleNumber));
                currBottleNumber -= 1;
                timerId = setTimeout(request, delay);
            }
        }, delay);

        function createParagh(i) {
            let newParagh = document.createElement("p");
            if (i == 0) {
                newParagh.innerHTML = "<br><br>No more bottles of beer on the wall, no more bottles of beer.\
            We've taken them down and passed them around; now we're drunk and passed out!\n";
            } else {
                newParagh.innerHTML = `${i} bottle${i==1 ? "" : "s"} of beer on the wall, ${i} bottle${i==1 ? "" : "s"} of beer.
            Take one down, pass it around,${i != 1 ?  ` ${i} bottles of beer on the wall...` : ""}\n`;
            }
            return newParagh;
        }
    });
}());

// Task4
(function () {
    const arr = [{
            value: 100,
            type: 'USD'
        },
        {
            value: 215,
            type: 'EUR'
        },
        {
            value: 7,
            type: 'EUR'
        },
        {
            value: 99,
            type: 'USD'
        },
        {
            value: 354,
            type: 'USD'
        },
        {
            value: 12,
            type: 'EUR'
        },
        {
            value: 77,
            type: 'USD'
        },
    ];
    console.log("TASK 4");
    console.log(arr);
    //4.1
    console.log("1)Знайти суму всіх значень value у яких тип ‘USD’ та value менше за 100.");
    const firstRes = arr.reduce((sum, elem) => {
        if (elem.type === "USD" && elem.value < 100) {
            return sum + elem.value;
        }
        return sum + 0;
    }, 0);
    console.log(`Answer: [${firstRes}]`);
    // 4.2
    console.log('повернути масив всіх об’єктів з типом ‘EUR’ та для кожного об’єкту подвоїти значення value');
    let arrEur = arr.filter(x => x.type === "EUR");

    let secondRes = arrEur.map(elem => {
        return {
            value: elem.value * 2,
            type: elem.type,
        };
    })
    console.log(`Answer:`);
    console.log(secondRes);

}());