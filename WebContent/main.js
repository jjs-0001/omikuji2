window.onload = function(){

	"use strict";
	var uranai = Math.random();
	var result;
	var hyouka;

	if(uranai > 0.75){
		result = "大吉";
	}else if(uranai > 0.50){
		result = "吉";
	}else if(uranai > 0.25){
		result = "小吉";
	}else{
		result = "凶";
	}
	document.getElementById("unsei").innerText = result;

	if(result === "大吉"){
		hyouka = "今日はとっても良い日です";
	}else if(result === "吉"){
		hyouka = "そこそこです";
	}else if(result === "小吉"){
		hyouka = "少々悪いかもしれません";
	}else{
		hyouka = "大変悪いです";
	}
	document.getElementById("hyouka").innerText = hyouka;
};