/* ============================================================
   EL REFUGIO DE THEO · banco de contenido
   Basado en las Bases Curriculares de 2° básico (Mineduc Chile).
   Inglés sigue la propuesta curricular de 1° a 4° básico.

   Cada pregunta:
     p = enunciado          v = apoyo visual (opcional)
     t = textito para leer  k = tema (para el panel de adultos)
     o = opciones [dibujo, palabra]      c = índice de la correcta
     x = lo que Theo explica cuando acierta

   IMPORTANTE: no reordenar ni borrar preguntas del medio.
   El sistema anti-repetición guarda el número de posición.
   Para agregar preguntas nuevas, sumarlas AL FINAL de cada materia.
   ============================================================ */

const MATERIAS = [];

MATERIAS.push({
  id:"lenguaje", nombre:"Lenguaje", emoji:"📚",
  color:"#8B5CF6", colorClaro:"#F1E9FF",
  animal:{ e:"🦄", nombre:"Luna", tipo:"unicornia" },
  preguntas:[
    /* --- sonidos y letras --- */
    {k:"sonidos y letras", p:"¿Cuál palabra se escribe con RR?", o:[["🐕","Perro"],["🌸","Flor"],["🌙","Luna"]], c:0, x:"La RR suena fuerte: pe-rrr-o. Por eso lleva dos erres."},
    {k:"sonidos y letras", p:"¿Cuál palabra lleva GUI o GUE?", o:[["🎸","Guitarra"],["🐱","Gato"],["🍞","Pan"]], c:0, x:"Gui-ta-rra. La U calladita hace que la G suene suave."},
    {k:"sonidos y letras", p:"¿Cuál palabra lleva QUE o QUI?", o:[["🧀","Queso"],["🏠","Casa"],["🌳","Árbol"]], c:0, x:"Que-so. La U de QUE no se escucha, pero siempre va."},
    {k:"sonidos y letras", p:"¿Cuál palabra lleva CE o CI?", o:[["☁️","Cielo"],["🐄","Vaca"],["🥕","Zanahoria"]], c:0, x:"Cie-lo. Con E y con I, la C suena suavecita."},
    {k:"sonidos y letras", p:"¿Cuál palabra lleva GÜE o GÜI, con los dos puntitos?", o:[["🐧","Pingüino"],["🐟","Pescado"],["🐔","Gallina"]], c:0, x:"Pin-güi-no. Los dos puntitos avisan que la U sí se escucha."},
    {k:"sonidos y letras", p:"¿Cuál palabra se escribe con CH?", o:[["🐷","Chancho"],["🐱","Gato"],["🐻","Oso"]], c:0, x:"Chan-cho. La C y la H juntas hacen un solo sonido."},
    {k:"sonidos y letras", p:"¿Cuál palabra se escribe con LL?", o:[["🔑","Llave"],["🍽️","Mesa"],["🍞","Pan"]], c:0, x:"Lla-ve. Dos eles juntas suenan como una sola."},
    {k:"sonidos y letras", p:"¿En cuál palabra suenan dos consonantes juntitas?", o:[["🌸","Flor"],["🌙","Luna"],["🐱","Gato"]], c:0, x:"F-l-or: la F y la L van pegaditas, sin vocal entremedio."},
    {k:"sonidos y letras", p:"¿Cuál palabra suena con R suavecita, de una sola R?", o:[["🍐","Pera"],["🚗","Carro"],["🐕","Perro"]], c:0, x:"Pe-ra suena suave. Carro y perro suenan fuerte con RR."},
    {k:"sonidos y letras", p:"¿Cuál palabra tiene dos vocales juntas?", o:[["🚗","Auto"],["🌙","Luna"],["🐱","Gato"]], c:0, x:"A-u-to: la A y la U van juntitas en la misma sílaba."},
    {k:"sonidos y letras", p:"¿Cuál palabra se escribe con Z?", o:[["👟","Zapato"],["💺","Silla"],["🍽️","Mesa"]], c:0, x:"Za-pa-to. Con A, O y U el sonido suave se escribe con Z."},
    /* --- escritura correcta --- */
    {k:"escribir bien", p:"¿Cuál oración está bien escrita?", o:[["❤️","Mi perro se llama Theo."],["💛","mi perro se llama theo"],["💚","Mi perro se llama theo"]], c:0, x:"Empieza con mayúscula, Theo también, y termina con punto."},
    {k:"escribir bien", p:"¿Qué signo le falta a esta pregunta?", v:"___ Cómo te llamas?", o:[["❤️","El signo ¿"],["💛","El signo ¡"],["💚","Un punto ."]], c:0, x:"En español las preguntas abren con ¿ y cierran con ?"},
    {k:"escribir bien", p:"¿Cómo se escribe cuando gritamos de alegría?", o:[["❤️","¡Qué lindo!"],["💛","Que lindo?"],["💚","que lindo"]], c:0, x:"Las exclamaciones van entre ¡ y !, las dos puntitas."},
    {k:"escribir bien", p:"Una oración siempre termina con...", o:[["❤️","Un punto ."],["💛","Una coma ,"],["💚","Un guion -"]], c:0, x:"El punto avisa que la idea terminó."},
    {k:"escribir bien", p:"Los nombres de las personas se escriben...", o:[["❤️","Con mayúscula al principio"],["💛","Todo en minúscula"],["💚","Todo en mayúscula"]], c:0, x:"Los nombres propios siempre parten con mayúscula."},
    {k:"escribir bien", p:"El nombre de una ciudad, como Santiago, se escribe...", o:[["❤️","Con mayúscula"],["💛","Con minúscula"],["💚","Con un signo ¿"]], c:0, x:"Ciudades, países y nombres de personas: todos con mayúscula."},
    {k:"escribir bien", p:"Después de un punto, la palabra que sigue empieza con...", o:[["❤️","Mayúscula"],["💛","Minúscula"],["💚","Un número"]], c:0, x:"Punto y después mayúscula: así empieza una idea nueva."},
    /* --- sustantivos, adjetivos y verbos --- */
    {k:"palabras y su función", p:"¿Cuál de estas palabras es un sustantivo, o sea, nombra algo?", o:[["🐰","Conejo"],["🏃","Correr"],["😊","Alegre"]], c:0, x:"Los sustantivos nombran cosas, animales, personas y lugares."},
    {k:"palabras y su función", p:"¿Cuál palabra es un adjetivo, o sea, dice CÓMO es algo?", o:[["😊","Alegre"],["🐶","Perro"],["🦘","Saltar"]], c:0, x:"Los adjetivos describen: alegre, alta, suave, rápida."},
    {k:"palabras y su función", p:"¿Cuál palabra es una acción?", o:[["🏃","Correr"],["🌸","Flor"],["🎀","Rosado"]], c:0, x:"Las acciones dicen lo que alguien hace: correr, saltar, leer."},
    {k:"palabras y su función", p:"En «el gato negro», ¿qué palabra dice CÓMO es el gato?", o:[["🖤","Negro"],["🐱","Gato"],["📗","El"]], c:0, x:"Negro es el adjetivo: describe cómo es ese gato."},
    {k:"palabras y su función", p:"¿Cuál palabra nombra un LUGAR?", o:[["🏞️","Plaza"],["🏃","Correr"],["😊","Contenta"]], c:0, x:"Plaza es un sustantivo, porque nombra un lugar."},
    {k:"palabras y su función", p:"«Salta, corre, baila» son palabras que dicen...", o:[["🤸","Acciones"],["🎨","Colores"],["🔢","Números"]], c:0, x:"Todas son cosas que alguien hace: son acciones."},
    {k:"palabras y su función", p:"«Alta, rápida, suave» son palabras que dicen...", o:[["🔍","Cómo es algo"],["🏃","Qué hace alguien"],["🗺️","Dónde está"]], c:0, x:"Son adjetivos: describen cómo es una persona o una cosa."},
    /* --- género y número --- */
    {k:"singular y plural", p:"¿Cuál es el plural de FLOR?", o:[["💐","Flores"],["🌹","Florcita"],["🌷","Flor"]], c:0, x:"Cuando hay muchas, se agrega ES: flor → flores."},
    {k:"singular y plural", p:"¿Cuál es el plural de LÁPIZ?", o:[["❤️","Lápices"],["💛","Lápizes"],["💚","Lápiz"]], c:0, x:"La Z se transforma en C: lápiz → lápices."},
    {k:"singular y plural", p:"¿Cuál es el plural de «el perro»?", o:[["❤️","Los perros"],["💛","La perros"],["💚","El perros"]], c:0, x:"Si hay muchos, cambian los dos: los perros."},
    {k:"singular y plural", p:"¿Cuál es el singular de «las flores»?", o:[["❤️","La flor"],["💛","El flor"],["💚","Las flor"]], c:0, x:"Una sola es la flor. Muchas son las flores."},
    {k:"singular y plural", p:"¿Qué palabrita va antes de «unicornio»?", o:[["❤️","El unicornio"],["💛","La unicornio"],["💚","Las unicornio"]], c:0, x:"Unicornio es masculino, por eso lleva EL."},
    {k:"singular y plural", p:"¿Qué palabrita va antes de «casa»?", o:[["❤️","La casa"],["💛","El casa"],["💚","Los casa"]], c:0, x:"Casa es femenino, por eso lleva LA."},
    /* --- comprensión de lectura --- */
    {k:"comprender lo que leo", p:"¿Cómo se sintió Sofía al principio?", t:"Sofía perdió su muñeca y se puso a llorar. Su hermano la ayudó a buscar y la encontraron debajo de la cama.", o:[["😢","Triste"],["😀","Contenta"],["😡","Enojada"]], c:0, x:"El texto dice que se puso a llorar, y llorar es de estar triste."},
    {k:"comprender lo que leo", p:"¿Dónde estaba la muñeca?", t:"Sofía perdió su muñeca y se puso a llorar. Su hermano la ayudó a buscar y la encontraron debajo de la cama.", o:[["🛏️","Debajo de la cama"],["🚪","Detrás de la puerta"],["🌳","En el patio"]], c:0, x:"Eso lo dice el texto al final, tal cual."},
    {k:"comprender lo que leo", p:"¿Qué hizo Theo PRIMERO?", t:"Theo corrió al parque, saltó la reja y se comió la galleta de Ana.", o:[["🏃","Corrió al parque"],["🍪","Se comió la galleta"],["🦘","Saltó la reja"]], c:0, x:"Primero corrió, después saltó y al final se comió la galleta."},
    {k:"comprender lo que leo", p:"¿Por qué Emilia no salió a jugar?", t:"Llovía tanto que Emilia no pudo salir a jugar. Se quedó leyendo un cuento al lado de la ventana.", o:[["🌧️","Porque estaba lloviendo"],["😴","Porque tenía sueño"],["📚","Porque no le gusta jugar"]], c:0, x:"El texto lo explica: llovía tanto que no pudo salir."},
    {k:"comprender lo que leo", p:"¿Qué hizo Martina para cuidar su semilla?", t:"Martina plantó una semilla en un tarrito y la regó todos los días. A las dos semanas salió una florcita amarilla.", o:[["💧","La regó todos los días"],["🎵","Le cantó canciones"],["🧊","La puso en el congelador"]], c:0, x:"Regarla todos los días fue lo que hizo crecer la florcita."},
    {k:"comprender lo que leo", p:"¿De qué color salió la flor de Martina?", t:"Martina plantó una semilla en un tarrito y la regó todos los días. A las dos semanas salió una florcita amarilla.", o:[["💛","Amarilla"],["❤️","Roja"],["💙","Azul"]], c:0, x:"El texto lo dice al final: una florcita amarilla."},
    {k:"comprender lo que leo", p:"¿Quién ayudó al gato de Lucas?", t:"El gato de Lucas se subió al techo y no podía bajar. Llegaron los bomberos y lo bajaron sano y salvo.", o:[["🚒","Los bomberos"],["👮","Los carabineros"],["👩‍⚕️","La doctora"]], c:0, x:"Los bomberos también rescatan animales, no solo apagan incendios."},
    {k:"comprender lo que leo", p:"¿Cómo se sentía Ema al principio del día?", t:"Ema estaba nerviosa porque era su primer día en el colegio nuevo. Una compañera le convidó galletas y se hicieron amigas.", o:[["😰","Nerviosa"],["😴","Aburrida"],["😡","Enojada"]], c:0, x:"Estar nerviosa es normal cuando algo es nuevo. ¡Y terminó bien!"},
    {k:"comprender lo que leo", p:"En un cuento, ¿quiénes son los personajes?", o:[["🧚","Los que viven la historia"],["🗺️","El lugar donde pasa"],["⏰","La hora en que pasa"]], c:0, x:"Los personajes son quienes actúan: personas, animales o seres mágicos."},
    /* --- tipos de texto --- */
    {k:"tipos de texto", p:"¿Qué tipo de texto es este?", t:"El zorro vio unas uvas muy altas y, como no las alcanzó, dijo que estaban verdes.", o:[["🦊","Una fábula"],["📰","Una noticia"],["🍲","Una receta"]], c:0, x:"Las fábulas tienen animales que hablan y dejan una enseñanza."},
    {k:"tipos de texto", p:"¿Qué texto te sirve para preparar una torta?", o:[["🍰","Una receta"],["🎵","Una canción"],["📜","Una leyenda"]], c:0, x:"La receta trae los ingredientes y el paso a paso."},
    {k:"tipos de texto", p:"¿Para qué sirve un poema?", o:[["🎵","Para contar sentimientos con rimas"],["📋","Para dar instrucciones"],["🧾","Para hacer una lista"]], c:0, x:"Los poemas juegan con las palabras y con los sonidos que riman."},
    {k:"tipos de texto", p:"¿Dónde busco qué significa una palabra que no conozco?", o:[["📖","En el diccionario"],["🗺️","En un mapa"],["📅","En el calendario"]], c:0, x:"El diccionario ordena las palabras y explica qué significan."},
    {k:"tipos de texto", p:"¿Qué texto me explica cómo armar un juguete?", o:[["📋","Las instrucciones"],["🎵","Una canción"],["📰","Una noticia"]], c:0, x:"Las instrucciones van por pasos, en orden."},
    /* --- vocabulario --- */
    {k:"vocabulario", p:"¿Qué palabra significa lo MISMO que «contento»?", o:[["😊","Feliz"],["😢","Triste"],["😴","Dormido"]], c:0, x:"Contento y feliz significan lo mismo: son sinónimos."},
    {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «grande»?", o:[["🐜","Pequeño"],["🐘","Enorme"],["🦒","Alto"]], c:0, x:"Grande y pequeño son contrarios: se llaman antónimos."},
    {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «sucio»?", o:[["🧼","Limpio"],["🎨","Manchado"],["🌧️","Mojado"]], c:0, x:"Sucio y limpio son opuestos."},
    {k:"vocabulario", p:"¿Qué palabra significa lo MISMO que «bonito»?", o:[["✨","Lindo"],["😖","Feo"],["📏","Largo"]], c:0, x:"Bonito y lindo son sinónimos: dicen lo mismo."},
    {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «día»?", o:[["🌙","Noche"],["☀️","Mañana"],["⏰","Hora"]], c:0, x:"El día tiene sol y la noche tiene luna: son contrarios."},
    {k:"vocabulario", p:"Si algo es VELOZ, quiere decir que es...", o:[["⚡","Muy rápido"],["🐢","Muy lento"],["🎈","Muy liviano"]], c:0, x:"Veloz es otra forma de decir rápido."},
    {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «lleno»?", o:[["🕳️","Vacío"],["🍎","Completo"],["⚖️","Pesado"]], c:0, x:"Un vaso lleno tiene mucho; uno vacío no tiene nada."},
    /* --- rimas y adivinanzas --- */
    {k:"rimas y adivinanzas", p:"¿Qué palabra rima con CORAZÓN?", o:[["🐭","Ratón"],["🌸","Flor"],["☀️","Sol"]], c:0, x:"Corazón y ratón terminan igual: -ón. Por eso riman."},
    {k:"rimas y adivinanzas", p:"¿Qué palabra rima con LUNA?", o:[["🛏️","Cuna"],["🐱","Gato"],["🌸","Flor"]], c:0, x:"Luna y cuna terminan en -una."},
    {k:"rimas y adivinanzas", p:"Adivinanza: vuelo de flor en flor, tengo alas de colores y antes fui una oruga.", o:[["🦋","La mariposa"],["🐝","La abeja"],["🐦","El pájaro"]], c:0, x:"Solo la mariposa fue oruga antes. ¡Buena pista!"},
    {k:"rimas y adivinanzas", p:"Adivinanza: tengo hojas y no soy árbol, te cuento historias y no hablo.", o:[["📖","El libro"],["🌳","El árbol"],["📺","La tele"]], c:0, x:"Las hojas del libro son sus páginas."},
    {k:"rimas y adivinanzas", p:"Adivinanza: de noche vuelo, tengo ojos enormes y digo «uh, uh».", o:[["🦉","El búho"],["🦇","El murciélago"],["🐔","La gallina"]], c:0, x:"El búho es de noche y tiene los ojos grandotes."},
    {k:"rimas y adivinanzas", p:"¿Cuál palabra tiene MÁS sílabas?", v:"bi-ci-cle-ta · ga-to · sol", o:[["🚲","Bicicleta"],["🐱","Gato"],["☀️","Sol"]], c:0, x:"Bicicleta tiene 4 palmaditas; gato 2 y sol 1."}
  ]
});

MATERIAS.push({
  id:"matematica", nombre:"Matemática", emoji:"🔢",
  color:"#0E9BAE", colorClaro:"#DFF5F7",
  animal:{ e:"🐰", nombre:"Coco", tipo:"conejita" },
  preguntas:[
    /* --- contar y comparar --- */
    {k:"contar y comparar", p:"Un grupo de 10 y 3 sueltas. ¿Cuántas manzanas hay?", v:"🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎 + 🍎🍎🍎", o:[["🔟","13"],["3️⃣","30"],["1️⃣","103"]], c:0, x:"10 y 3 más son 13. Una decena y tres unidades."},
    {k:"contar y comparar", p:"¿Cuál número es MAYOR?", v:"45  ·  54", o:[["5️⃣","54"],["4️⃣","45"],["🤝","Son iguales"]], c:0, x:"54 tiene 5 decenas y 45 solo tiene 4. Gana el que tiene más decenas."},
    {k:"contar y comparar", p:"¿Cuál número es MENOR?", v:"62  ·  26", o:[["2️⃣","26"],["6️⃣","62"],["🤝","Son iguales"]], c:0, x:"26 tiene 2 decenas; 62 tiene 6. Por eso 26 es más chico."},
    {k:"contar y comparar", p:"¿Cómo se lee el número 80?", o:[["❤️","Ochenta"],["💛","Ocho"],["💚","Dieciocho"]], c:0, x:"80 son 8 decenas: ochenta."},
    {k:"contar y comparar", p:"¿Qué número va entre el 68 y el 70?", v:"68 · ? · 70", o:[["❤️","69"],["💛","67"],["💚","71"]], c:0, x:"Después del 68 viene el 69, y después el 70."},
    {k:"contar y comparar", p:"Contando de 5 en 5, ¿qué número sigue?", v:"5 · 10 · 15 · 20 · ?", o:[["❤️","25"],["💛","21"],["💚","30"]], c:0, x:"De 5 en 5: 20 más 5 son 25."},
    {k:"contar y comparar", p:"Contando de 2 en 2, ¿qué número sigue?", v:"2 · 4 · 6 · 8 · ?", o:[["❤️","10"],["💛","9"],["💚","12"]], c:0, x:"8 más 2 son 10. ¡Vas saltando de dos en dos!"},
    {k:"contar y comparar", p:"¿Cuál es el MAYOR de los tres?", v:"33 · 43 · 34", o:[["❤️","43"],["💛","34"],["💚","33"]], c:0, x:"43 tiene 4 decenas; los otros dos tienen solo 3."},
    /* --- decenas y unidades --- */
    {k:"decenas y unidades", p:"En el número 47, ¿cuántas DECENAS hay?", v:"🟦🟦🟦🟦 + ⭐⭐⭐⭐⭐⭐⭐", o:[["4️⃣","4 decenas"],["7️⃣","7 decenas"],["🔢","47 decenas"]], c:0, x:"Cada barra azul es una decena: hay 4 barras y 7 sueltas."},
    {k:"decenas y unidades", p:"3 decenas y 5 unidades forman el número...", v:"🟦🟦🟦 + ⭐⭐⭐⭐⭐", o:[["❤️","35"],["💛","53"],["💚","305"]], c:0, x:"3 decenas son 30, más 5 sueltas: 35."},
    {k:"decenas y unidades", p:"¿Cuántas UNIDADES sueltas tiene el número 26?", v:"🟦🟦 + ⭐⭐⭐⭐⭐⭐", o:[["6️⃣","6 unidades"],["2️⃣","2 unidades"],["🔟","10 unidades"]], c:0, x:"El 26 tiene 2 decenas y 6 unidades sueltas."},
    {k:"decenas y unidades", p:"¿Cuántas decenas hay en el número 50?", v:"🟦🟦🟦🟦🟦", o:[["5️⃣","5 decenas"],["🔟","10 decenas"],["0️⃣","Ninguna"]], c:0, x:"5 grupos de 10 son 50. ¡Ni una suelta!"},
    {k:"decenas y unidades", p:"El número 24 se puede separar en...", o:[["❤️","20 + 4"],["💛","2 + 4"],["💚","24 + 0"]], c:0, x:"2 decenas son 20, y quedan 4 unidades: 20 + 4."},
    /* --- sumar --- */
    {k:"sumar", p:"20 + 30 = ?", v:"🟦🟦 + 🟦🟦🟦", o:[["5️⃣","50"],["6️⃣","60"],["2️⃣","23"]], c:0, x:"2 decenas más 3 decenas son 5 decenas: 50."},
    {k:"sumar", p:"25 + 4 = ?", v:"25 galletas 🍪 y llegan 4 más", o:[["❤️","29"],["💛","21"],["💚","30"]], c:0, x:"A las 25 le sumas 4 sueltas y llegas a 29."},
    {k:"sumar", p:"El DOBLE de 7 es...", v:"7 + 7", o:[["❤️","14"],["💛","12"],["💚","7"]], c:0, x:"El doble es lo mismo dos veces: 7 + 7 = 14."},
    {k:"sumar", p:"¿Cuánto le falta al 6 para llegar a 10?", v:"⭐⭐⭐⭐⭐⭐ + ? = 🔟", o:[["4️⃣","4"],["6️⃣","6"],["🔟","16"]], c:0, x:"6 y 4 son 10. Ese truco sirve para sumar rápido."},
    {k:"sumar", p:"15 + 5 = ?", o:[["2️⃣","20"],["1️⃣","15"],["5️⃣","55"]], c:0, x:"15 más 5 completa dos decenas justas: 20."},
    {k:"sumar", p:"40 + 20 = ?", v:"🟦🟦🟦🟦 + 🟦🟦", o:[["6️⃣","60"],["4️⃣","42"],["2️⃣","20"]], c:0, x:"4 decenas y 2 decenas son 6 decenas: 60."},
    {k:"sumar", p:"Ana tenía 12 stickers y le regalaron 6. ¿Cuántos tiene ahora?", v:"✨✨✨✨✨✨✨✨✨✨✨✨ + ✨✨✨✨✨✨", o:[["❤️","18"],["💛","16"],["💚","12"]], c:0, x:"12 más 6 son 18. ¡Le regalaron hartos!"},
    /* --- restar --- */
    {k:"restar", p:"18 − 5 = ?", v:"Tenías 18 stickers ✨ y regalaste 5", o:[["❤️","13"],["💛","23"],["💚","12"]], c:0, x:"Si a 18 le quitas 5, quedan 13."},
    {k:"restar", p:"30 − 10 = ?", v:"🟦🟦🟦 y se va una 🟦", o:[["2️⃣","20"],["4️⃣","40"],["🔟","10"]], c:0, x:"3 decenas menos 1 decena son 2 decenas: 20."},
    {k:"restar", p:"20 − 8 = ?", o:[["❤️","12"],["💛","28"],["💚","10"]], c:0, x:"De 20 le quitas 8 y quedan 12."},
    {k:"restar", p:"Había 15 galletas y se comieron 5. ¿Cuántas quedan?", v:"🍪 ×15  −  🍪 ×5", o:[["🔟","10"],["2️⃣","20"],["5️⃣","5"]], c:0, x:"15 menos 5 son 10. ¡Todavía quedan hartas!"},
    {k:"restar", p:"La MITAD de 10 es...", v:"⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐", o:[["5️⃣","5"],["2️⃣","2"],["🔟","10"]], c:0, x:"La mitad es repartir en dos partes iguales: 5 y 5."},
    {k:"restar", p:"100 − 50 = ?", o:[["5️⃣","50"],["1️⃣","150"],["0️⃣","0"]], c:0, x:"De 100 le quitas la mitad y queda 50."},
    /* --- multiplicar --- */
    {k:"multiplicar", p:"Hay 3 platos con 2 galletas cada uno. ¿Cuántas galletas son?", v:"🍪🍪 · 🍪🍪 · 🍪🍪", o:[["6️⃣","6"],["5️⃣","5"],["3️⃣","3"]], c:0, x:"2 + 2 + 2 son 6. Eso mismo es 3 × 2."},
    {k:"multiplicar", p:"3 manos con 5 dedos cada una. ¿Cuántos dedos son?", v:"🖐️ 🖐️ 🖐️", o:[["❤️","15"],["💛","10"],["💚","8"]], c:0, x:"5 + 5 + 5 son 15. Esa es la tabla del 5."},
    {k:"multiplicar", p:"4 cajas con 10 lápices cada una. ¿Cuántos lápices son?", v:"🟦 🟦 🟦 🟦", o:[["❤️","40"],["💛","14"],["💚","400"]], c:0, x:"Con la tabla del 10 solo agregas un cero: 4 × 10 = 40."},
    {k:"multiplicar", p:"2 × 5 significa...", o:[["❤️","2 grupos de 5, o sea 10"],["💛","2 más 5, o sea 7"],["💚","2 menos 5"]], c:0, x:"Multiplicar es repetir grupos iguales: 5 + 5 = 10."},
    {k:"multiplicar", p:"5 + 5 + 5 + 5 = ?", v:"⭐⭐⭐⭐⭐ cuatro veces", o:[["2️⃣","20"],["1️⃣","15"],["5️⃣","25"]], c:0, x:"Cuatro veces 5 son 20. También se escribe 4 × 5."},
    {k:"multiplicar", p:"2 × 3 es lo mismo que...", v:"🍎🍎🍎 · 🍎🍎🍎", o:[["❤️","3 + 3, o sea 6"],["💛","2 + 3, o sea 5"],["💚","2 − 3"]], c:0, x:"Dos grupos de 3 manzanas: 6 en total."},
    /* --- patrones --- */
    {k:"patrones", p:"¿Qué número sigue en el patrón?", v:"10 · 20 · 30 · ?", o:[["4️⃣","40"],["3️⃣","31"],["5️⃣","50"]], c:0, x:"Va saltando de 10 en 10: después del 30 viene el 40."},
    {k:"patrones", p:"¿Qué figura sigue en el patrón?", v:"🔺 ⭕ 🔺 ⭕ ?", o:[["🔺","El triángulo"],["⭕","El círculo"],["🟦","El cuadrado"]], c:0, x:"El patrón se repite: triángulo, círculo, triángulo, círculo."},
    {k:"patrones", p:"¿Qué número sigue?", v:"1 · 3 · 5 · 7 · ?", o:[["9️⃣","9"],["8️⃣","8"],["🔟","10"]], c:0, x:"Va sumando 2 cada vez: 7 más 2 son 9."},
    {k:"patrones", p:"¿Qué figura falta?", v:"🌸 🌸 🍀 🌸 🌸 ?", o:[["🍀","El trébol"],["🌸","La flor"],["⭐","La estrella"]], c:0, x:"El patrón es dos flores y un trébol, una y otra vez."},
    /* --- figuras --- */
    {k:"figuras", p:"¿Qué forma tiene una pelota?", v:"⚽", o:[["🔮","Una esfera"],["🧊","Un cubo"],["🍦","Un cono"]], c:0, x:"La esfera es redonda por todos lados, como la pelota."},
    {k:"figuras", p:"¿Qué forma tiene un dado?", v:"🎲", o:[["🧊","Un cubo"],["🔮","Una esfera"],["🍦","Un cono"]], c:0, x:"El cubo tiene 6 caras cuadradas iguales."},
    {k:"figuras", p:"¿Qué forma tiene un gorrito de cumpleaños?", v:"🎉", o:[["🍦","Un cono"],["🧊","Un cubo"],["🔮","Una esfera"]], c:0, x:"El cono termina en punta, como el barquillo del helado."},
    {k:"figuras", p:"¿Cuántos lados tiene un triángulo?", v:"🔺", o:[["3️⃣","3 lados"],["4️⃣","4 lados"],["5️⃣","5 lados"]], c:0, x:"Tri significa tres: tres lados y tres puntas."},
    {k:"figuras", p:"¿Cuántos lados tiene un cuadrado?", v:"🟦", o:[["4️⃣","4 lados iguales"],["3️⃣","3 lados"],["6️⃣","6 lados"]], c:0, x:"El cuadrado tiene 4 lados y todos miden lo mismo."},
    {k:"figuras", p:"¿Qué figura es una moneda vista de frente?", v:"💰 $100", o:[["⭕","Un círculo"],["🔺","Un triángulo"],["🟦","Un cuadrado"]], c:0, x:"El círculo es redondo y no tiene ni lados ni puntas."},
    /* --- tiempo --- */
    {k:"la hora y el calendario", p:"El reloj marca 3:00. ¿Qué hora es?", v:"🕒 3:00", o:[["❤️","Las tres en punto"],["💛","Las tres y media"],["💚","Las doce"]], c:0, x:"Cuando después de los dos puntos va 00, es la hora en punto."},
    {k:"la hora y el calendario", p:"El reloj marca 7:30. ¿Qué hora es?", v:"🕢 7:30", o:[["❤️","Las siete y media"],["💛","Las siete en punto"],["💚","Las treinta"]], c:0, x:"30 minutos es media hora: las siete y media."},
    {k:"la hora y el calendario", p:"¿Cuántos días tiene una semana?", v:"📅", o:[["7️⃣","7 días"],["5️⃣","5 días"],["3️⃣","30 días"]], c:0, x:"De lunes a domingo son 7 días."},
    {k:"la hora y el calendario", p:"¿Qué día viene DESPUÉS del miércoles?", o:[["❤️","Jueves"],["💛","Martes"],["💚","Domingo"]], c:0, x:"Lunes, martes, miércoles, jueves... ¡ese es el orden!"},
    {k:"la hora y el calendario", p:"¿Cuántos meses tiene un año?", v:"📆", o:[["❤️","12 meses"],["💛","10 meses"],["💚","7 meses"]], c:0, x:"De enero a diciembre son 12 meses."},
    /* --- medir, dinero y datos --- */
    {k:"medir", p:"¿Con qué medirías el largo de tu sala?", o:[["📏","Con metros"],["⚖️","Con kilos"],["⏰","Con minutos"]], c:0, x:"El metro sirve para cosas grandes, como una sala."},
    {k:"medir", p:"¿Qué es más largo?", v:"1 metro  ·  30 centímetros", o:[["❤️","1 metro"],["💛","30 centímetros"],["💚","Miden igual"]], c:0, x:"Un metro tiene 100 centímetros, así que es mucho más largo."},
    {k:"medir", p:"¿Con qué medirías un lápiz?", v:"✏️", o:[["📐","Con centímetros"],["🛣️","Con metros"],["⚖️","Con kilos"]], c:0, x:"El centímetro sirve para cosas chicas, como un lápiz."},
    {k:"dinero y gráficos", p:"Tienes una moneda de $100 y una de $50. ¿Cuánto tienes?", v:"💰 $100  +  💰 $50", o:[["❤️","$150"],["💛","$1050"],["💚","$50"]], c:0, x:"100 más 50 son 150 pesos."},
    {k:"dinero y gráficos", p:"En la votación del curso, ¿qué color ganó?", v:"Rosado ⭐⭐⭐⭐  ·  Azul ⭐⭐", o:[["🎀","El rosado"],["💙","El azul"],["🤝","Empataron"]], c:0, x:"El rosado tiene 4 estrellitas y el azul solo 2."}
  ]
});

MATERIAS.push({
  id:"ciencias", nombre:"Ciencias Naturales", emoji:"🌿",
  color:"#1E9E63", colorClaro:"#E1F6EC",
  animal:{ e:"🐢", nombre:"Tomás", tipo:"tortuga" },
  preguntas:[
    /* --- vertebrados --- */
    {k:"vertebrados", p:"El perro es un MAMÍFERO porque...", o:[["🐶","De guagua toma leche de su mamá"],["🥚","Pone huevos"],["🐟","Tiene escamas"]], c:0, x:"Los mamíferos toman leche de su mamá cuando nacen."},
    {k:"vertebrados", p:"¿Cuál de estos animales es un AVE?", o:[["🦉","El búho"],["🐢","La tortuga"],["🐸","La rana"]], c:0, x:"Las aves tienen plumas, pico y dos patas."},
    {k:"vertebrados", p:"¿Qué cubre el cuerpo de los peces?", o:[["🐟","Escamas"],["🐦","Plumas"],["🧶","Pelos"]], c:0, x:"Las escamas los protegen y les ayudan a nadar."},
    {k:"vertebrados", p:"¿Cuál de estos animales es un REPTIL?", o:[["🐍","La serpiente"],["🐦","El pájaro"],["🐬","El delfín"]], c:0, x:"Los reptiles tienen piel con escamas y se arrastran o caminan bajito."},
    {k:"vertebrados", p:"La rana es un ANFIBIO. Cuando nace es un renacuajo y vive...", o:[["💧","En el agua"],["🏜️","En el desierto"],["🌳","En los árboles"]], c:0, x:"Los anfibios nacen en el agua y de grandes viven también en tierra."},
    {k:"vertebrados", p:"¿Qué tienen en común el perro, el pájaro y el pez?", o:[["🦴","Todos tienen columna vertebral"],["🐦","Todos tienen plumas"],["💧","Todos viven en el agua"]], c:0, x:"Los tres son vertebrados: tienen huesos en la espalda."},
    {k:"vertebrados", p:"¿Con qué respiran los peces bajo el agua?", o:[["🐠","Con branquias"],["💨","Con pulmones"],["👃","Con la nariz"]], c:0, x:"Las branquias sacan el oxígeno que hay en el agua."},
    {k:"vertebrados", p:"¿Cuál de estos animales es un mamífero que vive en el mar?", o:[["🐬","El delfín"],["🐟","El pez"],["🦀","El cangrejo"]], c:0, x:"El delfín vive en el mar, pero respira aire y toma leche de guagua."},
    /* --- invertebrados --- */
    {k:"invertebrados", p:"¿Cuántas patas tiene un insecto?", v:"🐜", o:[["6️⃣","6 patas"],["8️⃣","8 patas"],["4️⃣","4 patas"]], c:0, x:"Todos los insectos tienen 6 patas y el cuerpo en tres partes."},
    {k:"invertebrados", p:"¿Cuántas patas tiene una araña?", v:"🕷️", o:[["8️⃣","8 patas"],["6️⃣","6 patas"],["2️⃣","2 patas"]], c:0, x:"Por eso la araña NO es un insecto: tiene 8 patas."},
    {k:"invertebrados", p:"El cangrejo pertenece al grupo de los...", v:"🦀", o:[["❤️","Crustáceos"],["💛","Insectos"],["💚","Arácnidos"]], c:0, x:"Los crustáceos tienen caparazón duro y casi todos viven en el agua."},
    {k:"invertebrados", p:"¿Cuál animal es INVERTEBRADO, o sea, no tiene huesos en la espalda?", o:[["🐛","El gusano"],["🐱","El gato"],["🐦","El pájaro"]], c:0, x:"El gusano es blandito porque no tiene columna vertebral."},
    {k:"invertebrados", p:"La abeja, la hormiga y la mariposa son todas...", o:[["🐝","Insectos"],["🦀","Crustáceos"],["🐟","Peces"]], c:0, x:"Las tres tienen 6 patas: son insectos."},
    {k:"invertebrados", p:"¿Qué animal tiene el cuerpo blandito y una concha para protegerse?", o:[["🐌","El caracol"],["🐜","La hormiga"],["🐦","El pájaro"]], c:0, x:"El caracol es invertebrado y su concha es su casa."},
    /* --- ciclo de vida --- */
    {k:"ciclo de vida", p:"Huevo, oruga, crisálida y... ¿qué falta?", v:"🥚 → 🐛 → 🍃 → ?", o:[["🦋","La mariposa"],["🐝","La abeja"],["🐞","La chinita"]], c:0, x:"La oruga se encierra en la crisálida y sale mariposa."},
    {k:"ciclo de vida", p:"¿Cuál de estos animales nace de un huevo?", o:[["🐣","La gallina"],["🐄","La vaca"],["🐕","El perro"]], c:0, x:"Las aves ponen huevos y los empollan hasta que nacen."},
    {k:"ciclo de vida", p:"El renacuajo, cuando crece, se transforma en...", v:"🐟 → ?", o:[["🐸","Una rana"],["🐟","Un pez"],["🐍","Una culebra"]], c:0, x:"Le salen patitas, pierde la cola y se convierte en rana."},
    {k:"ciclo de vida", p:"Los mamíferos, cuando nacen, salen...", o:[["🐶","De la panza de su mamá"],["🥚","De un huevo"],["🌱","De una semilla"]], c:0, x:"Por eso los perritos y los gatitos nacen chiquititos y ya vivos."},
    {k:"ciclo de vida", p:"¿Qué necesita una semilla para transformarse en planta?", o:[["💧","Agua, tierra y sol"],["🍫","Chocolate"],["🧊","Hielo"]], c:0, x:"Con agua, tierra y luz, la semilla germina y crece."},
    /* --- hábitat y animales de Chile --- */
    {k:"hábitat", p:"¿Dónde vive el pingüino?", o:[["🧊","En lugares muy fríos"],["🏜️","En el desierto"],["🌴","En la selva"]], c:0, x:"Su plumaje y su grasita lo protegen del frío."},
    {k:"hábitat", p:"El hábitat es...", o:[["🏞️","El lugar donde vive un animal"],["🍽️","Lo que come un animal"],["😴","La hora en que duerme"]], c:0, x:"En su hábitat el animal encuentra comida, agua y refugio."},
    {k:"hábitat", p:"¿Qué animal está preparado para vivir en el desierto?", o:[["🦎","El lagarto"],["🐧","El pingüino"],["🐻‍❄️","El oso polar"]], c:0, x:"El lagarto aguanta el calor y necesita poquita agua."},
    {k:"hábitat", p:"Un animal necesita que su hábitat tenga...", o:[["🍃","Comida, agua y refugio"],["📺","Televisión"],["🛏️","Una cama"]], c:0, x:"Si le falta alguna de esas tres cosas, no puede vivir ahí."},
    {k:"animales de Chile", p:"¿Cuál animal chileno está en peligro de extinción?", o:[["🦌","El huemul"],["🐄","La vaca"],["🐔","La gallina"]], c:0, x:"Quedan muy poquitos huemules y por eso hay que protegerlos."},
    {k:"animales de Chile", p:"¿Dónde vive el cóndor?", o:[["⛰️","En la cordillera"],["🌊","En el fondo del mar"],["🏜️","Bajo la arena"]], c:0, x:"El cóndor planea altísimo entre las montañas."},
    {k:"animales de Chile", p:"El pudú, que vive en los bosques del sur, es el ciervo más...", o:[["🐁","Pequeño del mundo"],["🐘","Grande del mundo"],["⚡","Rápido del mundo"]], c:0, x:"El pudú mide como un perrito chico. ¡Es chiquitito!"},
    {k:"animales de Chile", p:"¿Qué le pasa a un animal si le destruyen su hábitat?", o:[["😟","Se queda sin comida ni refugio"],["🎉","Se pone contento"],["🌱","Le crecen plantas"]], c:0, x:"Por eso cuidar los bosques y el mar cuida también a los animales."},
    /* --- cuerpo humano --- */
    {k:"mi cuerpo", p:"¿Qué parte del cuerpo bombea la sangre?", o:[["❤️","El corazón"],["💨","Los pulmones"],["🦴","El esqueleto"]], c:0, x:"El corazón late todo el día para repartir sangre por el cuerpo."},
    {k:"mi cuerpo", p:"¿Con qué parte del cuerpo respiramos?", o:[["💨","Con los pulmones"],["❤️","Con el corazón"],["💪","Con los músculos"]], c:0, x:"Los pulmones se llenan de aire cuando inspiras."},
    {k:"mi cuerpo", p:"¿A dónde llega la comida después de tragarla?", o:[["🍽️","Al estómago"],["💨","A los pulmones"],["🧠","Al cerebro"]], c:0, x:"En el estómago la comida se deshace para alimentarte."},
    {k:"mi cuerpo", p:"¿Qué sostiene nuestro cuerpo y protege por dentro?", o:[["🦴","El esqueleto"],["👕","La ropa"],["👃","La nariz"]], c:0, x:"Los huesos te sostienen y protegen órganos como el corazón."},
    {k:"mi cuerpo", p:"¿Qué nos permite movernos, correr y saltar?", o:[["💪","Los músculos"],["👀","Los ojos"],["👂","Los oídos"]], c:0, x:"Los músculos tiran de los huesos y así te mueves."},
    {k:"mi cuerpo", p:"Cuando corres mucho, tu corazón late...", o:[["⚡","Más rápido"],["🐢","Más lento"],["⏸️","Se detiene"]], c:0, x:"Late más rápido para llevar más oxígeno a los músculos."},
    /* --- vida sana --- */
    {k:"vida sana", p:"Hacer ejercicio sirve para...", o:[["❤️","Fortalecer el corazón y los músculos"],["😴","Cansar el corazón"],["🍭","Comer más dulces"]], c:0, x:"Moverte todos los días mantiene fuerte tu cuerpo."},
    {k:"vida sana", p:"¿Cuál de estas es la colación más saludable?", o:[["🍎","Una fruta"],["🍬","Un paquete de dulces"],["🥤","Una bebida grande"]], c:0, x:"Las frutas tienen vitaminas y agua; los dulces solo azúcar."},
    {k:"vida sana", p:"¿Cuándo hay que lavarse las manos?", o:[["🧼","Antes de comer"],["🌙","Solo en la noche"],["🎂","Solo en los cumpleaños"]], c:0, x:"Lavarse las manos saca los microbios que enferman."},
    {k:"vida sana", p:"Dormir bien en la noche sirve para...", o:[["😴","Que el cuerpo descanse y crezca"],["📺","Ver más tele"],["🍬","Tener más hambre"]], c:0, x:"Mientras duermes tu cuerpo se repara y creces."},
    /* --- el agua --- */
    {k:"el agua", p:"El agua limpia es...", o:[["💧","Transparente y sin olor"],["🎨","De color rojo"],["🍬","Dulce como el azúcar"]], c:0, x:"Por eso puedes ver a través de un vaso con agua."},
    {k:"el agua", p:"Si dejo un vaso con agua en el congelador, el agua se convierte en...", o:[["🧊","Hielo, o sea sólida"],["💨","Vapor"],["🍦","Helado de crema"]], c:0, x:"Con mucho frío el agua se congela y se pone dura."},
    {k:"el agua", p:"Cuando el agua hierve en la olla, sale...", o:[["💨","Vapor, o sea agua en gas"],["🧊","Hielo"],["🧱","Piedra"]], c:0, x:"Con calor el agua se evapora y sube como vaporcito."},
    {k:"el agua", p:"Si echo agua en un vaso, el agua...", o:[["🥛","Toma la forma del vaso"],["🧊","Queda en forma de cubo"],["🎈","Se convierte en globo"]], c:0, x:"El agua líquida siempre toma la forma del envase."},
    {k:"el agua", p:"¿Qué se disuelve en el agua?", o:[["🧂","La sal"],["🧱","Una piedra"],["🔑","Una llave"]], c:0, x:"La sal y el azúcar desaparecen en el agua: se disuelven."},
    {k:"el agua", p:"En el ciclo del agua, el sol calienta el mar y el agua...", o:[["☀️","Se evapora y sube como vapor"],["🧊","Se congela"],["🕳️","Desaparece para siempre"]], c:0, x:"Ese vapor forma las nubes, y de ahí vuelve la lluvia."},
    {k:"el agua", p:"¿Cuál es una buena forma de cuidar el agua?", o:[["🚿","Cerrar la llave mientras te lavas los dientes"],["🌊","Dejarla corriendo"],["🧊","Llenar la tina todos los días"]], c:0, x:"El agua dulce es poquita en el planeta: hay que cuidarla."},
    /* --- tiempo atmosférico y estaciones --- */
    {k:"el tiempo y las estaciones", p:"¿Qué instrumento mide la temperatura?", o:[["🌡️","El termómetro"],["⏰","El reloj"],["📏","La regla"]], c:0, x:"El termómetro dice cuántos grados de calor o frío hay."},
    {k:"el tiempo y las estaciones", p:"¿Qué instrumento mide cuánta lluvia cayó?", o:[["🌧️","El pluviómetro"],["⚖️","La balanza"],["🔭","El telescopio"]], c:0, x:"El pluviómetro junta la lluvia y muestra cuánta cayó."},
    {k:"el tiempo y las estaciones", p:"¿Para qué sirve una veleta?", o:[["🌬️","Para saber hacia dónde sopla el viento"],["🌡️","Para medir el calor"],["⏰","Para saber la hora"]], c:0, x:"La veleta gira y apunta hacia donde va el viento."},
    {k:"el tiempo y las estaciones", p:"La lluvia, el granizo y la nieve se llaman...", o:[["🌨️","Precipitaciones"],["🌬️","Vientos"],["🌈","Arcoíris"]], c:0, x:"Es toda el agua que cae de las nubes, en cualquier forma."},
    {k:"el tiempo y las estaciones", p:"En otoño, muchos árboles...", o:[["🍂","Botan sus hojas"],["🌸","Se llenan de flores"],["🎄","Se llenan de luces"]], c:0, x:"Botan las hojas para descansar durante el invierno."},
    {k:"el tiempo y las estaciones", p:"¿En qué estación del año hace más calor en Chile?", o:[["🏖️","En verano"],["⛄","En invierno"],["🍂","En otoño"]], c:0, x:"El verano en Chile va de diciembre a marzo."},
    {k:"el tiempo y las estaciones", p:"En primavera, las plantas...", o:[["🌸","Florecen y les salen hojas nuevas"],["🍂","Botan todas las hojas"],["🧊","Se congelan"]], c:0, x:"Con más luz y más calor, la primavera las hace florecer."},
    {k:"el tiempo y las estaciones", p:"Si el termómetro marca 4 grados, ¿cómo hay que salir?", o:[["🧣","Bien abrigada, hace frío"],["🏖️","Con ropa de playa"],["🌂","Con traje de baño"]], c:0, x:"Pocos grados significan frío. ¡Gorro y bufanda!"}
  ]
});

MATERIAS.push({
  id:"historia", nombre:"Historia y Geografía", emoji:"🗺️",
  color:"#D2691E", colorClaro:"#FBEBDD",
  animal:{ e:"🦙", nombre:"Lila", tipo:"llamita" },
  preguntas:[
    /* --- pueblos originarios --- */
    {k:"pueblos originarios", p:"¿Qué pueblo originario vive principalmente en el sur de Chile?", o:[["🌿","El pueblo mapuche"],["🗿","El pueblo rapa nui"],["🏔️","El pueblo aimara"]], c:0, x:"Mapuche significa «gente de la tierra» en su idioma."},
    {k:"pueblos originarios", p:"¿Qué pueblo originario vive en Isla de Pascua?", o:[["🗿","El pueblo rapa nui"],["🌿","El pueblo mapuche"],["🦙","El pueblo aimara"]], c:0, x:"Isla de Pascua también se llama Rapa Nui."},
    {k:"pueblos originarios", p:"¿Qué pueblo originario vive en el altiplano del norte?", o:[["🦙","El pueblo aimara"],["🌿","El pueblo mapuche"],["🗿","El pueblo rapa nui"]], c:0, x:"Los aimara viven muy alto en la cordillera y crían llamas."},
    {k:"pueblos originarios", p:"Los moái, esas estatuas gigantes de piedra, fueron hechos por el pueblo...", v:"🗿", o:[["❤️","Rapa nui"],["💛","Mapuche"],["💚","Aimara"]], c:0, x:"Son casi mil estatuas talladas hace cientos de años."},
    {k:"pueblos originarios", p:"¿Cómo se llama la casa tradicional del pueblo mapuche?", o:[["🏚️","La ruca"],["🏰","El castillo"],["⛺","La carpa"]], c:0, x:"La ruca se hacía con madera y paja, y adentro iba el fogón."},
    {k:"pueblos originarios", p:"El idioma del pueblo mapuche se llama...", o:[["🗣️","Mapudungun"],["🇬🇧","Inglés"],["🇮🇹","Italiano"]], c:0, x:"Mapudungun quiere decir «el hablar de la tierra»."},
    {k:"pueblos originarios", p:"Un pueblo NÓMADA es el que...", o:[["⛺","Se cambia de lugar buscando alimento"],["🌽","Vive siempre en el mismo lugar"],["🏙️","Vive en la ciudad"]], c:0, x:"Los nómadas se movían siguiendo a los animales y las frutas."},
    {k:"pueblos originarios", p:"Un pueblo SEDENTARIO es el que...", o:[["🌽","Se queda en un lugar y cultiva"],["⛺","Anda de un lado a otro"],["⛵","Vive en un barco"]], c:0, x:"Al quedarse en un lugar podían sembrar y criar animales."},
    {k:"pueblos originarios", p:"Los changos y otros pueblos de la costa vivían principalmente de...", o:[["🎣","La pesca y los mariscos"],["🌽","Sembrar trigo"],["🏔️","Cazar en la nieve"]], c:0, x:"Vivían al lado del mar, así que el mar les daba la comida."},
    {k:"pueblos originarios", p:"Los aimara del norte criaban llamas para...", o:[["🧶","Tener lana, carga y alimento"],["🏇","Correr carreras"],["🎪","Hacer circo"]], c:0, x:"La llama les daba lana para tejer y cargaba cosas pesadas."},
    /* --- aportes y mestizaje --- */
    {k:"aportes y mestizaje", p:"La papa, el maíz y el poroto son alimentos que nos dejaron...", o:[["🥔","Los pueblos originarios"],["🍕","Los italianos"],["🍣","Los japoneses"]], c:0, x:"Ya se cultivaban en América mucho antes de que llegaran los españoles."},
    {k:"aportes y mestizaje", p:"Decimos que la sociedad chilena es MESTIZA porque mezcla...", o:[["🤝","Pueblos originarios y españoles"],["🐶","Animales y plantas"],["🌊","Mar y cordillera"]], c:0, x:"De esa mezcla vienen nuestras comidas, palabras y costumbres."},
    {k:"aportes y mestizaje", p:"La palabra «guagua», que usamos para los bebés, viene...", o:[["👶","De los pueblos originarios"],["🇬🇧","Del inglés"],["🇫🇷","Del francés"]], c:0, x:"Hablamos con muchas palabras indígenas sin darnos ni cuenta."},
    {k:"aportes y mestizaje", p:"¿Qué idioma trajeron los españoles a Chile?", o:[["🗣️","El castellano, o sea el español"],["🇬🇧","El inglés"],["🇩🇪","El alemán"]], c:0, x:"Por eso hoy hablamos español en casi toda América del Sur."},
    {k:"aportes y mestizaje", p:"A Chile llegaron familias de muchos países. Eso hace que nuestra sociedad sea...", o:[["🌎","Diversa, con costumbres de muchos lugares"],["🚪","Toda igual"],["🔒","Cerrada"]], c:0, x:"Alemanes, italianos, palestinos, coreanos y muchos más se hicieron chilenos."},
    /* --- patrimonio y tradiciones --- */
    {k:"tradiciones de Chile", p:"¿Cuál es el baile nacional de Chile?", o:[["💃","La cueca"],["🎭","El ballet"],["🕺","El breakdance"]], c:0, x:"Se baila con pañuelo y cuenta la historia de un gallo y una gallina."},
    {k:"tradiciones de Chile", p:"¿Qué comida es típica de las Fiestas Patrias?", o:[["🥟","La empanada"],["🍣","El sushi"],["🍕","La pizza"]], c:0, x:"La empanada de pino lleva carne, cebolla, huevo y aceituna."},
    {k:"tradiciones de Chile", p:"¿Cuál es un juego típico chileno de septiembre?", o:[["🌬️","El volantín"],["♟️","El ajedrez"],["🎳","Los bolos"]], c:0, x:"En septiembre hay viento, perfecto para elevar volantines."},
    {k:"tradiciones de Chile", p:"¿Cuándo se celebran las Fiestas Patrias en Chile?", o:[["🇨🇱","El 18 de septiembre"],["🎄","El 25 de diciembre"],["🎃","El 31 de octubre"]], c:0, x:"Se recuerda la Primera Junta de Gobierno de 1810."},
    {k:"tradiciones de Chile", p:"El patrimonio natural de Chile son...", o:[["🏞️","Los paisajes, plantas y animales que cuidamos"],["📱","Los celulares nuevos"],["🏬","Los centros comerciales"]], c:0, x:"Los parques nacionales existen justamente para protegerlo."},
    {k:"tradiciones de Chile", p:"Una leyenda que se cuenta de generación en generación es parte de...", o:[["📜","Nuestro patrimonio cultural"],["🔬","Un experimento"],["🧾","Una boleta"]], c:0, x:"Las leyendas se transmiten hablando, de abuelos a nietos."},
    /* --- mapa de Chile --- */
    {k:"el mapa de Chile", p:"¿Cuál es la capital de Chile?", o:[["🏙️","Santiago"],["⚓","Valparaíso"],["❄️","Punta Arenas"]], c:0, x:"En Santiago está el gobierno del país."},
    {k:"el mapa de Chile", p:"¿Con qué país limita Chile por el NORTE?", o:[["🇵🇪","Perú"],["🇦🇷","Argentina"],["🇧🇷","Brasil"]], c:0, x:"Arriba del mapa, pegadito a Chile, está Perú."},
    {k:"el mapa de Chile", p:"¿Con qué país limita Chile por el ESTE, al otro lado de la cordillera?", o:[["🇦🇷","Argentina"],["🇵🇪","Perú"],["🇺🇾","Uruguay"]], c:0, x:"La cordillera de los Andes es la frontera entre los dos países."},
    {k:"el mapa de Chile", p:"¿Qué océano está al oeste de Chile?", o:[["🌊","El océano Pacífico"],["🧊","El océano Ártico"],["🏝️","El océano Índico"]], c:0, x:"Toda la costa chilena mira al Pacífico."},
    {k:"el mapa de Chile", p:"Los puntos cardinales son norte, sur, este y...", o:[["🧭","Oeste"],["⬆️","Arriba"],["🌀","Centro"]], c:0, x:"Norte, sur, este y oeste sirven para ubicarse en cualquier mapa."},
    {k:"el mapa de Chile", p:"En Santiago, si miras hacia la cordillera, estás mirando hacia el...", o:[["⛰️","Este"],["🌊","Oeste"],["🧊","Sur"]], c:0, x:"La cordillera queda al este y el mar al oeste. ¡Truco para no perderse!"},
    {k:"el mapa de Chile", p:"Chile es un país muy...", o:[["📏","Largo y angosto"],["⬛","Cuadrado"],["⚪","Redondo"]], c:0, x:"Mide más de 4.000 kilómetros de largo y es angostito."},
    {k:"el mapa de Chile", p:"Un plano de tu casa muestra el lugar visto...", o:[["🗺️","Desde arriba"],["👀","De frente"],["🔍","Muy de cerca"]], c:0, x:"Los planos se dibujan como si lo miraras volando encima."},
    /* --- zonas y paisajes --- */
    {k:"zonas de Chile", p:"En el norte de Chile está el desierto más seco del mundo. Se llama...", o:[["🏜️","Desierto de Atacama"],["🐫","Desierto del Sahara"],["🏔️","La Patagonia"]], c:0, x:"En algunos lugares de Atacama nunca se ha registrado lluvia."},
    {k:"zonas de Chile", p:"En el sur de Chile hay muchos...", o:[["🌲","Bosques, lagos y lluvia"],["🏜️","Desiertos y arena"],["🌴","Palmeras y playas calientes"]], c:0, x:"Llueve harto, y por eso todo se ve tan verde."},
    {k:"zonas de Chile", p:"¿Qué es un archipiélago?", o:[["🏝️","Un grupo de islas"],["⛰️","Una montaña muy alta"],["🏜️","Un desierto"]], c:0, x:"En el sur de Chile hay muchísimas islas juntas."},
    {k:"zonas de Chile", p:"¿Qué es un valle?", o:[["🌄","Un terreno plano entre montañas"],["🌊","Una ola grande"],["🕳️","Un hoyo en la calle"]], c:0, x:"En los valles de la zona central se cultivan frutas y viñas."},
    {k:"zonas de Chile", p:"¿Qué es un volcán?", o:[["🌋","Un cerro que puede largar lava"],["🏞️","Un lago"],["🏖️","Una playa"]], c:0, x:"Chile tiene muchos volcanes porque está sobre placas que se mueven."},
    {k:"zonas de Chile", p:"En la zona central de Chile vive...", o:[["🏙️","La mayor parte de la gente"],["🐧","Solo pingüinos"],["🌵","Nadie"]], c:0, x:"Ahí están Santiago y las ciudades más grandes."},
    {k:"zonas de Chile", p:"¿Cómo se llama la cordillera que recorre Chile de norte a sur?", o:[["⛰️","La cordillera de los Andes"],["🗻","El Himalaya"],["🏔️","Los Alpes"]], c:0, x:"Es una de las cordilleras más largas del mundo."},
    /* --- antes y ahora --- */
    {k:"antes y ahora", p:"Antes de que existieran los autos, la gente viajaba...", o:[["🐴","En carreta con caballos"],["✈️","En avión"],["🚀","En cohete"]], c:0, x:"Los viajes duraban días enteros, no horas."},
    {k:"antes y ahora", p:"Hace mucho tiempo, para mandar un mensaje lejos se usaba...", o:[["✉️","Una carta"],["📱","Un mensaje de celular"],["📧","Un correo electrónico"]], c:0, x:"La carta se demoraba semanas en llegar."},
    {k:"antes y ahora", p:"Antes, para lavar la ropa, las familias usaban...", o:[["🧺","Las manos y una artesa"],["🌀","Lavadora automática"],["🤖","Un robot"]], c:0, x:"Lavar tomaba todo el día. La lavadora cambió eso."},
    {k:"antes y ahora", p:"Una línea de tiempo sirve para...", o:[["📅","Ordenar los hechos del más antiguo al más nuevo"],["🍽️","Anotar recetas"],["🎨","Pintar"]], c:0, x:"Te muestra qué pasó primero y qué pasó después."},
    {k:"antes y ahora", p:"«Antiguamente», «hoy» y «mañana» son palabras que hablan del...", o:[["⏳","Tiempo"],["🗺️","Lugar"],["🎨","Color"]], c:0, x:"Sirven para ordenar el pasado, el presente y el futuro."},
    /* --- vivir juntos --- */
    {k:"vivir juntos", p:"¿Qué servicio nos ayuda a movernos por la ciudad?", o:[["🚌","El transporte público"],["🏥","El hospital"],["🏫","El colegio"]], c:0, x:"Micros, metro y trenes llevan a mucha gente todos los días."},
    {k:"vivir juntos", p:"Ser honesta es...", o:[["🤝","Decir la verdad y no hacer trampa"],["🏆","Ganar siempre"],["🤫","Esconder lo que hiciste"]], c:0, x:"También es reconocer cuando uno se equivoca."},
    {k:"vivir juntos", p:"Si veo basura tirada en la plaza, lo correcto es...", o:[["🗑️","Echarla al basurero"],["👀","Hacer como que no la vi"],["🦶","Patearla lejos"]], c:0, x:"La plaza es de todos, así que cuidarla también es de todos."},
    {k:"vivir juntos", p:"Si una compañera nueva está sola en el recreo, lo mejor es...", o:[["🤗","Invitarla a jugar"],["🙈","Dejarla sola"],["😆","Reírse de ella"]], c:0, x:"Incluir a los demás se llama empatía."},
    {k:"vivir juntos", p:"Antes de cruzar la calle hay que...", o:[["🚦","Mirar a los dos lados y cruzar por el paso de cebra"],["🏃","Correr rápido entre los autos"],["📱","Mirar el celular"]], c:0, x:"Las normas de seguridad vial existen para cuidarte."},
    {k:"vivir juntos", p:"Respetar los turnos para hablar sirve para...", o:[["👂","Que todos puedan escuchar y ser escuchados"],["🏆","Ganar la conversación"],["🤐","Que nadie hable"]], c:0, x:"Si todos hablan al mismo tiempo, nadie entiende nada."},
    {k:"vivir juntos", p:"Un parque nacional se creó para...", o:[["🌲","Proteger la naturaleza y los animales"],["🏗️","Construir edificios"],["🛒","Poner un mall"]], c:0, x:"En Chile hay muchos, como Torres del Paine y La Campana."}
  ]
});

MATERIAS.push({
  id:"ingles", nombre:"Inglés", emoji:"🌎",
  color:"#2563C9", colorClaro:"#E4EDFC",
  animal:{ e:"🦊", nombre:"Foxy", tipo:"zorrita" },
  preguntas:[
    /* --- animals --- */
    {k:"animals", p:"«CAT» en español es...", o:[["🐱","Gato"],["🐶","Perro"],["🐟","Pez"]], c:0, x:"Cat se dice «cat», con la A bien abierta."},
    {k:"animals", p:"«DOG» en español es...", o:[["🐶","Perro"],["🐱","Gato"],["🐰","Conejo"]], c:0, x:"Theo is a dog. ¡Theo es un perro!"},
    {k:"animals", p:"«BIRD» en español es...", o:[["🐦","Pájaro"],["🐴","Caballo"],["🐷","Chancho"]], c:0, x:"Bird suena «berd»."},
    {k:"animals", p:"«HORSE» en español es...", o:[["🐴","Caballo"],["🐮","Vaca"],["🐔","Gallina"]], c:0, x:"Horse suena «jors»."},
    {k:"animals", p:"«BUTTERFLY» en español es...", o:[["🦋","Mariposa"],["🐝","Abeja"],["🐞","Chinita"]], c:0, x:"Butterfly junta butter (mantequilla) y fly (volar). ¡Qué raro!"},
    {k:"animals", p:"«UNICORN» en español es...", o:[["🦄","Unicornio"],["🐴","Caballo"],["🐐","Cabra"]], c:0, x:"Uni significa uno: un solo cuerno."},
    {k:"animals", p:"«FISH» en español es...", o:[["🐟","Pez"],["🐸","Rana"],["🦆","Pato"]], c:0, x:"Fish sirve para uno o para muchos peces, no cambia."},
    {k:"animals", p:"«RABBIT» en español es...", o:[["🐰","Conejo"],["🐢","Tortuga"],["🐭","Ratón"]], c:0, x:"Rabbit suena «rábit»."},
    /* --- colours --- */
    {k:"colours", p:"«PINK» es el color...", o:[["🌸","Rosado"],["💙","Azul"],["💚","Verde"]], c:0, x:"My favourite colour is pink. ¡Mi color favorito es el rosado!"},
    {k:"colours", p:"«PURPLE» es el color...", o:[["💜","Morado"],["🧡","Naranjo"],["🖤","Negro"]], c:0, x:"Purple suena «pérpol»."},
    {k:"colours", p:"«GREEN» es el color...", o:[["💚","Verde"],["❤️","Rojo"],["💛","Amarillo"]], c:0, x:"The grass is green: el pasto es verde."},
    {k:"colours", p:"«YELLOW» es el color...", o:[["💛","Amarillo"],["🌸","Rosado"],["🤍","Blanco"]], c:0, x:"The sun is yellow: el sol es amarillo."},
    {k:"colours", p:"«BLUE» es el color...", o:[["💙","Azul"],["🖤","Negro"],["🧡","Naranjo"]], c:0, x:"The sky is blue: el cielo es azul."},
    {k:"colours", p:"«RED» es el color...", o:[["❤️","Rojo"],["💚","Verde"],["💜","Morado"]], c:0, x:"Red suena «red», cortito."},
    /* --- numbers --- */
    {k:"numbers", p:"«SEVEN» es el número...", o:[["7️⃣","Siete"],["6️⃣","Seis"],["9️⃣","Nueve"]], c:0, x:"One, two, three... seven es el séptimo."},
    {k:"numbers", p:"«TWELVE» es el número...", o:[["❤️","Doce"],["💛","Dos"],["💚","Veinte"]], c:0, x:"Ojo: twelve es 12 y two es 2. ¡Se parecen!"},
    {k:"numbers", p:"«TWENTY» es el número...", o:[["❤️","Veinte"],["💛","Doce"],["💚","Dos"]], c:0, x:"Twenty termina en -ty, como los números grandes."},
    {k:"numbers", p:"«FIVE» es el número...", o:[["5️⃣","Cinco"],["4️⃣","Cuatro"],["9️⃣","Nueve"]], c:0, x:"Five fingers: los cinco dedos de una mano."},
    {k:"numbers", p:"«TEN» es el número...", o:[["🔟","Diez"],["3️⃣","Tres"],["2️⃣","Dos"]], c:0, x:"Ten es una decena completa."},
    /* --- family --- */
    {k:"family", p:"«MOTHER» en español es...", o:[["👩","Mamá"],["👨","Papá"],["👶","Bebé"]], c:0, x:"También se dice mom, más cariñoso."},
    {k:"family", p:"«SISTER» en español es...", o:[["👧","Hermana"],["👦","Hermano"],["👵","Abuela"]], c:0, x:"Sister es hermana; brother es hermano."},
    {k:"family", p:"«BROTHER» en español es...", o:[["👦","Hermano"],["👧","Hermana"],["👨","Papá"]], c:0, x:"Brother suena «bróder»."},
    {k:"family", p:"«GRANDMOTHER» en español es...", o:[["👵","Abuela"],["👩","Mamá"],["👧","Hermana"]], c:0, x:"Grand quiere decir «grande»: la mamá de tu mamá."},
    {k:"family", p:"«FATHER» en español es...", o:[["👨","Papá"],["👩","Mamá"],["👦","Hermano"]], c:0, x:"También se dice dad."},
    /* --- body --- */
    {k:"body", p:"«HAND» en español es...", o:[["🖐️","Mano"],["🦶","Pie"],["👁️","Ojo"]], c:0, x:"Two hands: dos manos."},
    {k:"body", p:"«EYES» en español es...", o:[["👀","Ojos"],["👂","Orejas"],["👃","Nariz"]], c:0, x:"Un ojo es eye; dos son eyes."},
    {k:"body", p:"«NOSE» en español es...", o:[["👃","Nariz"],["👄","Boca"],["👂","Oreja"]], c:0, x:"Nose suena «nous»."},
    {k:"body", p:"«FOOT» en español es...", o:[["🦶","Pie"],["🖐️","Mano"],["🦵","Rodilla"]], c:0, x:"Un pie es foot y dos son feet. ¡Cambia entero!"},
    /* --- greetings --- */
    {k:"greetings", p:"¿Cómo se dice HOLA en inglés?", o:[["👋","Hello"],["🙏","Please"],["🙈","Sorry"]], c:0, x:"También se puede decir hi, más corto."},
    {k:"greetings", p:"«GOOD MORNING» significa...", o:[["☀️","Buenos días"],["🌙","Buenas noches"],["👋","Adiós"]], c:0, x:"Morning es la mañana."},
    {k:"greetings", p:"«GOOD NIGHT» significa...", o:[["🌙","Buenas noches"],["☀️","Buenos días"],["🍽️","Buen provecho"]], c:0, x:"Night es la noche. Se dice al ir a dormir."},
    {k:"greetings", p:"«THANK YOU» significa...", o:[["💖","Gracias"],["👋","Hola"],["🙈","Perdón"]], c:0, x:"Se responde «you're welcome»: de nada."},
    {k:"greetings", p:"«HOW ARE YOU?» significa...", o:[["🙂","¿Cómo estás?"],["📛","¿Cómo te llamas?"],["🕒","¿Qué hora es?"]], c:0, x:"Puedes responder «I'm fine»: estoy bien."},
    {k:"greetings", p:"«MY NAME IS...» significa...", o:[["📛","Me llamo..."],["🏠","Yo vivo en..."],["🎂","Yo tengo... años"]], c:0, x:"Name es nombre."},
    {k:"greetings", p:"«PLEASE» significa...", o:[["🙏","Por favor"],["👋","Chao"],["💖","Gracias"]], c:0, x:"Se usa para pedir cosas con buena onda."},
    /* --- days --- */
    {k:"days", p:"«MONDAY» en español es...", o:[["❤️","Lunes"],["💛","Viernes"],["💚","Domingo"]], c:0, x:"Monday es el primer día de la semana escolar."},
    {k:"days", p:"«FRIDAY» en español es...", o:[["❤️","Viernes"],["💛","Lunes"],["💚","Martes"]], c:0, x:"Friday, ¡y llega el fin de semana!"},
    {k:"days", p:"«SUNDAY» en español es...", o:[["❤️","Domingo"],["💛","Sábado"],["💚","Jueves"]], c:0, x:"Sun es sol: Sunday, el día del sol."},
    /* --- food --- */
    {k:"food", p:"«APPLE» en español es...", o:[["🍎","Manzana"],["🍌","Plátano"],["🍇","Uva"]], c:0, x:"An apple a day: una manzana al día."},
    {k:"food", p:"«WATER» en español es...", o:[["💧","Agua"],["🥛","Leche"],["🧃","Jugo"]], c:0, x:"Water suena «uóter»."},
    {k:"food", p:"«MILK» en español es...", o:[["🥛","Leche"],["🍞","Pan"],["🧀","Queso"]], c:0, x:"Milk es lo que toman las guaguas de los mamíferos."},
    {k:"food", p:"«BREAD» en español es...", o:[["🍞","Pan"],["🍰","Torta"],["🍚","Arroz"]], c:0, x:"Bread suena «bred»."},
    /* --- school --- */
    {k:"school", p:"«BOOK» en español es...", o:[["📚","Libro"],["✏️","Lápiz"],["🎒","Mochila"]], c:0, x:"Book suena «buk»."},
    {k:"school", p:"«PENCIL» en español es...", o:[["✏️","Lápiz"],["📚","Libro"],["✂️","Tijeras"]], c:0, x:"Pencil es el lápiz de mina; pen es el lápiz de pasta."},
    {k:"school", p:"«TEACHER» en español es...", o:[["👩‍🏫","Profesora"],["👧","Compañera"],["👮","Policía"]], c:0, x:"To teach es enseñar, así que teacher es quien enseña."},
    {k:"school", p:"«SCHOOL» en español es...", o:[["🏫","Colegio"],["🏠","Casa"],["🏥","Hospital"]], c:0, x:"School suena «skul»."},
    /* --- clothes and weather --- */
    {k:"clothes and weather", p:"«SHOES» en español son...", o:[["👟","Zapatos"],["🧦","Calcetines"],["🧢","Gorro"]], c:0, x:"Un zapato es shoe; dos son shoes."},
    {k:"clothes and weather", p:"«T-SHIRT» en español es...", o:[["👕","Polera"],["👖","Pantalón"],["🧥","Abrigo"]], c:0, x:"Se llama así porque tiene forma de letra T."},
    {k:"clothes and weather", p:"«IT'S RAINING» significa...", o:[["🌧️","Está lloviendo"],["☀️","Hace sol"],["❄️","Está nevando"]], c:0, x:"Rain es lluvia."},
    {k:"clothes and weather", p:"«IT'S SUNNY» significa...", o:[["☀️","Hace sol"],["🌧️","Llueve"],["🌬️","Hace viento"]], c:0, x:"Sun es sol, y sunny es soleado."},
    {k:"clothes and weather", p:"«COLD» significa...", o:[["🧊","Frío"],["🔥","Calor"],["💧","Mojado"]], c:0, x:"It's cold today: hoy hace frío."}
  ]
});

/* ============================================================
   OBJETOS DEL REFUGIO
   Se compran con estrellas. Aparecen decorando el refugio.
   ============================================================ */
const OBJETOS = [
  {id:"pelota",   e:"🎾", nombre:"Pelota",         precio:15},
  {id:"hueso",    e:"🦴", nombre:"Hueso rico",     precio:20},
  {id:"mono",     e:"🧸", nombre:"Peluche",        precio:25},
  {id:"flores",   e:"🌷", nombre:"Jardín",         precio:30},
  {id:"moño",     e:"🎀", nombre:"Moño para Theo", precio:40},
  {id:"casita",   e:"🏠", nombre:"Casita de Theo", precio:50},
  {id:"arbol",    e:"🌳", nombre:"Árbol grande",   precio:60},
  {id:"columpio", e:"🎠", nombre:"Carrusel",       precio:75},
  {id:"laguna",   e:"⛲", nombre:"Fuente de agua", precio:90},
  {id:"arcoiris", e:"🌈", nombre:"Arcoíris",       precio:110},
  {id:"castillo", e:"🏰", nombre:"Castillo",       precio:140},
  {id:"estrella", e:"🌟", nombre:"Estrella mágica", precio:180}
];

/* Ánimo cuando se equivoca. Nunca dicen «perdiste» ni «mal». */
const ANIMOS = [
  "¡Casi! Prueba otra vez, tú puedes 💗",
  "Ups, esa no era. ¡Intenta con otra! 🌈",
  "¡Sigue buscando! Estás cerquita ✨",
  "No pasa nada, se puede intentar de nuevo 🐶",
  "¡Buena idea! Pero hay otra mejor. Prueba 🌸",
  "Equivocarse también es aprender. ¡Otra vez! 🦄"
];

const FELICES = [
  "¡Perfecto!", "¡Lo lograste!", "¡Súper bien!", "¡Eres crack!",
  "¡Qué inteligente eres!", "¡Correcto!", "¡Esa era!"
];

/* Pausas: chiste + dato curioso. Humor simple y visual, para 7 años. */
const PAUSAS = [
  {ch:"¿Qué le dice un gusanito a otro gusanito? — «Voy a dar una vuelta a la manzana». 🍎🐛", da:"Las mariposas sienten el sabor de las flores… ¡con las patitas! 🦋"},
  {ch:"¿Qué hace una abeja en el gimnasio? — ¡Zum-ba! 🐝", da:"Un colibrí mueve sus alas tan rápido que casi no se le ven: 80 veces en un segundo. 🐦"},
  {ch:"¿Qué le dice el número 0 al número 8? — «¡Qué lindo cinturón!» 0️⃣8️⃣", da:"Si sumas todos los números del 1 al 100 te da 5.050. ¡Lo descubrió un niño en clases! 🔢"},
  {ch:"¿Cuál es el último animal del mundo? — El delfín. El-del-fin. 🐬", da:"Los delfines se llaman entre ellos con un silbido distinto para cada uno, como un nombre. 🐬"},
  {ch:"¿Qué le dijo una pared a la otra pared? — «Nos vemos en la esquina». 🧱", da:"Las nutrias se toman de la manito para dormir y no separarse en el agua. 🦦"},
  {ch:"¿Qué hace un perro con un taladro? — Taladrando. 🐶🔧", da:"Los perros huelen tan bien que pueden encontrar una galleta escondida en otra pieza. 🍪"},
  {ch:"¿Por qué los unicornios nunca ganan a las escondidas? — Porque siempre se les ve el cuerno. 🦄", da:"El unicornio es el animal nacional de Escocia… ¡aunque no exista! 🏰"},
  {ch:"¿Cuál es la fruta más risueña? — La naranja: na-ran-ja-ja-ja. 🍊", da:"Los plátanos son técnicamente unas bayas gigantes, y las frutillas… ¡no son bayas! 🍌"},
  {ch:"Mamá, mamá, en el colegio me dicen despistada. — Niña, esta es la casa del vecino. 🏠", da:"Un pulpo tiene tres corazones y su sangre es azul. 🐙"},
  {ch:"¿Qué le dice un semáforo a otro? — «No me mires, que me estoy cambiando». 🚦", da:"En Chile vive el pudú, el ciervo más pequeño del mundo: cabe en una caja de zapatos. 🦌"},
  {ch:"¿Cómo se llama el campeón japonés de buceo? — Tokofondo. Y el segundo lugar: Kasi Tokofondo. 🤿", da:"En el desierto de Atacama hay lugares donde nunca se ha registrado ni una gota de lluvia. 🏜️"},
  {ch:"¿Qué hace un elefante cuando se cae al agua? — Se moja. 🐘💦", da:"Los elefantes se saludan enrollando sus trompas, como un abrazo. 🐘"},
  {ch:"¿Por qué el libro de matemática andaba triste? — Porque tenía muchos problemas. 📚", da:"El cerebro no siente dolor. Aunque te duela la cabeza, ¡no le duele a él! 🧠"},
  {ch:"¿Qué le dijo la cuchara al azúcar? — «Nos vemos en el café». ☕", da:"Los flamencos son rosados por lo que comen. ¡Nacen grises! 🦩"},
  {ch:"¿Qué hace la nube cuando le da risa? — Se llueve de la risa. ☁️", da:"Ningún copo de nieve es igual a otro: cada uno tiene su propio dibujo. ❄️"},
  {ch:"¿Cuál es el animal más antiguo? — La cebra, porque está en blanco y negro. 🦓", da:"Las rayas de cada cebra son distintas, como nuestras huellas digitales. 🦓"},
  {ch:"¿Qué le dice un pez a otro pez cuando se enojan? — ¡Nada, nada! 🐟", da:"Las tortugas pueden respirar bajo el agua un ratito larguísimo: algunas aguantan horas. 🐢"},
  {ch:"¿Cómo se llama el amigo japonés que siempre llega mojado? — Kaio Alagua. 💦", da:"La llama, cuando se enoja, escupe. Por eso mejor pedirle permiso. 🦙"},
  {ch:"¿Qué hace un gato en el computador? — ¡Miau-se! (mouse) 🐱🖱️", da:"Los gatos duermen unas 16 horas al día. ¡Casi todo el día durmiendo! 🐱"},
  {ch:"¿Qué le dice una impresora a otra? — «Esa hoja es tuya o es impresión mía». 🖨️", da:"El árbol más alto del mundo mide más que un edificio de 30 pisos. 🌲"}
];
