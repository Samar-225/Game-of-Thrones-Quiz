var readlineSync = require("readline-sync");

var score = 0;
var totalScore=0;
var userName = readlineSync.question("Hey, What's your name?\n");

console.log("Welcome "+ userName + " to Game Of Thrones quiz..\nLet's Start..\n\n");



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  { 
    console.log("right!");
    score = score + 1;
    totalScore=totalScore+1;
    
  } else {
    console.log("wrong!");
    totalScore=totalScore+1;
   
  }

  console.log("current score: ", score," / ",totalScore );
  console.log("-------------------------------------------")
}

// array of objects
var questions = [{
  question: "1.During Brienne of Tarth's fight with the Hound, which body part did she bite off? \n1.palm\n2.Ear\n3.shoulder\n",
  answer: "2"
}, {
  question: "2.Which character betrayed Ned Stark, leading to his death in Season 1? \n1.Cersei Lannister\n2.Jaime Lannister \n3.Littlefinger\n",
  answer: "3"
},
{
  question: "3.Which character kills the Night King?\n1.Arya Stark\n2.Jon Snow\n3.Daenerys Targyeren\n",
  answer: "1"
}
,
{
  question: "4.who killed joffrey baratheon?\n1.Sansa Stark\n2.Tyrion Lannister\n3.Olenna Tyrell\n",
  answer: "3"
},
{
  question: "5.What is the name of aarya's sword?\n1.Widow's Wail\n2.Needle\n3.Longclaw\n ",
  answer: "2"
},
{
  question: "6.Who said this‘Tell Cersei. I want her to know it was me.’\n1.Sansa Stark\n3.Tyrion Lannister\n3.Olenna Tyrell\n",
  answer: "3"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if(score>3)
{
console.log("\nNice ! You have SCORED: ", score," / ",totalScore,"\n\n");

console.log("Congratulations! You are True GOT fan!")
}

else{
  console.log("\nNice ! You have SCORED: ", score," / ",totalScore,"\n\n");

}

