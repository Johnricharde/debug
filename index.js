// MODEL ///////////////////////////////////////////////////////////////////////////////
const outputDiv = document.getElementById("output"); 
const questionArray = [
    {
        question: "Hva er verdens største landpattedyr?",
        answers: {
            a: "Rød kjempekenguru",
            b: "Blåhval",
            c: "Elefant",
        },
        correctAnswer: "Elefant",
    },
    {
        question: "Hva er HEX koden for hvit?",
        answers: {
            a: "#000",
            b: "#FFF",
            c: "#AAA",
        },
        correctAnswer: "#FFF",

    },
    {
        question: "Hva er tyngst av en kilo mel, en kilo bly og en kilo fjær?",
        answers: {
            a: "BLY.",
            b: "Fjær, det er det flere av i en kilo",
            c: "Lurespørsmål!",
        },
        correctAnswer: "Lurespørsmål!",
    },
];
// Count how many correct answers from user
let correctAnswerCounter = 0;
// Displays wheter user is correct or wrong
let rightOrWrong = "";
// Sets display style of the result box = Display: None or Display: Block
let hideOrShow = "none";    

// VIEW ////////////////////////////////////////////////////////////////////////////////
showQuiz();
function showQuiz(){
    // Picks a random question
    let randomQuestionIndex = Math.floor(Math.random()*questionArray.length )
    
    // Displays score and question
    outputDiv.innerHTML += `Number of Correct Answers: ${correctAnswerCounter}<br>
    ${questionArray[randomQuestionIndex].question}<br><br>
    `;
    // Loops through answers of current question
    // for(answer in questionArray[randomQuestionIndex]){
        outputDiv.innerHTML += `
        <li onclick="checkAnswer(this.innerHTML, ${randomQuestionIndex})">${questionArray[randomQuestionIndex].answers.a}</li><br>
        <li onclick="checkAnswer(this.innerHTML, ${randomQuestionIndex})">${questionArray[randomQuestionIndex].answers.b}</li><br>
        <li onclick="checkAnswer(this.innerHTML, ${randomQuestionIndex})">${questionArray[randomQuestionIndex].answers.c}</li>`;
    // }
}
// Shows result
function showHideResult(){
    outputDiv.innerHTML = `
    <div style="display: ${hideOrShow}"> Der hadde du ${rightOrWrong}!</div>
    `;
}

// console.log("HERE I AM!")
// CONTROLLER //////////////////////////////////////////////////////////////////////////
function checkAnswer(selectedAnswer, randomIndex){
    hideOrShow = "block";
    rightOrWrong = "feil";
    if(selectedAnswer === questionArray[randomIndex].correctAnswer){
        rightOrWrong = "rett";
        correctAnswerCounter++;
    }
    showHideResult();  
    showQuiz();
}