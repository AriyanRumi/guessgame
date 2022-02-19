
// javascript simple game

// selector
let btn1 =document.getElementById('btn1')
let btn2 =document.getElementById('btn2')
let secOne =document.getElementById('secOne')
let secTwo =document.getElementById('secTwo')
let back =document.getElementById('back')
let pa =document.getElementById('pa')
let pg =document.getElementById('pg')
let audioOne =document.getElementById('audioOne')
let audioTwo =document.getElementById('audioTwo')
let audioThree =document.getElementById('audioThree')
let audioFoure =document.getElementById('audioFoure')
let guessInput =document.getElementById('ginput')
let alertHeader =document.getElementById('alertHeader')
let newGame =document.getElementById('newGame')
let score =document.getElementById('score')
let con =document.getElementById('winAlert')
let conBtn =document.getElementById('conBtn')
let congrat =document.getElementById('congrat')
//end

// create random number
let computerGuess;
 computerGuess =Math.floor(Math.random()*100)
console.log(computerGuess)
// store data in array
let getValue=[]

// display none
newGame.style.display='none'

newGame.addEventListener('click', ()=>{
    window.location.reload();
    audioTwo.play();
})

// score
let point =10;

const getNumber =()=>{
    let value =guessInput.value
    getValue =[...getValue,value]
    
    pg.innerHTML=`${getValue},`
    pa.innerHTML=getValue.length

    if(value > computerGuess){
        alertHeader.innerHTML ='Your Guess is High 😒'
        audioThree.play();
        value =guessInput.value ='';
    }else if(value < computerGuess){
        alertHeader.innerHTML ='Your Guess is low 😊'
        audioThree.play();
        value =guessInput.value ='';
    }else if(value == computerGuess){
        alertHeader.innerHTML =`Its Correct😀`
        guessInput.setAttribute('disabled', true)
        newGame.style.display='block'
        audioFoure.play();
        score.innerHTML+=point
        congrat.innerHTML+=point
        con.classList.add('alertActive')
        
    }


    if(getValue.length >=maxGuess){
        guessInput.setAttribute('disabled', true)
        alertHeader.innerHTML =`You Loss😭!<br> Correct Answer is ${computerGuess}`
        newGame.style.display='block'
        audioOne.play()
        newGame.innerHTML='Play Again'
    }

}

const tenAttempt =()=>{
secTwo.classList.add('block1')
secOne.classList.add('block2')
audioTwo.play();
maxGuess =10
}


const fiveAttempt =()=>{
    secTwo.classList.add('block1')
    secOne.classList.add('block2')
    audioTwo.play();
    maxGuess=5
}

const backToHome =()=>{
    secTwo.classList.remove('block1')
    secOne.classList.remove('block2')
    audioTwo.play();
} 

btn1.addEventListener('click', tenAttempt)
btn2.addEventListener('click', fiveAttempt)
conBtn.addEventListener('click', ()=>{
    con.classList.remove('alertActive')
})

btn1.addEventListener('mouseover',()=>{
audioOne.play();
})

btn2.addEventListener('mouseover',()=>{
    audioOne.play();
})
back.addEventListener('click', backToHome)



