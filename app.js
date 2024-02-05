window.addEventListener("DOMContentLoaded", FetchData);
const mainAdvices = document.querySelector(".main-advice");
const adviceNum = document.querySelector(".advice");
const dice = document.querySelector(".dice");

dice.addEventListener("click", FetchData);

async function FetchData() {
  const datas = await fetch("https://api.adviceslip.com/advice");
  const json = await datas.json();
  // console.log(json);
  adviceNum.textContent = `ADVICE #${json.slip.id}`;
  mainAdvices.textContent = json.slip.advice;
}
