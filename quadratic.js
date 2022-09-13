let a = 1;
let b = 7;
let c = 10;

let x1= ((-b+ Math.sqrt((b**2)-4*a*c))/ (2*a));
let x2= ((-b- Math.sqrt((b**2)-4*a*c))/ (2*a));

console.log(`Using the quadratic formula letting a = ${a}, b = ${b}, c = ${c} gives you a solution of ${x1} and ${x2}.`);