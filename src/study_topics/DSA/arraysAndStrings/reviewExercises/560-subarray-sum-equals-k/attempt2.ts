export {};

function subarraySumEqualsToK(nums: number[], target: number): number {

    let curr = 0;
    let frecuencies = new Map();
    frecuencies.set(0,1); // el valor tiene un afrecuencia implicita de 1, por eso lo seteamos
    let cont = 0;
    for (let i = 0; i < nums.length; i++) {
        curr = curr + nums[i]; // calculamos el prefix sum 
        let complemento = curr - target;
        if (frecuencies.has(complemento)) {
            cont = cont + frecuencies.get(complemento);
        } 
          
        frecuencies.set(curr,(frecuencies.get(curr) || 0)+1);
    }
    return cont;
}

console.log(subarraySumEqualsToK([1,4,2,5], 5),2);
console.log(subarraySumEqualsToK([1,1,1], 2),2);
console.log(subarraySumEqualsToK([0,0], 3),3);
/**
 * 
 * Encontrar la cantidad de subarrays que cumplen con la suma k
 * 
 * Para esto ya sabesmos que es mejor usar el prefix sum, este prefix se puede ir generando al momento y se va a actualizando en cada iteracion.
 * 
 * Ahora, como determinamos cual es un subarray valido atravez de una prefix sum?
 * Recordando, un prefix sum, es un array que tiene las misma lingitud que el array orginal y tiene la suma acumulada de cada elemento del array original.
 * por ejemplo: [1,4,2,5] -> prefix sum [1,5,7,12]
 * esto significa: 
 * prefix[0]: 0 + 1 = 1
 * prefix[1]: prefix[0] + 4 = 1 + 4 = 5
 * prefix[2]: prefix[1] + 2 = 5 + 2 = 7
 * prefix[3]: prefix[2] + 5 = 7 + 5 = 12
 * 
 * NOTA
 * 
 * el prefix sum, puede representar subarrays si se hacen ciertas operaciones, por ejemplo, si quiero determinar los subarrays que sumen 5, tendria que ver cuales elementos del prefix sum, restados con otro elemento me dan como resultado 5.
 * Para el ejemplo [1,5,7,12] a simple vista solo tengo un elemento que suma 5 pero revisando mejor me doy cuenta que 12 - 7 = 5, entonces tengo dos subarrays que cumplen con esta restriccion
 * 
 * DATOS
 * 
 * target: representa la restriccion del subarray a encontrar -> 5
 * prefixSum curr: representa el valor actual del prefix sum -> 1
 * prefixSum last: representa el valor anterios del prefxi sum (o sea, si ese valor ya aparecio)
 * 
 * entonces, tengo que verificar si mi "valor" ya aparecio en mi map y aumentar su frecuencia de aparicion
 * este valor esta determinado por la operacion:
 * curr + -algo =target
 * curr - target = algo
 * 
 * algo = 1 - 5 = -4 | 4 existe en el map? | no ->  no aumenta el contador | 
 * algo = 5 - 5 = 0  | 0 existe en el map? | si -> aumenta el contador
 * algo = 7 - 5 = 2  | 2 exsite en el map? | no -> no aumenta
 * algo = 12 -5 = 7  | 7 existe en el map? | si -> aumenta el contador
 * 
 * ahora se que tengo dos subarrays que suman 5, tengo que obtener la suma de esos elementos
 * 
 * 
 * 
 * calculo mi prefix sum
 * agrego mi prefix sum a mi map y lo seteo en 0
 * reviso si mi resultado existe en el map, si existe actualizo el contador
 * cuando termine el bucle, tengo que calcular la suma de la aparicion de mis elementos
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */