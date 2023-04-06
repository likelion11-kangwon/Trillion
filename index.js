function quiz_cong(){
	document.getElementById("startButton").click();	
	setTimeout(function(){ document.getElementById("stopButton").click() }, 3000);
}

var pages=[
	"#quiz_main", 
	"#quiz_page1", 
	"#quiz_page2", 
	"#quiz_page3", 
	"#quiz_page4", 
	"#quiz_page5", 
	"#quiz_o_correct", 
	"#quiz_o_incorrect", 
	"#quiz_x_correct", 
	"#quiz_x_incorrect", 
	"#quiz-final"
];

var correct_cnt=0;
var cur=0;
var answer=[1, 0, 1, 0, 1];

function movePage(n){
	for(var i=0; i<10; i++){
		document.querySelector(pages[i]).classList.add("hide_page");
	}
	document.querySelector(pages[n]).classList.remove("hide_page");
}

function chooseAns(n, ans){
	cur++;
	if(answer[n]==ans){
		correct_cnt++;
		if(ans) movePage(6);
		else movePage(8);
	} else{
		if(ans) movePage(7);
		else movePage(9);
	}
}

function nextProblem(){
	if(cur==5){
		if(correct_cnt>=4) quiz_cong();
		document.querySelector("#quiz-final-title").innerHTML=correct_cnt+"문제를 맞췄습니다!";
		movePage(10);
	} else{
		movePage(cur+1);
	}
}

function moveTop(){
	window.scrollTo(0, 0);
}