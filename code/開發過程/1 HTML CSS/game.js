/*

	遊戲JavaScript文件
	
*/

//  隨機產生 1～6 骰子的點數
// let dice = Math.floor(Math.random()*6) + 1;
// console.log(dice);

// DOM - Document Object Model

//取得dice產生數值 顯示為 玩家1 的點數
// document.querySelector("#player1-current-score").textContent = dice;

// ===================================================================
// 動態切換顯示

// let dice = Math.floor(Math.random()*6) + 1;
// let currentPlayer = 2;

// document.querySelector("#player"+ currentPlayer + "-current-score"). textContent = dice;

// =================================================================
// 修改HTML

// let dice = Math.floor(Math.random()*6) + 1;
// let currentPlayer = 1;

// document.querySelector("#player"+ currentPlayer + "-current-score"). innerHTML = "<h1>" + dice + "</h1>";


// =================================================================
// 修改CSS
// 隱藏 2個獎盃 和 中間的點數
//自行練習 ==> 隱藏 2 個獎盃

// let dice = Math.floor(Math.random()*6) + 1;
// let currentPlayer = 1;

// document.querySelector(".dice").style.display = "none";
// document.querySelector(".dice").style = "display:none";//和上句 相同

//自行練習 ==> 隱藏 2 個獎盃


// =================================================================
// 添加Event 及 Event 監聽

// let dice = Math.floor(Math.random()*6) + 1;
// let currentPlayer = 1;

// document.querySelector(".dice").style.display = "none";
// // document.querySelector(".dice").style = "display:none";//和上句 相同

// document.querySelector(".winner1").style.display = "none";
// document.querySelector(".winner2").style.display = "none";

// // Event監聽  ==>"搖骰子" 按鈕
// document.querySelector(".roll").addEventListener("click",function(){
// 	console.log(dice);
// });

//=================================================================
// 如何每次按下 「搖骰子」按鈕 產生不同的 值 

// let dice = Math.floor(Math.random()*6) + 1;
// let currentPlayer = 1;

// document.querySelector(".dice").style.display = "none";
// // document.querySelector(".dice").style = "display:none";//和上句 相同

// document.querySelector(".winner1").style.display = "none";
// document.querySelector(".winner2").style.display = "none";

// // Event監聽  ==>"搖骰子" 按鈕
// document.querySelector(".roll").addEventListener("click",function(){
// 	console.log(dice);
// });


// ===============================================================
// 如何依據點數不同 顯示不同的骰子圖片

// let currentPlayer = 1;

// document.querySelector(".dice").style.display = "none";
// document.querySelector(".dice").style = "display:none";//和上句 相同

// document.querySelector(".winner1").style.display = "none";
// document.querySelector(".winner2").style.display = "none";

// Event監聽  ==>"搖骰子" 按鈕
// document.querySelector(".roll").addEventListener("click",function(){
	
// 	let dice = Math.floor(Math.random()*6) + 1;
// 	console.log(dice);
// 	document.querySelector(".dice").style.display = "block";
	
// });
// ===============================================================
// 透過 DOM 結構 改變玩家的分數
// 如何判斷 是那個玩家在 play ==> 顯示該player的 得分 

// let currentPlayer = 1;

// document.querySelector(".dice").style.display = "none";
// document.querySelector(".dice").style = "display:none";//和上句 相同

// document.querySelector(".winner1").style.display = "none";
// document.querySelector(".winner2").style.display = "none";

// Event監聽  ==>"搖骰子" 按鈕
// document.querySelector(".roll").addEventListener("click",function(){
	
// 	let dice = Math.floor(Math.random()*6) + 1;
// 	console.log(dice);
// 	document.querySelector(".dice").style.display = "block";
// 	document.querySelector(".dice").src = "dice" + dice + ".png";
	
// });
// ===============================================================
// 練習：請完成 各別 player 的總分

// let currentPlayer = 1;

// document.querySelector(".dice").style.display = "none";
// document.querySelector(".dice").style = "display:none";//和上句 相同

// document.querySelector(".winner1").style.display = "none";
// document.querySelector(".winner2").style.display = "none";

// Event監聽  ==>"搖骰子" 按鈕
// document.querySelector(".roll").addEventListener("click",function(){
	
// 	let dice = Math.floor(Math.random()*6) + 1;
// 	console.log(dice);
// 	document.querySelector(".dice").style.display = "block";
// 	document.querySelector(".dice").src = "dice" + dice + ".png";

// 	if( currentPlayer === 1){

// 		document.getElementById("player1-current-score").textContent =  dice;
// 		currentPlayer = 2;
		
// 	}else {
		
// 		document.getElementById("player2-current-score").textContent =  dice;
// 		currentPlayer = 1;

// 	}
	
// });

// ===============================================================
// 練習：如何切換為不同使用者 並顯示其得分和總分

// let currentPlayer = 1;
// let player1TotalScore = 0;
// let player2TotalScore = 0;

// document.querySelector(".dice").style.display = "none";

// document.querySelector(".winner1").style.display = "none";
// document.querySelector(".winner2").style.display = "none";

// document.querySelector(".roll").addEventListener("click",function(){
	
// 	let dice = Math.floor(Math.random()*6) + 1;
// 	console.log(dice);
// 	document.querySelector(".dice").style.display = "block";
// 	document.querySelector(".dice").src = "dice" + dice + ".png";

// 	if( currentPlayer === 1){

// 		document.getElementById("player1-current-score").textContent =  dice;

// 		player1TotalScore += dice;
// 		document.getElementById("player1-total-score").textContent = player1TotalScore;		
		
// 	}else {
		
// 		document.getElementById("player2-current-score").textContent =  dice;
		
// 		player2TotalScore += dice;
// 		document.getElementById("player2-total-score").textContent = player2TotalScore;		

// 	}
	
// });

// ===============================================================
// 練習：38. 搖骰子遊戲-如何 跳轉（切換）玩家狀態

let currentPlayer = 1;
let player1TotalScore = 0;
let player2TotalScore = 0;

document.querySelector(".dice").style.display = "none";

document.querySelector(".winner1").style.display = "none";
document.querySelector(".winner2").style.display = "none";

document.querySelector(".roll").addEventListener("click",function(){
	
	let dice = Math.floor(Math.random()*6) + 1;
	console.log(dice);
	document.querySelector(".dice").style.display = "block";
	document.querySelector(".dice").src = "dice" + dice + ".png";

	if( currentPlayer === 1){

		document.getElementById("player" + currentPlayer +"-current-score").textContent =  dice;

		player1TotalScore += dice;
		document.getElementById("player" + currentPlayer + "-total-score").textContent = player1TotalScore;	
		
		currentPlayer = 2;
		
	}else {
		
		document.getElementById("player" + currentPlayer +"-current-score").textContent =  dice;
		
		player2TotalScore += dice;
		document.getElementById("player" + currentPlayer + "-total-score").textContent = player2TotalScore;		
		
		currentPlayer = 1;
	}
	
});
