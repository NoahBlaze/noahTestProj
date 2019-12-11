//flashcard app
const deckS = [];
const deck = [];
id = 1;
var inputF;
var inputB;
var btn = document.getElementById("submit");


var test = document.getElementById("flashCards");


function genesis(){
    

inputF = document.getElementById("question").value;
inputB = document.getElementById("answer").value;


    function CardNew(question, answer){
    
        this.question = question;
    
        this.answer = answer;

    }

    var objnew = new CardNew(inputF, inputB);

    deck[id] = objnew;
    
    cardcreate();
    id++;
}



function cardcreate(){
    
    var specific = id;

    var flashCardFul = document.createElement("div");
    var flashCardHed = document.createElement("div");
    flashCardFul.className = "card";
    flashCardFul.style.zIndex = specific;
    // html attributes
    
    var dlt = document.createElement("button");
    dlt.id = "deletecard" + specific;
    dlt.className = "delete";
    dlt.innerHTML ="&nbsp;&#10007;&nbsp;";
    dlt.setAttribute("onclick", 'deleteCard(' + specific + ')');
    
    var flip = document.createElement("button");
    flip.id = "flipDiv" + specific;
    flip.className = "flipfunc";
    flip.textContent = "Flip";
    flip.setAttribute("onclick", 'flipCard(' + specific + ')');


    flashCardHed.className = "cardHeader";
    flashCardHed.innerHTML = "card" + specific;
    
   
    var ques = document.createElement("p");
    ques.innerHTML = this.question.value;
    ques.id = "ques" + specific;
    ques.className = "question";

    var ans = document.createElement("p");
    ans.innerHTML = this.answer.value;
    ans.id = "ans" + specific;
    ans.className = "answer";

    flashCardHed.appendChild(dlt);
    flashCardHed.appendChild(flip);
    flashCardFul.appendChild(flashCardHed);
    flashCardFul.appendChild(ques);
    flashCardFul.appendChild(ans);
    test.appendChild(flashCardFul);


}

function flipCard(param){
    
    console.log(param);
    // var objct = deck[param];
    // var ques = document.getElementById("ques" + param);
    var ques = document.getElementsByClassName("question")[param -1];
    var ans =   document.getElementsByClassName("answer")[param - 1];
    ans.style.position = "absolute";
    if(ques.style.display == "block"){
        ques.style.display = "none";
        ans.style.display = "block";
    } else{
        ques.style.display = "block";
        ans.style.display = "none";
    }

};

function deleteCard(del){
    console.log(del);
    var bro = document.getElementsByClassName("card")[del-1]
    var dltThis = deck[del];
    
    deck.splice(dltThis,1);
    test.removeChild(bro);
    // deck.splice(dltThis,1);
    
};

function savedeck(){
    deckS.push(deck);
}
