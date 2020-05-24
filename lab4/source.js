(function () {
    const task1Form = document.getElementById("task1Form"),
        targetImg = document.getElementById('taskImg'),
        allButtons = task1Form.querySelectorAll(`input[type="text"]`),
        submitButton = task1Form.querySelector(`input[type="button"]`),
        inputsArr = [
            ["width", allButtons[0]],
            ["height", allButtons[1]],
            ["borderWidth", allButtons[2]],
            ["borderColor", allButtons[3]],
            ["alter", allButtons[4]],
        ];
    const inputsMap = new Map(inputsArr);

    task1Form.addEventListener("input", event => {
        const currInput = event.target;
        const strVal = currInput.value.trim();
        if (!strVal) {
            currInput.classList.add("invalid-input");
            return;
        }
        if (currInput.name !== "borderColor" && currInput.name !== "alter") {
            const isNumber = !isNaN(strVal.substr(0, strVal.length - 2))

            if (!strVal.endsWith("px") || !isNumber) {
                currInput.classList.add("invalid-input");
                return;
            }
        } else {
            if (!/^[a-zA-Z]+$/.test(strVal)) {
                currInput.classList.add("invalid-input");
                return;
            }
        }

        currInput.classList.remove("invalid-input");

    });

    submitButton.addEventListener("click", () => {

        if (checkInput()) {
            inputsMap.forEach((inputField, inputName) => {
                if (inputName === "alter") {
                    targetImg[inputName] = inputField.value;
                    return;
                }
                targetImg.style[inputName] = inputField.value;
            });
        }

        function checkInput() {
            for (let inputField of inputsMap.values()) {
                if (inputField.classList.contains("invalid-input")) {
                    return false;
                }
            }
            return true
        }
    });


})();

// Task 2
(function () {

    let marks = new Map();

    const diagramDiv = document.getElementById("diagramDiv"),
        diagramDivWidth = getComputedStyle(diagramDiv).width,
        addStudentButton = document.getElementById("addStudentButton"),
        task2Table = document.getElementById("task2Table");


    addStudentButton.addEventListener("click", () => {
        // CHECK IF THERE IS DEFAULT STUDENT map.has

        const studentName = getDefaultStudentName();
        const studentMark = Math.floor(Math.random() * 100);

        const tr = document.createElement("tr");

        // Delete button
        const buttonTd = document.createElement("td");
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.classList.add("btn");
        button.classList.add("btn-outline-dark");
        button.textContent = "Delete student";
        button.addEventListener("click", event => {
            const tr = event.currentTarget.parentElement.parentElement;
            marks.delete(tr.dataset.student);
            getChart(tr.dataset.student).remove();
            tr.remove();
            renderContent();
        });

        buttonTd.appendChild(button);
        // Student field
        const studentTd = document.createElement("td");
        studentTd.textContent = studentName;
        studentTd.classList.add = "studentTd";
        studentTd.setAttribute("contenteditable", "true");
        // Mark field
        const markTd = document.createElement("td");
        markTd.textContent = studentMark;
        markTd.classList.add = "markTd";
        markTd.setAttribute("contenteditable", "true");

        tr.appendChild(buttonTd);
        tr.appendChild(studentTd);
        tr.appendChild(markTd);

        tr.dataset.student = studentName;
        tr.dataset.mark = studentMark;

        task2Table.appendChild(tr);

        marks.set(studentName, studentMark);

        renderContent();

        function getDefaultStudentName() {
            let defname = "Student";
            for (let i = 0;; i++) {
                let numberdDefName = `${defname} ${i}`;
                if (!marks.has(numberdDefName)) {
                    return numberdDefName;
                }
            }
        }
    });

    function renderContent() {
        marks.forEach((studMark, student) => {
            const chart = getChart(student);
            if (chart) {
                const chartBlock = chart.querySelector(".chart-block");
                chartBlock.style.height = `${studMark}px`;
                applyChartBlockWidth(chartBlock);
            } else {
                diagramDiv.appendChild(createChart(studMark, student));
            }
        });

        function createChart(studMark, student) {
            const chartDiv = document.createElement("div");
            // Chart Styles
            chartDiv.style.height = `${studMark}px`;
            applyChartBlockWidth(chartDiv);

            chartDiv.classList.add("chart-block");
            chartDiv.style.backgroundColor = getRandomColor();
            // Chart Data

            // chart Events
            chartDiv.addEventListener("mouseover", (event) => {
                const targetDiv = event.currentTarget;
                targetDiv.textContent = `[${targetDiv.parentElement.dataset.mark}]`;
                // Add check if div is too small ??
            });

            chartDiv.addEventListener("mouseout", (event) => event.currentTarget.textContent = "");

            // chart Text
            const textDiv = document.createElement("div");
            textDiv.textContent += student;
            textDiv.classList.add("chart-text");

            // Chart Wrapper
            const newDiv = document.createElement("div");
            newDiv.appendChild(chartDiv);
            newDiv.appendChild(textDiv);

            newDiv.classList.add("chart");
            newDiv.dataset.student = student;
            newDiv.dataset.mark = studMark;

            return newDiv;
        }

        function applyChartBlockWidth(chartBlock) {
            const chartDivWidth = parseInt(diagramDivWidth) / marks.size / 2;
            chartBlock.style.width = `${chartDivWidth}px`;
        }
    }

    function getChart(student) {
        const charts = diagramDiv.querySelectorAll(".chart");
        for (let i = 0; i < charts.length; i++) {
            if (charts[i].dataset.student === student) {
                return charts[i];
            }
        }
        return false;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    task2Table.addEventListener("input", event => {
        const tr = event.target.parentElement;
        const [studName, studMark] = tr.querySelectorAll(`td[contenteditable="true"]`);

        marks.delete(tr.dataset.student);
        marks.set(studName.textContent, studMark.textContent);
        udpateChartName(tr.dataset.student, studName.textContent);

        tr.dataset.student = studName.textContent;
        tr.dataset.mark = studMark.textContent;

        function udpateChartName(student, newStudent) {
            const chart = getChart(student);
            chart.dataset.student = newStudent;
            chart.dataset.mark = marks.get(newStudent);

            chart.querySelector(".chart-block").style.height = `${chart.dataset.mark}px`;
            chart.querySelector(".chart-text").textContent = newStudent;
        }
    })
})();