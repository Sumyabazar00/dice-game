//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;

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
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 хүртэлх тоог санамсаргүйгээр сонгоно
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургийг веб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  // Буусан шооны тоонд тохирсон шооны зургийг веб дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1 ээс ялгаатай бол бууан шооны тоог Тоглогчийн ээлжийн тоог нэмнэ
  if (diceNumber !== 1) {
    //1 ээс ялгаатай тоо буулаа.Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    switchToNextPlayer();
  }
});
//Hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // //Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө.
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // }
  // else {
  //   scores[1] = scores[1] + roundScore;
  // }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  //Тоглогч ялсан эсэхийг шалгах
  //Дэлгэц дээрхи оноог өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});
function switchToNextPlayer() {
  //Тоглогчийн ээлжийг солино.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Идэвхтэй тоглогч шилжих үед шооны зургийг алга болгоно.
  diceDom.style.display = "none";
}

//Шинээр тоглоомыг эхлүүлэх
document.querySelector(".btn-new").addEventListener("click", function () {
  alert(21);
});
