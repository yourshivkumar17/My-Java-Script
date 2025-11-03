let score = 0;

const addPoints = points => score += points;
const removePoints = points => score -= points;
const resetScore = () => score = 0;
const showScore = () => console.log("Current Score: " + score);

addPoints(10);
showScore();

addPoints(5);
showScore();

removePoints(3);
showScore();

resetScore();
showScore();
showScore();
