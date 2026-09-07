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
    {k:"escribir bien", p:"¿Cuál oración está bien escrita?", o:[["","Mi perro se llama Theo."],["","mi perro se llama theo"],["","Mi perro se llama theo"]], c:0, x:"Empieza con mayúscula, Theo también, y termina con punto."},
    {k:"escribir bien", p:"¿Qué signo le falta a esta pregunta?", v:"___ Cómo te llamas?", o:[["","El signo ¿"],["","El signo ¡"],["","Un punto ."]], c:0, x:"En español las preguntas abren con ¿ y cierran con ?"},
    {k:"escribir bien", p:"¿Cómo se escribe cuando gritamos de alegría?", o:[["","¡Qué lindo!"],["","Que lindo?"],["","que lindo"]], c:0, x:"Las exclamaciones van entre ¡ y !, las dos puntitas."},
    {k:"escribir bien", p:"Una oración siempre termina con...", o:[["","Un punto ."],["","Una coma ,"],["","Un guion -"]], c:0, x:"El punto avisa que la idea terminó."},
    {k:"escribir bien", p:"Los nombres de las personas se escriben...", o:[["","Con mayúscula al principio"],["","Todo en minúscula"],["","Todo en mayúscula"]], c:0, x:"Los nombres propios siempre parten con mayúscula."},
    {k:"escribir bien", p:"El nombre de una ciudad, como Santiago, se escribe...", o:[["","Con mayúscula"],["","Con minúscula"],["","Con un signo ¿"]], c:0, x:"Ciudades, países y nombres de personas: todos con mayúscula."},
    {k:"escribir bien", p:"Después de un punto, la palabra que sigue empieza con...", o:[["","Mayúscula"],["","Minúscula"],["","Un número"]], c:0, x:"Punto y después mayúscula: así empieza una idea nueva."},
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
    {k:"singular y plural", p:"¿Cuál es el plural de LÁPIZ?", o:[["","Lápices"],["","Lápizes"],["","Lápiz"]], c:0, x:"La Z se transforma en C: lápiz → lápices."},
    {k:"singular y plural", p:"¿Cuál es el plural de «el perro»?", o:[["","Los perros"],["","La perros"],["","El perros"]], c:0, x:"Si hay muchos, cambian los dos: los perros."},
    {k:"singular y plural", p:"¿Cuál es el singular de «las flores»?", o:[["","La flor"],["","El flor"],["","Las flor"]], c:0, x:"Una sola es la flor. Muchas son las flores."},
    {k:"singular y plural", p:"¿Qué palabrita va antes de «unicornio»?", o:[["","El unicornio"],["","La unicornio"],["","Las unicornio"]], c:0, x:"Unicornio es masculino, por eso lleva EL."},
    {k:"singular y plural", p:"¿Qué palabrita va antes de «casa»?", o:[["","La casa"],["","El casa"],["","Los casa"]], c:0, x:"Casa es femenino, por eso lleva LA."},
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
    {k:"tipos de texto", p:"¿Qué tipo de texto es este?", t:"La liebre se burló de la tortuga por lenta. Se durmió en plena carrera y la tortuga llegó primero. Moraleja: la constancia gana.", o:[["🐢","Una fábula"],["📰","Una noticia"],["🍲","Una receta"]], c:0, x:"Es fábula: los personajes son animales y al final viene la moraleja."},
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
  id:"matematica", nombre:"Matemática", emoji:"🔢", generado:true,
  color:"#0E9BAE", colorClaro:"#DFF5F7",
  animal:{ e:"🐰", nombre:"Coco", tipo:"conejita" },
  preguntas:[
    /* --- contar y comparar --- */
    {k:"contar y comparar", p:"Un grupo de 10 y 3 sueltas. ¿Cuántas manzanas hay?", v:"🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎 + 🍎🍎🍎", o:[["🔟","13"],["3️⃣","30"],["1️⃣","103"]], c:0, x:"10 y 3 más son 13. Una decena y tres unidades."},
    {k:"contar y comparar", p:"¿Cuál número es MAYOR?", v:"45  ·  54", o:[["5️⃣","54"],["4️⃣","45"],["🤝","Son iguales"]], c:0, x:"54 tiene 5 decenas y 45 solo tiene 4. Gana el que tiene más decenas."},
    {k:"contar y comparar", p:"¿Cuál número es MENOR?", v:"62  ·  26", o:[["2️⃣","26"],["6️⃣","62"],["🤝","Son iguales"]], c:0, x:"26 tiene 2 decenas; 62 tiene 6. Por eso 26 es más chico."},
    {k:"contar y comparar", p:"¿Cómo se lee el número 80?", o:[["","Ochenta"],["","Ocho"],["","Dieciocho"]], c:0, x:"80 son 8 decenas: ochenta."},
    {k:"contar y comparar", p:"¿Qué número va entre el 68 y el 70?", v:"68 · ? · 70", o:[["","69"],["","67"],["","71"]], c:0, x:"Después del 68 viene el 69, y después el 70."},
    {k:"contar y comparar", p:"Contando de 5 en 5, ¿qué número sigue?", v:"5 · 10 · 15 · 20 · ?", o:[["","25"],["","21"],["","30"]], c:0, x:"De 5 en 5: 20 más 5 son 25."},
    {k:"contar y comparar", p:"Contando de 2 en 2, ¿qué número sigue?", v:"2 · 4 · 6 · 8 · ?", o:[["","10"],["","9"],["","12"]], c:0, x:"8 más 2 son 10. ¡Vas saltando de dos en dos!"},
    {k:"contar y comparar", p:"¿Cuál es el MAYOR de los tres?", v:"33 · 43 · 34", o:[["","43"],["","34"],["","33"]], c:0, x:"43 tiene 4 decenas; los otros dos tienen solo 3."},
    /* --- decenas y unidades --- */
    {k:"decenas y unidades", p:"En el número 47, ¿cuántas DECENAS hay?", v:"🔟🔟🔟🔟 + ⭐⭐⭐⭐⭐⭐⭐", o:[["4️⃣","4 decenas"],["7️⃣","7 decenas"],["🔢","47 decenas"]], c:0, x:"Cada barra azul es una decena: hay 4 barras y 7 sueltas."},
    {k:"decenas y unidades", p:"3 decenas y 5 unidades forman el número...", v:"🔟🔟🔟 + ⭐⭐⭐⭐⭐", o:[["","35"],["","53"],["","305"]], c:0, x:"3 decenas son 30, más 5 sueltas: 35."},
    {k:"decenas y unidades", p:"¿Cuántas UNIDADES sueltas tiene el número 26?", v:"🔟🔟 + ⭐⭐⭐⭐⭐⭐", o:[["6️⃣","6 unidades"],["2️⃣","2 unidades"],["🔟","10 unidades"]], c:0, x:"El 26 tiene 2 decenas y 6 unidades sueltas."},
    {k:"decenas y unidades", p:"¿Cuántas decenas hay en el número 50?", v:"🔟🔟🔟🔟🔟", o:[["5️⃣","5 decenas"],["🔟","10 decenas"],["0️⃣","Ninguna"]], c:0, x:"5 grupos de 10 son 50. ¡Ni una suelta!"},
    {k:"decenas y unidades", p:"El número 24 se puede separar en...", o:[["","20 + 4"],["","2 + 4"],["","40 + 2"]], c:0, x:"2 decenas son 20, y quedan 4 unidades: 20 + 4."},
    /* --- sumar --- */
    {k:"sumar", p:"20 + 30 = ?", v:"🔟🔟 + 🔟🔟🔟", o:[["5️⃣","50"],["6️⃣","60"],["2️⃣","23"]], c:0, x:"2 decenas más 3 decenas son 5 decenas: 50."},
    {k:"sumar", p:"25 + 4 = ?", v:"25 galletas 🍪 y llegan 4 más", o:[["","29"],["","21"],["","30"]], c:0, x:"A las 25 le sumas 4 sueltas y llegas a 29."},
    {k:"sumar", p:"El DOBLE de 7 es...", v:"7 + 7", o:[["","14"],["","12"],["","7"]], c:0, x:"El doble es lo mismo dos veces: 7 + 7 = 14."},
    {k:"sumar", p:"¿Cuánto le falta al 6 para llegar a 10?", v:"⭐⭐⭐⭐⭐⭐ + ? = 🔟", o:[["4️⃣","4"],["6️⃣","6"],["🔟","16"]], c:0, x:"6 y 4 son 10. Ese truco sirve para sumar rápido."},
    {k:"sumar", p:"15 + 5 = ?", o:[["2️⃣","20"],["1️⃣","15"],["5️⃣","55"]], c:0, x:"15 más 5 completa dos decenas justas: 20."},
    {k:"sumar", p:"40 + 20 = ?", v:"🔟🔟🔟🔟 + 🔟🔟", o:[["6️⃣","60"],["4️⃣","42"],["2️⃣","20"]], c:0, x:"4 decenas y 2 decenas son 6 decenas: 60."},
    {k:"sumar", p:"Ana tenía 12 stickers y le regalaron 6. ¿Cuántos tiene ahora?", v:"✨✨✨✨✨✨✨✨✨✨✨✨ + ✨✨✨✨✨✨", o:[["","18"],["","16"],["","12"]], c:0, x:"12 más 6 son 18. ¡Le regalaron hartos!"},
    /* --- restar --- */
    {k:"restar", p:"18 − 5 = ?", v:"Tenías 18 stickers ✨ y regalaste 5", o:[["","13"],["","23"],["","12"]], c:0, x:"Si a 18 le quitas 5, quedan 13."},
    {k:"restar", p:"30 − 10 = ?", v:"🔟🔟🔟 y se va un 🔟", o:[["2️⃣","20"],["4️⃣","40"],["🔟","10"]], c:0, x:"3 decenas menos 1 decena son 2 decenas: 20."},
    {k:"restar", p:"20 − 8 = ?", o:[["","12"],["","28"],["","10"]], c:0, x:"De 20 le quitas 8 y quedan 12."},
    {k:"restar", p:"Había 15 galletas y se comieron 5. ¿Cuántas quedan?", v:"🍪 ×15  −  🍪 ×5", o:[["🔟","10"],["2️⃣","20"],["5️⃣","5"]], c:0, x:"15 menos 5 son 10. ¡Todavía quedan hartas!"},
    {k:"restar", p:"La MITAD de 10 es...", v:"⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐", o:[["5️⃣","5"],["2️⃣","2"],["🔟","10"]], c:0, x:"La mitad es repartir en dos partes iguales: 5 y 5."},
    {k:"restar", p:"100 − 50 = ?", o:[["5️⃣","50"],["1️⃣","150"],["0️⃣","0"]], c:0, x:"De 100 le quitas la mitad y queda 50."},
    /* --- multiplicar --- */
    {k:"multiplicar", p:"Hay 3 platos con 2 galletas cada uno. ¿Cuántas galletas son?", v:"🍪🍪 · 🍪🍪 · 🍪🍪", o:[["6️⃣","6"],["5️⃣","5"],["3️⃣","3"]], c:0, x:"2 + 2 + 2 son 6. Eso mismo es 3 × 2."},
    {k:"multiplicar", p:"3 manos con 5 dedos cada una. ¿Cuántos dedos son?", v:"🖐️ 🖐️ 🖐️", o:[["","15"],["","10"],["","8"]], c:0, x:"5 + 5 + 5 son 15. Esa es la tabla del 5."},
    {k:"multiplicar", p:"4 cajas con 10 lápices cada una. ¿Cuántos lápices son?", v:"🔟 🔟 🔟 🔟", o:[["","40"],["","14"],["","400"]], c:0, x:"Con la tabla del 10 solo agregas un cero: 4 × 10 = 40."},
    {k:"multiplicar", p:"2 × 5 significa...", o:[["","2 grupos de 5, o sea 10"],["","2 más 5, o sea 7"],["","2 menos 5"]], c:0, x:"Multiplicar es repetir grupos iguales: 5 + 5 = 10."},
    {k:"multiplicar", p:"5 + 5 + 5 + 5 = ?", v:"⭐⭐⭐⭐⭐ cuatro veces", o:[["2️⃣","20"],["1️⃣","15"],["5️⃣","25"]], c:0, x:"Cuatro veces 5 son 20. También se escribe 4 × 5."},
    {k:"multiplicar", p:"2 × 3 es lo mismo que...", v:"🍎🍎🍎 · 🍎🍎🍎", o:[["","3 + 3, o sea 6"],["","2 + 3, o sea 5"],["","2 − 3"]], c:0, x:"Dos grupos de 3 manzanas: 6 en total."},
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
    {k:"figuras", p:"¿Cuántos lados tiene un cuadrado?", v:"🟦", o:[["4️⃣","4 lados"],["3️⃣","3 lados"],["6️⃣","6 lados"]], c:0, x:"El cuadrado tiene 4 lados y todos miden lo mismo."},
    {k:"figuras", p:"¿Qué figura es una moneda vista de frente?", v:"💰 $100", o:[["⭕","Un círculo"],["🔺","Un triángulo"],["🟦","Un cuadrado"]], c:0, x:"El círculo es redondo y no tiene ni lados ni puntas."},
    /* --- tiempo --- */
    {k:"la hora y el calendario", p:"El reloj marca 3:00. ¿Qué hora es?", v:"🕒 3:00", o:[["","Las tres en punto"],["","Las tres y media"],["","Las doce"]], c:0, x:"Cuando después de los dos puntos va 00, es la hora en punto."},
    {k:"la hora y el calendario", p:"El reloj marca 7:30. ¿Qué hora es?", v:"🕢 7:30", o:[["","Las siete y media"],["","Las siete en punto"],["","Las treinta"]], c:0, x:"30 minutos es media hora: las siete y media."},
    {k:"la hora y el calendario", p:"¿Cuántos días tiene una semana?", v:"📅", o:[["7️⃣","7 días"],["5️⃣","5 días"],["3️⃣","30 días"]], c:0, x:"De lunes a domingo son 7 días."},
    {k:"la hora y el calendario", p:"¿Qué día viene DESPUÉS del miércoles?", o:[["","Jueves"],["","Martes"],["","Domingo"]], c:0, x:"Lunes, martes, miércoles, jueves... ¡ese es el orden!"},
    {k:"la hora y el calendario", p:"¿Cuántos meses tiene un año?", v:"📆", o:[["","12 meses"],["","10 meses"],["","7 meses"]], c:0, x:"De enero a diciembre son 12 meses."},
    /* --- medir, dinero y datos --- */
    {k:"medir", p:"¿Con qué medirías el largo de tu sala?", o:[["📏","Con metros"],["⚖️","Con kilos"],["⏰","Con minutos"]], c:0, x:"El metro sirve para cosas grandes, como una sala."},
    {k:"medir", p:"¿Qué es más largo?", v:"1 metro  ·  30 centímetros", o:[["","1 metro"],["","30 centímetros"],["","Miden igual"]], c:0, x:"Un metro tiene 100 centímetros, así que es mucho más largo."},
    {k:"medir", p:"¿Con qué medirías un lápiz?", v:"✏️", o:[["📐","Con centímetros"],["🛣️","Con metros"],["⚖️","Con kilos"]], c:0, x:"El centímetro sirve para cosas chicas, como un lápiz."},
    {k:"dinero y gráficos", p:"Tienes una moneda de $100 y una de $50. ¿Cuánto tienes?", v:"💰 $100  +  💰 $50", o:[["","$150"],["","$1050"],["","$50"]], c:0, x:"100 más 50 son 150 pesos."},
    {k:"dinero y gráficos", p:"En la votación del curso, ¿qué color ganó?", v:"Rosado ⭐⭐⭐⭐  ·  Azul ⭐⭐", o:[["🎀","El rosado"],["💙","El azul"],["🤝","Empataron"]], c:0, x:"El rosado tiene 4 estrellitas y el azul solo 2."},
    {k:"contar y comparar", p:"¿Qué signo va entre los dos números?", v:"12 ___ 20", o:[["","12 < 20 (menor que)"],["","12 > 20 (mayor que)"],["","12 = 20 (igual)"]], c:0, x:"La boquita del signo siempre se abre hacia el número más grande."},
    {k:"contar y comparar", p:"¿Cuál está bien escrito?", v:"8 y 3", o:[["","8 > 3"],["","8 < 3"],["","8 = 3"]], c:0, x:"8 es mayor que 3, así que la boquita se abre hacia el 8."},
    {k:"estimar", p:"Sin contar uno por uno, ¿cuántas estrellitas hay más o menos?", v:"⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐", o:[["","Como 20"],["","Como 5"],["","Como 100"]], c:0, x:"Mirar el grupo y decir «como 20» sin contar se llama estimar."},
    {k:"izquierda y derecha", p:"¿Qué animal está a la DERECHA del gatito?", v:"🐰   🐱   🦊", o:[["🦊","El zorrito"],["🐰","El conejito"],["🐱","El gatito"]], c:0, x:"Leyendo la fila de izquierda a derecha, el que viene después del gatito."},
    {k:"izquierda y derecha", p:"¿Qué animal está al MEDIO de la fila?", v:"🦄   🐢   🐰", o:[["🐢","La tortuga"],["🦄","La unicornia"],["🐰","La conejita"]], c:0, x:"El del medio tiene uno a la izquierda y otro a la derecha."},
    {k:"dinero y gráficos", p:"¿Cuántas monedas de $100 necesitas para juntar $500?", v:"💰 = $100", o:[["5️⃣","5 monedas"],["2️⃣","2 monedas"],["🔟","10 monedas"]], c:0, x:"100, 200, 300, 400, 500: cinco monedas de $100."}
  ]
});

MATERIAS.push({
  id:"ciencias", nombre:"Ciencias Naturales", emoji:"🌿",
  color:"#1E9E63", colorClaro:"#E1F6EC",
  animal:{ e:"🐢", nombre:"Tomás", tipo:"tortuga" },
  preguntas:[
    /* --- vertebrados --- */
    {k:"vertebrados", p:"El perro es un MAMÍFERO porque...", o:[["🐶","De guagua toma leche de su mamá"],["🥚","Nace de un huevo grande"],["🐟","Respira bajo el agua"]], c:0, x:"Los mamíferos toman leche de su mamá cuando nacen."},
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
    {k:"invertebrados", p:"El cangrejo pertenece al grupo de los...", v:"🦀", o:[["","Crustáceos"],["","Insectos"],["","Arácnidos"]], c:0, x:"Los crustáceos tienen caparazón duro y casi todos viven en el agua."},
    {k:"invertebrados", p:"¿Cuál animal es INVERTEBRADO, o sea, no tiene huesos en la espalda?", o:[["🐛","El gusano"],["🐱","El gato"],["🐦","El pájaro"]], c:0, x:"El gusano es blandito porque no tiene columna vertebral."},
    {k:"invertebrados", p:"La abeja, la hormiga y la mariposa son todas...", o:[["🐝","Insectos"],["🦀","Crustáceos"],["🐟","Peces"]], c:0, x:"Las tres tienen 6 patas: son insectos."},
    {k:"invertebrados", p:"¿Qué animal tiene el cuerpo blandito y una concha para protegerse?", o:[["🐌","El caracol"],["🐜","La hormiga"],["🐦","El pájaro"]], c:0, x:"El caracol es invertebrado y su concha es su casa."},
    /* --- ciclo de vida --- */
    {k:"ciclo de vida", p:"Huevo, oruga, crisálida y... ¿qué falta?", v:"🥚 → 🐛 → 🍃 → ?", o:[["🦋","La mariposa"],["🐝","La abeja"],["🐞","La chinita"]], c:0, x:"La oruga se encierra en la crisálida y sale mariposa."},
    {k:"ciclo de vida", p:"¿Cuál de estos animales nace de un huevo?", o:[["🐣","La gallina"],["🐄","La vaca"],["🐕","El perro"]], c:0, x:"Las aves ponen huevos y los empollan hasta que nacen."},
    {k:"ciclo de vida", p:"El renacuajo, cuando crece, se transforma en...", o:[["🐸","Una rana"],["🐟","Un pez"],["🐍","Una culebra"]], c:0, x:"Le salen patitas, pierde la cola y se convierte en rana."},
    {k:"ciclo de vida", p:"Los mamíferos, cuando nacen, salen...", o:[["🐶","De la panza de su mamá"],["🥚","De un huevo"],["🌱","De una semilla"]], c:0, x:"Por eso los perritos y los gatitos nacen chiquititos y ya vivos."},
    {k:"ciclo de vida", p:"¿Qué necesita una semilla para transformarse en planta?", o:[["💧","Agua, tierra y luz"],["🌑","Tierra y oscuridad"],["🌬️","Agua y viento"]], c:0, x:"Con agua, tierra y luz, la semilla germina y crece."},
    /* --- hábitat y animales de Chile --- */
    {k:"hábitat", p:"¿Dónde vive el pingüino?", o:[["🧊","En lugares muy fríos"],["🏜️","En el desierto"],["🌴","En la selva"]], c:0, x:"Su plumaje y su grasita lo protegen del frío."},
    {k:"hábitat", p:"El hábitat es...", o:[["🏞️","El lugar donde vive un animal"],["🍽️","Lo que come un animal"],["😴","La hora en que duerme"]], c:0, x:"En su hábitat el animal encuentra comida, agua y refugio."},
    {k:"hábitat", p:"¿Qué animal está preparado para vivir en el desierto?", o:[["🦎","El lagarto"],["🐧","El pingüino"],["🐻‍❄️","El oso polar"]], c:0, x:"El lagarto aguanta el calor y necesita poquita agua."},
    {k:"hábitat", p:"Un animal necesita que su hábitat tenga...", o:[["🍃","Comida, agua y refugio"],["🏙️","Cemento, autos y humo"],["🎉","Ruido, luces y gente"]], c:0, x:"Si le falta alguna de esas tres cosas, no puede vivir ahí."},
    {k:"animales de Chile", p:"¿Cuál animal chileno está en peligro de extinción?", o:[["🦌","El huemul"],["🐄","La vaca"],["🐔","La gallina"]], c:0, x:"Quedan muy poquitos huemules y por eso hay que protegerlos."},
    {k:"animales de Chile", p:"¿Dónde vive el cóndor?", o:[["⛰️","En la cordillera"],["🌊","En el fondo del mar"],["🏜️","Bajo la arena"]], c:0, x:"El cóndor planea altísimo entre las montañas."},
    {k:"animales de Chile", p:"El pudú, que vive en los bosques del sur, es el ciervo más...", o:[["🐁","Pequeño del mundo"],["🐘","Grande del mundo"],["⚡","Rápido del mundo"]], c:0, x:"El pudú mide como un perrito chico. ¡Es chiquitito!"},
    {k:"animales de Chile", p:"¿Qué le pasa a un animal si le destruyen su hábitat?", o:[["😟","Se queda sin comida"],["🏙️","Se muda a la ciudad"],["💪","Se hace más grande"]], c:0, x:"Por eso cuidar los bosques y el mar cuida también a los animales."},
    /* --- cuerpo humano --- */
    {k:"mi cuerpo", p:"¿Qué parte del cuerpo bombea la sangre?", o:[["❤️","El corazón"],["💨","Los pulmones"],["🦴","El esqueleto"]], c:0, x:"El corazón late todo el día para repartir sangre por el cuerpo."},
    {k:"mi cuerpo", p:"¿Con qué parte del cuerpo respiramos?", o:[["💨","Con los pulmones"],["❤️","Con el corazón"],["💪","Con los músculos"]], c:0, x:"Los pulmones se llenan de aire cuando inspiras."},
    {k:"mi cuerpo", p:"¿A dónde llega la comida después de tragarla?", o:[["🍽️","Al estómago"],["💨","A los pulmones"],["🧠","Al cerebro"]], c:0, x:"En el estómago la comida se deshace para alimentarte."},
    {k:"mi cuerpo", p:"¿Qué sostiene nuestro cuerpo y protege por dentro?", o:[["🦴","El esqueleto"],["👕","La ropa"],["👃","La nariz"]], c:0, x:"Los huesos te sostienen y protegen órganos como el corazón."},
    {k:"mi cuerpo", p:"¿Qué nos permite movernos, correr y saltar?", o:[["💪","Los músculos"],["👀","Los ojos"],["👂","Los oídos"]], c:0, x:"Los músculos tiran de los huesos y así te mueves."},
    {k:"mi cuerpo", p:"Cuando corres mucho, tu corazón late...", o:[["⚡","Más rápido"],["🐢","Más lento"],["⏸️","Se detiene"]], c:0, x:"Late más rápido para llevar más oxígeno a los músculos."},
    /* --- vida sana --- */
    {k:"vida sana", p:"Hacer ejercicio sirve para...", o:[["❤️","Fortalecer el corazón"],["🦴","Debilitar los huesos"],["😴","Cansar el corazón"]], c:0, x:"Moverte todos los días mantiene fuerte tu cuerpo."},
    {k:"vida sana", p:"¿Cuál de estas es la colación más saludable?", o:[["🍎","Una fruta"],["🧃","Un jugo en caja"],["🍟","Unas papas fritas"]], c:0, x:"Las frutas tienen vitaminas y agua; los dulces solo azúcar."},
    {k:"vida sana", p:"¿Cuándo hay que lavarse las manos?", o:[["🧼","Antes de comer"],["🌙","Solo en la noche"],["🎂","Solo en los cumpleaños"]], c:0, x:"Lavarse las manos saca los microbios que enferman."},
    {k:"vida sana", p:"Dormir bien en la noche sirve para...", o:[["😴","Descansar y crecer"],["💭","Soñar más cosas"],["🍬","Tener más hambre"]], c:0, x:"Mientras duermes tu cuerpo se repara y creces."},
    /* --- el agua --- */
    {k:"el agua", p:"El agua limpia es...", o:[["💧","Transparente y sin olor"],["🎨","De color rojo"],["🍬","Dulce como el azúcar"]], c:0, x:"Por eso puedes ver a través de un vaso con agua."},
    {k:"el agua", p:"Si dejo un vaso con agua en el congelador, el agua se convierte en...", o:[["🧊","Hielo, o sea sólida"],["💨","Vapor"],["💧","Sigue igual"]], c:0, x:"Con mucho frío el agua se congela y se pone dura."},
    {k:"el agua", p:"Cuando el agua hierve en la olla, sale...", o:[["💨","Vapor de agua"],["🧊","Hielo"],["🌫️","Humo negro"]], c:0, x:"Con calor el agua se evapora y sube como vaporcito."},
    {k:"el agua", p:"Si echo agua en un vaso, el agua...", o:[["🥛","Toma la forma del vaso"],["🧊","Queda en forma de cubo"],["⚖️","Se pone más pesada"]], c:0, x:"El agua líquida siempre toma la forma del envase."},
    {k:"el agua", p:"¿Qué se disuelve en el agua?", o:[["🧂","La sal"],["🧱","Una piedra"],["🔑","Una llave"]], c:0, x:"La sal y el azúcar desaparecen en el agua: se disuelven."},
    {k:"el agua", p:"En el ciclo del agua, el sol calienta el mar y el agua...", o:[["☀️","Se evapora y sube como vapor"],["🧊","Se congela"],["🕳️","Desaparece para siempre"]], c:0, x:"Ese vapor forma las nubes, y de ahí vuelve la lluvia."},
    {k:"el agua", p:"¿Cuál es una buena forma de cuidar el agua?", o:[["🚿","Cerrar la llave mientras te lavas los dientes"],["🌊","Dejarla corriendo"],["🧊","Llenar la tina todos los días"]], c:0, x:"El agua dulce es poquita en el planeta: hay que cuidarla."},
    /* --- tiempo atmosférico y estaciones --- */
    {k:"el tiempo y las estaciones", p:"¿Qué instrumento mide la temperatura?", o:[["🌡️","El termómetro"],["⏰","El reloj"],["📏","La regla"]], c:0, x:"El termómetro dice cuántos grados de calor o frío hay."},
    {k:"el tiempo y las estaciones", p:"¿Qué instrumento mide cuánta lluvia cayó?", o:[["🌧️","El pluviómetro"],["⚖️","La balanza"],["🔭","El telescopio"]], c:0, x:"El pluviómetro junta la lluvia y muestra cuánta cayó."},
    {k:"el tiempo y las estaciones", p:"¿Para qué sirve una veleta?", o:[["🌬️","Para saber de dónde viene el viento"],["🌡️","Para medir cuánto calor hace"],["⏰","Para saber qué hora es"]], c:0, x:"La veleta gira y apunta hacia donde va el viento."},
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
    {k:"pueblos originarios", p:"Los moái, esas estatuas gigantes de piedra, fueron hechos por el pueblo...", v:"🗿", o:[["","Rapa nui"],["","Mapuche"],["","Aimara"]], c:0, x:"Son casi mil estatuas talladas hace cientos de años."},
    {k:"pueblos originarios", p:"¿Cómo se llama la casa tradicional del pueblo mapuche?", o:[["🏚️","La ruca"],["🏰","El castillo"],["⛺","La carpa"]], c:0, x:"La ruca se hacía con madera y paja, y adentro iba el fogón."},
    {k:"pueblos originarios", p:"El idioma del pueblo mapuche se llama...", o:[["🗣️","Mapudungun"],["🇬🇧","Inglés"],["🇮🇹","Italiano"]], c:0, x:"Mapudungun quiere decir «el hablar de la tierra»."},
    {k:"pueblos originarios", p:"Un pueblo NÓMADA es el que...", o:[["⛺","Se cambia de lugar buscando alimento"],["🌽","Vive siempre en el mismo lugar"],["🏙️","Vive en la ciudad"]], c:0, x:"Los nómadas se movían siguiendo a los animales y las frutas."},
    {k:"pueblos originarios", p:"Un pueblo SEDENTARIO es el que...", o:[["🌽","Se queda en un lugar y cultiva"],["⛺","Anda de un lado a otro"],["⛵","Vive en un barco"]], c:0, x:"Al quedarse en un lugar podían sembrar y criar animales."},
    {k:"pueblos originarios", p:"Los changos y otros pueblos de la costa vivían principalmente de...", o:[["🎣","La pesca y los mariscos"],["🌽","Sembrar trigo"],["🏔️","Cazar en la nieve"]], c:0, x:"Vivían al lado del mar, así que el mar les daba la comida."},
    {k:"pueblos originarios", p:"Los aimara del norte criaban llamas para...", o:[["🧶","Tener lana, carga y alimento"],["🏠","Solo para cuidar la casa"],["🌾","Solo para arar la tierra"]], c:0, x:"La llama les daba lana para tejer y cargaba cosas pesadas."},
    /* --- aportes y mestizaje --- */
    {k:"aportes y mestizaje", p:"La papa, el maíz y el poroto son alimentos que nos dejaron...", o:[["🥔","Los pueblos originarios"],["🍕","Los italianos"],["🍣","Los japoneses"]], c:0, x:"Ya se cultivaban en América mucho antes de que llegaran los españoles."},
    {k:"aportes y mestizaje", p:"Decimos que la sociedad chilena es MESTIZA porque mezcla...", o:[["🤝","Pueblos originarios y españoles"],["🐶","Animales y plantas"],["🌊","Mar y cordillera"]], c:0, x:"De esa mezcla vienen nuestras comidas, palabras y costumbres."},
    {k:"aportes y mestizaje", p:"La palabra «guagua», que usamos para los bebés, viene...", o:[["👶","De los pueblos originarios"],["🇬🇧","Del inglés"],["🇫🇷","Del francés"]], c:0, x:"Hablamos con muchas palabras indígenas sin darnos ni cuenta."},
    {k:"aportes y mestizaje", p:"¿Qué idioma trajeron los españoles a Chile?", o:[["🗣️","El castellano"],["🇬🇧","El inglés"],["🇩🇪","El alemán"]], c:0, x:"Por eso hoy hablamos español en casi toda América del Sur."},
    {k:"aportes y mestizaje", p:"A Chile llegaron familias de muchos países. Eso hace que nuestra sociedad sea...", o:[["🌎","Diversa"],["🚪","Toda igual"],["🔒","Cerrada"]], c:0, x:"Alemanes, italianos, palestinos, coreanos y muchos más se hicieron chilenos."},
    /* --- patrimonio y tradiciones --- */
    {k:"tradiciones de Chile", p:"¿Cuál es el baile nacional de Chile?", o:[["💃","La cueca"],["🎭","El ballet"],["🕺","El breakdance"]], c:0, x:"Se baila con pañuelo y cuenta la historia de un gallo y una gallina."},
    {k:"tradiciones de Chile", p:"¿Qué comida es típica de las Fiestas Patrias?", o:[["🥟","La empanada"],["🥑","El pan con palta"],["🎂","La torta de cumpleaños"]], c:0, x:"La empanada de pino lleva carne, cebolla, huevo y aceituna."},
    {k:"tradiciones de Chile", p:"¿Cuál es un juego típico chileno de septiembre?", o:[["🌬️","El volantín"],["♟️","El ajedrez"],["🎳","Los bolos"]], c:0, x:"En septiembre hay viento, perfecto para elevar volantines."},
    {k:"tradiciones de Chile", p:"¿Cuándo se celebran las Fiestas Patrias en Chile?", o:[["🇨🇱","El 18 de septiembre"],["🎄","El 25 de diciembre"],["🎃","El 31 de octubre"]], c:0, x:"Se recuerda la Primera Junta de Gobierno de 1810."},
    {k:"tradiciones de Chile", p:"El patrimonio natural de Chile son...", o:[["🏞️","Los paisajes, plantas y animales"],["🏛️","Los edificios antiguos"],["💃","Las fiestas y los bailes"]], c:0, x:"Los parques nacionales existen justamente para protegerlo."},
    {k:"tradiciones de Chile", p:"Una leyenda que se cuenta de generación en generación es parte de...", o:[["📜","Nuestro patrimonio cultural"],["📰","Una noticia del diario"],["🔬","Un experimento de ciencias"]], c:0, x:"Las leyendas se transmiten hablando, de abuelos a nietos."},
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
    {k:"zonas de Chile", p:"¿Qué es un valle?", o:[["🌄","Un terreno plano entre montañas"],["🌊","Una ola muy grande en el mar"],["🕳️","Un hoyo hondo en la calle"]], c:0, x:"En los valles de la zona central se cultivan frutas y viñas."},
    {k:"zonas de Chile", p:"¿Qué es un volcán?", o:[["🌋","Un cerro que larga lava"],["🏞️","Un lago muy hondo"],["🏖️","Una playa de arena"]], c:0, x:"Chile tiene muchos volcanes porque está sobre placas que se mueven."},
    {k:"zonas de Chile", p:"En la zona central de Chile vive...", o:[["🏙️","La mayor parte de la gente"],["🎣","Solo unos pescadores"],["🌵","Casi nadie, hace mucho frío"]], c:0, x:"Ahí están Santiago y las ciudades más grandes."},
    {k:"zonas de Chile", p:"¿Cómo se llama la cordillera que recorre Chile de norte a sur?", o:[["⛰️","La cordillera de los Andes"],["🗻","El Himalaya"],["🏔️","Los Alpes"]], c:0, x:"Es una de las cordilleras más largas del mundo."},
    /* --- antes y ahora --- */
    {k:"antes y ahora", p:"Antes de que existieran los autos, la gente viajaba...", o:[["🐴","En carreta con caballos"],["✈️","En avión"],["🚌","En micro"]], c:0, x:"Los viajes duraban días enteros, no horas."},
    {k:"antes y ahora", p:"Hace mucho tiempo, para mandar un mensaje lejos se usaba...", o:[["✉️","Una carta"],["📱","Un mensaje de celular"],["📧","Un correo electrónico"]], c:0, x:"La carta se demoraba semanas en llegar."},
    {k:"antes y ahora", p:"Antes, para lavar la ropa, las familias usaban...", o:[["🧺","Las manos y una artesa"],["🌀","Una lavadora automática"],["🚿","Agua caliente de la llave"]], c:0, x:"Lavar tomaba todo el día. La lavadora cambió eso."},
    {k:"antes y ahora", p:"Una línea de tiempo sirve para...", o:[["📅","Ordenar los hechos en el tiempo"],["🎂","Anotar los cumpleaños"],["📏","Medir distancias"]], c:0, x:"Te muestra qué pasó primero y qué pasó después."},
    {k:"antes y ahora", p:"«Antiguamente», «hoy» y «mañana» son palabras que hablan del...", o:[["⏳","Tiempo"],["🗺️","Lugar"],["🎨","Color"]], c:0, x:"Sirven para ordenar el pasado, el presente y el futuro."},
    /* --- vivir juntos --- */
    {k:"vivir juntos", p:"¿Qué servicio nos ayuda a movernos por la ciudad?", o:[["🚌","El transporte público"],["🏥","El hospital"],["🏫","El colegio"]], c:0, x:"Micros, metro y trenes llevan a mucha gente todos los días."},
    {k:"vivir juntos", p:"Ser honesta es...", o:[["🤝","Decir la verdad y no hacer trampa"],["🏆","Ganar siempre"],["🤫","Esconder lo que hiciste"]], c:0, x:"También es reconocer cuando uno se equivoca."},
    {k:"vivir juntos", p:"Si veo basura tirada en la plaza, lo correcto es...", o:[["🗑️","Echarla al basurero"],["👀","Hacer como que no la vi"],["🦶","Patearla lejos"]], c:0, x:"La plaza es de todos, así que cuidarla también es de todos."},
    {k:"vivir juntos", p:"Si una compañera nueva está sola en el recreo, lo mejor es...", o:[["🤗","Invitarla a jugar"],["🙈","Dejarla sola"],["😆","Reírse de ella"]], c:0, x:"Incluir a los demás se llama empatía."},
    {k:"vivir juntos", p:"Antes de cruzar la calle hay que...", o:[["🚦","Mirar a los dos lados"],["🏃","Correr entre los autos"],["📱","Ir mirando el celular"]], c:0, x:"Las normas de seguridad vial existen para cuidarte."},
    {k:"vivir juntos", p:"Respetar los turnos para hablar sirve para...", o:[["👂","Que todos alcancen a hablar"],["🏆","Ganar la conversación"],["🤐","Que nadie diga nada"]], c:0, x:"Si todos hablan al mismo tiempo, nadie entiende nada."},
    {k:"vivir juntos", p:"Un parque nacional se creó para...", o:[["🌲","Proteger la naturaleza"],["🏗️","Construir edificios"],["🎟️","Cobrar entrada"]], c:0, x:"En Chile hay muchos, como Torres del Paine y La Campana."},
    {k:"el mapa de Chile", p:"Además de Perú y Argentina, Chile limita con un tercer país. ¿Cuál es?", o:[["🇧🇴","Bolivia"],["🇧🇷","Brasil"],["🇺🇾","Uruguay"]], c:0, x:"Chile limita con tres países: Perú al norte, Bolivia al noreste y Argentina al este."}
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
    {k:"numbers", p:"«TWELVE» es el número...", o:[["","Doce"],["","Dos"],["","Veinte"]], c:0, x:"Ojo: twelve es 12 y two es 2. ¡Se parecen!"},
    {k:"numbers", p:"«TWENTY» es el número...", o:[["","Veinte"],["","Doce"],["","Dos"]], c:0, x:"Twenty termina en -ty, como los números grandes."},
    {k:"numbers", p:"«FIVE» es el número...", o:[["5️⃣","Cinco"],["4️⃣","Cuatro"],["9️⃣","Nueve"]], c:0, x:"Five fingers: los cinco dedos de una mano."},
    {k:"numbers", p:"«TEN» es el número...", o:[["🔟","Diez"],["3️⃣","Tres"],["2️⃣","Dos"]], c:0, x:"Ten es una decena completa."},
    /* --- family --- */
    {k:"family", p:"«MOTHER» en español es...", o:[["👩","Mamá"],["👨","Papá"],["👶","Bebé"]], c:0, x:"También se dice mom, más cariñoso."},
    {k:"family", p:"«SISTER» en español es...", o:[["👧","Hermana"],["👦","Hermano"],["👵","Abuela"]], c:0, x:"Sister es hermana; brother es hermano."},
    {k:"family", p:"«BROTHER» en español es...", o:[["👦","Hermano"],["👧","Hermana"],["👨","Papá"]], c:0, x:"Ojo: la TH de brother no suena como D. La lengua va entre los dientes."},
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
    {k:"days", p:"«MONDAY» en español es...", o:[["","Lunes"],["","Viernes"],["","Domingo"]], c:0, x:"Monday es el primer día de la semana escolar."},
    {k:"days", p:"«FRIDAY» en español es...", o:[["","Viernes"],["","Lunes"],["","Martes"]], c:0, x:"Friday, ¡y llega el fin de semana!"},
    {k:"days", p:"«SUNDAY» en español es...", o:[["","Domingo"],["","Sábado"],["","Jueves"]], c:0, x:"Sun es sol: Sunday, el día del sol."},
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
  {ch:"¿Qué le dice un semáforo a otro? — «No me mires, que me estoy cambiando». 🚦", da:"En Chile vive el pudú, el ciervo más pequeño del mundo: es del porte de un perro chico. 🦌"},
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

/* ============================================================
   AMPLIACIÓN DEL BANCO — segunda tanda
   Se agregan al final de cada materia para no mover los números
   de posición que usa el sistema anti-repetición.
   ============================================================ */

function masPreguntas(id, lista){
  for(let i = 0; i < MATERIAS.length; i++){
    if(MATERIAS[i].id === id) MATERIAS[i].preguntas = MATERIAS[i].preguntas.concat(lista);
  }
}

masPreguntas("lenguaje", [
  /* sonidos y letras */
  {k:"sonidos y letras", p:"¿Cuál palabra tiene BR?", o:[["📖","Libro"],["🍞","Pan"],["☀️","Sol"]], c:0, x:"Li-bro: la B y la R van pegaditas."},
  {k:"sonidos y letras", p:"¿Cuál palabra tiene PL?", o:[["🍽️","Plato"],["🏠","Casa"],["🚂","Tren"]], c:0, x:"Pla-to: la P y la L suenan juntas."},
  {k:"sonidos y letras", p:"¿Cuál palabra tiene TR?", o:[["🚂","Tren"],["🐱","Gato"],["🌸","Flor"]], c:0, x:"Tren: la T y la R van pegadas, sin vocal en medio."},
  {k:"sonidos y letras", p:"¿Cuál palabra tiene CR?", o:[["🍦","Crema"],["🍽️","Mesa"],["🍞","Pan"]], c:0, x:"Cre-ma: la C y la R suenan juntitas."},
  {k:"sonidos y letras", p:"¿Cuál palabra se escribe con J?", o:[["🦒","Jirafa"],["🐱","Gato"],["🐻","Oso"]], c:0, x:"Ji-ra-fa empieza con J."},
  {k:"sonidos y letras", p:"¿Cuál palabra empieza con H, esa letra que no suena?", o:[["🍃","Hoja"],["👁️","Ojo"],["🌳","Árbol"]], c:0, x:"La H se escribe pero no se escucha: hoja."},
  {k:"sonidos y letras", p:"¿Cuál palabra lleva Ñ?", o:[["🕷️","Araña"],["🐒","Mono"],["🦆","Pato"]], c:0, x:"A-ra-ña. La Ñ tiene su sombrerito."},
  {k:"sonidos y letras", p:"¿Cuántas sílabas tiene CONEJO?", v:"co - ne - jo", o:[["3️⃣","3 sílabas"],["2️⃣","2 sílabas"],["4️⃣","4 sílabas"]], c:0, x:"Co-ne-jo: tres palmaditas."},
  {k:"sonidos y letras", p:"¿Cuál palabra empieza con la misma letra que SOL?", o:[["🐍","Serpiente"],["🐒","Mono"],["🦆","Pato"]], c:0, x:"Sol y serpiente empiezan las dos con S."},
  /* escribir bien */
  {k:"escribir bien", p:"¿Cómo se escribe el nombre de nuestro país?", o:[["","Chile"],["","chile"],["","CHILE"]], c:0, x:"Los países se escriben con mayúscula solo en la primera letra."},
  {k:"escribir bien", p:"¿Qué signo separa las cosas de una lista?", v:"Compré pan ___ leche y queso.", o:[["","Una coma ,"],["","Un punto ."],["","Un guion -"]], c:0, x:"La coma separa: pan, leche y queso."},
  {k:"escribir bien", p:"¿Cuál pregunta está bien escrita?", o:[["","¿Dónde está mi mochila?"],["","Donde esta mi mochila"],["","¿donde está mi mochila"]], c:0, x:"Lleva los dos signos y empieza con mayúscula."},
  {k:"escribir bien", p:"¿Qué le falta a esta oración?", v:"mi mamá se llama ana", o:[["","Las mayúsculas y el punto"],["","Una coma"],["","Nada, está bien"]], c:0, x:"Debe ser: Mi mamá se llama Ana."},
  {k:"escribir bien", p:"¿Qué signo va al final de «Qué rico está esto»?", o:[["","El signo !"],["","El signo ?"],["","Una coma ,"]], c:0, x:"Es una exclamación: ¡Qué rico está esto!"},
  /* palabras y su función */
  {k:"palabras y su función", p:"En «la casa grande», ¿cuál es la palabrita que va antes del sustantivo?", o:[["","La"],["","Casa"],["","Grande"]], c:0, x:"Esa palabrita se llama artículo: la, el, los, las."},
  {k:"palabras y su función", p:"¿Cuál palabra nombra a una persona?", o:[["👨‍🚒","Bombero"],["🏃","Saltar"],["😊","Contento"]], c:0, x:"Los sustantivos también nombran personas."},
  {k:"palabras y su función", p:"En «Theo corre rápido», ¿cuál es la acción?", o:[["🏃","Corre"],["🐶","Theo"],["⚡","Rápido"]], c:0, x:"Correr es lo que Theo está haciendo."},
  {k:"palabras y su función", p:"¿Cuál palabra dice cómo está el día?", o:[["☀️","Soleado"],["📅","Día"],["🏃","Correr"]], c:0, x:"Soleado es un adjetivo: describe cómo está el día."},
  {k:"palabras y su función", p:"«Rápido, lento, alto» son palabras que...", o:[["🔍","Describen cómo son las cosas"],["🏃","Dicen qué hace alguien"],["🗺️","Dicen dónde está algo"]], c:0, x:"Son adjetivos, describen."},
  /* singular y plural */
  {k:"singular y plural", p:"¿Cuál es el plural de PEZ?", o:[["","Peces"],["","Pezes"],["","Pez"]], c:0, x:"La Z se cambia por C: pez → peces."},
  {k:"singular y plural", p:"¿Cuál es el plural de «la mesa»?", o:[["","Las mesas"],["","La mesas"],["","Los mesas"]], c:0, x:"Cambian las dos palabras: las mesas."},
  {k:"singular y plural", p:"¿Cuál es el singular de «los niños»?", o:[["","El niño"],["","La niño"],["","Los niño"]], c:0, x:"Uno solo es el niño."},
  {k:"singular y plural", p:"¿Cuál de estas palabras es femenina?", o:[["👩‍🏫","La profesora"],["👨‍🚒","El bombero"],["🐶","El perro"]], c:0, x:"Femenino lleva LA; masculino lleva EL."},
  /* comprender lo que leo */
  {k:"comprender lo que leo", p:"¿Qué encontró Vicente?", t:"Vicente encontró un perro perdido en la plaza. Le puso agua y llamó al número del collar. La dueña llegó feliz.", o:[["🐶","Un perro perdido"],["🐱","Un gato"],["💰","Una billetera"]], c:0, x:"Lo dice la primera frase del texto."},
  {k:"comprender lo que leo", p:"¿Cómo supo Vicente a quién llamar?", t:"Vicente encontró un perro perdido en la plaza. Le puso agua y llamó al número del collar. La dueña llegó feliz.", o:[["📞","Por el número del collar"],["🏠","Fue casa por casa"],["📰","Salió en el diario"]], c:0, x:"El collar traía un número anotado."},
  {k:"comprender lo que leo", p:"¿Qué pasó PRIMERO?", t:"A Isidora se le cayó el helado y se puso a llorar. Su papá le compró otro y ella sonrió de nuevo.", o:[["🍦","Se le cayó el helado"],["😊","Sonrió de nuevo"],["👨","Su papá le compró otro"]], c:0, x:"Primero se cayó el helado, después vino el consuelo."},
  {k:"comprender lo que leo", p:"¿Cómo terminó Isidora?", t:"A Isidora se le cayó el helado y se puso a llorar. Su papá le compró otro y ella sonrió de nuevo.", o:[["😊","Contenta"],["😢","Llorando"],["😡","Enojada"]], c:0, x:"Terminó sonriendo. A veces lo malo se arregla."},
  {k:"comprender lo que leo", p:"¿Cuándo dejaron de jugar Ema y Sofía?", t:"En el recreo, Ema y Sofía jugaron a la pinta hasta que sonó el timbre.", o:[["🔔","Cuando sonó el timbre"],["🌧️","Cuando empezó a llover"],["😴","Cuando se cansaron"]], c:0, x:"El texto dice: hasta que sonó el timbre."},
  {k:"comprender lo que leo", p:"¿Por qué se escondió el gato?", t:"El gato se escondió debajo de la cama porque le asustó el ruido del secador de pelo.", o:[["🔊","Porque le asustó el ruido"],["🍽️","Porque tenía hambre"],["😴","Porque tenía sueño"]], c:0, x:"La palabra «porque» te dice la razón."},
  {k:"comprender lo que leo", p:"¿Qué parte del cuento va primero?", o:[["","El inicio"],["","El final"],["","El problema"]], c:0, x:"Los cuentos tienen inicio, desarrollo y final."},
  {k:"comprender lo que leo", p:"El final de un cuento es cuando...", o:[["","Se resuelve el problema"],["","Aparecen los personajes"],["","Empieza la historia"]], c:0, x:"En el final sabemos cómo terminó todo."},
  /* tipos de texto */
  {k:"tipos de texto", p:"¿Qué texto cuenta algo que pasó de verdad hoy?", o:[["📰","La noticia"],["🧚","El cuento de hadas"],["🎵","La canción"]], c:0, x:"Las noticias cuentan hechos reales y recientes."},
  {k:"tipos de texto", p:"¿Dónde busco los ingredientes de un queque?", o:[["🍰","En la receta"],["🗺️","En el mapa"],["📖","En el diccionario"]], c:0, x:"La receta trae los ingredientes y después los pasos."},
  {k:"tipos de texto", p:"Una leyenda es...", o:[["📜","Un relato muy antiguo que se cuenta hace años"],["📰","Una noticia de hoy"],["🧾","Una lista de compras"]], c:0, x:"Las leyendas pasan de los abuelos a los nietos."},
  {k:"tipos de texto", p:"¿Para qué sirve una carta?", o:[["✉️","Para contarle algo a alguien que está lejos"],["🍰","Para cocinar"],["🧮","Para hacer cuentas"]], c:0, x:"Las cartas llevan noticias y cariño a otra persona."},
  /* vocabulario */
  {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «rápido»?", o:[["🐢","Lento"],["⚡","Veloz"],["🏃","Apurado"]], c:0, x:"La tortuga es lenta y la liebre rápida."},
  {k:"vocabulario", p:"¿Qué palabra significa lo MISMO que «casa»?", o:[["🏠","Hogar"],["🏫","Colegio"],["🏥","Hospital"]], c:0, x:"Casa y hogar son sinónimos."},
  {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «frío»?", o:[["🔥","Caliente"],["🧊","Helado"],["❄️","Nevado"]], c:0, x:"Frío y caliente son opuestos."},
  {k:"vocabulario", p:"Si algo es ENORME, quiere decir que es...", o:[["🐘","Muy grande"],["🐜","Muy chico"],["🎈","Muy liviano"]], c:0, x:"Enorme es otra forma de decir grandísimo."},
  {k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «arriba»?", o:[["⬇️","Abajo"],["➡️","Al lado"],["⬆️","Encima"]], c:0, x:"Arriba y abajo señalan lados opuestos."},
  /* rimas y adivinanzas */
  {k:"rimas y adivinanzas", p:"¿Qué palabra rima con CAMPANA?", o:[["🍎","Manzana"],["🌸","Flor"],["🐱","Gato"]], c:0, x:"Campana y manzana terminan en -ana."},
  {k:"rimas y adivinanzas", p:"¿Qué palabra rima con FLOR?", o:[["🎨","Color"],["🐶","Perro"],["☀️","Sol"]], c:0, x:"Flor y color terminan en -or."},
  {k:"rimas y adivinanzas", p:"Adivinanza: tengo agujas y no coso, y siempre te digo la hora.", o:[["⏰","El reloj"],["🧵","La costurera"],["🌵","El cactus"]], c:0, x:"Las agujas del reloj son las manecillas."},
  {k:"rimas y adivinanzas", p:"Adivinanza: soy blanca, caigo del cielo y al sol me derrito.", o:[["❄️","La nieve"],["☁️","La nube"],["🧂","La sal"]], c:0, x:"La nieve es agua congelada que cae de las nubes."},
  {k:"rimas y adivinanzas", p:"¿Cuál palabra tiene MENOS sílabas?", v:"sol · gato · mariposa", o:[["☀️","Sol"],["🐱","Gato"],["🦋","Mariposa"]], c:0, x:"Sol es una sola palmadita."}
]);

masPreguntas("ciencias", [
  /* vertebrados */
  {k:"vertebrados", p:"¿Qué cubre el cuerpo de los mamíferos?", o:[["🐻","Pelos"],["🐦","Plumas"],["🐟","Escamas"]], c:0, x:"Casi todos los mamíferos tienen el cuerpo cubierto de pelo."},
  {k:"vertebrados", p:"¿Cuál de estos animales es un ANFIBIO?", o:[["🐸","El sapo"],["🦎","La lagartija"],["🐟","El pez"]], c:0, x:"Los anfibios viven una parte en el agua y otra en la tierra."},
  {k:"vertebrados", p:"¿Qué grupo de animales tiene plumas y pone huevos?", o:[["🦅","Las aves"],["🐕","Los mamíferos"],["🐍","Los reptiles"]], c:0, x:"Plumas, pico, dos patas y huevos: eso es un ave."},
  {k:"vertebrados", p:"La ballena es un mamífero porque...", o:[["🐋","Le da leche a su cría"],["🐟","Tiene escamas"],["🥚","Pone huevos"]], c:0, x:"Vive en el mar, pero respira aire y amamanta."},
  {k:"vertebrados", p:"¿Qué reptil anda con su caparazón a cuestas?", o:[["🐢","La tortuga"],["🐍","La serpiente"],["🦎","La lagartija"]], c:0, x:"El caparazón es su casa y su protección."},
  {k:"vertebrados", p:"El murciélago vuela, pero es un mamífero porque...", o:[["🦇","Amamanta a sus crías"],["🐦","Tiene plumas"],["🥚","Pone huevos"]], c:0, x:"Es el único mamífero que vuela de verdad."},
  {k:"vertebrados", p:"¿Con qué respira una rana adulta?", o:[["🐸","Con pulmones y con la piel"],["🐠","Solo con branquias"],["🌿","Con las hojas"]], c:0, x:"De renacuajo usa branquias; de grande, pulmones y piel."},
  {k:"vertebrados", p:"¿Cuál de estos vertebrados pasa toda su vida en el agua?", o:[["🐟","El pez"],["🐸","La rana"],["🐦","El pájaro"]], c:0, x:"El pez no puede salir del agua: respira por branquias."},
  /* invertebrados */
  {k:"invertebrados", p:"La mariposa, ¿es vertebrada o invertebrada?", o:[["🦋","Invertebrada"],["🦴","Vertebrada"],["🤔","Ninguna de las dos"]], c:0, x:"No tiene huesos en la espalda: es un insecto invertebrado."},
  {k:"invertebrados", p:"¿Qué animalito tiene antenas y seis patas?", o:[["🐜","La hormiga"],["🕷️","La araña"],["🐌","El caracol"]], c:0, x:"Antenas y 6 patas: señales de insecto."},
  {k:"invertebrados", p:"¿Dónde vive la lombriz de tierra?", o:[["🌱","Bajo la tierra"],["☁️","En las nubes"],["🌊","En el mar"]], c:0, x:"Al moverse bajo tierra deja pasar el aire y ayuda a las plantas."},
  {k:"invertebrados", p:"¿Dónde vive la medusa?", o:[["🌊","En el mar"],["🏜️","En el desierto"],["🌳","En los árboles"]], c:0, x:"La medusa es blandita y no tiene huesos."},
  {k:"invertebrados", p:"¿Qué hace la abeja cuando va de flor en flor?", o:[["🐝","Recoge néctar y lleva polen"],["🍽️","Se come las flores"],["😴","Duerme la siesta"]], c:0, x:"Al llevar polen ayuda a que nazcan más plantas."},
  {k:"invertebrados", p:"¿Cuál de estos animales es invertebrado?", o:[["🦐","El camarón"],["🐸","La rana"],["🐦","El pájaro"]], c:0, x:"El camarón es crustáceo: caparazón por fuera, sin huesos por dentro."},
  /* ciclo de vida */
  {k:"ciclo de vida", p:"¿Cuál es el orden correcto?", o:[["🐣","Huevo, pollito, gallina"],["🐔","Gallina, huevo, pollito"],["🐤","Pollito, huevo, gallina"]], c:0, x:"Del huevo sale el pollito y al crecer se hace gallina."},
  {k:"ciclo de vida", p:"Cuando una semilla germina, ¿qué sale primero?", o:[["🌱","La raíz"],["🌸","La flor"],["🍎","El fruto"]], c:0, x:"Primero la raíz busca agua; después sale el tallito."},
  {k:"ciclo de vida", p:"Los gatitos recién nacidos...", o:[["🐱","Toman leche y casi no ven"],["🍖","Cazan solos"],["🏃","Corren enseguida"]], c:0, x:"Los mamíferos recién nacidos necesitan mucho cuidado."},
  {k:"ciclo de vida", p:"¿Qué es la metamorfosis?", o:[["🦋","Cuando el cuerpo cambia mucho al crecer"],["😴","Cuando un animal duerme"],["🍽️","Cuando un animal come"]], c:0, x:"La oruga y el renacuajo cambian de forma por completo."},
  {k:"ciclo de vida", p:"¿Todas las crías nacen igualitas a sus papás?", o:[["🐛","No, algunas cambian mucho al crecer"],["👶","Sí, todas nacen iguales"],["🥚","Solo las que ponen huevos"]], c:0, x:"El renacuajo no se parece nada a la rana."},
  /* hábitat */
  {k:"hábitat", p:"¿Qué hábitat tiene mucha lluvia y árboles altísimos?", o:[["🌴","La selva"],["🏜️","El desierto"],["🧊","El polo"]], c:0, x:"En la selva hay agua y calor todo el año."},
  {k:"hábitat", p:"¿Para qué le sirve al oso polar su pelaje grueso?", o:[["🧊","Para aguantar el frío"],["🎨","Para verse bonito"],["🏊","Para flotar"]], c:0, x:"El pelaje y la grasa lo mantienen abrigado."},
  {k:"hábitat", p:"El camello aguanta muchos días sin comer porque en su joroba guarda...", o:[["🐫","Grasa"],["💧","Agua"],["🍽️","Comida entera"]], c:0, x:"De esa grasa saca energía cuando no encuentra qué comer."},
  {k:"hábitat", p:"Un bosque le da a los animales...", o:[["🌲","Refugio y comida"],["📺","Entretención"],["🛏️","Camas"]], c:0, x:"Por eso cuando se quema un bosque los animales quedan sin nada."},
  {k:"hábitat", p:"¿Por qué el pez no puede vivir en el desierto?", o:[["💧","Porque necesita agua para respirar"],["🌞","Porque le da sueño"],["🏃","Porque no sabe correr"]], c:0, x:"Cada animal necesita el hábitat para el que está preparado."},
  /* animales de Chile */
  {k:"animales de Chile", p:"¿Qué animal parecido a la llama vive en el altiplano del norte?", o:[["🦙","La vicuña"],["🐨","El koala"],["🦓","La cebra"]], c:0, x:"La vicuña tiene la lana más fina del mundo."},
  {k:"animales de Chile", p:"El pingüino de Humboldt vive en...", o:[["🌊","La costa de Chile"],["🏜️","El desierto"],["🌳","Los árboles"]], c:0, x:"Anida en las islas y roqueríos de nuestra costa."},
  {k:"animales de Chile", p:"¿Cuál es la flor símbolo de Chile?", o:[["🌺","El copihue"],["🌻","El girasol"],["🌷","El tulipán"]], c:0, x:"El copihue crece en los bosques del sur."},
  {k:"animales de Chile", p:"El alerce, un árbol chileno, es famoso por ser...", o:[["🌲","Muy antiguo y enorme"],["🌵","Muy espinudo"],["🍎","Muy dulce"]], c:0, x:"Hay alerces que llevan miles de años vivos."},
  {k:"animales de Chile", p:"¿Qué podemos hacer para cuidar a los animales silvestres?", o:[["🗑️","No dejar basura en su hábitat"],["🍬","Darles dulces"],["🏠","Llevárnoslos a la casa"]], c:0, x:"Los animales silvestres deben quedarse en su lugar."},
  {k:"animales de Chile", p:"¿Qué significa que un animal esté en peligro de extinción?", o:[["😟","Que quedan muy pocos"],["🎉","Que hay demasiados"],["😴","Que duerme mucho"]], c:0, x:"Si no los cuidamos, pueden desaparecer para siempre."},
  /* mi cuerpo */
  {k:"mi cuerpo", p:"¿Qué hueso protege el cerebro?", o:[["🧠","El cráneo"],["🦴","Las costillas"],["🦵","La rodilla"]], c:0, x:"El cráneo es como un casco de hueso."},
  {k:"mi cuerpo", p:"¿Qué protegen las costillas?", o:[["❤️","El corazón y los pulmones"],["🧠","El cerebro"],["🦶","Los pies"]], c:0, x:"Forman una jaulita de huesos en el pecho."},
  {k:"mi cuerpo", p:"Si hacemos ejercicio seguido, los músculos...", o:[["💪","Se ponen más fuertes"],["😴","Se achican"],["🦴","Se transforman en huesos"]], c:0, x:"El músculo se fortalece cuando lo usas."},
  {k:"mi cuerpo", p:"¿Para qué sirve la sangre?", o:[["❤️","Para llevar alimento y oxígeno por el cuerpo"],["🎨","Para darnos color"],["💧","Para mojarnos por dentro"]], c:0, x:"El corazón la empuja para que llegue a todas partes."},
  {k:"mi cuerpo", p:"¿Dónde está el corazón?", o:[["❤️","En el pecho, un poco a la izquierda"],["🦵","En la pierna"],["🧠","En la cabeza"]], c:0, x:"Si te pones la mano en el pecho, lo puedes sentir latir."},
  {k:"mi cuerpo", p:"¿Qué parte nos deja doblar el brazo?", o:[["💪","El codo"],["🦶","El talón"],["👃","La nariz"]], c:0, x:"El codo es una articulación: ahí se unen dos huesos."},
  /* vida sana */
  {k:"vida sana", p:"¿Por qué hay que lavarse los dientes?", o:[["😁","Para sacar los restos de comida"],["🎨","Para que brillen de color"],["🍬","Para comer más dulces"]], c:0, x:"Los restos de comida producen caries."},
  {k:"vida sana", p:"Antes de comer una fruta hay que...", o:[["💧","Lavarla"],["🔥","Calentarla"],["🧊","Congelarla"]], c:0, x:"Lavarla saca la tierra y los bichitos que no se ven."},
  {k:"vida sana", p:"¿Qué te pasa al día siguiente si dormiste poco?", o:[["😴","Te cuesta poner atención"],["⚡","Andas con más energía"],["📏","Creces más rápido"]], c:0, x:"El cerebro necesita el sueño para funcionar bien."},
  {k:"vida sana", p:"¿Cuánta agua conviene tomar en el día?", o:[["💧","Harta, varias veces al día"],["🥤","Solo una vez"],["🚫","Nada"]], c:0, x:"Casi todo tu cuerpo es agua, por eso hay que reponerla."},
  {k:"vida sana", p:"Para cuidar la vista frente a una pantalla conviene...", o:[["👀","Mirar de lejos y descansar los ojos"],["🔍","Pegar la cara a la pantalla"],["🌑","Verla a oscuras"]], c:0, x:"Cada cierto rato hay que mirar lejos y parpadear."},
  /* el agua */
  {k:"el agua", p:"El agua de un lago está en estado...", o:[["💧","Líquido"],["🧊","Sólido"],["💨","Gaseoso"]], c:0, x:"Líquida es la que corre y toma la forma del envase."},
  {k:"el agua", p:"Cuando el vapor se enfría, se transforma en...", o:[["💧","Gotitas de agua"],["🧊","Piedras"],["🌬️","Viento"]], c:0, x:"Eso pasa en el vidrio del baño después de la ducha caliente."},
  {k:"el agua", p:"¿De dónde viene el agua de la lluvia?", o:[["☁️","De las nubes"],["🌳","De los árboles"],["🏠","De las casas"]], c:0, x:"El agua se evapora, forma nubes y vuelve como lluvia."},
  {k:"el agua", p:"¿Se puede tomar agua del mar?", o:[["🧂","No, porque es salada"],["💧","Sí, es igual a la de la llave"],["🍬","Sí, es dulce"]], c:0, x:"El agua salada da más sed en vez de quitarla."},
  {k:"el agua", p:"¿Qué pasa si dejas la llave corriendo mientras te lavas los dientes?", o:[["💧","Se pierden litros de agua"],["✨","El agua se limpia"],["🚿","No pasa nada"]], c:0, x:"En un par de minutos se van varios litros."},
  /* el tiempo y las estaciones */
  {k:"el tiempo y las estaciones", p:"Si el termómetro marca 30 grados, hay que salir con ropa...", o:[["👕","Liviana"],["🧥","Con abrigo grueso"],["🧣","Con bufanda"]], c:0, x:"30 grados es harto calor."},
  {k:"el tiempo y las estaciones", p:"Si el pronóstico dice «nublado», significa que...", o:[["☁️","Habrá muchas nubes"],["☀️","Estará despejado"],["🌪️","Habrá tornado"]], c:0, x:"Nublado es cielo tapado de nubes, aunque no llueva."},
  {k:"el tiempo y las estaciones", p:"En invierno, los días son...", o:[["🌙","Más cortos y oscurece temprano"],["☀️","Más largos"],["⏰","Iguales que en verano"]], c:0, x:"En invierno el sol sale más tarde y se esconde antes."},
  {k:"el tiempo y las estaciones", p:"El granizo son bolitas de...", o:[["🧊","Hielo"],["🧂","Sal"],["🧱","Piedra"]], c:0, x:"Es agua que se congeló arriba en la nube antes de caer."}
]);

masPreguntas("historia", [
  /* pueblos originarios */
  {k:"pueblos originarios", p:"¿Qué pueblo del extremo sur vivía navegando en canoas?", o:[["🛶","Los kawésqar"],["🗿","Los rapa nui"],["🦙","Los aimara"]], c:0, x:"Recorrían los canales del sur pescando y cazando lobos marinos."},
  {k:"pueblos originarios", p:"Los selk'nam vivían en...", o:[["🏔️","Tierra del Fuego, en el extremo sur"],["🏜️","El desierto del norte"],["🏝️","Isla de Pascua"]], c:0, x:"Se pintaban el cuerpo para sus ceremonias."},
  {k:"pueblos originarios", p:"¿Qué comían principalmente los aimara del altiplano?", o:[["🥔","Papa y quínoa"],["🍕","Pizza"],["🍚","Arroz con pollo"]], c:0, x:"Cultivaban en terrazas, escalones hechos en el cerro."},
  {k:"pueblos originarios", p:"Los diaguitas eran famosos por hacer...", o:[["🏺","Cerámica pintada de colores"],["🚗","Autos"],["📱","Celulares"]], c:0, x:"Sus jarros y platos decorados se encuentran hasta hoy."},
  {k:"pueblos originarios", p:"¿Con qué construían sus casas los pueblos originarios?", o:[["🌿","Con lo que había cerca: madera, paja y cuero"],["🧱","Con cemento"],["🏠","Con vidrio"]], c:0, x:"Cada pueblo usaba los materiales de su propia zona."},
  {k:"pueblos originarios", p:"El We Tripantu es...", o:[["🌙","El año nuevo mapuche"],["🎂","Un cumpleaños"],["🍽️","Una comida"]], c:0, x:"Se celebra en junio, cuando la noche es la más larga del año."},
  {k:"pueblos originarios", p:"¿Qué idioma habla el pueblo rapa nui?", o:[["🗿","El rapanui"],["🌿","El mapudungun"],["🇫🇷","El francés"]], c:0, x:"En Isla de Pascua se habla rapanui y también español."},
  {k:"pueblos originarios", p:"El palín, o chueca, es...", o:[["🏑","Un juego mapuche con palos y una bola"],["🍲","Una comida"],["👗","Un vestido"]], c:0, x:"Se juega en equipos, parecido al hockey."},
  {k:"pueblos originarios", p:"¿Qué usaban los mapuche para tejer sus mantas?", o:[["🧶","Lana de oveja"],["📄","Papel"],["🧵","Plástico"]], c:0, x:"Tejían en telar y teñían la lana con plantas."},
  {k:"pueblos originarios", p:"¿Por qué los pueblos nómadas se cambiaban de lugar?", o:[["🍖","Porque seguían a los animales y las frutas"],["😴","Porque se aburrían"],["🏠","Porque se les caía la casa"]], c:0, x:"Cuando se acababa la comida en un lugar, se movían a otro."},
  /* aportes y mestizaje */
  {k:"aportes y mestizaje", p:"«Cancha», «poroto» y «guata» son palabras que vienen de...", o:[["🌿","Los pueblos originarios"],["🇬🇧","El inglés"],["🇯🇵","El japonés"]], c:0, x:"Hablamos con palabras indígenas todos los días."},
  {k:"aportes y mestizaje", p:"¿Qué trajeron los españoles a América?", o:[["🐴","El caballo y el trigo"],["🥔","La papa"],["🌽","El maíz"]], c:0, x:"La papa y el maíz ya estaban acá; el caballo llegó con ellos."},
  {k:"aportes y mestizaje", p:"El pastel de choclo mezcla maíz americano con...", o:[["🥩","Carne y pollo traídos por los españoles"],["🍫","Chocolate"],["🍣","Pescado japonés"]], c:0, x:"Es un plato mestizo: junta las dos cocinas."},
  {k:"aportes y mestizaje", p:"Los inmigrantes alemanes llegaron al sur de Chile y trajeron...", o:[["🍰","El kuchen"],["🌮","Los tacos"],["🍜","Los fideos instantáneos"]], c:0, x:"En Valdivia y Osorno todavía se hacen kuchenes."},
  {k:"aportes y mestizaje", p:"Que Chile sea diverso significa que...", o:[["🌎","Vive gente con muchos orígenes distintos"],["👥","Todos son iguales"],["🚪","Nadie puede entrar"]], c:0, x:"Han llegado familias de Europa, Asia, el mundo árabe y América."},
  /* tradiciones de Chile */
  {k:"tradiciones de Chile", p:"¿Qué es una fonda?", o:[["🎉","El lugar donde se celebra el dieciocho"],["🏥","Un hospital"],["🏫","Una sala de clases"]], c:0, x:"Ahí se baila cueca, se come y se juega en septiembre."},
  {k:"tradiciones de Chile", p:"¿Qué bebida típica se toma en Fiestas Patrias?", o:[["🍑","Mote con huesillo"],["🥤","Bebida de fantasía"],["☕","Café con leche"]], c:0, x:"Lleva trigo mote y duraznos secos en almíbar."},
  {k:"tradiciones de Chile", p:"El curanto es una comida típica de...", o:[["🏝️","Chiloé"],["🏜️","Atacama"],["🏙️","Santiago"]], c:0, x:"Se cocina en un hoyo en la tierra con piedras calientes."},
  {k:"tradiciones de Chile", p:"La fiesta de La Tirana, con bailes y máscaras, se celebra en...", o:[["🏜️","El norte de Chile"],["🌲","El sur de Chile"],["🏝️","Isla de Pascua"]], c:0, x:"Miles de bailarines llegan cada julio a esa fiesta."},
  {k:"tradiciones de Chile", p:"¿Cuál es el ave que aparece en el escudo de Chile?", o:[["🦅","El cóndor"],["🐔","La gallina"],["🦆","El pato"]], c:0, x:"El cóndor va junto al huemul en el escudo."},
  {k:"tradiciones de Chile", p:"El trompo y el emboque son...", o:[["🎯","Juegos tradicionales chilenos"],["🍽️","Comidas típicas"],["🎵","Bailes"]], c:0, x:"Son juegos de madera, de antes de los videojuegos."},
  /* el mapa de Chile */
  {k:"el mapa de Chile", p:"¿Qué hay en el extremo sur de Chile?", o:[["🧊","Punta Arenas y el territorio antártico"],["🏜️","El desierto"],["🌴","Playas calientes"]], c:0, x:"Es la zona más fría y ventosa del país."},
  {k:"el mapa de Chile", p:"¿Qué isla chilena queda lejísimos, en medio del océano Pacífico?", o:[["🗿","Isla de Pascua"],["🏝️","Chiloé"],["⛰️","Isla Grande de Tierra del Fuego"]], c:0, x:"Está a más de 3.000 kilómetros del continente."},
  {k:"el mapa de Chile", p:"En un mapa, ¿dónde queda el norte?", o:[["⬆️","Arriba"],["⬇️","Abajo"],["➡️","A la derecha"]], c:0, x:"Arriba el norte, abajo el sur, a la derecha el este."},
  {k:"el mapa de Chile", p:"En un mapa, ¿qué se pinta de azul?", o:[["🌊","El agua: mares, ríos y lagos"],["⛰️","Las montañas"],["🏙️","Las ciudades"]], c:0, x:"Por eso los mapas de Chile tienen todo el borde izquierdo azul."},
  {k:"el mapa de Chile", p:"¿Para qué sirve la rosa de los vientos de un mapa?", o:[["🧭","Para mostrar dónde está cada punto cardinal"],["🌸","Para decorar"],["📏","Para medir el peso"]], c:0, x:"Es esa estrellita con las letras N, S, E y O."},
  {k:"el mapa de Chile", p:"Si viajo de Santiago a Puerto Montt, voy hacia el...", o:[["⬇️","Sur"],["⬆️","Norte"],["🌊","Oeste"]], c:0, x:"Puerto Montt está más abajo en el mapa."},
  {k:"el mapa de Chile", p:"¿En qué región está la capital de Chile?", o:[["🏙️","La Región Metropolitana"],["🏜️","La Región de Antofagasta"],["🌲","La Región de Los Lagos"]], c:0, x:"Santiago queda en la Región Metropolitana."},
  {k:"el mapa de Chile", p:"¿Cuál es el río más largo de Chile?", o:[["🏜️","El río Loa"],["🌊","El río Mapocho"],["🌲","El río Bío Bío"]], c:0, x:"El Loa cruza el desierto de Atacama."},
  /* zonas de Chile */
  {k:"zonas de Chile", p:"¿Qué se saca de las minas del norte de Chile?", o:[["🟤","Cobre"],["🍫","Chocolate"],["🧊","Hielo"]], c:0, x:"Chile es el país que más cobre produce en el mundo."},
  {k:"zonas de Chile", p:"¿Qué se cultiva mucho en la zona central?", o:[["🍇","Frutas y uvas"],["🌵","Cactus"],["🧊","Nada, hace mucho frío"]], c:0, x:"El clima templado del valle central es ideal para la fruta."},
  {k:"zonas de Chile", p:"¿Qué animal se cría harto en el sur de Chile?", o:[["🐄","Vacas"],["🐫","Camellos"],["🦁","Leones"]], c:0, x:"Por eso del sur vienen la leche, el queso y la mantequilla."},
  {k:"zonas de Chile", p:"¿Qué es un fiordo?", o:[["🌊","Un brazo de mar metido entre montañas"],["⛰️","Un cerro muy alto"],["🏜️","Una duna de arena"]], c:0, x:"El sur de Chile está lleno de fiordos y canales."},
  {k:"zonas de Chile", p:"¿Cómo es el clima del desierto de Atacama?", o:[["🏜️","Muy seco y casi sin lluvia"],["🌧️","Lluvioso todo el año"],["❄️","Nevado siempre"]], c:0, x:"Por eso ahí se instalan telescopios: el cielo está siempre despejado."},
  {k:"zonas de Chile", p:"Chiloé es...", o:[["🏝️","Un archipiélago del sur"],["⛰️","Un volcán"],["🏙️","Un barrio de Santiago"]], c:0, x:"Es famoso por sus iglesias de madera y sus palafitos."},
  /* antes y ahora */
  {k:"antes y ahora", p:"Antes de que existiera el refrigerador, la comida se guardaba...", o:[["🧊","En un lugar fresco y se compraba a diario"],["📱","En el celular"],["🔥","Al lado del fuego"]], c:0, x:"Por eso se iba a comprar todos los días al almacén."},
  {k:"antes y ahora", p:"¿Con qué alumbraban las casas antes de la electricidad?", o:[["🕯️","Con velas y lámparas de parafina"],["💡","Con ampolletas"],["📱","Con la linterna del celular"]], c:0, x:"Cuando llegó la luz eléctrica, la vida cambió por completo."},
  {k:"antes y ahora", p:"¿Cómo escuchaban música tus bisabuelos?", o:[["📻","En la radio y en tocadiscos"],["🎧","En audífonos inalámbricos"],["📱","En aplicaciones"]], c:0, x:"La familia entera se juntaba alrededor de la radio."},
  {k:"antes y ahora", p:"¿Qué cambió con la llegada del celular?", o:[["📱","Podemos hablar con alguien desde cualquier parte"],["🚗","Los autos vuelan"],["🍽️","Ya no comemos"]], c:0, x:"Antes había que ir a un teléfono fijo o mandar una carta."},
  {k:"antes y ahora", p:"Preguntarles a los abuelos cómo era antes sirve para...", o:[["👵","Conocer nuestra historia familiar"],["🎮","Ganar un juego"],["💰","Ganar plata"]], c:0, x:"Ellos son una fuente: nos cuentan cosas que no están en los libros."},
  {k:"antes y ahora", p:"«El año pasado» es una expresión que habla del...", o:[["⏪","Pasado"],["⏩","Futuro"],["⏸️","Presente"]], c:0, x:"Pasado es lo que ya ocurrió; futuro, lo que todavía no."},
  /* vivir juntos */
  {k:"vivir juntos", p:"¿Cuál es un derecho de todos los niños y niñas?", o:[["🎒","Estudiar y jugar"],["🚗","Manejar un auto"],["💼","Trabajar todo el día"]], c:0, x:"Los niños tienen derecho a la educación, al juego y al cuidado."},
  {k:"vivir juntos", p:"¿Cuál es un deber tuyo en la casa?", o:[["🧹","Ordenar tus cosas"],["💰","Pagar las cuentas"],["🚗","Manejar"]], c:0, x:"Los deberes son las responsabilidades que sí te tocan a ti."},
  {k:"vivir juntos", p:"Si rompes algo sin querer, lo correcto es...", o:[["🤝","Contarlo y decir la verdad"],["🤫","Esconderlo"],["👉","Echarle la culpa a otro"]], c:0, x:"Reconocer un error es parte de ser honesta."},
  {k:"vivir juntos", p:"Respetar significa...", o:[["🤗","Tratar bien a los demás aunque piensen distinto"],["🏆","Ganarle a todos"],["🤐","No hablar nunca"]], c:0, x:"Se puede pensar diferente y llevarse bien igual."},
  {k:"vivir juntos", p:"En la micro, ¿a quién conviene cederle el asiento?", o:[["👵","A las personas mayores y embarazadas"],["🎒","A quien llegó primero"],["🏃","A quien corra más rápido"]], c:0, x:"Es una forma de cuidar a quien lo necesita más."},
  {k:"vivir juntos", p:"¿Para qué sirven las normas del curso?", o:[["📚","Para que todos puedan aprender tranquilos"],["😠","Para castigar"],["🏆","Para elegir al mejor"]], c:0, x:"Las normas se hacen entre todos y sirven a todos."},
  {k:"vivir juntos", p:"En Chile, los bomberos son...", o:[["🚒","Voluntarios: no cobran por apagar incendios"],["💰","Trabajadores que cobran por cada incendio"],["🎖️","Militares"]], c:0, x:"Es uno de los pocos países donde todos los bomberos son voluntarios."},
  {k:"vivir juntos", p:"¿Para qué sirve reciclar?", o:[["♻️","Para producir menos basura"],["💰","Para ganar plata"],["🎨","Para pintar"]], c:0, x:"Separar el papel, el vidrio y el plástico les da una segunda vida."},
  {k:"vivir juntos", p:"¿Quién atiende a los animales enfermos?", o:[["🐶","El veterinario"],["👩‍⚕️","El dentista"],["👨‍🚒","El bombero"]], c:0, x:"Es el médico de los animales."},
  {k:"vivir juntos", p:"Si ves que molestan a un compañero, lo mejor es...", o:[["🙋","Avisarle a un adulto"],["😆","Reírte también"],["🙈","Hacer como que no viste"]], c:0, x:"Pedir ayuda no es acusar: es cuidar a alguien."}
]);

masPreguntas("ingles", [
  /* animals */
  {k:"animals", p:"«COW» en español es...", o:[["🐮","Vaca"],["🐷","Chancho"],["🐔","Gallina"]], c:0, x:"The cow says moo."},
  {k:"animals", p:"«DUCK» en español es...", o:[["🦆","Pato"],["🐦","Pájaro"],["🐟","Pez"]], c:0, x:"Duck suena «dak»."},
  {k:"animals", p:"«BEAR» en español es...", o:[["🐻","Oso"],["🐺","Lobo"],["🦁","León"]], c:0, x:"Teddy bear es el osito de peluche."},
  {k:"animals", p:"«MOUSE» en español es...", o:[["🐭","Ratón"],["🐱","Gato"],["🐰","Conejo"]], c:0, x:"El mouse del computador se llama así por el ratón."},
  {k:"animals", p:"«ELEPHANT» en español es...", o:[["🐘","Elefante"],["🦒","Jirafa"],["🦓","Cebra"]], c:0, x:"Se parece bastante a la palabra en español."},
  {k:"animals", p:"«MONKEY» en español es...", o:[["🐒","Mono"],["🐴","Caballo"],["🐮","Vaca"]], c:0, x:"Monkey suena «monki»."},
  /* colours */
  {k:"colours", p:"«BLACK» es el color...", o:[["🖤","Negro"],["🤍","Blanco"],["💚","Verde"]], c:0, x:"The night is black: la noche es negra."},
  {k:"colours", p:"«WHITE» es el color...", o:[["🤍","Blanco"],["🖤","Negro"],["💜","Morado"]], c:0, x:"Snow is white: la nieve es blanca."},
  {k:"colours", p:"«ORANGE» es el color...", o:[["🧡","Naranjo"],["💙","Azul"],["🖤","Negro"]], c:0, x:"Orange es la fruta y también el color."},
  {k:"colours", p:"«BROWN» es el color...", o:[["🤎","Café"],["💛","Amarillo"],["🤍","Blanco"]], c:0, x:"Theo is brown: Theo es café."},
  /* numbers */
  {k:"numbers", p:"«ONE» es el número...", o:[["1️⃣","Uno"],["2️⃣","Dos"],["3️⃣","Tres"]], c:0, x:"One, two, three: uno, dos, tres."},
  {k:"numbers", p:"«FOUR» es el número...", o:[["4️⃣","Cuatro"],["5️⃣","Cinco"],["1️⃣","Uno"]], c:0, x:"Four suena «for»."},
  {k:"numbers", p:"«SIX» es el número...", o:[["6️⃣","Seis"],["7️⃣","Siete"],["2️⃣","Dos"]], c:0, x:"Six se parece bastante a seis."},
  {k:"numbers", p:"«EIGHT» es el número...", o:[["8️⃣","Ocho"],["9️⃣","Nueve"],["3️⃣","Tres"]], c:0, x:"Eight suena «eit», aunque se escriba larguísimo."},
  {k:"numbers", p:"«NINE» es el número...", o:[["9️⃣","Nueve"],["8️⃣","Ocho"],["5️⃣","Cinco"]], c:0, x:"Nine suena «nain»."},
  {k:"numbers", p:"«FIFTEEN» es el número...", o:[["","Quince"],["","Cinco"],["","Cincuenta"]], c:0, x:"Los que terminan en -teen son del 13 al 19."},
  /* family */
  {k:"family", p:"«BABY» en español es...", o:[["👶","Bebé"],["👵","Abuela"],["👦","Hermano"]], c:0, x:"Baby suena «béibi»."},
  {k:"family", p:"«GRANDFATHER» en español es...", o:[["👴","Abuelo"],["👵","Abuela"],["👨","Papá"]], c:0, x:"Grandfather y grandmother: abuelo y abuela."},
  {k:"family", p:"«FAMILY» en español es...", o:[["👨‍👩‍👧","Familia"],["🏠","Casa"],["👫","Amigos"]], c:0, x:"My family: mi familia."},
  {k:"family", p:"«FRIEND» en español es...", o:[["👭","Amiga"],["👩","Mamá"],["👩‍🏫","Profesora"]], c:0, x:"You are my friend: eres mi amiga."},
  /* body */
  {k:"body", p:"«MOUTH» en español es...", o:[["👄","Boca"],["👃","Nariz"],["👂","Oreja"]], c:0, x:"Con la mouth hablamos y comemos."},
  {k:"body", p:"«EARS» en español son...", o:[["👂","Orejas"],["👀","Ojos"],["🖐️","Manos"]], c:0, x:"Theo has big ears: Theo tiene orejas grandes."},
  {k:"body", p:"«HAIR» en español es...", o:[["💇","Pelo"],["🦶","Pie"],["🦷","Diente"]], c:0, x:"Long hair es pelo largo."},
  {k:"body", p:"«LEGS» en español son...", o:[["🦵","Piernas"],["🖐️","Manos"],["👀","Ojos"]], c:0, x:"Con las legs caminamos y saltamos."},
  {k:"body", p:"«TOOTH» en español es...", o:[["🦷","Diente"],["👅","Lengua"],["👂","Oreja"]], c:0, x:"Un diente es tooth; muchos son teeth."},
  /* greetings */
  {k:"greetings", p:"«GOODBYE» significa...", o:[["👋","Adiós"],["🙂","Hola"],["💖","Gracias"]], c:0, x:"También se dice bye, más cortito."},
  {k:"greetings", p:"«SEE YOU TOMORROW» significa...", o:[["📅","Nos vemos mañana"],["🌙","Buenas noches"],["🍽️","Buen provecho"]], c:0, x:"See you es «nos vemos»."},
  {k:"greetings", p:"«I'M SORRY» significa...", o:[["🙈","Lo siento"],["💖","Gracias"],["🙏","Por favor"]], c:0, x:"Se dice cuando uno se equivoca o pide disculpas."},
  {k:"greetings", p:"«YES» y «NO» significan...", o:[["✅","Sí y no"],["🙂","Hola y chao"],["💖","Gracias y de nada"]], c:0, x:"Yes es sí; no es no, igualito."},
  /* days */
  {k:"days", p:"«TUESDAY» en español es...", o:[["","Martes"],["","Jueves"],["","Domingo"]], c:0, x:"Ojo: Thursday es jueves, se parecen mucho."},
  {k:"days", p:"«WEDNESDAY» en español es...", o:[["","Miércoles"],["","Viernes"],["","Sábado"]], c:0, x:"Es una de las palabras más difíciles de escribir en inglés."},
  {k:"days", p:"«SATURDAY» en español es...", o:[["","Sábado"],["","Domingo"],["","Lunes"]], c:0, x:"Saturday y Sunday son el fin de semana."},
  {k:"days", p:"«TODAY» significa...", o:[["","Hoy"],["","Mañana"],["","Ayer"]], c:0, x:"Today is a good day: hoy es un buen día."},
  /* food */
  {k:"food", p:"«BANANA» en español es...", o:[["🍌","Plátano"],["🍎","Manzana"],["🍇","Uva"]], c:0, x:"Se escribe igual, pero suena «banána»."},
  {k:"food", p:"«EGG» en español es...", o:[["🥚","Huevo"],["🧀","Queso"],["🍞","Pan"]], c:0, x:"Eggs for breakfast: huevos para el desayuno."},
  {k:"food", p:"«CHEESE» en español es...", o:[["🧀","Queso"],["🥛","Leche"],["🍫","Chocolate"]], c:0, x:"En inglés dicen «cheese» para sonreír en las fotos."},
  {k:"food", p:"«RICE» en español es...", o:[["🍚","Arroz"],["🍝","Fideos"],["🥔","Papa"]], c:0, x:"Rice suena «rais»."},
  {k:"food", p:"«CHICKEN» en español es...", o:[["🍗","Pollo"],["🐟","Pescado"],["🥩","Carne"]], c:0, x:"Chicken es el pollo, vivo o cocinado."},
  {k:"food", p:"«BREAKFAST» significa...", o:[["🥣","Desayuno"],["🍽️","Almuerzo"],["🌙","Once"]], c:0, x:"Es la primera comida del día."},
  /* school */
  {k:"school", p:"«CHAIR» en español es...", o:[["💺","Silla"],["🚪","Puerta"],["🏠","Ventana"]], c:0, x:"Sit on the chair: siéntate en la silla."},
  {k:"school", p:"«TABLE» en español es...", o:[["🍽️","Mesa"],["💺","Silla"],["📚","Libro"]], c:0, x:"Table suena «téibol»."},
  {k:"school", p:"«BACKPACK» en español es...", o:[["🎒","Mochila"],["✏️","Lápiz"],["📏","Regla"]], c:0, x:"Back es espalda: la llevas en la espalda."},
  {k:"school", p:"«SCISSORS» en español son...", o:[["✂️","Tijeras"],["📏","Regla"],["🖍️","Lápices de colores"]], c:0, x:"Siempre va en plural, como en español."},
  {k:"school", p:"«CLASSROOM» en español es...", o:[["🏫","Sala de clases"],["🏠","Casa"],["🌳","Patio"]], c:0, x:"Class es clase y room es pieza o sala."},
  /* clothes and weather */
  {k:"clothes and weather", p:"«HAT» en español es...", o:[["🧢","Gorro"],["👟","Zapato"],["🧦","Calcetín"]], c:0, x:"Put on your hat: ponte el gorro."},
  {k:"clothes and weather", p:"«SOCKS» en español son...", o:[["🧦","Calcetines"],["👖","Pantalones"],["🧤","Guantes"]], c:0, x:"Socks van dentro de los shoes."},
  {k:"clothes and weather", p:"«DRESS» en español es...", o:[["👗","Vestido"],["👕","Polera"],["🧥","Abrigo"]], c:0, x:"A pink dress: un vestido rosado."},
  {k:"clothes and weather", p:"«IT'S SNOWING» significa...", o:[["❄️","Está nevando"],["🌧️","Está lloviendo"],["☀️","Hace sol"]], c:0, x:"Snow es nieve."},
  {k:"clothes and weather", p:"«WINDY» significa...", o:[["🌬️","Con viento"],["🌧️","Con lluvia"],["🔥","Con calor"]], c:0, x:"It's windy today: hoy hace viento."},
  {k:"clothes and weather", p:"«HOT» significa...", o:[["🔥","Caluroso"],["🧊","Frío"],["💧","Mojado"]], c:0, x:"It's hot: hace calor. Lo contrario de cold."}
]);
