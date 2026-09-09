export {};

function twoSum(nums: number[], target: number): number[] {


    let indexMap = new Map();
    

    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];
        
        console.log(indexMap, complemento)
        if (indexMap.has(complemento)) {
            return [indexMap.get(complemento), i]
        }
        indexMap.set(nums[i], i);
        
    }

    return []

}

console.log(twoSum([2,3,4,6],9));



/**
 * Dado un array de numeros, encontrar los indices de dos numeros que den como resultado tarjet
 * 
 * [2,3,4,6] y target = 9
 * 
 * la prespuesta seria [1,3] ya que esos numeros corresponden con 2 y 6 y la suma es 9
 * 
 * recuerda que se tiene que usar un Map, este map tiene que utlizar las llavez como indices y los valores como los valores de los numeros de array
 * 
 * x + y = target
 * i + ? = target
 * target - i = ? -> este elemento ya existe en el Map?
 * 
 * 0 -> 2 | target - nums[i] | 9 - 2 = 7 | 7 esta en el map? | NO
 * 1 -> 3 | target - nums[i] | 9 - 3 = 6 | 6 esta en el map? | SI
 * 2 -> 4 | target - nums[i] | 9 - 4 = 5 | 5 esta en el map? | NO
 * 3 -> 6 | target - nums[i] | 9 - 6 = 3 | 3 esta en el map? | SI
 * 
 * 
 * vamos agregar los elementos al map
 * hago la operacion
 * reviso si ese valor obtendio es el que acabo de agregar
 *  si es: lo agrego al array de respuesta
 *  no es: no lo agrego y sigo
 * 
 * 
 * IMPORTANTE
 * 
 * vas bien alex, solo que el enfoque que diste fue distinto, usaste las llaves como indices controlados (0,1,2,3,4) y en este caso tenian que ser los valores del array y los "indices" 
 * 
 */