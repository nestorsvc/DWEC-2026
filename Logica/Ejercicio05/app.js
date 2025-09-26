function rombo(){
    let rombo = [];
    let n = 5;
    for (let i = 0; i < n; i++ ){
        rombo[i] = '';
        for(let j = 0; j < n - 1 - i; j++){
            rombo[i] += ' ';
        }
        for (let x = 0; x < 2 * i + 1; x++){
            rombo[i] += '*';
        }
    }
    for (let i = n - 2; i >= 0; i--){
        for(let j = 0; j < n - 1 - i; j++){
            rombo[i] += ' ';
        }
        for (let x = 0; x < 2 * i + 1; x++){
            rombo[i] += '*';
        }
    }
    console.log(rombo);
    
}
rombo();