let script_tag = document.getElementById("scores-category");
let highscores_category = script_tag.getAttribute("data-scores-category");

const highScoresList = document.getElementById("highScoresList");
const highScores =
  JSON.parse(localStorage.getItem(`${highscores_category}HighScores`)) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
