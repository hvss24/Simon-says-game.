let gameseq = [];
let userseq = [];
let start = false;
let level = 0;
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let color = ["red","blue","green","yellow"];

alert("Press 'S' to start.Watch the flash. Repeat the sequence.Each level adds one color.");


document.addEventListener("keyup",(event)=>{
    if(start == false && event.key == "s"){
        start = true;
        levelup();   
    }
});


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomnum = Math.floor(Math.random()*4);
    let randomcolor = color[randomnum];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    btnflash(randombtn);
};

function btnflash(btn){
    btn.classList.add("btnflash");
    setTimeout(()=>{
    btn.classList.remove("btnflash")
    },300);
};

allbtns = document.querySelectorAll(".color")
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
};

function btnpress(){
    let btn = this;
    btnflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1); 
  
};

function checkans(index){
    if(userseq[index] == gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        };
    }else{
        h2.innerHTML = `Game over .Your score was <b>${level}</b> <br>Press 's' key to start the game.`;
        let maximum = 0;
        if(level>maximum){
            maximum = level;
        h3.innerText = `Highest : ${maximum}`    
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(()=>{
            body.style.backgroundColor = "#102027"
        },300)   
        reset();    
        };   
    };   
};

function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
};

