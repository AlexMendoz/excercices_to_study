# 560. subarray sum equals k

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

## 1. Análisis previo

### ¿Qué me están pidiendo?
Respuesta: encotrar el numero total de subarray que sumen k

### Input / Output
- Input: inteeger array and integer k
- Output: integer 

### Ejemplo pequeño
Respuesta:

### ¿Qué información necesito conservar?
Respuesta: para [1,1,1]  y k = 2 2, por que [1,1] = 1+1 = 2, y [1,1] = 1+1= 2

### Patrón o estructura que parece encajar
Respuesta: sliding window

### Brute force (opcional)
Respuesta: 

---

## 2. Antes de programar

### Regla principal del algoritmo
Respuesta: encontrar un ventana que cumpla con la condicion de la suma

### Variables / estructuras importantes
- `variable`: i
  - Representa: indice izquierdo
  - Cambia cuando: no se cumple la suma igual a k

- `variable`: j
  - Representa:indice derecho
  - Cambia cuando: siempre no se cunmpla la suma igual a k

- `variable`: ans
  - Representa: numero de subarray que cumplen con la condicion
  - Cambia cuando: se encuentra un nuevo subarray

---

## 3. Resultado

- Fecha: YYYY-MM-DD
- Tiempo efectivo: 35 minutos 10:21 11:11
- Estado: `No terminado | Resuelto con ayuda | Resuelto independientemente`
- Ayuda utilizada: `Ninguna | Pista | Explicación | Solución`
- Complejidad temporal:
- Complejidad espacial:

---

## 4. Revisión

### Bloqueo principal
Respuesta: Identificar correctamente como aumentan o disminuyen las ventanas

### Error encontrado
Respuesta:

### Aprendizaje principal
Respuesta:

### Qué haría diferente la próxima vez
Respuesta:
