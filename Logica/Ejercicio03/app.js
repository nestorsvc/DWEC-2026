function cuadradoRectangulo(){
    let n = parseInt(prompt('Introduce la altura del rectangulo:'));
    let cuadrado = [];
    for (let i = 0; i <= n-1; i++){
        cuadrado[i] = '';                
        for (let j = 0; j <= n - 1; j++){
            if(i == 0|| i == n-1 || j == 0 || j == n-1){
                cuadrado[i] += '*';
            }else{
                cuadrado[i] += ' ';
            }
        }
    }
    console.log(cuadrado);
    
}
cuadradoRectangulo();