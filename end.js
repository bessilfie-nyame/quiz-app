let script_tag = document.getElementById("scores-category");
let highscores_category = script_tag.getAttribute("data-highscores-category");

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem(
  `${highscores_category}MostRecentScore`
);

const highScores =
  JSON.parse(localStorage.getItem(`${highscores_category}HighScores`)) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  console.log(highScores);
  localStorage.setItem(
    `${highscores_category}HighScores`,
    JSON.stringify(highScores)
  );
  window.location.assign("../index.html");
};
