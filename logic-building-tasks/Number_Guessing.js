import PromptSync from  "prompt-sync";

let prompt=PromptSync();

const randomnum=Math.floor(Math.random()*100);
let count=10;
let attempt=0;
let flag=false;
while(count > 0){
    attempt++;
    let num=Number(prompt("Guess a number"));

    if(randomnum === num){
        console.log(`Congratualtions You guess a number : ${num} . you got in ${attempt} attempt.`);
        flag=true;
        break;
    }
    else if(randomnum > num){
        count--;
        console.log(`Too Low, Go to higher. you left with ${count} attempts.`);

    }
    else{
        count--;
        console.log(`Too High, Go Lower. you left with ${count} attempts.`);
    }
}
if(attempt === 10 && flag === false){
    console.log(`random number is ${randomnum}`);
}