/* ============================================================
   GENERADORES DE MATEMÁTICA E INGLÉS
   Arman preguntas nuevas cada vez. Matemática tiene tres niveles:
   1) ámbito 0 a 100, tablas del 2, del 5 y del 10; 2) dos cifras,
   problemas con contexto; 3) llevando, tablas del 3 y del 4, repartir.
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


/* ============================================================
   NIVEL 2 DE MATEMÁTICA
   Sigue siendo 2° básico, pero con números de dos cifras,
   problemas con contexto y la relación entre suma y resta.
   El apoyo visual se mantiene: su perfil lo necesita.
   ============================================================ */

const NOMBRES = ["Josefa","Agustín","Florencia","Tomás","Catalina","Benjamín","Antonia","Gaspar","Maite","Diego","Trinidad","Joaquín"];
const OBJETOS_MAT = [["láminas","✨","f"],["bolitas","🔵","f"],["galletas","🍪","f"],["stickers","⭐","m"],["globos","🎈","m"],["frutillas","🍓","f"]];
function cuantos(cosa){ return cosa[2] === "f" ? "¿Cuántas" : "¿Cuántos"; }
function sueltas(n){ return n + (n === 1 ? " suelta" : " sueltas"); }

const FABRICAS2 = [

  /* sumar dos números de dos cifras, sin reserva */
  function(){
    const d1 = azar(1, 6), d2 = azar(1, 8 - d1), u1 = azar(1, 7), u2 = azar(1, 9 - u1);
    const a = d1*10 + u1, b = d2*10 + u2, r = a + b;
    const op = opciones(r, [r + 10, r - 10, r + 1, r - 1]);
    return {k:"sumar", p:"¿Cuánto es " + a + " + " + b + "?", v:dibujoDecenas(a) + "   y   " + dibujoDecenas(b),
      o:op.o, c:op.c, x:"Primero los 🔟: " + dec(d1) + " y " + dec(d2) + " son " + (d1+d2)*10 + ". Después las sueltas: " + u1 + " + " + u2 + " = " + (u1+u2) + ". Total: " + r + "."};
  },

  /* restar dos números de dos cifras, sin reserva */
  function(){
    const d1 = azar(3, 9), u1 = azar(3, 9), d2 = azar(1, d1 - 1), u2 = azar(1, u1);
    const a = d1*10 + u1, b = d2*10 + u2, r = a - b;
    const op = opciones(r, [r + 10, r - 10, a + b, r + 1]);
    return {k:"restar", p:"¿Cuánto es " + a + " − " + b + "?", v:dibujoDecenas(a) + "   y se van " + b,
      o:op.o, c:op.c, x:"Se quitan " + dec(d2) + " y " + sueltas(u2) + ": quedan " + dec(d1-d2) + " y " + sueltas(u1-u2) + ", o sea " + r + "."};
  },

  /* problema con contexto: juntar */
  function(){
    const quien = NOMBRES[azar(0, NOMBRES.length - 1)], cosa = OBJETOS_MAT[azar(0, OBJETOS_MAT.length - 1)];
    const d1 = azar(1, 5), d2 = azar(1, 3), u1 = azar(0, 6), u2 = azar(1, 9 - u1);
    const a = d1*10 + u1, b = d2*10 + u2, r = a + b;
    const op = opciones(r, [r + 10, r - 10, a - b, r + 1]);
    return {k:"problemas", p:quien + " tenía " + a + " " + cosa[0] + " y le regalaron " + b + ". " + cuantos(cosa) + " tiene ahora?", v:cosa[1] + " " + a + "  +  " + cosa[1] + " " + b,
      o:op.o, c:op.c, x:"Le regalaron más, así que se suma: " + a + " + " + b + " = " + r + "."};
  },

  /* problema con contexto: quitar */
  function(){
    const quien = NOMBRES[azar(0, NOMBRES.length - 1)], cosa = OBJETOS_MAT[azar(0, OBJETOS_MAT.length - 1)];
    const d1 = azar(3, 9), u1 = azar(2, 9), d2 = azar(1, d1 - 1), u2 = azar(0, u1);
    const a = d1*10 + u1, b = d2*10 + u2, r = a - b;
    const op = opciones(r, [a + b, r + 10, r - 1, r + 1]);
    return {k:"problemas", p:quien + " tenía " + a + " " + cosa[0] + " y regaló " + b + ". " + cuantos(cosa) + " le quedan?", v:cosa[1] + " " + a + "  −  " + cosa[1] + " " + b,
      o:op.o, c:op.c, x:"Regaló " + (cosa[2] === "f" ? "algunas" : "algunos") + ", así que se resta: " + a + " − " + b + " = " + r + "."};
  },

  /* el número que falta en una suma */
  function(){
    const dec10 = azar(3, 9) * 10, a = dec10 - azar(2, 9) - (azar(0, 1) * 10);
    const falta = dec10 - a;
    const op = opciones(falta, [falta + 1, falta - 1, falta + 10, dec10 + a]);
    return {k:"sumar", p:"¿Qué número falta?", v:a + " + ___ = " + dec10,
      o:op.o, c:op.c, x:a + " + " + falta + " = " + dec10 + ". Para encontrarlo puedes contar desde " + a + " hasta " + dec10 + "."};
  },

  /* familia de operaciones */
  function(){
    const a = azar(4, 9), b = azar(3, 9), s = a + b;
    const op = opciones(a, [b, s, a + 1]);
    return {k:"sumar y restar", p:"Si " + a + " + " + b + " = " + s + ", entonces " + s + " − " + b + " = ?", v:a + " + " + b + " = " + s + "   →   " + s + " − " + b + " = ?",
      o:op.o, c:op.c, x:"La resta deshace la suma: si a " + s + " le quitas el " + b + " que sumaste, vuelves al " + a + "."};
  },

  /* multiplicar con el signo × (tablas del 2, 5 y 10) */
  function(){
    const t = [2,5,10][azar(0,2)], veces = azar(2, 9), r = t * veces;
    let dibujo = "";
    if(t === 10){ dibujo = repetir("🔟", veces); }
    else { for(let i = 0; i < veces; i++) dibujo += repetir(t === 2 ? "🍪" : "⭐", t) + "  "; }
    const op = opciones(r, [r + t, r - t, t + veces]);
    return {k:"multiplicar", p:"¿Cuánto es " + veces + " × " + t + "?", v:dibujo,
      o:op.o, c:op.c, x:veces + " × " + t + " son " + veces + " grupos de " + t + ": " + r + "."};
  },

  /* ordenar tres números */
  function(){
    const base = azar(1, 7);
    let n = [base*10 + azar(0,9), (base+1)*10 + azar(0,9), (base+2)*10 + azar(0,9)];
    const bien = n.slice().join(", ");
    const mal1 = [n[1], n[0], n[2]].join(", "), mal2 = [n[2], n[1], n[0]].join(", ");
    return {k:"contar y comparar", p:"¿Cuál está ordenado de MENOR a MAYOR?", v:mezclar(n).join("   ·   "),
      o:[["", bien], ["", mal1], ["", mal2]], c:0,
      x:"Se miran las decenas: " + Math.floor(n[0]/10) + ", " + Math.floor(n[1]/10) + " y " + Math.floor(n[2]/10) + ". El que tiene menos decenas va primero."};
  },

  /* contar hacia atrás */
  function(){
    const paso = [2,5,10][azar(0,2)], ini = paso * azar(8, 12);
    const serie = [ini, ini - paso, ini - paso*2, ini - paso*3], bueno = ini - paso*4;
    const op = opciones(bueno, [bueno + paso, bueno - 1, bueno + 1]);
    return {k:"patrones", p:"Contando hacia atrás de " + paso + " en " + paso + ", ¿qué número sigue?", v:serie.join(" · ") + " · ?",
      o:op.o, c:op.c, x:"Hacia atrás se resta " + paso + " cada vez: " + (ini - paso*3) + " − " + paso + " = " + bueno + "."};
  },

  /* descomponer un número */
  function(){
    const d = azar(2, 9); let u = azar(1, 9); while(u === d) u = azar(1, 9);
    const n = d*10 + u;
    return {k:"decenas y unidades", p:"¿Cuál es otra forma de escribir " + n + "?", v:dibujoDecenas(n),
      o:[["", (d*10) + " + " + u], ["", d + " + " + u], ["", (u*10) + " + " + d]], c:0,
      x:n + " tiene " + dec(d) + ", que son " + (d*10) + ", y " + sueltas(u) + ": " + (d*10) + " + " + u + "."};
  },

  /* media hora después */
  function(){
    const h = azar(1, 11);
    const media = Math.random() < 0.5;
    const ahora = media ? h + ":30" : h + ":00";
    const luego = media ? (h + 1) + ":00" : h + ":30";
    const mal1 = media ? h + ":00" : (h + 1) + ":00";
    const mal2 = media ? (h + 1) + ":30" : (h + 1) + ":30";
    return {k:"la hora y el calendario", p:"El reloj marca " + ahora + ". ¿Qué hora será en media hora más?", v:"🕐 " + ahora,
      o:[["", luego], ["", mal1], ["", mal2]], c:0,
      x:"Media hora son 30 minutos. Desde las " + ahora + ", 30 minutos después son las " + luego + "."};
  },

  /* dinero: cuánto queda */
  function(){
    const tengo = azar(5, 10) * 10, precio = azar(2, (tengo/10) - 1) * 10, r = tengo - precio;
    const op = opciones(r, [tengo + precio, r + 10, r - 10], "pesos");
    return {k:"dinero y gráficos", p:"Tienes $" + tengo + " y compras un dulce de $" + precio + ". ¿Cuánto te queda?", v:"💰 $" + tengo + "   −   🍬 $" + precio,
      o:op.o, c:op.c, x:"Gastaste, así que se resta: " + tengo + " − " + precio + " = " + r + " pesos."};
  }
];

/* ============================================================
   NIVEL 3 DE MATEMÁTICA
   Lo más difícil de 2° básico y un poco de 3° básico:
   sumar y restar "llevando", tablas del 3 y del 4, repartir,
   problemas de dos pasos (nunca más de dos datos juntos).
   ============================================================ */

const FABRICAS3 = [

  /* sumar con reserva */
  function(){
    const u1 = azar(3, 9), u2 = azar(10 - u1, 9), d1 = azar(1, 5), d2 = azar(1, 7 - d1);
    const a = d1*10 + u1, b = d2*10 + u2, r = a + b;
    const op = opciones(r, [r - 10, r + 10, (d1+d2)*10 + (u1+u2-10), r + 1]);
    return {k:"sumar llevando", p:"¿Cuánto es " + a + " + " + b + "?", v:dibujoDecenas(a) + "   y   " + dibujoDecenas(b),
      o:op.o, c:op.c, x:"Las sueltas: " + u1 + " + " + u2 + " = " + (u1+u2) + ", ¡se arma un 🔟 más! Entonces " + dec(d1+d2+1) + " y " + (u1+u2-10) + (u1+u2-10 === 1 ? " suelta: " : " sueltas: ") + r + "."};
  },

  /* restar con reserva */
  function(){
    const d1 = azar(3, 9), u1 = azar(0, 7), u2 = azar(u1 + 1, 9), d2 = azar(1, d1 - 1);
    const a = d1*10 + u1, b = d2*10 + u2, r = a - b;
    const error = (d1 - d2)*10 + (u2 - u1);          // el error típico: restar el chico al grande
    const op = opciones(r, [error, r + 10, r - 1, r + 1]);
    return {k:"restar llevando", p:"¿Cuánto es " + a + " − " + b + "?", v:dibujoDecenas(a) + "   y se van " + b,
      o:op.o, c:op.c, x:"A " + u1 + " no le puedes quitar " + u2 + ", así que se desarma un 🔟: " + (u1 + 10) + " − " + u2 + " = " + (u1 + 10 - u2) + ". Queda " + r + "."};
  },

  /* tabla del 3 y del 4 como grupos */
  function(){
    const grupos = [
      {t:3, cosa:"tréboles de 3 hojas", e:"☘️", unidad:"hojas", pre:"¿Cuántas"},
      {t:3, cosa:"triángulos", e:"🔺", unidad:"lados", pre:"¿Cuántos"},
      {t:4, cosa:"autos", e:"🚗", unidad:"ruedas", pre:"¿Cuántas"},
      {t:4, cosa:"gatitos", e:"🐱", unidad:"patas", pre:"¿Cuántas"}
    ];
    const g = grupos[azar(0, grupos.length - 1)], veces = azar(2, 6), r = g.t * veces;
    const op = opciones(r, [r + g.t, r - g.t, g.t + veces]);
    return {k:"multiplicar", p:"Hay " + veces + " " + g.cosa + ". " + g.pre + " " + g.unidad + " son en total?", v:repetir(g.e + " ", veces),
      o:op.o, c:op.c, x:veces + " veces " + g.t + " son " + r + ". Eso es " + veces + " × " + g.t + ", la tabla del " + g.t + "."};
  },

  /* multiplicar con el signo × (tablas del 3 y del 4) */
  function(){
    const t = azar(3, 4), veces = azar(2, 8), r = t * veces;
    let dibujo = "";
    for(let i = 0; i < veces; i++) dibujo += repetir("⭐", t) + "  ";
    const op = opciones(r, [r + t, r - t, t + veces]);
    return {k:"multiplicar", p:"¿Cuánto es " + veces + " × " + t + "?", v:dibujo,
      o:op.o, c:op.c, x:"Son " + veces + " grupos de " + t + " estrellitas: " + r + "."};
  },

  /* repartir en partes iguales */
  function(){
    const partes = azar(2, 5), cada = azar(2, 5), total = partes * cada;
    const cosa = OBJETOS_MAT[azar(0, OBJETOS_MAT.length - 1)];
    const op = opciones(cada, [cada + 1, cada - 1, total - partes]);
    return {k:"repartir", p:"Reparte " + total + " " + cosa[0] + " entre " + partes + " amigas, en partes iguales. " + cuantos(cosa) + " le tocan a cada una?", v:repetir(cosa[1], total),
      o:op.o, c:op.c, x:"Si a cada una le tocan " + cada + ", las " + partes + " amigas juntan " + partes + " × " + cada + " = " + total + ". ¡Justo!"};
  },

  /* problema de dos pasos */
  function(){
    const quien = NOMBRES[azar(0, NOMBRES.length - 1)], cosa = OBJETOS_MAT[azar(0, OBJETOS_MAT.length - 1)];
    const a = azar(2, 5) * 10, b = azar(2, 9), c = azar(2, 9);
    const r = a + b - c;
    const op = opciones(r, [a + b + c, a - b + c, r + 10]);
    return {k:"problemas", p:quien + " tenía " + a + " " + cosa[0] + ". Le regalaron " + b + " y después perdió " + c + ". " + cuantos(cosa) + " tiene?", v:a + "  ➕ " + b + "  ➖ " + c,
      o:op.o, c:op.c, x:"Paso a paso: " + a + " + " + b + " = " + (a+b) + ". Después " + (a+b) + " − " + c + " = " + r + "."};
  },

  /* el número que falta en una resta */
  function(){
    const b = azar(1, 4)*10 + azar(1, 9), r = azar(2, 5) * 10, a = b + r;
    const op = opciones(a, [r - b > 0 ? r - b : r + 1, a + 10, a - 10]);
    return {k:"sumar y restar", p:"¿Qué número falta?", v:"___ − " + b + " = " + r,
      o:op.o, c:op.c, x:"Si al número le quitas " + b + " y quedan " + r + ", el número era " + r + " + " + b + " = " + a + "."};
  },

  /* contar de 100 en 100 */
  function(){
    const atras = Math.random() < 0.5;
    const ini = atras ? azar(6, 9) * 100 : azar(1, 4) * 100;
    const serie = atras ? [ini, ini-100, ini-200] : [ini, ini+100, ini+200];
    const bueno = atras ? ini - 300 : ini + 300;
    const op = opciones(bueno, [atras ? bueno + 200 : bueno - 200, bueno + 10, bueno - 10]);
    return {k:"patrones", p:"Contando de 100 en 100" + (atras ? " hacia atrás" : "") + ", ¿qué número sigue?", v:serie.join(" · ") + " · ?",
      o:op.o, c:op.c, x:"Cambia solo la primera cifra: " + (atras ? "baja" : "sube") + " de a 1. Después de " + serie[2] + " viene " + bueno + "."};
  },

  /* ¿cuánto dura? / ¿a qué hora termina? */
  function(){
    const empieza = azar(1, 7), dura = azar(1, 3), termina = empieza + dura;
    return {k:"la hora y el calendario", p:"La película empieza a las " + empieza + ":00 y dura " + dura + (dura === 1 ? " hora" : " horas") + ". ¿A qué hora termina?", v:"🎬 " + empieza + ":00  ➕ " + dura + " h",
      o:[["", termina + ":00"], ["", (termina + 1) + ":00"], ["", (termina - 1 === empieza ? termina + 2 : termina - 1) + ":00"]], c:0,
      x:"Desde las " + empieza + ":00 cuentas " + dura + (dura === 1 ? " hora" : " horas") + ": termina a las " + termina + ":00."};
  },

  /* comparar dos sumas */
  function(){
    let a = azar(10, 40), b = azar(2, 9), c = azar(10, 40), d = azar(2, 9);
    while(a + b === c + d){ d = azar(2, 9); }
    const s1 = a + b, s2 = c + d;
    const mayor = s1 > s2 ? (a + " + " + b) : (c + " + " + d);
    const menor = s1 > s2 ? (c + " + " + d) : (a + " + " + b);
    return {k:"contar y comparar", p:"¿Cuál da un resultado MAYOR?", v:(a + " + " + b) + "   ·   " + (c + " + " + d),
      o:[["", mayor], ["", menor], ["", "Dan lo mismo"]], c:0,
      x:a + " + " + b + " = " + s1 + " y " + c + " + " + d + " = " + s2 + ". Gana " + Math.max(s1, s2) + "."};
  },

  /* dinero: el vuelto */
  function(){
    const precio = azar(2, 9) * 10, vuelto = 100 - precio;
    const op = opciones(vuelto, [precio, vuelto + 10, vuelto - 10], "pesos");
    return {k:"dinero y gráficos", p:"Pagas un jugo de $" + precio + " con una moneda de $100. ¿Cuánto vuelto te dan?", v:"💰 $100   −   🧃 $" + precio,
      o:op.o, c:op.c, x:"El vuelto es lo que sobra: 100 − " + precio + " = " + vuelto + " pesos."};
  }
];

/* Qué fábricas usa cada nivel: sobre todo las del nivel, y algunas del anterior
   para que no todo sea desafío. */
function fabricasDe(nivel){
  if(nivel >= 3) return Math.random() < 0.75 ? FABRICAS3 : FABRICAS2;
  if(nivel === 2) return Math.random() < 0.75 ? FABRICAS2 : FABRICAS;
  return FABRICAS;
}

/* Devuelve la cantidad pedida de preguntas nuevas del nivel pedido.
   Si se le pasan temas que le costaron, intenta traer una de ahí.
   Evita repetir las que salieron hace poco. */
function generarMatematica(cantidad, temasFlojos, evitar, nivel){
  const niv = nivel || 1;
  const yaSalio = evitar || [];
  const clave = function(q){ return q.p + '|' + (q.v || ''); };
  const salida = [];
  if(temasFlojos && temasFlojos.length){
    const tema = temasFlojos[azar(0, temasFlojos.length - 1)];
    const todas = niv >= 3 ? FABRICAS3.concat(FABRICAS2) : (niv === 2 ? FABRICAS2.concat(FABRICAS) : FABRICAS);
    const candidatas = [];
    for(let i = 0; i < todas.length; i++){
      const q = todas[i]();
      if(q.k === tema) candidatas.push(q);
    }
    if(candidatas.length) salida.push(candidatas[azar(0, candidatas.length - 1)]);
  }
  let vueltas = 0;
  while(salida.length < cantidad && vueltas < 80){
    vueltas++;
    const lista = fabricasDe(niv);
    const q = lista[azar(0, lista.length - 1)]();
    let repetida = (yaSalio.indexOf(clave(q)) !== -1);
    for(let i = 0; i < salida.length; i++){
      if(clave(salida[i]) === clave(q) || (salida[i].k === q.k && vueltas < 40)) repetida = true;
    }
    if(vueltas > 65) repetida = false;   // para no quedarse pegado
    if(!repetida) salida.push(q);
  }
  return salida;
}

/* ============================================================
   GENERADOR DE INGLÉS (niveles 2 y 3)
   Vocabulario de la propuesta curricular de 1° a 4° básico.
   Los distractores salen de la MISMA categoría, así que para
   acertar hay que saber la palabra, no adivinar por el dibujo.
   ============================================================ */

const VOCAB = {
  animales:[["cat","gato","🐱"],["dog","perro","🐶"],["bird","pájaro","🐦"],["horse","caballo","🐴"],["cow","vaca","🐮"],["pig","chancho","🐷"],["duck","pato","🦆"],["frog","rana","🐸"],["rabbit","conejo","🐰"],["bear","oso","🐻"],["monkey","mono","🐒"],["lion","león","🦁"],["elephant","elefante","🐘"],["snake","serpiente","🐍"],["turtle","tortuga","🐢"],["butterfly","mariposa","🦋"],["bee","abeja","🐝"],["sheep","oveja","🐑"]],
  colores:[["red","rojo","❤️"],["blue","azul","💙"],["green","verde","💚"],["yellow","amarillo","💛"],["pink","rosado","🌸"],["purple","morado","💜"],["black","negro","🖤"],["white","blanco","🤍"],["brown","café","🤎"]],
  familia:[["mother","mamá","👩"],["father","papá","👨"],["sister","hermana","👧"],["brother","hermano","👦"],["grandmother","abuela","👵"],["grandfather","abuelo","👴"],["baby","bebé","👶"]],
  cuerpo:[["head","cabeza","🙂"],["eyes","ojos","👀"],["nose","nariz","👃"],["mouth","boca","👄"],["ears","orejas","👂"],["hand","mano","✋"],["foot","pie","🦶"],["leg","pierna","🦵"],["teeth","dientes","🦷"]],
  comida:[["apple","manzana","🍎"],["banana","plátano","🍌"],["bread","pan","🍞"],["milk","leche","🥛"],["cheese","queso","🧀"],["egg","huevo","🥚"],["water","agua","💧"],["rice","arroz","🍚"],["cake","torta","🍰"],["grapes","uvas","🍇"],["strawberry","frutilla","🍓"],["ice cream","helado","🍦"]],
  colegio:[["book","libro","📚"],["pencil","lápiz","✏️"],["ruler","regla","📏"],["scissors","tijeras","✂️"],["backpack","mochila","🎒"],["teacher","profesora","👩‍🏫"],["school","colegio","🏫"],["crayons","lápices de cera","🖍️"]],
  ropa:[["shoes","zapatos","👟"],["hat","sombrero","👒"],["dress","vestido","👗"],["T-shirt","polera","👕"],["socks","calcetines","🧦"],["coat","abrigo","🧥"],["trousers","pantalones","👖"],["scarf","bufanda","🧣"]],
  casa:[["house","casa","🏠"],["door","puerta","🚪"],["bed","cama","🛏️"],["kitchen","cocina","🍳"],["bathroom","baño","🛁"],["table","mesa","🍽️"],["garden","jardín","🌷"]],
  clima:[["sun","sol","☀️"],["rain","lluvia","🌧️"],["snow","nieve","❄️"],["wind","viento","🌬️"],["cloud","nube","☁️"]],
  sentimientos:[["happy","feliz","😀"],["sad","triste","😢"],["angry","enojado","😠"],["tired","cansado","😴"],["scared","asustado","😨"],["surprised","sorprendido","😮"]]
};
const NOMBRE_CATEGORIA = {animales:"un animal", colores:"un color", familia:"alguien de la familia", cuerpo:"una parte del cuerpo", comida:"algo para comer o tomar", colegio:"algo o alguien del colegio", ropa:"ropa", casa:"algo de la casa", clima:"algo del tiempo atmosférico", sentimientos:"un sentimiento"};
const NUMEROS_EN = {1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"};
const NUMEROS_ES = {2:"dos",3:"tres",4:"cuatro",5:"cinco",6:"seis",7:"siete",8:"ocho",9:"nueve",10:"diez"};
/* sustantivos con plural regular (se agrega -s) para las frases */
const PLURAL_S = [["cat","gato","gatos","🐱"],["dog","perro","perros","🐶"],["bird","pájaro","pájaros","🐦"],["duck","pato","patos","🦆"],["frog","rana","ranas","🐸"],["rabbit","conejo","conejos","🐰"],["book","libro","libros","📚"],["pencil","lápiz","lápices","✏️"],["apple","manzana","manzanas","🍎"],["ball","pelota","pelotas","⚽"]];
const COLOR_FRASE = [["red","rojo","roja"],["blue","azul","azul"],["green","verde","verde"],["yellow","amarillo","amarilla"],["pink","rosado","rosada"],["black","negro","negra"],["white","blanco","blanca"],["brown","café","café"]];
const SUST_FRASE = [["cat","un gato","m"],["dog","un perro","m"],["bird","un pájaro","m"],["ball","una pelota","f"],["hat","un sombrero","m"],["dress","un vestido","m"],["car","un auto","m"],["house","una casa","f"]];

function tresDeCategoria(cat, correcta){
  const otras = mezclar(VOCAB[cat].filter(function(w){ return w[0] !== correcta[0]; })).slice(0, 2);
  return [correcta].concat(otras);
}
function categoriaAzar(excluir){
  const cats = Object.keys(VOCAB).filter(function(c){ return c !== excluir; });
  return cats[azar(0, cats.length - 1)];
}

const FABRICAS_INGLES2 = [
  /* del español al inglés, con el dibujo como ayuda */
  function(){
    const cat = categoriaAzar(), tres = tresDeCategoria(cat, VOCAB[cat][azar(0, VOCAB[cat].length - 1)]);
    return {k:"vocabulario en inglés", p:"¿Cómo se dice «" + tres[0][1] + "» en inglés?", v:tres[0][2],
      o:tres.map(function(w){ return ["", w[0]]; }), c:0,
      x:"«" + tres[0][1].charAt(0).toUpperCase() + tres[0][1].slice(1) + "» se dice «" + tres[0][0] + "». «" + tres[1][0] + "» es " + tres[1][1] + "."};
  },
  /* del inglés al español, sin dibujo */
  function(){
    const cat = categoriaAzar(), tres = tresDeCategoria(cat, VOCAB[cat][azar(0, VOCAB[cat].length - 1)]);
    return {k:"vocabulario en inglés", p:"¿Qué significa «" + tres[0][0].toUpperCase() + "»?",
      o:tres.map(function(w){ return ["", w[1]]; }), c:0,
      x:"«" + tres[0][0] + "» significa " + tres[0][1] + ". Y «" + tres[2][0] + "» es " + tres[2][1] + "."};
  },
  /* ¿cuál de estas palabras es un…? */
  function(){
    const cat = categoriaAzar(), c1 = categoriaAzar(cat);
    let c2 = categoriaAzar(cat); while(c2 === c1) c2 = categoriaAzar(cat);
    const buena = VOCAB[cat][azar(0, VOCAB[cat].length - 1)];
    const m1 = VOCAB[c1][azar(0, VOCAB[c1].length - 1)], m2 = VOCAB[c2][azar(0, VOCAB[c2].length - 1)];
    return {k:"vocabulario en inglés", p:"¿Cuál de estas palabras en inglés es " + NOMBRE_CATEGORIA[cat] + "?",
      o:[["", buena[0]], ["", m1[0]], ["", m2[0]]], c:0,
      x:"«" + buena[0] + "» es " + buena[1] + ". «" + m1[0] + "» es " + m1[1] + " y «" + m2[0] + "» es " + m2[1] + "."};
  }
];

const FABRICAS_INGLES3 = [
  /* los números que se confunden: -teen y -ty */
  function(){
    const u = azar(3, 9);
    const teen = 10 + u, ty = u * 10;
    const pregTeen = Math.random() < 0.5;
    const n = pregTeen ? teen : ty;
    return {k:"numbers", p:"¿Qué número es «" + NUMEROS_EN[n].toUpperCase() + "»?",
      o:[["", String(n)], ["", String(pregTeen ? ty : teen)], ["", String(u)]], c:0,
      x:"Los que terminan en -teen van del 13 al 19; los que terminan en -ty son decenas. «" + NUMEROS_EN[n] + "» = " + n + "."};
  },
  /* número + plural: tres perros */
  function(){
    const s = PLURAL_S[azar(0, PLURAL_S.length - 1)], n = azar(2, 9), otro = n === 2 ? 3 : n - 1;
    return {k:"frases cortas", p:"¿Cómo se dice «" + NUMEROS_ES[n] + " " + s[2] + "» en inglés?", v:repetir(s[3], n),
      o:[["", NUMEROS_EN[n] + " " + s[0] + "s"], ["", NUMEROS_EN[n] + " " + s[0]], ["", NUMEROS_EN[otro] + " " + s[0] + "s"]], c:0,
      x:"Cuando hay más de uno se agrega una s al final: " + s[0] + " → " + s[0] + "s."};
  },
  /* el color va antes: a black cat */
  function(){
    const col = COLOR_FRASE[azar(0, COLOR_FRASE.length - 1)], su = SUST_FRASE[azar(0, SUST_FRASE.length - 1)];
    const adj = su[2] === "f" ? col[2] : col[1];
    return {k:"frases bien dichas", p:"¿Cómo se dice «" + su[1] + " " + adj + "» en inglés?",
      o:[["", "a " + col[0] + " " + su[0]], ["", "a " + su[0] + " " + col[0]], ["", col[0] + " a " + su[0]]], c:0,
      x:"En inglés el color va ANTES de la cosa: a " + col[0] + " " + su[0] + ". Al revés que en español."};
  },
  /* del inglés al español, distractores de la misma categoría y sin dibujo */
  function(){
    const cats = ["sentimientos","ropa","casa","clima","colegio"];
    const cat = cats[azar(0, cats.length - 1)], tres = tresDeCategoria(cat, VOCAB[cat][azar(0, VOCAB[cat].length - 1)]);
    return {k:"vocabulario en inglés", p:"¿Qué significa «" + tres[0][0].toUpperCase() + "»?",
      o:tres.map(function(w){ return ["", w[1]]; }), c:0,
      x:"«" + tres[0][0] + "» significa " + tres[0][1] + "."};
  }
];

function generarIngles(cantidad, nivel, evitar){
  const yaSalio = evitar || [];
  const clave = function(q){ return q.p + '|' + (q.v || ''); };
  const salida = [];
  let vueltas = 0;
  while(salida.length < cantidad && vueltas < 60){
    vueltas++;
    const lista = (nivel >= 3 && Math.random() < 0.7) ? FABRICAS_INGLES3 : FABRICAS_INGLES2;
    const q = lista[azar(0, lista.length - 1)]();
    let repetida = (yaSalio.indexOf(clave(q)) !== -1);
    for(let i = 0; i < salida.length; i++){ if(clave(salida[i]) === clave(q)) repetida = true; }
    if(vueltas > 45) repetida = false;
    if(!repetida) salida.push(q);
  }
  return salida;
}

/* ============================================================
   GENERADORES DE LENGUAJE, CIENCIAS E HISTORIA
   Mismo patrón que el de Inglés: bancos de datos verificados +
   plantillas que arman preguntas nuevas cada vez, para que estas
   tres materias también tengan variedad casi infinita en nivel 2 y 3.
   ============================================================ */

/* -------------------- LENGUAJE -------------------- */

const SINONIMOS = [
  ["feliz","contento"], ["triste","apenado"], ["grande","enorme"], ["pequeño","chico"],
  ["rápido","veloz"], ["bonito","lindo"], ["fuerte","poderoso"], ["inteligente","listo"],
  ["limpio","aseado"], ["cansado","agotado"], ["asustado","atemorizado"], ["callado","silencioso"],
  ["amable","gentil"], ["enojado","molesto"]
];
const ANTONIMOS = [
  ["alto","bajo"], ["rápido","lento"], ["día","noche"], ["arriba","abajo"], ["dentro","fuera"],
  ["abrir","cerrar"], ["subir","bajar"], ["feliz","triste"], ["limpio","sucio"], ["fácil","difícil"],
  ["mucho","poco"], ["cerca","lejos"], ["nuevo","viejo"], ["claro","oscuro"], ["ganar","perder"],
  ["reír","llorar"]
];
const PALABRAS_CLASE = {
  sustantivo: ["perro","gato","mesa","casa","escuela","pelota","libro","sol","luna","árbol","flor","auto"],
  adjetivo: ["bonito","grande","pequeño","rápido","feliz","alto","limpio","fuerte","suave","redondo"],
  verbo: ["correr","saltar","comer","dormir","jugar","cantar","bailar","leer","escribir","pintar","nadar","volar"]
};
const NOMBRE_CLASE = {sustantivo:"un sustantivo (nombra a alguien o algo)", adjetivo:"un adjetivo (dice cómo es algo)", verbo:"un verbo (dice una acción)"};
const DIMINUTIVOS = [
  ["perro","perrito"], ["casa","casita"], ["gato","gatito"], ["mesa","mesita"], ["plato","platito"],
  ["zapato","zapatito"], ["pan","pancito"], ["flor","florecita"], ["libro","librito"], ["árbol","arbolito"],
  ["globo","globito"], ["queso","quesito"]
];
const AUMENTATIVOS = [
  ["perro","perrazo"], ["casa","casona"], ["zapato","zapatón"], ["libro","librote"]
];
/* familias de palabras: mismo grupo comparte raíz */
const FAMILIAS = {
  pan: ["pan","panadero","panadería"],
  leche: ["leche","lechero","lechería"],
  libro: ["libro","librero","librería"],
  flor: ["flor","florero","florería"],
  zapato: ["zapato","zapatero","zapatería"],
  papel: ["papel","papelero","papelería"]
};
/* una palabra distinta por letra, para ordenar alfabéticamente sin ambigüedad */
const ABECEDARIO = [
  ["árbol","a"],["barco","b"],["casa","c"],["dado","d"],["elefante","e"],["foca","f"],["gato","g"],
  ["hormiga","h"],["iglú","i"],["jarro","j"],["kiwi","k"],["luna","l"],["mesa","m"],["nube","n"],
  ["oso","o"],["pato","p"],["queso","q"],["ratón","r"],["sol","s"],["taza","t"],["uva","u"],["vaca","v"],
  ["yoyo","y"],["zapato","z"]
];
/* sustantivos con plural regular, sin cambio de acento (para no meterse en terreno dudoso) */
const PLURALES_REGULARES = [
  ["gato","gatos"], ["perro","perros"], ["casa","casas"], ["mesa","mesas"], ["silla","sillas"],
  ["pelota","pelotas"], ["ventana","ventanas"], ["puerta","puertas"], ["libro","libros"],
  ["flor","flores"], ["papel","papeles"], ["pan","panes"], ["sol","soles"], ["animal","animales"],
  ["árbol","árboles"], ["color","colores"], ["doctor","doctores"], ["reloj","relojes"], ["mes","meses"]
];

function parAzar(lista){ return lista[azar(0, lista.length - 1)]; }
/* elige un par de la lista cuya PRIMERA palabra no esté en excluidos (array de primeras-palabras ya usadas) */
function otroDistinto(lista, excluidos){
  const noEstas = Array.isArray(excluidos) ? excluidos : [excluidos];
  let p = parAzar(lista);
  let vueltas = 0;
  while(noEstas.indexOf(p[0]) !== -1 && vueltas < 30){ p = parAzar(lista); vueltas++; }
  return p;
}

const FABRICAS_LENGUAJE2 = [
  /* sinónimos */
  function(){
    const par = parAzar(SINONIMOS);
    const d1 = otroDistinto(SINONIMOS, [par[0]]), d2 = otroDistinto(SINONIMOS, [par[0], d1[0]]);
    return {k:"sinónimos", p:"¿Cuál palabra significa lo mismo que «" + par[0] + "»?",
      o:[["", par[1]], ["", d1[1]], ["", d2[1]]], c:0,
      x:"«" + par[0] + "» y «" + par[1] + "» quieren decir casi lo mismo: son sinónimos."};
  },
  /* antónimos */
  function(){
    const par = parAzar(ANTONIMOS);
    const d1 = otroDistinto(ANTONIMOS, [par[0]]), d2 = otroDistinto(ANTONIMOS, [par[0], d1[0]]);
    const usarSegunda = Math.random() < 0.5;
    const base = usarSegunda ? par[1] : par[0], correcta = usarSegunda ? par[0] : par[1];
    const dist1 = usarSegunda ? d1[0] : d1[1], dist2 = usarSegunda ? d2[0] : d2[1];
    return {k:"antónimos", p:"¿Cuál es el antónimo (lo contrario) de «" + base + "»?",
      o:[["", correcta], ["", dist1], ["", dist2]], c:0,
      x:"Lo contrario de «" + base + "» es «" + correcta + "»: son antónimos."};
  },
  /* singular y plural */
  function(){
    const par = parAzar(PLURALES_REGULARES);
    const terminaEnVocal = /[aeiouáéíóú]$/i.test(par[0]);
    const malo1 = terminaEnVocal ? par[0] + "es" : par[0] + "s";
    const malo2 = par[0];
    return {k:"singular y plural", p:"¿Cuál es el plural de «" + par[0] + "»?",
      o:[["", par[1]], ["", malo2], ["", malo1]], c:0,
      x: terminaEnVocal ? "Como termina en vocal, el plural se forma agregando -s: " + par[0] + " → " + par[1] + "."
                         : "Como termina en consonante, el plural se forma agregando -es: " + par[0] + " → " + par[1] + "."};
  },
  /* orden alfabético, dos palabras */
  function(){
    const a = parAzar(ABECEDARIO); let b = parAzar(ABECEDARIO);
    let vueltas = 0; while(b[1] === a[1] && vueltas < 20){ b = parAzar(ABECEDARIO); vueltas++; }
    const [primera, segunda] = a[1] < b[1] ? [a, b] : [b, a];
    let distractor = parAzar(ABECEDARIO);
    vueltas = 0; while((distractor[1] === a[1] || distractor[1] === b[1]) && vueltas < 20){ distractor = parAzar(ABECEDARIO); vueltas++; }
    return {k:"orden alfabético", p:"¿Cuál de estas dos palabras va PRIMERO en el orden alfabético: «" + a[0] + "» o «" + b[0] + "»?",
      o:[["", primera[0]], ["", segunda[0]], ["", distractor[0]]], c:0,
      x:"«" + primera[0] + "» empieza con «" + primera[1].toUpperCase() + "», que va antes que «" + segunda[1].toUpperCase() + "» en el abecedario."};
  }
];

const FABRICAS_LENGUAJE3 = [
  /* clasificar sustantivo / adjetivo / verbo */
  function(){
    const clases = Object.keys(PALABRAS_CLASE);
    const clase = clases[azar(0, clases.length - 1)];
    const otras = clases.filter(function(c){ return c !== clase; });
    const buena = PALABRAS_CLASE[clase][azar(0, PALABRAS_CLASE[clase].length - 1)];
    const m1 = PALABRAS_CLASE[otras[0]][azar(0, PALABRAS_CLASE[otras[0]].length - 1)];
    const m2 = PALABRAS_CLASE[otras[1]][azar(0, PALABRAS_CLASE[otras[1]].length - 1)];
    return {k:"palabras y su función", p:"¿Cuál de estas palabras es " + NOMBRE_CLASE[clase] + "?",
      o:[["", buena], ["", m1], ["", m2]], c:0,
      x:"«" + buena + "» es " + NOMBRE_CLASE[clase] + ". Las otras dos son de otro tipo de palabra."};
  },
  /* diminutivos y aumentativos */
  function(){
    const usarAum = Math.random() < 0.35;
    const banco = usarAum ? AUMENTATIVOS : DIMINUTIVOS;
    const par = parAzar(banco);
    const d1 = otroDistinto(banco, [par[0]]), d2 = otroDistinto(banco, [par[0], d1[0]]);
    const nombre = usarAum ? "aumentativo (lo hace sonar más grande)" : "diminutivo (lo hace sonar más chico o cariñoso)";
    return {k:"aumentativos y diminutivos", p:"¿Cuál es el " + nombre + " de «" + par[0] + "»?",
      o:[["", par[1]], ["", d1[1]], ["", d2[1]]], c:0,
      x:"«" + par[1] + "» viene de «" + par[0] + "». Las otras opciones vienen de otras palabras."};
  },
  /* familia de palabras */
  function(){
    const raices = Object.keys(FAMILIAS);
    const raiz = raices[azar(0, raices.length - 1)];
    const fam = FAMILIAS[raiz];
    const base = fam[0];
    const correcta = fam[1 + azar(0, fam.length - 2)];
    let otraRaiz = raices[azar(0, raices.length - 1)];
    let vueltas = 0; while(otraRaiz === raiz && vueltas < 20){ otraRaiz = raices[azar(0, raices.length - 1)]; vueltas++; }
    let otraRaiz2 = raices[azar(0, raices.length - 1)];
    vueltas = 0; while((otraRaiz2 === raiz || otraRaiz2 === otraRaiz) && vueltas < 20){ otraRaiz2 = raices[azar(0, raices.length - 1)]; vueltas++; }
    const d1 = FAMILIAS[otraRaiz][azar(1, FAMILIAS[otraRaiz].length - 1)];
    const d2 = FAMILIAS[otraRaiz2][azar(1, FAMILIAS[otraRaiz2].length - 1)];
    return {k:"familia de palabras", p:"¿Cuál palabra es de la misma familia que «" + base + "»?",
      o:[["", correcta], ["", d1], ["", d2]], c:0,
      x:"«" + correcta + "» viene de «" + base + "», por eso son de la misma familia de palabras."};
  },
  /* orden alfabético, tres palabras */
  function(){
    const usadas = mezclar(ABECEDARIO).slice(0, 3);
    const ordenadas = usadas.slice().sort(function(a, b){ return a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0); });
    const preguntarPrimera = Math.random() < 0.5;
    const correcta = preguntarPrimera ? ordenadas[0] : ordenadas[2];
    return {k:"orden alfabético", p:"De estas tres palabras, ¿cuál va " + (preguntarPrimera ? "PRIMERO" : "ÚLTIMO") + " en el orden alfabético?",
      v: usadas.map(function(w){ return w[0]; }).join(" · "),
      o: mezclarConCorrectaPrimero(usadas, correcta),
      c:0,
      x:"En orden van: " + ordenadas.map(function(w){ return w[0]; }).join(" → ") + "."};
  }
];

/* arma las 3 opciones dejando la correcta primero (igual que el resto del juego: c siempre 0) */
function mezclarConCorrectaPrimero(lista, correcta){
  const resto = lista.filter(function(w){ return w[0] !== correcta[0]; });
  return [["", correcta[0]]].concat(resto.map(function(w){ return ["", w[0]]; }));
}

function generarLenguaje(cantidad, nivel, evitar){
  const yaSalio = evitar || [];
  const clave = function(q){ return q.p + '|' + (q.v || ''); };
  const salida = [];
  let vueltas = 0;
  while(salida.length < cantidad && vueltas < 60){
    vueltas++;
    const lista = (nivel >= 3 && Math.random() < 0.7) ? FABRICAS_LENGUAJE3 : FABRICAS_LENGUAJE2;
    const q = lista[azar(0, lista.length - 1)]();
    let repetida = (yaSalio.indexOf(clave(q)) !== -1);
    for(let i = 0; i < salida.length; i++){ if(clave(salida[i]) === clave(q)) repetida = true; }
    if(vueltas > 45) repetida = false;
    if(!repetida) salida.push(q);
  }
  return salida;
}

/* -------------------- CIENCIAS -------------------- */

const SENTIDOS = [
  ["ojos","vista","ver"], ["oídos","oído","escuchar sonidos"], ["nariz","olfato","oler cosas"],
  ["lengua","gusto","saborear la comida"], ["piel","tacto","sentir texturas y temperatura"]
];
const ESTADOS_MATERIA = {
  solido: ["una piedra","una mesa","un lápiz","un zapato","una silla","un libro","un vaso de vidrio"],
  liquido: ["el agua","la leche","el jugo","el aceite","la miel"],
  gaseoso: ["el aire","el humo","el vapor de agua"]
};
const NOMBRE_ESTADO = {solido:"sólido", liquido:"líquido", gaseoso:"gaseoso"};
const NECESITAN_SERES_VIVOS = ["agua","aire","alimento","luz del sol"];
const NO_NECESITAN_SERES_VIVOS = ["juguetes","dinero","un televisor","dulces","un celular"];
const VERTEBRADOS = ["el perro","el gato","el pájaro","el pez","la rana","la serpiente","la tortuga","la vaca","el caballo","el elefante","el león","el loro"];
const INVERTEBRADOS = ["la mariposa","la abeja","la hormiga","la araña","el caracol","el gusano","el pulpo","la mosca","el cangrejo","la estrella de mar"];
const HABITATS = [
  ["el pingüino","el polo, donde hace muchísimo frío"], ["el oso polar","el polo, donde hace muchísimo frío"],
  ["la foca","el polo, donde hace muchísimo frío"],
  ["el pez","el mar, dentro del agua"], ["el delfín","el mar, dentro del agua"], ["el tiburón","el mar, dentro del agua"],
  ["la ballena","el mar, dentro del agua"],
  ["el mono","la selva, entre muchos árboles"], ["el tucán","la selva, entre muchos árboles"],
  ["el jaguar","la selva, entre muchos árboles"],
  ["el camello","el desierto, donde hace mucho calor y hay poca agua"],
  ["el escorpión","el desierto, donde hace mucho calor y hay poca agua"],
  ["la vaca","la granja, junto a otros animales de campo"], ["la gallina","la granja, junto a otros animales de campo"],
  ["la oveja","la granja, junto a otros animales de campo"]
];
const LUGARES_DISTRACTORES = ["el polo, donde hace muchísimo frío", "el mar, dentro del agua", "la selva, entre muchos árboles", "el desierto, donde hace mucho calor y hay poca agua", "la granja, junto a otros animales de campo"];

const FABRICAS_CIENCIAS2 = [
  /* sentidos */
  function(){
    const s = parAzar(SENTIDOS);
    const otros = mezclar(SENTIDOS.filter(function(x){ return x[0] !== s[0]; })).slice(0, 2);
    const usarOrgano = Math.random() < 0.5;
    if(usarOrgano){
      return {k:"los sentidos", p:"¿Qué sentido usas con " + s[0] + "?",
        o:[["", s[1]], ["", otros[0][1]], ["", otros[1][1]]], c:0,
        x:"Con " + s[0] + " usas el sentido del " + s[1] + ": sirve para " + s[2] + "."};
    }
    return {k:"los sentidos", p:"¿Con qué parte del cuerpo puedes " + s[2] + "?",
      o:[["", s[0]], ["", otros[0][0]], ["", otros[1][0]]], c:0,
      x:"Usas " + s[0] + " para " + s[2] + ": ese es el sentido del " + s[1] + "."};
  },
  /* estados de la materia */
  function(){
    const estados = Object.keys(ESTADOS_MATERIA);
    const estado = estados[azar(0, estados.length - 1)];
    const cosa = ESTADOS_MATERIA[estado][azar(0, ESTADOS_MATERIA[estado].length - 1)];
    const otros = estados.filter(function(e){ return e !== estado; });
    return {k:"estados de la materia", p:"¿En qué estado está " + cosa + "?",
      o:[["", NOMBRE_ESTADO[estado]], ["", NOMBRE_ESTADO[otros[0]]], ["", NOMBRE_ESTADO[otros[1]]]], c:0,
      x: cosa.charAt(0).toUpperCase() + cosa.slice(1) + " está en estado " + NOMBRE_ESTADO[estado] + "."};
  },
  /* necesidades de los seres vivos */
  function(){
    const correcta = NECESITAN_SERES_VIVOS[azar(0, NECESITAN_SERES_VIVOS.length - 1)];
    const d = mezclar(NO_NECESITAN_SERES_VIVOS).slice(0, 2);
    return {k:"necesidades de los seres vivos", p:"¿Qué necesita todo ser vivo para vivir?",
      o:[["", correcta], ["", d[0]], ["", d[1]]], c:0,
      x:"Todo ser vivo necesita " + correcta + " para vivir y estar sano."};
  }
];

const FABRICAS_CIENCIAS3 = [
  /* vertebrado / invertebrado */
  function(){
    const esVertebrado = Math.random() < 0.5;
    const banco = esVertebrado ? VERTEBRADOS : INVERTEBRADOS;
    const otroBanco = esVertebrado ? INVERTEBRADOS : VERTEBRADOS;
    const buena = banco[azar(0, banco.length - 1)];
    const m = mezclar(otroBanco).slice(0, 2);
    return {k:"vertebrados e invertebrados", p:"¿Cuál de estos animales " + (esVertebrado ? "SÍ tiene" : "NO tiene") + " columna vertebral (esqueleto por dentro)?",
      o:[["", buena], ["", m[0]], ["", m[1]]], c:0,
      x: buena.charAt(0).toUpperCase() + buena.slice(1) + " es " + (esVertebrado ? "un vertebrado: tiene esqueleto por dentro." : "un invertebrado: no tiene esqueleto por dentro.")};
  },
  /* hábitat */
  function(){
    const h = parAzar(HABITATS);
    const otros = mezclar(LUGARES_DISTRACTORES.filter(function(l){ return l !== h[1]; })).slice(0, 2);
    return {k:"hábitat de los animales", p:"¿Dónde vive " + h[0] + "?",
      o:[["", h[1]], ["", otros[0]], ["", otros[1]]], c:0,
      x: h[0].charAt(0).toUpperCase() + h[0].slice(1) + " vive en " + h[1] + "."};
  }
];

function generarCiencias(cantidad, nivel, evitar){
  const yaSalio = evitar || [];
  const clave = function(q){ return q.p + '|' + (q.v || ''); };
  const salida = [];
  let vueltas = 0;
  while(salida.length < cantidad && vueltas < 60){
    vueltas++;
    const lista = (nivel >= 3 && Math.random() < 0.7) ? FABRICAS_CIENCIAS3 : FABRICAS_CIENCIAS2;
    const q = lista[azar(0, lista.length - 1)]();
    let repetida = (yaSalio.indexOf(clave(q)) !== -1);
    for(let i = 0; i < salida.length; i++){ if(clave(salida[i]) === clave(q)) repetida = true; }
    if(vueltas > 45) repetida = false;
    if(!repetida) salida.push(q);
  }
  return salida;
}

/* -------------------- HISTORIA -------------------- */

const OFICIOS = [
  ["el bombero","apaga incendios y ayuda en emergencias"],
  ["el doctor","cuida la salud de las personas"],
  ["la profesora","enseña a los niños en el colegio"],
  ["el agricultor","cultiva la tierra y cosecha alimentos"],
  ["la panadera","hace pan"],
  ["el carpintero","trabaja la madera y hace muebles"],
  ["la enfermera","cuida a los pacientes y ayuda al doctor"],
  ["el policía","cuida el orden y la seguridad de las personas"],
  ["la veterinaria","cuida la salud de los animales"],
  ["el cartero","reparte cartas y encomiendas"],
  ["la costurera","hace y arregla ropa"],
  ["el electricista","instala y arregla cables e instalaciones eléctricas"]
];
const ANTES_AHORA = [
  ["la vela","antes, para alumbrar de noche","el foco eléctrico","ahora"],
  ["la carreta con caballos","antes, para transportarse","el auto","ahora"],
  ["la carta escrita a mano","antes, para comunicarse","el mensaje de celular","ahora"],
  ["la máquina de escribir","antes, para escribir textos","el computador","ahora"],
  ["lavar la ropa a mano en el río","antes, para lavar la ropa","la lavadora eléctrica","ahora"]
];

const FABRICAS_HISTORIA2 = [
  /* oficio -> función */
  function(){
    const o = parAzar(OFICIOS);
    const d = mezclar(OFICIOS.filter(function(x){ return x[0] !== o[0]; })).slice(0, 2);
    return {k:"oficios y comunidad", p:"¿Qué hace " + o[0] + "?",
      o:[["", o[1]], ["", d[0][1]], ["", d[1][1]]], c:0,
      x: o[0].charAt(0).toUpperCase() + o[0].slice(1) + " " + o[1] + "."};
  },
  /* función -> oficio */
  function(){
    const o = parAzar(OFICIOS);
    const d = mezclar(OFICIOS.filter(function(x){ return x[0] !== o[0]; })).slice(0, 2);
    return {k:"oficios y comunidad", p:"¿Quién es la persona que " + o[1] + "?",
      o:[["", o[0]], ["", d[0][0]], ["", d[1][0]]], c:0,
      x: o[0].charAt(0).toUpperCase() + o[0].slice(1) + " es quien " + o[1] + "."};
  }
];

const FABRICAS_HISTORIA3 = [
  /* antes / ahora */
  function(){
    const par = parAzar(ANTES_AHORA);
    const preguntarAntiguo = Math.random() < 0.5;
    const objetoBuscado = preguntarAntiguo ? par[0] : par[2];
    const otroObjeto = preguntarAntiguo ? par[2] : par[0];
    let distractorPar = parAzar(ANTES_AHORA);
    let vueltas = 0; while(distractorPar[0] === par[0] && vueltas < 20){ distractorPar = parAzar(ANTES_AHORA); vueltas++; }
    const distractor = preguntarAntiguo ? distractorPar[2] : distractorPar[0];
    return {k:"antes y ahora", p:"¿Cuál de estos se usaba " + (preguntarAntiguo ? "ANTES, hace mucho tiempo" : "AHORA, en el presente") + "?",
      o:[["", objetoBuscado], ["", otroObjeto], ["", distractor]], c:0,
      x: objetoBuscado.charAt(0).toUpperCase() + objetoBuscado.slice(1) + " se usaba " + (preguntarAntiguo ? par[1] : par[3]) + "."};
  },
  /* oficio -> función, nivel avanzado con 3 oficios distintos siempre */
  function(){
    const elegidos = mezclar(OFICIOS).slice(0, 3);
    const cual = azar(0, 2);
    return {k:"oficios y comunidad", p:"¿Cuál de estos oficios se dedica a: «" + elegidos[cual][1] + "»?",
      o:[["", elegidos[cual][0]], ["", elegidos[(cual+1)%3][0]], ["", elegidos[(cual+2)%3][0]]], c:0,
      x: elegidos[cual][0].charAt(0).toUpperCase() + elegidos[cual][0].slice(1) + " " + elegidos[cual][1] + "."};
  }
];

function generarHistoria(cantidad, nivel, evitar){
  const yaSalio = evitar || [];
  const clave = function(q){ return q.p + '|' + (q.v || ''); };
  const salida = [];
  let vueltas = 0;
  while(salida.length < cantidad && vueltas < 60){
    vueltas++;
    const lista = (nivel >= 3 && Math.random() < 0.7) ? FABRICAS_HISTORIA3 : FABRICAS_HISTORIA2;
    const q = lista[azar(0, lista.length - 1)]();
    let repetida = (yaSalio.indexOf(clave(q)) !== -1);
    for(let i = 0; i < salida.length; i++){ if(clave(salida[i]) === clave(q)) repetida = true; }
    if(vueltas > 45) repetida = false;
    if(!repetida) salida.push(q);
  }
  return salida;
}
