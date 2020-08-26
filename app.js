document.addEventListener('DOMContentLoaded', () => {

    let ar = new Array(4)
    for(let i = 0; i < ar.length; i++){
        ar[i] = new Array(4);
    }
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            ar[i][j] = 0;
        }
    }

    let rowRand = Math.floor((Math.random() * 4));
    let colRand = Math.floor((Math.random() * 4));

    ar[rowRand][colRand] = 2;
    const randFirst = document.getElementById(`r${rowRand}c${colRand}`);
    randFirst.classList.add('rand');
    randFirst.innerText = ar[rowRand][colRand];
    console.log(rowRand, colRand);
    


    //Selectors
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const score = document.getElementById("score-count");

    //EventListners
    
    leftBtn.addEventListener('click', leftFun);
    rightBtn.addEventListener('click', rightFun);
    upBtn.addEventListener('click', upFun);
    downBtn.addEventListener('click', downFun);


    //Functions

    let scoreCount = 0;
    document.body.addEventListener('keydown', function(event) 
                                       { 
            const key = event.key; 
            switch (key) { 
                case "ArrowLeft": 
                    leftFun(); 
                    break; 
                case "ArrowRight": 
                    rightFun(); 
                    break; 
                case "ArrowUp": 
                    upFun(); 
                    break; 
                case "ArrowDown": 
                    downFun();
                    break; 
            } 
        });


    function leftFun(){

        let initial = [];
        for (let i = 0; i < ar.length; i++)
            initial[i] = ar[i].slice();

        shiftLeft();
        addLeft();
        shiftLeft();

        let final = [];
        for (let i = 0; i < ar.length; i++)
            final[i] = ar[i].slice();

        rowRand = Math.floor((Math.random() * 4));
        colRand = Math.floor((Math.random() * 4));
        while(ar[rowRand][colRand] !== 0 && !isFull()){
            rowRand = Math.floor((Math.random() * 4));
            colRand = Math.floor((Math.random() * 4));
        }
        
        if(!isEqual(initial,final)){
            inject();
        }
    }

    function inject(){
        ar[rowRand][colRand] = 2;
        for(let row = 0; row < 4; row++){
            for(let col = 0; col < 4; col++){
                let ele = document.getElementById(`r${row}c${col}`);
                if(ar[row][col] == 0)
                    ele.classList.add('empty');
                else
                    ele.classList.remove('empty');
                if(ar[row][col] == 2)
                    ele.classList.add('two');
                else
                    ele.classList.remove('two');
                if(ar[row][col] == 4)
                    ele.classList.add('four');
                else
                    ele.classList.remove('four');
                if(ar[row][col] == 8)
                    ele.classList.add('eight');
                else
                    ele.classList.remove('eight');
                if(ar[row][col] == 16)
                    ele.classList.add('sixteen');
                else
                    ele.classList.remove('sixteen');
                if(ar[row][col] == 32)
                    ele.classList.add('thirtytwo');
                else
                    ele.classList.remove('thirtytwo');
                if(ar[row][col] == 64)
                    ele.classList.add('sixtyfour');
                else
                    ele.classList.remove('sixtyfour');
                if(ar[row][col] == 128)
                    ele.classList.add('onetwentyeight');
                else
                    ele.classList.remove('onetwentyeight');
                if(ar[row][col] == 256)
                    ele.classList.add('twofiftysix');
                else
                    ele.classList.remove('twofiftysix');
                if(ar[row][col] == 512)
                    ele.classList.add('fivetwelve');
                else
                    ele.classList.remove('fivetwelve');
                if(ar[row][col] == 1024)
                    ele.classList.add('tentwentyfour');
                else
                    ele.classList.remove('tentwentyfour');
                if(ar[row][col] == 2048)
                    ele.classList.add('twentyfourtyeight');
                else
                    ele.classList.remove('twentyfourtyeight');
                ele.innerText = ar[row][col];
            }
        }
        score.innerText = scoreCount;
    }

    function shiftLeft(){
        for(let row = 0; row < 4; row++){
            for(let col = 0; col < 4; col++){
                for(let i = 0; i < 4; i++){
                    if(ar[row][col] == 0){
                        if(col == 0){
                            ar[row][col] = ar[row][col+1];
                            ar[row][col+1] = ar[row][col+2];
                            ar[row][col+2] = ar[row][col+3];
                            ar[row][col+3] = 0;
                        }
                        if(col == 1){
                            ar[row][col] = ar[row][col+1];
                            ar[row][col+1] = ar[row][col+2];
                            ar[row][col+2] = 0;
                        }
                        if(col == 2){
                            ar[row][col] = ar[row][col+1];
                            ar[row][col+1] = 0;
                        }       
                    }
                }
            }
        }
    }

    function addLeft(){
        for(let row = 0; row < 4; row++){
            for(let col = 0; col < 3; col++){
                if(ar[row][col] === ar[row][col+1] && ar[row][col] != 0){
                    ar[row][col] = 2*ar[row][col];
                    scoreCount = scoreCount + ar[row][col];
                    ar[row][col+1] = 0; 
                }
            }
        }
    }

    function addRight(){
        for(let row = 0; row < 4; row++){
            for(let col = 3; col > 0; col--){
                if(ar[row][col] === ar[row][col-1] && ar[row][col] != 0){
                    ar[row][col] = 2*ar[row][col]; 
                    scoreCount = scoreCount + ar[row][col];
                    ar[row][col-1] = 0;
                }
            }
        }
    }

    function addUp(){
        for(let col = 0; col < 4; col++){
            for(let row = 0; row < 3; row++){
                if(ar[row][col] === ar[row+1][col] && ar[row][col] != 0){
                    ar[row][col] = 2*ar[row][col];
                    scoreCount = scoreCount + ar[row][col];
                    ar[row+1][col] = 0; 
                }
            }
        }
    }

    function addDown(){
        for(let col = 0; col < 4; col++){
            for(let row = 3; row > 0; row--){
                if(ar[row][col] === ar[row-1][col] && ar[row][col] != 0){
                    ar[row][col] = 2*ar[row][col];
                    scoreCount = scoreCount + ar[row][col];
                    ar[row-1][col] = 0; 
                }
            }
        }
    }

    /*To check two arrays equality*/
    function isEqual(a, b){
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(a[i][j] != b[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    /* To check Array is full*/
    function isFull(){
        let counter = 0;
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(ar[i][j] === 0){
                    counter++;
                }
            }
        }
        if(counter != 0){
            return false;
        }
        return true;
    }
    /**/


    function rightFun(){
        let initial = [];
        for (let i = 0; i < ar.length; i++)
            initial[i] = ar[i].slice();

        shiftRight();
        addRight();
        shiftRight();

        let final = [];
        for (let i = 0; i < ar.length; i++)
            final[i] = ar[i].slice();

        
        rowRand = Math.floor((Math.random() * 4));
        colRand = Math.floor((Math.random() * 4));
        while(ar[rowRand][colRand] !== 0 && !isFull()){
            rowRand = Math.floor((Math.random() * 4));
            colRand = Math.floor((Math.random() * 4));
        }

        if(!isEqual(initial,final)){
            inject();
        }
    }
    function shiftRight(){
        for(let row = 0; row < 4; row++){
            for(let col = 3; col > 0; col--){
                for(let i = 0; i < 4; i++){
                    if(ar[row][col] == 0){
                        if(col == 3){
                            ar[row][col] = ar[row][col-1];
                            ar[row][col-1] = ar[row][col-2];
                            ar[row][col-2] = ar[row][col-3];
                            ar[row][col-3] = 0;
                        }
                        if(col == 2){
                            ar[row][col] = ar[row][col-1];
                            ar[row][col-1] = ar[row][col-2];
                            ar[row][col-2] = 0;
                        }
                        if(col == 1){
                            ar[row][col] = ar[row][col-1];
                            ar[row][col-1] = 0;
                        }
                    }
                }
            }
        }
    }
    
    function upFun(){
        let initial = [];
        for (let i = 0; i < ar.length; i++)
            initial[i] = ar[i].slice();

        shiftUp();
        addUp();
        shiftUp();

        let final = [];
        for (let i = 0; i < ar.length; i++)
            final[i] = ar[i].slice();

        
        rowRand = Math.floor((Math.random() * 4));
        colRand = Math.floor((Math.random() * 4));
        while(ar[rowRand][colRand] !== 0 && !isFull()){
            rowRand = Math.floor((Math.random() * 4));
            colRand = Math.floor((Math.random() * 4));
        }

        if(!isEqual(initial,final)){
            inject();
        }
    }

    function shiftUp(){
        for(let col = 0; col < 4; col++){
            for(let row = 0; row < 4; row++){
                for(let i = 0; i < 4; i++){
                    if(ar[row][col] == 0){
                        if(row == 0){
                            ar[row][col] = ar[row+1][col];
                            ar[row+1][col] = ar[row+2][col];
                            ar[row+2][col] = ar[row+3][col];
                            ar[row+3][col] = 0;
                        }
                        if(row == 1){
                            ar[row][col] = ar[row+1][col];
                            ar[row+1][col] = ar[row+2][col];
                            ar[row+2][col] = 0;
                        }
                        if(row == 2){
                            ar[row][col] = ar[row+1][col];
                            ar[row+1][col] = 0;
                        }       
                    }
                }
            }
        }
    }

    

    function downFun(){
        let initial = [];
        for (let i = 0; i < ar.length; i++)
            initial[i] = ar[i].slice();

        shiftDown();
        addDown();
        shiftDown();

        let final = [];
        for (let i = 0; i < ar.length; i++)
            final[i] = ar[i].slice();

        
        rowRand = Math.floor((Math.random() * 4));
        colRand = Math.floor((Math.random() * 4));
        while(ar[rowRand][colRand] !== 0 && !isFull()){
            rowRand = Math.floor((Math.random() * 4));
            colRand = Math.floor((Math.random() * 4));
        }

        if(!isEqual(initial,final)){
            inject();
        }
    }

    function shiftDown(){
        for(let col = 0; col < 4; col++){
            for(let row = 3; row > 0; row--){
                for(let i = 0; i < 4; i++){
                    if(ar[row][col] == 0){
                        if(row == 3){
                            ar[row][col] = ar[row-1][col];
                            ar[row-1][col] = ar[row-2][col];
                            ar[row-2][col] = ar[row-3][col];
                            ar[row-3][col] = 0;
                        }
                        if(row == 2){
                            ar[row][col] = ar[row-1][col];
                            ar[row-1][col] = ar[row-2][col];
                            ar[row-2][col] = 0;
                        }
                        if(row == 1){
                            ar[row][col] = ar[row-1][col];
                            ar[row-1][col] = 0;
                        }
                    }
                }
            }
        }
    }

});