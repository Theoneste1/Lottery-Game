//Javascript

let btnNumber= document.querySelector('.produceNumbers');
let btnWinner=document.querySelector('.showWinners');
let ResetBtn= document.querySelector('.reset');
// console.log(btnWinner);
// console.log(btnNumber);

btnNumber.addEventListener("click",(e)=>{
//    console.log(e)
   displayProducedNumbers();
//    console.log(displayProducedNumbers());
   isWinner()

});

btnWinner.addEventListener("click", function(e){
    // e.preventDefault();
   
    //recalling the array after changing pages
    // displayProducedNumbers();
    displaywinners();
    
})

ResetBtn.addEventListener('click',function(e){
    x = document.getElementById("demo");
    x.innerHTML = wholeArray.map(number=>{
        var index=wholeArray.indexOf(number);
        if( index===18)
            {
            return`<h2 class="doneRottery">It is okay Now</h2>`
        }

       
    }).join("");
    


});


function displayProducedNumbers() {
    x = document.getElementById("demo");
    x.innerHTML = wholeArray.map(number=>{

        return(winners.includes(number))? 
        `<div class="number winner ${number}">${number}</div>`:
        `<div class="number looser ${number}">${number}</div>`

    }).join("");
    // console.log(displayProducedNumbers());
    // console.log("I am produced Numbers")
  }

  displaywinners=()=>{
   
// go through the div class created
    const items=document.querySelectorAll('.result div');

    //changing Nodlist to array
    const array = [].slice.call(items);
    //Map through array
    array.map(item=>
        {
        if(item.classList.contains('winner')){
            item.style.backgroundColor="green";
            item.style.border=" solid yellow";
            }

        })

  }
  displaywinners();


//   anctivatingo

var arrayNumbers=[];
var wholeArray=[];
let winners=[];

// looking for the winners
function isWinner(){


     while(winners.length<3 || 
        arrayNumbers.length<17){

        let winningNumber=Math.floor(Math.random()*1000);
            
            if(sumOfNumbers(winningNumber)!==1
                && (arrayNumbers.length<17)){

                // pushing in arrayNumbers
                arrayNumbers.push(winningNumber);
            //pushing in general array
                wholeArray.push(winningNumber); 
            }
            
            else if(sumOfNumbers(winningNumber)===1
                && winners.length<3)
            {
                //pushing in winner array
               winners.push(winningNumber);
               //push in general array
               wholeArray.push(winningNumber);
            }
            else if (wholeArray.length===20){
                return;
            }

    }

    console.log(`winners: [${winners}]`);
       console.log(`arrayNumbers: [${arrayNumbers.length}]`)
       console.log(`wholeArray :[${wholeArray.length}]`)

        return wholeArray;
}

isWinner();
console.log(wholeArray);



function sumOfNumbers(number){
let newNumber=number.toString()
.split("");

//changing into numbesrs!
while(newNumber.length!==1){

    newNumberInteger=newNumber.map(num=>parseInt(num)*parseInt(num))

let sumOfArray=
newNumberInteger.reduce((numberOne,sum)=>
    sum+numberOne);

newNumber= sumOfArray.toString()
.split("");

// console.log(newNumber);
}
return parseInt(newNumber[0]); // that number
}
sumOfNumbers(13563);