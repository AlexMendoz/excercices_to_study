export {};


function squaresOfArray(nums: number[]): number[]{

    let i = 0;
    let j = nums.length-1;

    let res = [];
    let square = (x: number) => {return Math.pow(x,2)}

    while(j >= i) { // maayor o igual para que se cubran los casos con longitud impar en el array
        let i2 = square(nums[i]);
        let j2 = square(nums[j]);
        //caso 1
        if ( i2 > j2) {
            res.push(i2);
            i++;
        } else { //caso 2
            res.push(j2);
            j--;
        }
    
    }
    return res.reverse();
}

console.log(squaresOfArray([-4,-1,0,3,10]), [0,1,9,16,100])


/**
 * dado un array de numeros en orden ascendente, regresa un array en roden asecendente con el cuadrado de esos numeros
 * 
 * Recuerda que el punto es usar un algoritmo para reducr la complejidad
 * 
 * 
 * Esto es two pointers,
 */