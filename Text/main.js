$(function () {
    let currentQuiz = null;
    $("#startButton").click(function () {
        if (currentQuiz == null) {
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#option").empty();
            questions[0].answers.forEach(function (element, index, array) {
                $("#option").append(`<input name="option" type="radio" values="${index}"><label>${element[0]}</label><br><br>`);
            });
            $("#startButton").attr("value", "Next");
        } else {
            $.each($(":radio"), function (i, val) {
                if (val.checked) {
                    if (isNaN(questions[currentQuiz].answers[i][1])) {
                        let finalResult=questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#option").empty();
                        $("#option").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始")
                    } else {
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#option").empty();
                        questions[currentQuiz].answers.forEach(function (element,index,array) {
                            $("#option").append(`<input name="option" type="radio" values="${index}"><label>${element[0]}</label><br><br>`);
                            
                        })
                    }
                    return false;   
                }
            });
        }

    });

});