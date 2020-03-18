let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// cau 3
const generateTarget = ()=> Math.floor(Math.random()*9);

// cau 4
function compareGuesses(human, computer,target){
    const distanceHuman = Math.abs(human-target);
    const distanceComputer = Math.abs(computer-target);
    if (distanceHuman < distanceComputer){
        return true;
    }
    else return false;


}
// cau 5
const updateScore = (winner)=>{
    switch(winner){
        case "human":
            humanScore +=1;
            break;
        default : 
            computerScore +=1;
            break;
    }


}
// cau 6
function advanceRound(currentRoundNumber){
    return currentRoundNumber +=1
}