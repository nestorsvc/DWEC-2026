function trianguloIsosceles(){
    let triangulo = [];
    let n = parseInt(prompt('Introduce la altura del triangulo:'));
    for (let i = 0; i < n ; i++){
        triangulo[i] = '';
        for (let j = 0; j < n - i - 1; j++){
            triangulo[i]+= ' ';
        }
        for (let x = 0; x < 2 * i + 1; x++){
            triangulo[i]+='*';
        }
    }
    console.log(triangulo);
}
trianguloIsosceles();
