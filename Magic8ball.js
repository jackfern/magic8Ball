var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"]
var userQuestion;

function createRandomAnswer (){
  return answers[Math.floor(Math.random() * 6)]
}

function askUserQuestion () {
  x=0;
  while (x<5){
    userQuestion = prompt ("Ask a question; Type STOP to get out of it");
    if (userQuestion==="STOP") {
      x=100;
    }
    else {
      alert(createRandomAnswer())
    }
  }
}
