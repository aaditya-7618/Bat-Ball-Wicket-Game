let score = {
    won:0,
    lost:0,
    tie:0,
}

let prev_score = JSON.parse(localStorage.getItem('Score'));
console.log(prev_score);

score = prev_score || score;
localStorage.setItem('Score',JSON.stringify(score));

/*localStorage.setItem('Score',JSON.stringify(score));
score=JSON.parse(localStorage.getItem('Score'));*/

function rand_choose(){
    let num = Math.random()*3;
    if(num>=0 && num<1) return 'bat';
    if(num>=1 && num<2) return 'ball';
    if(num>=2) return 'wicket';
}

function func(user_choose){
    let result="";
    let comp_choose = rand_choose();
    if(user_choose=='bat'){
        if(comp_choose=='bat'){
            result='Match Draw';
        }
        else if(comp_choose=='ball'){
            result='You Won'
        }
        else{
            result='You Lost'
        }
    }
    else if(user_choose=='ball'){
        if(comp_choose=='bat'){
            result='You Lost'
        }
        else if(comp_choose=='ball'){
            result='Match Draw';
        }
        else{
            result='You Won'
        }
    }
    else if(user_choose=='wicket'){
        if(comp_choose=='bat'){
            result='You Won';
        }
        else if(comp_choose=='ball'){
            result='You Lost'
        }
        else{
            result='Match Draw'
        }
    }
    else if(user_choose=='curr_score'){
        alert(`Total Score :) \n    You Won : ${score.won} times \n    You Lost : ${score.lost} times \n    Draws  : ${score.tie} times`);
    }
    else{
        // user choice is reset
        let reset_choose = confirm("This will Reset Your Game : ");
        if(reset_choose){
            localStorage.clear();
            score.lost=0;
            score.tie=0;
            score.won=0;
        }
    }

    if((user_choose != 'reset') && (user_choose!='curr_score')){
        display(user_choose,comp_choose,result);
    }
}

function display(userCh, compCh, result){
    
    if(result=='You Lost'){
        score.lost++;
    }
    else if(result=='You Won'){
        score.won++;
    }
    else{
        score.tie++;
    }
    
    localStorage.setItem('Score',JSON.stringify(score));
    /*console.log(localStorage.getItem('Score'));*/

    compCh = compCh.toUpperCase();
    userCh = userCh.toUpperCase();
    alert(`\nUser choice ${userCh}, Computer choice ${compCh}, Result ${result}\n\n Total Score :) \n    You Won : ${score.won} times \n    You Lost : ${score.lost} times \n    Draws  : ${score.tie} times`);

}