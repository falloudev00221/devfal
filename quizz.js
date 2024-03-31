const readlineSync = require("readline-sync");

const quizQuestions = [
  {
    id: "q1",
    q: "Qui est le créateur de Facebook ?",
    questions: [
      "A) Mark Zuckerberg",
      "B) Elon Musk",
      "C) Jeff Bezos",
      "D) Sam Altman",
    ],
    qResponse: "A",
  },
  {
    id: "q2",
    q: "Quelle est la capitale de la France ?",
    questions: ["A) Londres", "B) Paris", "C) Berlin", "D) Madrid"],
    qResponse: "B",
  },
  {
    id: "q3",
    q: "Quel est le plus grand océan du monde ?",
    questions: [
      "A) L'océan Atlantique",
      "B) L'océan Arctique",
      "C) L'océan Indien",
      "D) L'océan Pacifique",
    ],
    qResponse: "D",
  },
  {
    id: "q4",
    q: "Quel est le symbole chimique de l'eau ?",
    questions: ["A) O", "B) H2O", "C) HO", "D) H"],
    qResponse: "A",
  },
  {
    id: "q5",
    q: "Combien de continents y a-t-il sur Terre ?",
    questions: ["A) 4", "B) 6", "C) 7", "D) 8"],
    qResponse: "C",
  },
  {
    id: "q6",
    q: "Quel est l'animal terrestre le plus rapide ?",
    questions: [
      "A) Le guépard",
      "B) L'antilope",
      "C) Le lion",
      "D) Le léopard",
    ],
    qResponse: "A",
  },
];

const quizzFunc = () => {
  let score = 0;
  let percentScore = null;
  for (let i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i].q + "\n");
    for (let j = 0; j < quizQuestions[i].questions.length; j++) {
      console.log(quizQuestions[i].questions[j] + "\n");
    }
    let userResponse = readlineSync
      .question("Votre reponse:A, B, C ou D:")
      .toUpperCase();

    if (userResponse.toUpperCase() == quizQuestions[i].qResponse) {
      score++;
    }
  }

  percentScore = (score / quizQuestions.length).toFixed(2) * 100 + "%";

  console.log("Votre score est: " + percentScore);
  console.log("");
  console.log("*".repeat(50));
};

let isPlayGain = true;

while (isPlayGain) {
  quizzFunc();
  isPlayGain = readlineSync.question(
    "Est ce que vous voulez rejouer encore(oui/non):"
  );
  isPlayGain = isPlayGain === "oui" || isPlayGain === "y" ? true : false;
}
