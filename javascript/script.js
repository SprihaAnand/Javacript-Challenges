//challenge 1:age in days
function ageInDays(){
var birthYear=prompt('What year were you born');
var age=(2023-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('You are '+age+' days old');
h1.setAttribute('id','age');
h1.appendChild(textAnswer);
document.getElementById('result1').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}

//challenge 2
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('catFlex');
    image.src='images/cat.jpg';
    div.appendChild(image);
}

//challenge 3

function rpsGame(yourChoice){
var humanChoice, botChoice;
humanChoice=yourChoice.id;
var bot=['rock','paper','scissor'];
var num=random3();
botChoice=bot[num];
let result=decideWinner(humanChoice,botChoice);
let message=finalMessage(result);
rpsFrontEnd(yourChoice.id,botChoice,message);
}

function random3(){
    return Math.floor(Math.random()*3);
}

function decideWinner(yourChoice,botChoice){
    var dataBase={
        'rock':{'rock':0.5, 'paper':0, 'scissor':1},
        'paper':{'paper':0.5, 'rock':1, 'scissor':0},
        'scissor':{'scissor':0.5, 'paper':1, 'rock':0},

    }
    var youScore=dataBase[yourChoice][botChoice];
    var botScore=dataBase[botChoice][yourChoice];
    return [youScore,botScore];
}

function finalMessage([youScore,botScore]){
    if(youScore===0){
        return {
            'message':'You Lost',
            'color':'red',
        }
    }
    else if(youScore===1){
        return {
            'message':'You Won',
            'color':'green',
        }
}
else{
    return {
        'message':'You Tied',
        'color':'yellow',
    }
}
}

function rpsFrontEnd(humanChoice, botImageChoice, finalMessage){
    var imagesDataBase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,

    }
    //removing all elements
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv= document.createElement('div');
    var botDiv= document.createElement('div');
    var messageDiv= document.createElement('div');

    humanDiv.innerHTML="<img src='"+imagesDataBase[humanChoice]+`'height=150 width=150 style='-webkit-box-shadow: -11px 13px 42px -17px rgba(0,133,106,1);
    -moz-box-shadow: -11px 13px 42px -17px rgba(0,133,106,1);
    box-shadow: -11px 13px 42px -17px rgba(0,133,106,1);'>`;

    botDiv.innerHTML="<img src='"+imagesDataBase[botImageChoice]+`'height=150 width=150 style='-webkit-box-shadow: -11px 13px 42px -17px rgba(0,133,106,1);
    -moz-box-shadow: -11px 13px 42px -17px rgba(0,133,106,1);
    box-shadow: -11px 13px 42px -17px rgba(0,133,106,1);'>`;

    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size:60px; padding:30px;'>"+finalMessage['message'] +"</h1>";

    document.getElementById('flex3').appendChild(humanDiv);
    document.getElementById('flex3').appendChild(messageDiv);
    document.getElementById('flex3').appendChild(botDiv);
    document.getElementById('flex3').classList.add("flex3OnClick");
}