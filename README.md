# PLAN-DE-ESTUDIOS
TEMAS POO 
1. 
CLASES Y OBJETOS 
CLASE: ES UN ON MODEL O PLANO (PARA PODER CREAR EL OBJETO).
OBJETO: ES ALGO HECHO APARTIR DE LA CLASE .
2. 
ATRIBUTOS: SON LAS CARACTERISITICAS DEL OBJETO.
METODOS: SON LAS ACCIONES DEL OBJETO .

3. 
INSTANCIA DE OBJETOS: CUANDO SE UTULIZA UNA INSTANCIA ES POQUE ESTAS CREANDO UN OBJETO.
ABSTRACCION: ES OCULTAR DETALLES COMPLEJOS, SOLO NECESITAS MOSTRAR LO NECESARIO Y HASTA AHI.

4. 
ENSCAPSULAMIENTO: ES PROTEGER LOS DATOS DENTRO DE UNA CLASE, NO CUALQUIERA PUEDA MODIFICARLO.

BASES DE DATOS 

1. MODELO RELACION
TABLAS: REGISTRO DE DATOS CON COLUMNAS.
CLAVE PRIMARIA: IDENTIFICACION DE FORMA UNICA LA FILA. 
CLAVE FORANEA: HACE REFERENCIA A OTRO TABLA.

2. NORMALIZACION (1FN, 2FN, 3FN)
PARA TENER UNA MEJOR LECTURA DE TABLAS Y NO TENER VALORES DUPLICADOS.
1FN: EVITA TENER VALORES REPETIDAS EN UNA SOLA COLUMNA.
2FN: TIENE QUE CUMPLIR 1FN, Y LAS COLUMNAS DEBEN DE DEPENDER DEL ID DE LA TABLA NO DE OTRAS.
3FN: NINGUNA COLUMNA DEBE DE DEPENDER DE OTRAS COLUMNAS.

3. DDL 
CREATEDB: SIRVE PARA CREAR UNA NUEVA TABLA.
ALTER TABLE: SIRVE PARA MODIFICAR UNA TABLA EXISTENTE.
DROP: SIRVE PARA BORRAR UNA TABLA, 


DATOS PRIMITIVOS: SON TIPOS DE DATOS DE JS 
STRING    -> "Hola"
number    -> 2
boolean   -> true
null      -> valor vacio
undefined -> valor no asignado


ECMASCRIPT: ES UN ESTANDAR DE COMO DEBERIA USAR JS. 
POR EJEMPLO: LET, CONST AQUI NO SE UTILIZA VAR 
FUNCIONES FLECHA: () => {}



SEMANA 2: ESTRUCTURAS DE DATOS Y SQL 

1. LISTAS Y PILAS.

LISTAS: un arreglo es una lista con valores con posiciones enumeras, una posicion llamada indice
empieza desde el indice 0, puedes guardar numeros texto, objetos. 

PILAS: Se habla de una pila cuando el ultimo valor que entra a una lista es el ultimo en salir,
ejemplo: 

res.push(1);
res.pop();

2. COLAS Y HASH TABLES

COLAS: Se habla de una cola cuando el primer valor entrar a una lista es el primero en salir
ejemplo: 

res.push(1);
res.shift();

HAST TABLES: Se guarda informacion en pares clave-valor, pero usando una funcion hash para encontrar
los datos muy rapido 

ejemplo: 

const tablaHash = new Map<string, string>();

tablaHash.set("nombre", "Ana");
tablaHash.set("ciudad", "Madrid");

3. BASES DE DATOS DML: SELECT, INSERT, UPDATE, DELETE.

SELECT: Sirve para consultar la informacion de uno o varias tablas, ejemplo: 

SELECT * FROM jugadores; 

INSERT: Sirve para agregar datos a una tabla, ejemplo: 

INSERT INTO jugadores (nombre, posicion, equipo) VALUES ('Eduardo', 'Defensa', 'Chivas');

UPDATE: Sirve para actualizar datos de una tabla ejemplo: 

UPDATE jugadores SET posicion = 'Delantero' WHERE nombre = 'Eduardo';

DELETE: Sirve para eliminar datos de una tabla ejemplo: 

DELETE FROM jugadores WHERE nombre = 'Eduardo';

4. JOINS Y SUBCONSULTAS; 
JOINS: Sirve para combinar datos de dos o mas tablas en una consulta usando una llave primaria
ejemplo: 

SELECT j.nombre, e.nombre FROM JUGADORES j INNER JOIN equipos e on e.idJugadores = j.id;

SUBCONSULTAS: Son consultas dentro de otra consulta
ejemplo: 
  
SELECT nombre FROM jugadores WHERE id = (
    SELECT idJugador FROM goles WHERE anotados > 10 
)

5. INDICES, FUNCIONES, PROCEDIMIENTOS

INDICES: Un indice en sql es como un indice de libro, lo que facilita la busqueda de datos 
mas rapida, ejemplo: 

CREATE INDEX idx:nombre ON jugadores(nombre);

FUNCIONES: Es un bloque de codigo que recibe datos, realiza calculos o transformaciones
ejemplo: 

SELECT sum(goles_anotados) * FROM estadisticas; 

PROCEDIMIENTOS: Es un conjunto de datos de insterucciones SQL guardados en la base de datos 
ejemplo: 

CREATE PROCEDURE getPlayer()
BEGIN 
 SELECT name * FROM jugadores;
END;

6. ORM SEQUELIZE
SEQUELIZE: Es un ORM de nodejs y typrescript, permitre trabajar con bases de datos sql usando 
codigo de javascript en vez de realizar consultas sql
ejemplo: 

 await Jugador.create({ nombre: "Eduardo", posicion: "Defensa" });


7. TYPECASTING
TYPECASTING: Es convertir en un valor de un tipo de dato a otrom de una forma explicita, esto 
asegura que tenga el formarto completo
ejemplo:

let edad: string = '24';

typecasting a numero 
const edadUpdated = Number(edad);


8. OPERADORES DE COMPARACION
Sirve para comparar operadpres de comparacion sirve para comparar dos valores y devolver siempre un
resultado booleano true o false

8.1 COMPARACIONES DE IGUALDAD:

== Igualdad débil Compara valores con conversión de tipos (type coercion). Ej: 5 == '5' → true
=== Igualdad estricta Compara valores y tipos. Ej: 5 === '5' → false
!= Desigualdad débil Igual que == pero niega el resultado. Ej: 5 != '5' → false
!== Desigualdad estricta gual que === pero niega el resultado. Ej: 5 !== '5' → true

8.2 Comparaciones relacionales
>	Mayor que	7 > 5	true
<	Menor que	3 < 10	true
>=	Mayor o igual que	5 >= 5	true
<=	Menor o igual que	4 <= 2	false

9. BigO Run times
Es el proceso de medir qué tan eficiente es un algoritmo 
ejemplos: 

O(1) Constante	Acceder a un elemento en un array	Siempre tarda lo mismo, sin importar n.	arr[0]
O(log n) Logarítmica	Búsqueda binaria	Divide el problema a la mitad cada vez.	binarySearch()
O(n) Lineal	Recorrer una lista	Tarda proporcional a n.	for (let i=0; i<n; i++)
O(n log n) Log-lineal	Merge Sort, Quick Sort	Divide y ordena.	mergeSort()
O(n²) Cuadrática	Doble bucle anidado	Crece rápido con n.	for dentro de for
O(2ⁿ) Exponencial	Problemas de combinaciones	Crece extremadamente rápido.	Recursión sin optimizar
O(n!) Factorial	Permutaciones	Prácticamente imposible para n grandes.	Generar todas las permutaciones