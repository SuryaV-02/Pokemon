var previousSrc ="";
var sum=0;
var i=60;
var n;
var prevclick= false;
function target_onFocus(id){
	var ele=document.getElementById(id);
	previousSrc=ele.src;
	ele.src="data/target_on_shoot.png";
	ele.style.cursor="url(../data/cursor/cursor.png)";
}

function target_passed(id){
	document.getElementById(id).src=previousSrc;
	document.getElementById(id).style.cursor="url(../data/cursor/cursor.png)";
}

function random(){
	return Math.floor(Math.random()*8);
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}


function target_chooser(){
	var n=random();
	var id="t"+n;
	// console.log("id = "+id);
	var target=document.getElementById(id);
	var elements =document.getElementsByClassName("target");
	for(var i=0;i<elements.length;i+=1){
		elements[i].style.display='none';
	}
	target.style.display="initial";
	// console.log("id :: "+id);
	return target;
}

async function Main(){
var count =0;
while(true){
	if(sum<0 || i===0){
		i=0;
		console.log("game over");
		target.style.display="none";
		document.getElementById('timer').innerHTML="0";
		document.getElementById('go').style.display="initial";
		document.getElementById('go').innerHTML="<h5>GAME OVER</h5><h3>----SCORE----</h3><h1>"+sum+"</h1>";
		document.getElementById('skhst').style.backgroundImage="url(data/bg/broken_bridge_dark.png)";
		document.getElementById('table').style.filter="brightness(50%)";
		document.getElementById('timer').style.filter="brightness(50%)";
		document.getElementById('scoreBoard').style.filter="brightness(50%)";

		break;
	}
	count+=1;
	// console.log("count :: "+count);
	// console.log("face_chooser");
		prevclick=false;
		var target =target_chooser();
		n=random();
		switch(n){
			case 0: target.src="data/faces/bulba.png";
					//console.log("Element :: 1");
					break;
			case 1: target.src="data/faces/charizord.png";
					//console.log("Element :: 2 ");
					break;
			case 2: target.src="data/faces/evil.png";
					//console.log("Element :: 3");
					break;
			case 3: target.src="data/faces/meow.png";
					//console.log("Element :: 4");
					break;
			case 4: target.src="data/faces/pika.png";
					console.log("Element :: 5");
					break;
			case 5: target.src="data/faces/pink.png";
					//console.log("Element :: 6");
					break;
			case 6: target.src="data/faces/red.png";
					//console.log("Element :: 7");
					break;
			case 7: target.src="data/faces/blue.png";
					//console.log("Element :: 8");
					break;
		}
		await sleep(1200);
//		console.log("sleep");
	}
}

function score(){
	if(prevclick===true){
		return 0;
	}
	//document.getElementById(id).style.cursor="url(../data/cursor/cursor.png)";
	switch(n){
		case 0:sum=sum+30; //bulba
			   break;
		case 1:sum=sum+50; //charizord
			   break;
		case 2:sum=sum-500; //evil
			   break;
		case 3:sum=sum-100;  //meow
			   break;
		case 4:sum=sum+35; //pika
			   break;
		case 5:sum=sum+40;  //pink
			   break;   
		case 6:sum=sum+10;  //red
			   break;
		case 7:sum=sum+20;  //blue
			   break;
	}
	document.getElementById('scoreBoard').innerHTML="Score: "+sum;
	console.log("CLICKED");
	prevclick=true;
}


async function timer(){
	while(i>0){
		document.getElementById('timer').innerHTML=i;
		console.log(i);
		--i;
		await sleep(1000);
	}
	// document.getElementById('timer').innerHTML="OVER"
	// document.getElementById('go').style.display="initial";
}

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function welcome() {
	document.getElementById('skhst').style.backgroundImage="url(data/bg/temple.png)";
	document.getElementById('targets').style.display="none";
	document.getElementById('timer').style.display="none";
	document.getElementById('scoreBoard').style.display="none";
	document.getElementById('pokedex_info').style.display="none";

}

function play(element) {
	document.getElementById('skhst').style.backgroundImage="url(data/bg/broken_bridge.png)";
	element.style.display="none";
	document.getElementById('logo').style.display="none";
	document.getElementById('caption').style.display="none";
	document.getElementById('pokedex_info').style.display="none";
	document.getElementById('pokedex').style.display="none";
	document.getElementById('targets').style.display="initial";
	document.getElementById('timer').style.display="initial";
	document.getElementById('scoreBoard').style.display="initial";
}

function pokedex_toggle(val){
	if(val===0)
		document.getElementById('pokedex_info').style.display="none";
	else
		document.getElementById('pokedex_info').style.display="initial";
}

function show_pokedex_info(element){
	element.style.display="none";
}