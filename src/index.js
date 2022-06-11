var countGame = 0;
var winner = "no info";
var noWinner = 0;

function getDataPosition(){
    var leftTop =  document.getElementById('left-top').innerText;
    var centerTop = document.getElementById('center-top').innerText;
    var rightTop = document.getElementById('right-top').innerText;
    var leftCenter = document.getElementById('left-center').innerText;
    var centerCenter = document.getElementById('center-center').innerText;
    var rightCenter = document.getElementById('right-center').innerText;
    var leftBottom = document.getElementById('left-bottom').innerText;
    var centerBottom = document.getElementById('center-bottom').innerText;
    var rightBottom = document.getElementById('right-bottom').innerText;    
    return [leftTop, centerTop, rightTop, leftCenter, centerCenter, rightCenter, leftBottom, centerBottom, rightBottom];
}

function evaluationWinner (){
    var data = getDataPosition();
    console.log(data);
    if(data[0] === "X" && data[1] === "X" && data[2] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    }  else if(data[3] === "X" && data[4] === "X" && data[5] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[6] === "X" && data[7] === "X" && data[8] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[0] === "X" && data[3] === "X" && data[6] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[1] === "X" && data[4] === "X" && data[7] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[2] === "X" && data[5] === "X" && data[8] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[0] === "X" && data[4] === "X" && data[8] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[2] === "X" && data[4] === "X" && data[6] === "X"){
        winner = "The Winner is X";
        alert(winner);
        noWinner = 1;
    } else if(data[0] === "O" && data[1] === "O" && data[2] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[3] === "O" && data[4] === "O" && data[5] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[6] === "O" && data[7] === "O" && data[8] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[0] === "O" && data[3] === "O" && data[6] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[1] === "O" && data[4] === "O" && data[7] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[2] === "O" && data[5] === "O" && data[8] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[0] === "O" && data[4] === "O" && data[8] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    } else if(data[2] === "O" && data[4] === "O" && data[6] === "O"){
        winner = "The Winner is O";
        alert(winner);
        noWinner = 1;
    }
}

    


function machineSelect(){
    var random = Math.floor(Math.random() * 9) + 1;
    return random;
}
 
function machineWritte(random){
    if (random === 1){
        document.getElementById('left-top').innerText = 'O';
    }   else if (random === 2){
        document.getElementById('center-top').innerText = 'O';
    }   else if (random === 3){
        document.getElementById('right-top').innerText = 'O';
    }   else if (random === 4){
        document.getElementById('left-center').innerText = 'O';
    }   else if (random === 5){
        document.getElementById('center-center').innerText = 'O';
    }   else if (random === 6){
        document.getElementById('right-center').innerText = 'O';
    }   else if (random === 7){
        document.getElementById('left-bottom').innerText = 'O';
    }   else if (random === 8){
        document.getElementById('center-bottom').innerText = 'O';
    }   else if (random === 9){
        document.getElementById('right-bottom').innerText = 'O';
    }
}

function evaluationSquareClear(id){
    var button = document.getElementById(id);
    if (button.innerText === ''){
        return true;
    } else {
        return false;
    }
}

function convertNumberToId(number){
    if (number === 1){
        return 'left-top';
    }   else if (number === 2){
        return 'center-top';
    }   else if (number === 3){
        return 'right-top';
    }   else if (number === 4){
        return 'left-center';
    }   else if (number === 5){
        return 'center-center';
    }   else if (number === 6){
        return 'right-center';
    }   else if (number === 7){
        return 'left-bottom';
    }   else if (number === 8){
        return 'center-bottom';
    }   else if (number === 9){
        return 'right-bottom';
    }
}





function pressButton(id){
    let isClean = evaluationSquareClear(id);
    if (isClean === true){
        countGame = countGame + 1;
        var button = document.getElementById(id);
        button.innerText = 'X';
        let x = false;
        if (countGame  === 5){
            evaluationWinner();
            if (noWinner === 0){
                alert('No Winner');
            }
        }   else {
            while (x === false){
                var random = machineSelect();
                let randomConvert = convertNumberToId(random);
                let isCleanMachine = evaluationSquareClear(randomConvert);
                if (isCleanMachine === true){   
                    machineWritte(random);
                    x = true;
                } else {
                    x = false;  
                    console.log('machine is busy');
                }
            }
        }      
    }
    evaluationWinner();
}
