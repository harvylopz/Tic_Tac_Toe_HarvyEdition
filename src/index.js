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
    if(data[0] === data[1] && data[1] === data[2]){
        console.log('winner is ' + data[0]);
    }
    else if(data[3] === data[4] && data[4] === data[5]){
        console.log('winner is ' + data[3]);
    } else if(data[6] === data[7] && data[7] === data[8]){
        console.log('winner is ' + data[6]);
    } else if(data[0] === data[3] && data[3] === data[6]){
        console.log('winner is ' + data[0]);
    } else if(data[1] === data[4] && data[4] === data[7]){
        console.log('winner is ' + data[1]);
    } else if(data[2] === data[5] && data[5] === data[8]){
        console.log('winner is ' + data[2]);
    } else if(data[0] === data[4] && data[4] === data[8]){
        console.log('winner is ' + data[0]);
    } else if(data[2] === data[4] && data[4] === data[6]){
        console.log('winner is ' + data[2]);
    } else { 
        console.log('no winner');
    }
}

function machineSelect(){
    var data = getDataPosition();
    var random = Math.floor(Math.random() * 9);
    while(data[random] !== ''){
        random = Math.floor(Math.random() * 9);
    }
    console.log(`random is function machineSelect ${random}`);
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
        var button = document.getElementById(id);
        button.innerText = 'X';
        evaluationWinner(); 
        let x = false;
        while (x === false){
            var random = machineSelect();
            console.log('random is ' + random);
            let randomConvert = convertNumberToId(random);
            console.log('random convert is ' + randomConvert);
            let isCleanMachine = evaluationSquareClear(randomConvert);
            console.log('isCleanMachine is ' + isCleanMachine);
            if (isCleanMachine === true){   
                machineWritte(random);
                evaluationWinner();
                x = true;
            } else {
                x = false;  
                console.log('machine is busy');
            }
        }   
    }
}
