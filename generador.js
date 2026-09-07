/* ============================================================
   GENERADOR DE MATEMÁTICA
   Arma preguntas nuevas cada vez, con números al azar dentro del
   ámbito de 2° básico (0 a 100, tablas del 2, del 5 y del 10).
   Nunca se repiten, y los distractores son errores plausibles
   (uno más, uno menos, dígitos cambiados), no respuestas absurdas.

   Cada pregunta sale con la misma forma que las del banco fijo:
   {k, p, v, o:[[dibujo, palabra]...], c, x}
   ============================================================ */

function azar(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

function mezclar(a){
  const c = a.slice();
  for(let i = c.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const t = c[i]; c[i] = c[j]; c[j] = t;
  }
  return c;
}

/* Arma las 3 opciones: la correcta más dos errores creíbles,
   siempre distintas entre sí y sin números negativos. */
function opciones(correcta, candidatos, sufijo){
  const usados = [correcta];
  const malos = [];
  const lista = mezclar(candidatos);
  for(let i = 0; i < lista.length && malos.length < 2; i++){
    const v = lista[i];
    if(v >= 0 && usados.indexOf(v) === -1){ usados.push(v); malos.push(v); }
  }
  let n = 1;
  while(malos.length < 2){
    const v = correcta + n;
    if(usados.indexOf(v) === -1){ usados.push(v); malos.push(v); }
    n++;
  }
  const texto = function(v){ return sufijo ? (v + " " + sufijo) : String(v); };
  return { o:[["", texto(correcta)], ["", texto(malos[0])], ["", texto(malos[1])]], c:0 };
}

/* Dibuja grupos de diez y unidades sueltas */
function dibujoDecenas(n){
  const d = Math.floor(n / 10), u = n % 10;
  let s = "";
  for(let i = 0; i < d; i++) s += "🔟";
  if(u){ s += " + "; for(let i = 0; i < u; i++) s += "⭐"; }
  return s;
}
function dec(n){ return n + (n === 1 ? " decena" : " decenas"); }
function repetir(e, n){
  let s = "";
  for(let i = 0; i < n; i++){ s += e; if((i+1) % 10 === 0) s += " "; }
  return s;
}

const COSAS = ["🍎","⭐","🍪","🌸","🐟","🎈","🍓","🐞","🧁","🐤"];

/* ---------- las fábricas de preguntas ---------- */
const FABRICAS = [

  /* contar objetos dibujados */
  function(){
    const n = azar(6, 20), e = COSAS[azar(0, COSAS.length - 1)];
    const op = opciones(n, [n+1, n-1, n+2, n-2]);
    return {k:"contar y comparar", p:"Cuenta y dime cuántos hay.", v:repetir(e, n),
      o:op.o, c:op.c, x:"Contando de uno en uno son " + n + "."};
  },

  /* sumar sin reserva */
  function(){
    const a = azar(11, 60), b = azar(2, Math.min(9, 99 - a));
    const op = opciones(a+b, [a+b+1, a+b-1, a+b+10, a-b]);
    return {k:"sumar", p:"¿Cuánto es " + a + " + " + b + "?", v:dibujoDecenas(a) + "  y  " + repetir("⭐", b),
      o:op.o, c:op.c, x:"A " + a + " le sumas " + b + " sueltas y llegas a " + (a+b) + "."};
  },

  /* sumar decenas completas */
  function(){
    const a = azar(1, 5) * 10, b = azar(1, Math.min(4, (100 - a) / 10)) * 10;
    const op = opciones(a+b, [a+b+10, a+b-10, a+b+1]);
    return {k:"sumar", p:"¿Cuánto es " + a + " + " + b + "?", v:dibujoDecenas(a) + "  +  " + dibujoDecenas(b),
      o:op.o, c:op.c, x:dec(a/10) + " más " + dec(b/10) + " son " + dec((a+b)/10) + ": " + (a+b) + "."};
  },

  /* restar */
  function(){
    const a = azar(12, 60), b = azar(2, Math.min(9, a % 10 === 0 ? 9 : a % 10));
    const op = opciones(a-b, [a-b+1, a-b-1, a+b]);
    return {k:"restar", p:"¿Cuánto es " + a + " − " + b + "?", v:"Tenías " + a + " y regalaste " + b + " " + repetir("⭐", b),
      o:op.o, c:op.c, x:"Si a " + a + " le quitas " + b + ", quedan " + (a-b) + "."};
  },

  /* restar decenas */
  function(){
    const a = azar(3, 9) * 10, b = azar(1, (a/10) - 1) * 10;
    const op = opciones(a-b, [a-b+10, a-b-10, a+b]);
    return {k:"restar", p:"¿Cuánto es " + a + " − " + b + "?", v:dibujoDecenas(a) + "  y se van " + (b/10) + " grupos de 10",
      o:op.o, c:op.c, x:dec(a/10) + " menos " + dec(b/10) + " son " + dec((a-b)/10) + ": " + (a-b) + "."};
  },

  /* dobles y mitades */
  function(){
    const n = azar(2, 10);
    if(Math.random() < 0.5){
      const op = opciones(n*2, [n*2+1, n*2-1, n+2]);
      return {k:"sumar", p:"¿Cuál es el DOBLE de " + n + "?", v:repetir("⭐", n) + " y otra vez " + repetir("⭐", n),
        o:op.o, c:op.c, x:"El doble es lo mismo dos veces: " + n + " + " + n + " = " + (n*2) + "."};
    }
    const op = opciones(n, [n+1, n-1, n*2]);
    return {k:"restar", p:"¿Cuál es la MITAD de " + (n*2) + "?", v:repetir("⭐", n) + " | " + repetir("⭐", n),
      o:op.o, c:op.c, x:"La mitad es repartir en dos partes iguales: " + n + " y " + n + "."};
  },

  /* completar la decena */
  function(){
    const dec = azar(1, 9) * 10, n = dec - azar(1, 9);
    const falta = dec - n;
    const op = opciones(falta, [falta+1, falta-1, falta+10]);
    return {k:"sumar", p:"¿Cuánto le falta a " + n + " para llegar a " + dec + "?", v:n + " + ___ = " + dec,
      o:op.o, c:op.c, x:n + " y " + falta + " son " + dec + ". Ese truco sirve para sumar rápido."};
  },

  /* decenas y unidades */
  function(){
    const n = azar(21, 99);
    const d = Math.floor(n/10), u = n % 10;
    if(Math.random() < 0.5){
      const op = opciones(d, [u, d+1, d-1], "decenas");
      return {k:"decenas y unidades", p:"En el número " + n + ", ¿cuántas DECENAS hay?", v:dibujoDecenas(n),
        o:op.o, c:op.c, x:"Cada 🔟 es un grupo de diez: hay " + d + " grupos y " + u + (u === 1 ? " suelta." : " sueltas.")};
    }
    const op = opciones(u, [d, u+1, u-1], "unidades");
    return {k:"decenas y unidades", p:"En el número " + n + ", ¿cuántas UNIDADES sueltas hay?", v:dibujoDecenas(n),
      o:op.o, c:op.c, x:"El " + n + " tiene " + d + " decenas y " + u + " unidades sueltas."};
  },

  /* componer un número */
  function(){
    const d = azar(2, 9), u = azar(1, 9), n = d*10 + u;
    const op = opciones(n, [u*10 + d, n+10, n-10]);
    return {k:"decenas y unidades", p:d + " decenas y " + u + " unidades forman el número...", v:dibujoDecenas(n),
      o:op.o, c:op.c, x:d + " decenas son " + (d*10) + ", más " + u + " sueltas: " + n + "."};
  },

  /* comparar dos números */
  function(){
    let a = azar(11, 99), b = azar(11, 99);
    while(a === b) b = azar(11, 99);
    const mayor = Math.random() < 0.5;
    const bueno = mayor ? Math.max(a,b) : Math.min(a,b);
    const malo  = mayor ? Math.min(a,b) : Math.max(a,b);
    return {k:"contar y comparar", p:"¿Cuál número es " + (mayor ? "MAYOR" : "MENOR") + "?", v:a + "  ·  " + b,
      o:[["", String(bueno)], ["", String(malo)], ["", "Son iguales"]], c:0,
      x:"Primero se miran las decenas: " + Math.floor(bueno/10) + " contra " + Math.floor(malo/10) + "."};
  },

  /* el signo mayor que o menor que */
  function(){
    let a = azar(5, 99), b = azar(5, 99);
    while(a === b) b = azar(5, 99);
    const signo = a > b ? ">" : "<";
    const otro  = a > b ? "<" : ">";
    return {k:"contar y comparar", p:"¿Qué signo va entre los dos números?", v:a + " ___ " + b,
      o:[["", a + " " + signo + " " + b], ["", a + " " + otro + " " + b], ["", a + " = " + b]], c:0,
      x:"La boquita del signo se abre siempre hacia el número más grande, que aquí es el " + Math.max(a,b) + "."};
  },

  /* antes y después */
  function(){
    const n = azar(11, 98);
    const despues = Math.random() < 0.5;
    const bueno = despues ? n+1 : n-1;
    const op = opciones(bueno, [despues ? n-1 : n+1, n+2, n-2]);
    return {k:"contar y comparar", p:"¿Qué número va " + (despues ? "DESPUÉS" : "ANTES") + " del " + n + "?",
      v:(n-1) + " · " + n + " · " + (n+1),
      o:op.o, c:op.c, x:"Contando en orden, " + (despues ? "después" : "antes") + " del " + n + " viene el " + bueno + "."};
  },

  /* contar de 2, de 5 o de 10 en 10 */
  function(){
    const paso = [2,5,10][azar(0,2)];
    const ini = paso * azar(1, 5);
    const serie = [ini, ini+paso, ini+paso*2, ini+paso*3];
    const bueno = ini + paso*4;
    const op = opciones(bueno, [bueno+1, bueno-1, bueno+paso]);
    return {k:"patrones", p:"Contando de " + paso + " en " + paso + ", ¿qué número sigue?",
      v:serie.join(" · ") + " · ?",
      o:op.o, c:op.c, x:"Vas sumando " + paso + " cada vez: " + (ini+paso*3) + " más " + paso + " son " + bueno + "."};
  },

  /* multiplicar como grupos iguales (tablas del 2, 5 y 10) */
  function(){
    const tabla = [2,5,10][azar(0,2)];
    const veces = azar(2, 6);
    const total = tabla * veces;
    const cosa = tabla === 2 ? "🍪" : (tabla === 5 ? "🖐️" : "🔟");
    let dibujo = "";
    for(let i = 0; i < veces; i++){ dibujo += (tabla === 5 || tabla === 10 ? cosa : repetir(cosa, 2)) + "  "; }
    const op = opciones(total, [total+tabla, total-tabla, tabla+veces]);
    const nombre = tabla === 2 ? "platos con 2 galletas cada uno" : (tabla === 5 ? "manos con 5 dedos cada una" : "cajas con 10 lápices cada una");
    return {k:"multiplicar", p:"Hay " + veces + " " + nombre + ". ¿Cuántos son en total?", v:dibujo,
      o:op.o, c:op.c, x:veces + " veces " + tabla + " son " + total + ". Eso mismo es " + veces + " × " + tabla + "."};
  },

  /* suma repetida escrita */
  function(){
    const tabla = [2,5,10][azar(0,2)];
    const veces = azar(3, 5);
    const total = tabla * veces;
    const suma = [];
    for(let i = 0; i < veces; i++) suma.push(tabla);
    const op = opciones(total, [total+tabla, total-tabla, tabla*veces+1]);
    return {k:"multiplicar", p:"¿Cuánto suma todo esto?", v:suma.join(" + "),
      o:op.o, c:op.c, x:"Son " + veces + " grupos de " + tabla + ": " + total + ". También se escribe " + veces + " × " + tabla + "."};
  },

  /* problema con dinero */
  function(){
    const monedas = [10, 50, 100][azar(0,2)];
    const cuantas = azar(2, 6);
    const total = monedas * cuantas;
    const op = opciones(total, [total + monedas, total - monedas, monedas + cuantas], "pesos");
    return {k:"dinero y gráficos", p:"Tienes " + cuantas + " monedas de $" + monedas + ". ¿Cuánto dinero es?",
      v:repetir("💰", cuantas) + " de $" + monedas,
      o:op.o, c:op.c, x:cuantas + " veces " + monedas + " son " + total + " pesos."};
  },

  /* la hora */
  function(){
    const h = azar(1, 12);
    const media = Math.random() < 0.5;
    const texto = media ? ("Las " + h + " y media") : ("Las " + h + " en punto");
    const otro1 = media ? ("Las " + h + " en punto") : ("Las " + h + " y media");
    const otro2 = "Las " + (h === 12 ? 1 : h+1) + (media ? " y media" : " en punto");
    return {k:"la hora y el calendario", p:"¿Qué hora marca el reloj?", v:"🕐 " + h + ":" + (media ? "30" : "00"),
      o:[["", texto], ["", otro1], ["", otro2]], c:0,
      x:media ? "El 30 son 30 minutos, o sea media hora." : "Cuando después de los dos puntos va 00, es la hora en punto."};
  },

  /* días de la semana */
  function(){
    const dias = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
    const i = azar(0, 6);
    const despues = Math.random() < 0.5;
    const bueno = dias[despues ? (i+1) % 7 : (i+6) % 7];
    const malo1 = dias[despues ? (i+6) % 7 : (i+1) % 7];
    const malo2 = dias[(i+3) % 7];
    return {k:"la hora y el calendario", p:"¿Qué día viene " + (despues ? "DESPUÉS" : "ANTES") + " del " + dias[i] + "?",
      o:[["", bueno], ["", malo1], ["", malo2]], c:0,
      x:"La semana va lunes, martes, miércoles, jueves, viernes, sábado y domingo."};
  }
];

/* Devuelve la cantidad pedida de preguntas nuevas.
   Si se le pasan temas que le costaron, intenta traer una de ahí. */
function generarMatematica(cantidad, temasFlojos, evitar){
  const yaSalio = evitar || [];
  const clave = function(q){ return q.p + '|' + (q.v || ''); };
  const salida = [];
  if(temasFlojos && temasFlojos.length){
    const tema = temasFlojos[azar(0, temasFlojos.length - 1)];
    const candidatas = [];
    for(let i = 0; i < FABRICAS.length; i++){
      const q = FABRICAS[i]();
      if(q.k === tema) candidatas.push(q);
    }
    if(candidatas.length) salida.push(candidatas[azar(0, candidatas.length - 1)]);
  }
  let vueltas = 0;
  while(salida.length < cantidad && vueltas < 60){
    vueltas++;
    const q = FABRICAS[azar(0, FABRICAS.length - 1)]();
    let repetida = (yaSalio.indexOf(clave(q)) !== -1);
    for(let i = 0; i < salida.length; i++){ if(clave(salida[i]) === clave(q)) repetida = true; }
    // en las últimas vueltas se relaja el filtro para no quedarse pegado
    if(vueltas > 45) repetida = false;
    if(!repetida) salida.push(q);
  }
  return salida;
}
