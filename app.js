//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах сав
var scores = [0, 0];

// Тоглогчдийн ээлжиндээ цуглуулж буй оноог хадгалах сав
var roundScore = 0;

//Шоо аль талаараа буусныг хадгалах сав хэрэгтэй, 1-6 гэсэн хувьсагчийг энэ хувьсагчинд санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor(Math.random() * 6) + 1;
var dice1 = Math.floor(Math.random() * 6) + 1;
window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice1;
// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

console.log("Шоо :" + dice);
