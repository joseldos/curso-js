let nombre = "Jóse Luis";
let apellido = "dos Ramos";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numero = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length-1);
let estudianteSinEspacio = estudiante.trim();
let contenido = estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numero);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(estudianteSinEspacio);
console.log(contenido);

