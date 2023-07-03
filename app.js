//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах сав
var scores = [0, 0];

// Тоглогчдийн ээлжиндээ цуглуулж буй оноог хадгалах сав
var roundScore = 0;

//Шоо аль талаараа буусныг хадгалах сав хэрэгтэй, 1-6 гэсэн хувьсагчийг энэ хувьсагчинд санамсаргүйгээр үүсгэж өгнө
var diceNumber = Math.floor(Math.random() * 6) + 1;

//window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice1;
// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";
// Программ эхлэхэд бэлтгэе
window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";

window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
