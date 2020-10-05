const btn = document.getElementById('btn');
const title = document.getElementById('survey-title');
const question = document.getElementById('question-title');
const rep1 = document.getElementById('first-rep');
const rep2 = document.getElementById('second-rep');
const rep3 = document.getElementById('third-rep');
const rep4 = document.getElementById('fourth-rep');

class Sondage {
    title;
    score;
    constructor(title, score) {
        this.title = title;
        this.score = score;
    }
}

var survey = new Sondage("Game of throne", "Your score is " + this.score);

class Question {
  questionTitle;
  answers;
  constructor(questionTitle, answers) {
    this.questionTitle = questionTitle;
    this.answers = answers;
  }
}

var question1 = new Question("Lequel de ces personnages a survécu à la saison 1 ?",
    [
      { choice: "Eddard Stark", correct: false },
      { choice: "Khal Drogo", correct: false },
      { choice: "Tyrion Lannister", correct: true },
      { choice: "Viserys Targaryen", correct: false}
    ]);

var question2 = new Question("Comment s'appelle la capitale de Westeros ?",
    [
        { choice: "Port-Réal", correct: true },
        { choice: "Haut Jardin", correct: false },
        { choice: "Winterfell", correct: false},
        { choice: "Lannisport", correct: false}
    ]);

var question3 = new Question("Qui est à l'origine des brûlures au visage du Limier ?",
    [
        { choice: "Ned Stark", correct: false },
        { choice: "Son frère aîné", correct: true },
        { choice: "Joffrey", correct: false },
        { choice: "Le roi Robert Baratheon", correct: false }
    ]);

var question4 = new Question("Comment les Sauvageons appellent-ils les hommes de la Garde de Nuit ?",
    [
        { choice: "Les chiots", correct: false },
        { choice: "Les bassets", correct: false },
        { choice: "Les corbeaux", correct: true },
        { choice: "Les renardeaux", correct: false }
    ]);

var question5 = new Question("Qui se sent coupable d'avoir trahit ses voeux de mariage en couchant avec Mélisandre ?",
    [
        { choice: "Sandor Clegane", correct: false },
        { choice: "Béric Dondarisson", correct: false },
        { choice: "Stannis Baratheon", correct: true },
        { choice: "Tyrion Lannister", correct: false }
    ]);

var question6 = new Question("Qui interprète la mère des dragons, Daenerys Targaryen ?",
    [
        { choice: "Emilia Clark", correct: true },
        { choice: "Nathalie Dormer", correct: false },
        { choice: "Nathalie Portman", correct: true },
        { choice: "Sophie Turner", correct: false }
    ]);

const questions = [question1, question2, question3, question4, question5, question6];



function showQuestions () {
    for(let i=0; i < questions.length; i++) {
        title.innerHTML = survey.title;
        question.innerHTML = questions[i].questionTitle;
        rep1.innerHTML = questions[i].answers[0].choice;
        rep2.innerHTML = questions[i].answers[1].choice;
        rep3.innerHTML = questions[i].answers[2].choice;
        rep4.innerHTML = questions[i].answers[3].choice;
    }
}

showQuestions();