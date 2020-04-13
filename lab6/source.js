/* eslint-disable no-undef */
$(document).ready(function () {
    console.log("jquery initialized");
    // Task1
    (function () {

        $("#task1 form").on("submit", (e) => {

            e.preventDefault();

            let reqBody = {}

            let validInputsFlag = true;
            $('#task1 form input[type="text"]').each((key, item) => {
                removeMessages($(item));

                if (!validateField($(item))) {
                    validInputsFlag = false
                }
                reqBody[$(item).attr("name")] = $(item).val();
            });

            if (!validInputsFlag) {
                console.log("validation failed, no request for today");
                return;
            }

            $.ajax({
                url: "https://randomuser.me/api/",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(reqBody),
                success: () => {
                    //   pass
                },
                statusCode: {
                    404: function () {
                        console.log("Api responded with 404 code");
                    }
                }
            });
        });

        $("#task1 form").on("change", (e) => {
            removeMessages($(e.target));
        });

        function removeMessages(inputField) {
            const nextSibl = inputField.next();
            if (nextSibl.hasClass && nextSibl.hasClass("task1-invalid-message")) {
                nextSibl.remove();
                inputField.removeClass("invalid-input");
            }
        }

        function validateField(input) {
            if (!input.val()) {
                input.addClass("invalid-input");
                input.after(createMessage("empty field"));
                return false
            }
            if (input.attr("name") === "email") {
                if (!validateEmail(input.val())) {
                    console.log("wrong email format");
                    input.after(createMessage("Wrong email format!"), input.nextSibling);
                    input.addClass("invalid-input");
                    return false
                }
            }
            return true;
        }

        function createMessage(message) {
            let newMess = $("<p></p>");
            newMess.addClass("task1-invalid-message");
            newMess.text(message);
            return newMess;
        }

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    })();


    // Task2
    (function () {

        const targetUrl = "http://dummy.restapiexample.com/api/v1/employees";

        $("#task2Button").on("click", e => {
            $("#task2Table tbody").remove();

            $.get(targetUrl, function (resp, status) {
                if (status === 400) {
                    console.log("Error while requesting");
                }
                const emloyee_list = resp.data;
                $("#task2Table thead").after(createTableBody(emloyee_list));
            });
        });


        function createTableBody(employersArr) {
            const newTableBody = $("<tbody><tbody>");

            employersArr.forEach(emp => {
                const newTr = $("<tr></tr>");

                const nameCell = $("<td></td>")
                nameCell.text(emp.employee_name)
                newTr.append(nameCell);

                const salaryCell = $("<td></td>")
                salaryCell.text(emp.employee_salary)
                newTr.append(salaryCell);

                const ageCell = $("<td></td>")
                ageCell.text(emp.employee_age)
                newTr.append(ageCell);

                newTableBody.append(newTr);
            })
            return newTableBody;
        }
    })();

    // Task3
    (function () {
        function getTimeString(totalSeconds) {

            let minutes = Math.floor(totalSeconds % 3600 / 60);
            let seconds = Math.floor(totalSeconds % 60);

            minutes = (minutes < 10 ? "0" : "") + minutes;
            seconds = (seconds < 10 ? "0" : "") + seconds;

            return `${minutes}:${seconds}`;
        }
        let timerIntervalId = null;
        let totalSeconds = 0;

        $("#goButton").on("click", e => {
            if (timerIntervalId) {
                $("#goButton").text("Go");
                clearInterval(timerIntervalId);
                timerIntervalId = null;
                return;
            }
            $("#goButton").text("Stop");
            timerIntervalId = setInterval(function () {
                totalSeconds = totalSeconds + 1;
                $('.screen').text(getTimeString(totalSeconds));
            }, 1000);
        });

        $("#resetButton").on("click", e => {
            if (timerIntervalId) {
                $("#goButton").text("Go");
                clearInterval(timerIntervalId);
                timerIntervalId = null;
            }
            totalSeconds = 0;
            $('.screen').text(getTimeString(totalSeconds));
        });

    })();
});