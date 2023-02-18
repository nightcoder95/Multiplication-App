const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiplied by ${num2}`;

const correctAns = num1 * num2;

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

function storageClear() {
  localStorage.clear();
  score = 0;
  scoreEl.innerHTML = `Score: ${score}`;
}

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

let scoreEl = document.getElementById("score");
scoreEl.innerHTML = `Score: ${score}`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
