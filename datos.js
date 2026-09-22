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
  {ch:"¿Por qué el elefante no usa computador? — Porque le tiene miedo al ratón. 🐘🐭", da:"Un colibrí mueve sus alas tan rápido que casi no se le ven: 80 veces en un segundo. 🐦"},
  {ch:"¿Qué le dice el número 0 al número 8? — «¡Qué lindo cinturón!» 0️⃣8️⃣", da:"Si sumas todos los números del 1 al 100 te da 5.050. ¡Lo descubrió un niño en clases! 🔢"},
  {ch:"¿Cuál es el último animal del mundo? — El delfín. El-del-fin. 🐬", da:"Los delfines se llaman entre ellos con un silbido distinto para cada uno, como un nombre. 🐬"},
  {ch:"¿Qué le dijo una pared a la otra pared? — «Nos vemos en la esquina». 🧱", da:"Las nutrias se toman de la manito para dormir y no separarse en el agua. 🦦"},
  {ch:"¿Qué hace un perro con un taladro? — Taladrando. 🐶🔧", da:"Los perros huelen tan bien que pueden encontrar una galleta escondida en otra pieza. 🍪"},
  {ch:"¿Por qué los unicornios nunca ganan a las escondidas? — Porque siempre se les ve el cuerno. 🦄", da:"El unicornio es el animal nacional de Escocia… ¡aunque no exista! 🏰"},
  {ch:"¿Cuál es la fruta más risueña? — La naranja: na-ran-ja-ja-ja. 🍊", da:"Los plátanos son técnicamente unas bayas gigantes, y las frutillas… ¡no son bayas! 🍌"},
  {ch:"Mamá, mamá, en el colegio me dicen despistada. — Niña, esta es la casa del vecino. 🏠", da:"Un pulpo tiene tres corazones y su sangre es azul. 🐙"},
  {ch:"¿Qué le dice un semáforo a otro? — «No me mires, que me estoy cambiando». 🚦", da:"En Chile vive el pudú, el ciervo más pequeño del mundo: es del porte de un perro chico. 🦌"},
  {ch:"¿Cómo se llama el campeón japonés de buceo? — Tokofondo. Y el segundo lugar: Kasi Tokofondo. 🤿", da:"En el desierto de Atacama hay lugares donde nunca se ha registrado ni una gota de lluvia. 🏜️"},
  {ch:"¿Cómo sabes que pasó un elefante por el refrigerador? — Por las pisadas en la mantequilla. 🐘🧈", da:"Los elefantes se saludan enrollando sus trompas, como un abrazo. 🐘"},
  {ch:"¿Por qué el libro de matemática andaba triste? — Porque tenía muchos problemas. 📚", da:"El cerebro no siente dolor. Aunque te duela la cabeza, ¡no le duele a él! 🧠"},
  {ch:"¿Qué le dice la cucharita a la gelatina? — «No tiembles, cobarde». 🥄", da:"Los flamencos son rosados por lo que comen. ¡Nacen grises! 🦩"},
  {ch:"¿Qué hace la nube cuando le da risa? — Se llueve de la risa. ☁️", da:"Ningún copo de nieve es igual a otro: cada uno tiene su propio dibujo. ❄️"},
  {ch:"¿Cuál es el animal que tiene los pies en la cabeza? — El piojo. 🐜", da:"Las rayas de cada cebra son distintas, como nuestras huellas digitales. 🦓"},
  {ch:"¿Qué le dice un pez a otro pez cuando se enojan? — ¡Nada, nada! 🐟", da:"Las tortugas pueden respirar bajo el agua un ratito larguísimo: algunas aguantan horas. 🐢"},
  {ch:"¿Cómo se llama el amigo japonés que siempre llega mojado? — Kaio Alagua. 💦", da:"La llama, cuando se enoja, escupe. Por eso mejor pedirle permiso. 🦙"},
  {ch:"¿Qué hace una vaca cuando sale el sol? — Sombra. 🐮☀️", da:"Los gatos duermen unas 16 horas al día. ¡Casi todo el día durmiendo! 🐱"},
  {ch:"¿Por qué las focas del circo miran siempre para arriba? — Porque ahí están los focos. 🎪", da:"El árbol más alto del mundo mide más que un edificio de 30 pisos. 🌲"}
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

/* ============================================================
   NIVELES 2 Y 3 — preguntas más desafiantes
   Cada una lleva n:2 o n:3. Las que no tienen n son de nivel 1.
   El juego elige según el nivel de la niña en cada materia.
   ============================================================ */

masPreguntas("lenguaje", [
  /* ================= NIVEL 2 ================= */
  /* --- comprender lo que leo --- */
  {n:2, k:"comprender lo que leo", p:"¿Qué le pasó a Josefa con su colación?", t:"Josefa preparó su colación la noche anterior: un sándwich de palta y una manzana. En la mañana salió apurada y la dejó sobre la mesa.", o:[["","Se le quedó en la casa"],["","Se la comió en la micro"],["","Se la regaló a una amiga"]], c:0, x:"Si la dejó sobre la mesa al salir, la colación se quedó en la casa. ¡Le pasa a cualquiera!"},
  {n:2, k:"comprender lo que leo", p:"¿Cuándo preparó Josefa su colación?", t:"Josefa preparó su colación la noche anterior: un sándwich de palta y una manzana. En la mañana salió apurada y la dejó sobre la mesa.", o:[["","La noche anterior"],["","Esa misma mañana"],["","En el recreo"]], c:0, x:"El texto dice «la noche anterior». En la mañana solo salió apurada."},
  {n:2, k:"comprender lo que leo", p:"¿Cómo es el hámster de Agustín?", t:"Agustín tiene un hámster café con una mancha blanca en la espalda. Duerme todo el día y de noche corre en su rueda.", o:[["","Café con una mancha blanca"],["","Blanco con una mancha café"],["","Café con la cola blanca"]], c:0, x:"Todo el cuerpo es café y lo blanco es solo una mancha en la espalda. ¡Leíste con atención!"},
  {n:2, k:"comprender lo que leo", p:"¿Cuándo corre el hámster en su rueda?", t:"Agustín tiene un hámster café con una mancha blanca en la espalda. Duerme todo el día y de noche corre en su rueda.", o:[["","De noche"],["","Todo el día"],["","En la mañana"]], c:0, x:"De día duerme y de noche corre: justo al revés que nosotros."},
  {n:2, k:"comprender lo que leo", p:"¿Qué hizo Florencia justo ANTES de pelar las papas?", t:"Florencia se lavó las manos, peló las papas y después ayudó a su abuela a hacer el puré.", o:[["","Se lavó las manos"],["","Hizo el puré"],["","Llamó a su abuela"]], c:0, x:"Primero las manos limpias, después las papas y al final el puré."},
  {n:2, k:"comprender lo que leo", p:"¿Dónde ocurre esta historia?", t:"El barco de Benjamín se movía con las olas. Desde la cubierta se veían gaviotas y, a lo lejos, una isla.", o:[["","En el mar"],["","En un bosque"],["","En una ciudad"]], c:0, x:"Barco, olas, gaviotas e isla: todas son pistas de que están en el mar."},
  {n:2, k:"comprender lo que leo", p:"¿Quién escribió esta carta?", t:"Querida abuela Carmen: te extraño mucho. El sábado vamos a visitarte a Valdivia y te llevo un dibujo. Te quiere, Catalina.", o:[["","Catalina"],["","La abuela Carmen"],["","La mamá de Catalina"]], c:0, x:"Quien escribe una carta pone su nombre al final, después de la despedida."},
  {n:2, k:"comprender lo que leo", p:"¿Qué le cuenta Catalina a su abuela?", t:"Querida abuela Carmen: te extraño mucho. El sábado vamos a visitarte a Valdivia y te llevo un dibujo. Te quiere, Catalina.", o:[["","Que el sábado irán a verla"],["","Que el sábado irá al colegio"],["","Que la abuela vendrá a su casa"]], c:0, x:"Le avisa que el sábado irán a visitarla a Valdivia, ¡y con dibujo!"},
  {n:2, k:"comprender lo que leo", p:"¿Adónde fue la mamá de Mateo?", t:"Mateo: fui a comprar pan. Vuelvo a las 6. Hay leche en el refrigerador. Mamá.", o:[["","A comprar pan"],["","Al trabajo"],["","A comprar leche"]], c:0, x:"El recado lo dice al principio. La leche ya estaba en el refrigerador."},
  {n:2, k:"comprender lo que leo", p:"¿Qué debes hacer justo DESPUÉS de mojar el algodón?", t:"Para plantar un poroto: 1. Pon algodón en un frasco. 2. Moja el algodón. 3. Coloca el poroto encima. 4. Déjalo cerca de la luz.", o:[["","Colocar el poroto encima"],["","Poner algodón en el frasco"],["","Dejarlo cerca de la luz"]], c:0, x:"Mojar es el paso 2, y el que sigue es el 3: poner el poroto."},
  {n:2, k:"comprender lo que leo", p:"¿Para qué sirven los números 1, 2, 3 y 4 en este texto?", t:"Para plantar un poroto: 1. Pon algodón en un frasco. 2. Moja el algodón. 3. Coloca el poroto encima. 4. Déjalo cerca de la luz.", o:[["","Para marcar el orden"],["","Para contar los porotos"],["","Para contar los días"]], c:0, x:"En las instrucciones, los números dicen qué se hace primero y qué después."},
  {n:2, k:"comprender lo que leo", p:"¿Por qué hay que cuidar al huemul?", t:"El huemul es un ciervo que vive en el sur de Chile. Está en peligro de extinción: quedan muy pocos. Aparece en nuestro escudo.", o:[["","Porque quedan muy pocos"],["","Porque es muy peligroso"],["","Porque vive en el norte"]], c:0, x:"En peligro de extinción quiere decir que quedan tan pocos que podrían desaparecer."},
  {n:2, k:"comprender lo que leo", p:"Según el texto, ¿dónde aparece el huemul?", t:"El huemul es un ciervo que vive en el sur de Chile. Está en peligro de extinción: quedan muy pocos. Aparece en nuestro escudo.", o:[["","En el escudo de Chile"],["","En la bandera de Chile"],["","En el himno de Chile"]], c:0, x:"En el escudo están el huemul y el cóndor, uno a cada lado."},
  {n:2, k:"comprender lo que leo", p:"¿Cómo se sentía Matías?", t:"Cuando Matías vio su torre de bloques en el suelo, apretó los puños, se puso rojo y gritó: ¡Alguien me la botó!", o:[["","Enojado"],["","Asustado"],["","Aburrido"]], c:0, x:"Apretar los puños, ponerse rojo y gritar son señales de enojo."},
  {n:2, k:"comprender lo que leo", p:"¿Por qué el zorro dijo que las uvas estaban verdes?", t:"Un zorro quería unas uvas, pero estaban muy altas. Como no las alcanzó, dijo: «Están verdes». Moraleja: es fácil despreciar lo que no se puede tener.", o:[["","Porque no las pudo alcanzar"],["","Porque no le gustan las uvas"],["","Porque ya había comido"]], c:0, x:"La palabra «como» te da la razón: como no las alcanzó, se hizo el que no las quería."},
  {n:2, k:"comprender lo que leo", p:"¿Quién es el hermano más chico de Antonia?", t:"Antonia tiene dos hermanos: Diego, que es mayor que ella, y Pedro, que todavía es una guagua.", o:[["","Pedro"],["","Diego"],["","Son de la misma edad"]], c:0, x:"Una guagua es un bebé, así que Pedro es el más chico de todos."},
  {n:2, k:"comprender lo que leo", p:"¿Qué animal vio Trinidad?", t:"En el zoológico, Trinidad vio un animal con un cuello larguísimo y manchas cafés. Comía hojas de la punta de un árbol.", o:[["","Una jirafa"],["","Un camello"],["","Un caballo"]], c:0, x:"El cuello larguísimo con manchas es de la jirafa: así alcanza las hojas más altas."},
  {n:2, k:"comprender lo que leo", p:"¿Qué tipo de texto le dejó la mamá a Mateo?", t:"Mateo: fui a comprar pan. Vuelvo a las 6. Hay leche en el refrigerador. Mamá.", o:[["","Un recado"],["","Un poema"],["","Una noticia"]], c:0, x:"Un recado es un mensaje cortito para avisarle algo a alguien."},
  /* --- vocabulario --- */
  {n:2, k:"vocabulario", p:"«Maxi quedó EXHAUSTO después de la carrera.» ¿Qué significa exhausto?", o:[["","Muy cansado"],["","Muy contento"],["","Muy mojado"]], c:0, x:"Exhausto es cansadísimo, sin nada de energía. ¡Después de correr, se entiende!"},
  {n:2, k:"vocabulario", p:"«Clemente es muy GENEROSO: siempre comparte su colación.» ¿Qué significa generoso?", o:[["","Que le gusta compartir"],["","Que le gusta comer harto"],["","Que le gusta estar solo"]], c:0, x:"La pista está después de los dos puntos: siempre comparte."},
  {n:2, k:"vocabulario", p:"«A esa hora la calle estaba DESIERTA.» ¿Qué quiere decir?", o:[["","Que no había nadie"],["","Que estaba llena de arena"],["","Que hacía mucho calor"]], c:0, x:"Una calle desierta está vacía, sin gente. No tiene que ver con el desierto."},
  {n:2, k:"vocabulario", p:"«Las hojas secas CRUJÍAN bajo mis pies.» ¿Qué hacían las hojas?", o:[["","Sonaban al pisarlas"],["","Se volaban con el viento"],["","Se ponían verdes"]], c:0, x:"Crujir es hacer ese ruidito crac, crac, como las hojas secas en otoño."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa lo MISMO que «comenzar»?", o:[["","Empezar"],["","Terminar"],["","Seguir"]], c:0, x:"Comenzar y empezar son sinónimos: los dos significan partir algo."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «valiente»?", o:[["","Miedoso"],["","Fuerte"],["","Atrevido"]], c:0, x:"El valiente enfrenta sus miedos; el miedoso se asusta. Son antónimos."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «ancho»?", o:[["","Angosto"],["","Largo"],["","Grueso"]], c:0, x:"Un camino ancho tiene harto espacio; uno angosto es estrechito."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa casi lo MISMO que «enojado»?", o:[["","Molesto"],["","Nervioso"],["","Tímido"]], c:0, x:"Estar molesto y estar enojado son parecidos: son sinónimos."},
  {n:2, k:"vocabulario", p:"«La sopa está HIRVIENDO, espera un poco.» ¿Cómo está la sopa?", o:[["","Muy caliente"],["","Muy salada"],["","Muy espesa"]], c:0, x:"Hervir es calentarse tanto que salen burbujas. ¡Por eso hay que esperar!"},
  /* --- escribir bien / palabras --- */
  {n:2, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", v:"🐧", o:[["","Pingüino"],["","Pinguino"],["","Pingino"]], c:0, x:"Pin-güi-no: la U sí suena, por eso lleva los dos puntitos."},
  {n:2, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", v:"🕊️ Lo contrario de la paz", o:[["","Guerra"],["","Gerra"],["","Guera"]], c:0, x:"Gue-rra: la U calladita hace sonar suave la G, y la RR suena fuerte."},
  {n:2, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", v:"🦟", o:[["","Mosquito"],["","Mosqito"],["","Moskito"]], c:0, x:"Para el sonido QUI se escribe Q y una U que no suena: mos-qui-to."},
  {n:2, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", v:"🌻", o:[["","Girasol"],["","Jirasol"],["","Guirasol"]], c:0, x:"Gi-ra-sol se escribe con G. Jirafa va con J: hay que aprenderlas de memoria."},
  {n:2, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", v:"🦷 Sirve para lavarte los dientes", o:[["","Cepillo"],["","Sepillo"],["","Cepiyo"]], c:0, x:"Ce-pi-llo va con C y con LL, aunque suenen parecido a S y a Y."},
  {n:2, k:"singular y plural", p:"Fíjate en cómo terminan las palabras. ¿Cuál oración está bien escrita?", o:[["","Las niñas están contentas."],["","Las niñas están contentos."],["","La niñas está contentas."]], c:0, x:"Si son varias niñas, todo va en femenino y plural: las, niñas, contentas."},
  {n:2, k:"escribir bien", p:"¿Cuál exclamación está bien escrita?", o:[["","¡Qué susto me diste!"],["","Qué susto me diste!"],["","¡Qué susto me diste."]], c:0, x:"En español la exclamación abre con ¡ y cierra con !. Se necesitan los dos."},
  {n:2, k:"palabras y su función", p:"En «la frutilla roja y dulce», ¿qué palabras dicen cómo es la frutilla?", o:[["","Roja y dulce"],["","La y frutilla"],["","Frutilla y roja"]], c:0, x:"Roja y dulce son adjetivos: describen cómo es la frutilla."},
  {n:2, k:"singular y plural", p:"Algunos animales cambian la palabra entera en femenino. El toro y la...", o:[["","Vaca"],["","Tora"],["","Oveja"]], c:0, x:"El femenino de toro es vaca. Pasa lo mismo con caballo y yegua: cambia la palabra completa."},
  /* --- tipos de texto / rimas y adivinanzas --- */
  {n:2, k:"tipos de texto", p:"¿En qué parte de una fábula está la enseñanza?", o:[["","En la moraleja, al final"],["","En el título, al inicio"],["","En el nombre de un personaje"]], c:0, x:"La moraleja va al final de la fábula y nos deja una enseñanza."},
  {n:2, k:"tipos de texto", p:"Un texto escrito en versos cortos que riman es...", o:[["","Un poema"],["","Una carta"],["","Una receta"]], c:0, x:"Los poemas se escriben en versos, que son las líneas cortitas, y muchas veces riman."},
  {n:2, k:"tipos de texto", p:"Muchas leyendas explican...", o:[["","El origen de algo"],["","Cómo preparar una comida"],["","Lo que pasó ayer"]], c:0, x:"Las leyendas cuentan, por ejemplo, cómo nació una flor, un lago o un cerro."},
  {n:2, k:"tipos de texto", p:"¿Qué va al FINAL de una carta?", o:[["","La despedida y la firma"],["","El saludo"],["","La fecha y el lugar"]], c:0, x:"La carta parte con un saludo y termina con la despedida y el nombre de quien escribe."},
  {n:2, k:"rimas y adivinanzas", p:"¿Qué palabra rima con VENTANA?", o:[["","Mañana"],["","Vecina"],["","Ventilador"]], c:0, x:"Ven-ta-na y ma-ña-na terminan igual: -ana. Empezar parecido no hace rima."},
  {n:2, k:"rimas y adivinanzas", p:"¿Cuál pareja de palabras rima?", o:[["","Tomate y chocolate"],["","Tomate y tortuga"],["","Chocolate y chicle"]], c:0, x:"Toma-te y chocola-te terminan igual: -ate. La rima está al final."},
  {n:2, k:"rimas y adivinanzas", p:"Adivinanza: blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.", o:[["","La pera"],["","La palta"],["","La sandía"]], c:0, x:"¡Estaba escondida en la última palabra! Es-pera: es pera."},
  {n:2, k:"rimas y adivinanzas", p:"«Tres tristes tigres tragaban trigo en un trigal.» ¿Qué letras se repiten?", o:[["","TR"],["","BR"],["","PL"]], c:0, x:"Tres, tristes, tigres, tragaban, trigo, trigal: puro TR. Es un trabalenguas."},
  {n:2, k:"rimas y adivinanzas", p:"Adivinanza: tengo cabeza redonda y mi cuerpo está hecho de blancos dientes.", o:[["","El ajo"],["","La cebolla"],["","La papa"]], c:0, x:"Cada pedacito del ajo se llama diente. ¡Y la cabeza es el ajo entero!"},

  /* ================= NIVEL 3 ================= */
  /* --- comprender lo que leo --- */
  {n:3, k:"comprender lo que leo", p:"¿Por qué Theo no encontró su hueso?", t:"Theo escondió su hueso en el jardín, detrás del limonero. Al otro día lo buscó debajo del rosal y no lo encontró.", o:[["","Porque lo buscó en otro lugar"],["","Porque lo buscó de noche"],["","Porque se le olvidó buscar"]], c:0, x:"Lo escondió detrás del limonero, ¡pero lo buscó bajo el rosal!"},
  {n:3, k:"comprender lo que leo", p:"¿Cómo estaba el tiempo afuera?", t:"Gaspar abrió la puerta empapado, con las zapatillas llenas de barro y el pelo pegado a la frente.", o:[["","Estaba lloviendo"],["","Hacía mucho sol"],["","Estaba todo seco"]], c:0, x:"Empapado y con barro: esas pistas dicen que llovía, aunque no esté escrito."},
  {n:3, k:"comprender lo que leo", p:"¿Por qué Renata no tomó desayuno?", t:"Renata miró el reloj: faltaban cinco minutos para que pasara el furgón. Tomó su mochila y salió corriendo sin tomar desayuno.", o:[["","Porque estaba atrasada"],["","Porque no tenía hambre"],["","Porque no había comida"]], c:0, x:"Con solo cinco minutos no le alcanzaba el tiempo. Lo dedujiste por el reloj."},
  {n:3, k:"comprender lo que leo", p:"¿Qué pasará probablemente después?", t:"Javiera infló un globo más y más. El globo se puso enorme y muy tirante, pero Javiera siguió soplando.", o:[["","El globo va a reventar"],["","El globo se hará chico"],["","El globo cambiará de color"]], c:0, x:"Si un globo ya está tirante y le sigues soplando, ¡pum! Se revienta."},
  {n:3, k:"comprender lo que leo", p:"¿Para qué se escribió este texto?", t:"¡Gran feria de ciencias! Este viernes a las 10 en el gimnasio del colegio. Ven con tu familia. Entrada gratis.", o:[["","Para invitar a una feria"],["","Para contar un cuento"],["","Para explicar un experimento"]], c:0, x:"«Ven con tu familia» y el día y la hora: es una invitación."},
  {n:3, k:"comprender lo que leo", p:"¿Cómo se sintió Maite?", t:"Maite vio que todos sus compañeros llegaron disfrazados a la fiesta. Ella era la única con uniforme. Bajó la mirada y se escondió detrás de su mamá.", o:[["","Avergonzada"],["","Orgullosa"],["","Aburrida"]], c:0, x:"Bajar la mirada y esconderse son señales de vergüenza. Ser la única distinta cuesta."},
  {n:3, k:"comprender lo que leo", p:"¿Por qué se secaron las plantas de la abuela?", t:"Las plantas de la abuela Elena se pusieron amarillas y secas. La abuela estuvo un mes de viaje y nadie vino a regarlas.", o:[["","Porque nadie las regó"],["","Porque les dio frío"],["","Porque la abuela las cortó"]], c:0, x:"Juntaste dos datos: un mes sin agua y plantas secas. Sin riego, se secan."},
  {n:3, k:"comprender lo que leo", p:"¿Qué palabra describe mejor a Alonso?", t:"Aunque le temblaban las piernas, Alonso subió al escenario, miró al público y cantó su canción hasta el final.", o:[["","Valiente"],["","Flojo"],["","Distraído"]], c:0, x:"Tenía miedo y le temblaban las piernas, pero igual cantó: eso es ser valiente."},
  {n:3, k:"comprender lo que leo", p:"¿Dónde estaba Colomba?", t:"Colomba se puso el traje de baño, se echó bloqueador y corrió hacia las olas mientras su papá enterraba el quitasol en la arena.", o:[["","En la playa"],["","En una piscina"],["","En el campo"]], c:0, x:"Olas, arena y quitasol: ¡todas las pistas llevan a la playa!"},
  {n:3, k:"comprender lo que leo", p:"¿Qué hará seguramente la señora Laura?", t:"El cielo se puso negro y empezaron a sonar truenos. La señora Laura miró preocupada la ropa colgada en el patio.", o:[["","Entrar la ropa"],["","Colgar más ropa"],["","Regar el patio"]], c:0, x:"Truenos y cielo negro avisan lluvia: hay que entrar la ropa para que no se moje."},
  {n:3, k:"comprender lo que leo", p:"¿Cuál oración es VERDADERA según el texto?", t:"El pingüino de Humboldt vive en las costas de Chile y Perú. No vuela, pero nada muy rápido para atrapar peces.", o:[["","Es un ave que no vuela"],["","Vive solo en Perú"],["","Come hojas y frutas"]], c:0, x:"El texto dice que no vuela. Vive en Chile y Perú, y come peces."},
  {n:3, k:"comprender lo que leo", p:"¿Cómo se siente Marta con Joaquín?", t:"Querido Joaquín: gracias por cuidar a mi gata Pelusa mientras estuve en el hospital. Ya estoy bien y ella está feliz. Tu vecina, Marta.", o:[["","Agradecida"],["","Enojada"],["","Preocupada"]], c:0, x:"Le escribe para darle las gracias: se siente agradecida."},
  {n:3, k:"comprender lo que leo", p:"¿Quién es Pelusa?", t:"Querido Joaquín: gracias por cuidar a mi gata Pelusa mientras estuve en el hospital. Ya estoy bien y ella está feliz. Tu vecina, Marta.", o:[["","La gata de Marta"],["","La vecina de Joaquín"],["","La hermana de Joaquín"]], c:0, x:"Dice «mi gata Pelusa»: Pelusa es la gata. La vecina es Marta."},
  {n:3, k:"comprender lo que leo", p:"¿Adónde va Ignacia?", t:"Ignacia guardó en su mochila el traje de baño, la toalla, la gorra de natación y las antiparras.", o:[["","A la piscina"],["","A la biblioteca"],["","A un cumpleaños"]], c:0, x:"Gorra de natación y antiparras se usan para nadar: va a la piscina."},
  {n:3, k:"comprender lo que leo", p:"¿Qué estaban celebrando?", t:"Bastián apagó las velas mientras todos aplaudían. Después, su mamá cortó la torta y le dio un pedazo a cada invitado.", o:[["","Un cumpleaños"],["","Una graduación"],["","Un matrimonio"]], c:0, x:"Velas para apagar y torta para compartir: ¡era el cumpleaños de Bastián!"},
  {n:2, k:"comprender lo que leo", p:"¿Por qué la hormiga picó al cazador?", t:"Una paloma salvó a una hormiga que se ahogaba. Días después, la hormiga picó el pie de un cazador y así salvó a la paloma. Moraleja: un favor se paga con otro.", o:[["","Para salvar a la paloma"],["","Porque tenía hambre"],["","Porque estaba enojada"]], c:0, x:"La paloma la había salvado antes, y la hormiga le devolvió el favor."},
  {n:3, k:"comprender lo que leo", p:"¿Por qué Facundo llamó a su tía?", t:"Facundo encontró un pajarito caído del nido. Lo puso en una caja con algodón y llamó a su tía, que es veterinaria.", o:[["","Porque ella sabe curar animales"],["","Porque ella tenía una caja"],["","Porque quería regalárselo"]], c:0, x:"Los veterinarios son doctores de animales: ella sabría ayudar al pajarito."},
  {n:3, k:"comprender lo que leo", p:"¿Qué quería decir el letrero?", t:"Julieta leyó el letrero de la plaza: 🚫🐕. Entonces tomó a su perrita en brazos y se fue a otra plaza.", o:[["","Que no se permiten perros"],["","Que hay perros sueltos"],["","Que se venden perros"]], c:0, x:"La señal 🚫 significa «no se permite». Por eso Julieta se fue con su perrita."},
  /* --- vocabulario --- */
  {n:3, k:"vocabulario", p:"Según el texto, ¿qué significa DÓCIL?", t:"El perro de Cristóbal es muy dócil: se deja bañar, se deja peinar y nunca muerde a nadie.", o:[["","Tranquilo y obediente"],["","Bravo y peleador"],["","Rápido y juguetón"]], c:0, x:"Las pistas vienen después: se deja bañar y peinar. Eso es ser dócil."},
  {n:3, k:"vocabulario", p:"¿Qué quiere decir que el living quedó hecho un desastre?", t:"Después del cumpleaños, el living quedó hecho un desastre: había serpentinas, vasos y migas por todas partes.", o:[["","Que quedó muy desordenado"],["","Que quedó muy limpio"],["","Que quedó muy oscuro"]], c:0, x:"Serpentinas, vasos y migas por todas partes: ¡un desorden total!"},
  {n:3, k:"vocabulario", p:"«Amparo buscó por todas partes, pero el anillo había DESAPARECIDO.» ¿Qué significa?", o:[["","Que no lo podía encontrar"],["","Que estaba roto"],["","Que brillaba mucho"]], c:0, x:"Desaparecer es dejar de estar a la vista. Por eso no lo encontraba."},
  {n:3, k:"vocabulario", p:"Si «feliz» es estar contento, ¿qué significa «infeliz»?", o:[["","No estar feliz"],["","Estar muy feliz"],["","Volver a ser feliz"]], c:0, x:"IN al principio da la idea contraria: infeliz es lo opuesto de feliz."},
  {n:3, k:"vocabulario", p:"¿Qué significa REHACER un dibujo?", o:[["","Volver a hacerlo"],["","No hacerlo nunca"],["","Hacerlo muy rápido"]], c:0, x:"RE al principio significa otra vez: releer, repintar, rehacer."},
  {n:3, k:"vocabulario", p:"El que hace pan es el panadero. ¿Cómo se llama el que hace zapatos?", o:[["","Zapatero"],["","Zapatería"],["","Zapatilla"]], c:0, x:"-ERO nombra oficios: panadero, zapatero. La zapatería es el lugar."},
  {n:3, k:"vocabulario", p:"En «me senté en el banco de la plaza», ¿qué es un banco?", o:[["","Un asiento largo"],["","Un lugar para guardar plata"],["","Un grupo de peces"]], c:0, x:"Banco tiene varios significados. En una plaza, es un asiento."},
  {n:3, k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «generoso»?", o:[["","Egoísta"],["","Amable"],["","Tímido"]], c:0, x:"El generoso comparte; el egoísta quiere todo para él."},
  {n:3, k:"vocabulario", p:"¿Cuál palabra aparece PRIMERO en el diccionario?", v:"burro · bote · bicho", o:[["","Bicho"],["","Bote"],["","Burro"]], c:0, x:"Las tres parten con B, así que miras la segunda letra: la I va antes que la O y la U."},
  /* --- escribir bien / palabras --- */
  {n:3, k:"sonidos y letras", p:"¿Cómo se escribe este nombre?", v:"👦 Se llama En...", o:[["","Enrique"],["","Enrrique"],["","Enrike"]], c:0, x:"Después de N, la R suena fuerte, pero se escribe una sola: En-ri-que."},
  {n:3, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", o:[["","Honra"],["","Honrra"],["","Onrra"]], c:0, x:"Después de N va una sola R, aunque suene fuerte. Y honra lleva H."},
  {n:3, k:"sonidos y letras", p:"¿Cuál palabra está bien escrita?", v:"Un ave de patas largas que hace su nido en lo alto", o:[["","Cigüeña"],["","Cigueña"],["","Sigüeña"]], c:0, x:"Ci-güe-ña: con C al inicio, y los dos puntitos porque la U sí suena."},
  {n:3, k:"sonidos y letras", p:"¿Qué letras faltan?", v:"Almorzamos una hambur___sa 🍔", o:[["","gue"],["","ge"],["","güe"]], c:0, x:"Ham-bur-gue-sa: para que la G suene suave antes de E se pone GUE."},
  {n:3, k:"palabras y su función", p:"¿Quién llevó la cuerda?", t:"Valentina y Simón fueron al parque. Ella llevó la pelota y él llevó la cuerda.", o:[["","Simón"],["","Valentina"],["","Los dos"]], c:0, x:"«Él» reemplaza a Simón y «ella» a Valentina. Se llaman pronombres."},
  {n:3, k:"palabras y su función", p:"En «Las niñas cantan», ¿qué palabra puede reemplazar a «las niñas»?", o:[["","Ellas"],["","Ellos"],["","Nosotros"]], c:0, x:"Ellas cantan. «Ellas» es un pronombre femenino y plural, como las niñas."},
  {n:3, k:"singular y plural", p:"¿Qué palabrita va antes de «mano»?", o:[["","La"],["","El"],["","Los"]], c:0, x:"Mano termina en O, pero es femenina: la mano. ¡Es una palabra tramposa!"},
  {n:3, k:"escribir bien", p:"¿Qué palabras deben ir con mayúscula?", v:"el sábado fui a la casa de mi tía rosa.", o:[["","El y Rosa"],["","Sábado y Rosa"],["","Tía y Rosa"]], c:0, x:"Mayúscula al empezar la oración y en los nombres. Los días van con minúscula."},
  {n:3, k:"singular y plural", p:"¿Cuál es el plural de «el disfraz»?", o:[["","Los disfraces"],["","Los disfrazes"],["","Las disfraces"]], c:0, x:"La Z cambia a C en el plural, y EL cambia a LOS: los disfraces."},
  /* --- tipos de texto / rimas y adivinanzas --- */
  {n:3, k:"tipos de texto", p:"¿En qué se diferencia una noticia de un cuento?", o:[["","La noticia cuenta algo real"],["","La noticia siempre rima"],["","La noticia tiene hadas"]], c:0, x:"La noticia informa hechos que pasaron de verdad; el cuento es inventado."},
  {n:3, k:"tipos de texto", p:"¿Cuántos versos tiene este poema?", t:"La luna se asoma / detrás del cerro, / y le ladra contenta / mi amigo el perro.", o:[["","4 versos"],["","2 versos"],["","1 verso"]], c:0, x:"Cada línea de un poema es un verso. Las rayitas / separan las líneas: son 4."},
  {n:3, k:"rimas y adivinanzas", p:"¿Qué palabras riman en este poema?", t:"La luna se asoma / detrás del cerro, / y le ladra contenta / mi amigo el perro.", o:[["","Cerro y perro"],["","Luna y contenta"],["","Asoma y amigo"]], c:0, x:"Ce-rro y pe-rro terminan igual: -erro. ¡Por eso suenan tan bonito!"},
  {n:3, k:"tipos de texto", p:"¿Qué parte nos avisa que este texto es una fábula?", t:"Un cuervo con sed echó piedritas en un jarro, una por una, hasta que el agua subió y pudo beber. Moraleja: pensando se resuelven los problemas.", o:[["","La moraleja del final"],["","Que el cuervo tenía sed"],["","Que el jarro tenía agua"]], c:0, x:"La moraleja es la enseñanza escrita al final. ¡Es la marca de las fábulas!"},
  {n:3, k:"rimas y adivinanzas", p:"Adivinanza: oro parece, plata no es.", o:[["","El plátano"],["","El limón"],["","El choclo"]], c:0, x:"La respuesta está escondida: «plata no es» suena como plá-ta-no."},
  {n:3, k:"rimas y adivinanzas", p:"Adivinanza: te la digo y no me entiendes, te la repito y no me comprendes.", o:[["","La tela"],["","La lana"],["","La seda"]], c:0, x:"¡Te-la digo, te-la repito! La respuesta estaba en la misma adivinanza."},
  {n:3, k:"rimas y adivinanzas", p:"Adivinanza: todos me pisan a mí y todos preguntan por mí para saber adónde ir.", o:[["","La calle"],["","El zapato"],["","La puerta"]], c:0, x:"Por la calle caminamos, y preguntamos su nombre para llegar a un lugar."},
  {n:3, k:"rimas y adivinanzas", p:"«Pablito clavó un clavito.» ¿Qué grupos de letras suenan juntos?", o:[["","BL y CL"],["","PL y CL"],["","BR y CR"]], c:0, x:"Pa-BLi-to y CLa-vó, CLa-vi-to. ¡Fíjate que Pablito lleva BL, no PL!"},
  {n:3, k:"rimas y adivinanzas", p:"¿Cuál palabra NO rima con «estrella»?", o:[["","Estrecha"],["","Botella"],["","Huella"]], c:0, x:"Estrella, botella y huella terminan en -ella. Estrecha termina en -echa."}
]);

masPreguntas("matematica", [
  /* ===================== NIVEL 2 ===================== */
  /* figuras 2D y 3D */
  {n:2, k:"figuras", p:"Tengo 4 lados: 2 largos y 2 cortos. ¿Qué figura soy?", o:[["","Un rectángulo"],["","Un cuadrado"],["","Un triángulo"]], c:0, x:"El cuadrado tiene sus 4 lados iguales. El rectángulo tiene 2 largos y 2 cortos."},
  {n:2, k:"figuras", p:"¿Qué cuerpo puede rodar y también quedarse parado sin rodar?", o:[["🥫","El cilindro"],["⚽","La esfera"],["🎲","El cubo"]], c:0, x:"El cilindro rueda de lado y se para sobre su cara plana. La esfera siempre rueda."},
  {n:2, k:"figuras", p:"Una caja de zapatos tiene forma de...", v:"👟📦", o:[["","Paralelepípedo"],["","Cubo"],["","Cilindro"]], c:0, x:"Sus caras son rectángulos, no cuadrados iguales como en el cubo."},
  /* ubicación */
  {n:2, k:"ubicación", p:"¿Qué animal está ENTRE el gato y el oso?", v:"🐶 🐱 🐰 🐻", o:[["","El conejo"],["","El perro"],["","El gato"]], c:0, x:"Entre quiere decir al medio de los dos: gato, conejo, oso."},
  {n:2, k:"ubicación", p:"Mirando la fila, ¿qué fruta está justo a la DERECHA de la frutilla?", v:"🍎 🍓 🍌 🍇", o:[["","El plátano"],["","La manzana"],["","La uva"]], c:0, x:"Si lees la fila como un libro, justo después de la frutilla viene el plátano."},
  /* calendario */
  {n:2, k:"la hora y el calendario", p:"Hoy es martes 3. ¿Qué fecha será el martes de la próxima semana?", v:"📅 martes 3 + 7 días", o:[["","Martes 10"],["","Martes 4"],["","Martes 9"]], c:0, x:"Una semana son 7 días: 3 + 7 = 10."},
  {n:2, k:"la hora y el calendario", p:"¿Cuántas semanas son 14 días?", v:"7 días + 7 días", o:[["","2 semanas"],["","4 semanas"],["","14 semanas"]], c:0, x:"Cada semana tiene 7 días, y 7 + 7 = 14. Son 2 semanas."},
  /* medir */
  {n:2, k:"medir", p:"¿Qué mide más o menos 1 metro de largo?", o:[["🎸","Una guitarra"],["✏️","Un lápiz"],["🚌","Una micro"]], c:0, x:"La guitarra mide cerca de 1 metro. El lápiz es mucho más corto y la micro, larguísima."},
  {n:2, k:"medir", p:"Una regla mide 30 cm. ¿Cuántas reglas en fila necesitas para medir 60 cm?", v:"📏 = 30 cm", o:[["","2 reglas"],["","3 reglas"],["","30 reglas"]], c:0, x:"30 cm + 30 cm = 60 cm. Con 2 reglas en fila llegas justo."},
  /* gráficos, tablas y azar */
  {n:2, k:"gráficos y datos", p:"En el pictograma, ¿cuántos votos tuvo la frutilla?", v:"Frutilla 🍓🍓🍓 · Palta 🥑🥑 · cada dibujo = 2 votos", o:[["","6 votos"],["","3 votos"],["","5 votos"]], c:0, x:"Cada frutilla vale 2 votos: 2 + 2 + 2 = 6."},
  {n:2, k:"gráficos y datos", p:"En la tabla de conteo cada palito es un voto. ¿Cuántos votos tienen los perros?", v:"Perros: ||||| ||  ·  Gatos: |||", o:[["","7 votos"],["","5 votos"],["","3 votos"]], c:0, x:"Hay un grupo de 5 palitos y 2 más: 5 + 2 = 7."},
  {n:2, k:"juegos de azar", p:"Lanzas un dado normal. ¿Qué número NO puede salir?", v:"🎲", o:[["","7"],["","6"],["","1"]], c:0, x:"Un dado normal tiene 6 caras, con los números del 1 al 6. El 7 no está."},
  /* patrones */
  {n:2, k:"patrones", p:"¿Qué dibujo sigue en el patrón?", v:"☀️🌙⭐ ☀️🌙⭐ ☀️🌙 ?", o:[["⭐","La estrella"],["☀️","El sol"],["🌙","La luna"]], c:0, x:"El patrón se repite de a tres: sol, luna, estrella. Después de la luna viene la estrella."},
  {n:2, k:"patrones", p:"El patrón crece. ¿Cuántos triángulos tendrá el que sigue?", v:"🔺 · 🔺🔺🔺 · 🔺🔺🔺🔺🔺 · ?", o:[["","7 triángulos"],["","6 triángulos"],["","8 triángulos"]], c:0, x:"Cada vez se agregan 2 triángulos: 1, 3, 5... y 5 + 2 = 7."},

  /* ===================== NIVEL 3 ===================== */
  /* figuras */
  {n:3, k:"figuras", p:"Juntas 2 cuadrados iguales, uno al lado del otro. ¿Qué figura se forma?", v:"🟦🟦", o:[["","Un rectángulo"],["","Un triángulo"],["","Un círculo"]], c:0, x:"Quedan 4 lados: 2 largos y 2 cortos. ¡Eso es un rectángulo!"},
  {n:3, k:"figuras", p:"Un cubo tiene 4 vértices arriba y 4 abajo. ¿Cuántos vértices tiene en total?", v:"🎲", o:[["","8 vértices"],["","4 vértices"],["","6 vértices"]], c:0, x:"4 arriba y 4 abajo: 4 + 4 = 8 vértices. Las caras sí son 6."},
  {n:3, k:"figuras", p:"¿Qué cuerpo tiene 2 caras planas con forma de círculo?", o:[["🥫","El cilindro"],["🍦","El cono"],["🔮","La esfera"]], c:0, x:"El cilindro tiene un círculo arriba y otro abajo. El cono tiene solo uno."},
  /* ubicación */
  {n:3, k:"ubicación", p:"Estoy a la derecha de la micro y a la izquierda del taxi. ¿Quién soy?", v:"🚗 🚌 🚲 🚕", o:[["","La bicicleta"],["","El auto"],["","La micro"]], c:0, x:"La bicicleta está justo después de la micro y justo antes del taxi."},
  {n:3, k:"ubicación", p:"En la fila, Sofía está detrás de Pablo. ¿Quién llega primero a la puerta?", v:"🚪 ← la fila avanza hacia la puerta", o:[["","Pablo"],["","Sofía"],["","Llegan juntos"]], c:0, x:"Si Sofía está detrás, Pablo va delante de ella. Por eso él llega primero."},
  /* calendario */
  {n:3, k:"la hora y el calendario", p:"Hoy es 30 de abril. ¿Qué fecha será mañana?", v:"📅 abril tiene 30 días", o:[["","1 de mayo"],["","31 de abril"],["","31 de mayo"]], c:0, x:"Abril termina el día 30, así que al día siguiente empieza mayo."},
  {n:3, k:"la hora y el calendario", p:"Hoy es jueves 10. Mi cumpleaños es en 2 semanas justas. ¿Qué fecha es?", v:"jueves 10 → + 7 días → + 7 días", o:[["","Jueves 24"],["","Jueves 17"],["","Jueves 12"]], c:0, x:"10 + 7 = 17, y 17 + 7 = 24. Dos semanas después sigue siendo jueves."},
  /* medir */
  {n:3, k:"medir", p:"Martina mide 1 metro y 20 cm. Su hermano mide 1 metro y 10 cm. ¿Quién es más alto?", o:[["","Martina"],["","Su hermano"],["","Miden igual"]], c:0, x:"Los dos pasan el metro, pero a Martina le sobran 20 cm y a él solo 10."},
  {n:3, k:"medir", p:"¿Cuánto mide más o menos una puerta de alto?", v:"🚪", o:[["","2 metros"],["","2 centímetros"],["","20 metros"]], c:0, x:"Una puerta es un poco más alta que un adulto: cerca de 2 metros."},
  /* gráficos y azar */
  {n:3, k:"gráficos y datos", p:"¿Cuántos niños más llevaron paraguas el lunes que el martes?", v:"Lunes 🌂🌂🌂 · Martes 🌂 · cada 🌂 = 5 niños", o:[["","10 niños"],["","2 niños"],["","15 niños"]], c:0, x:"El lunes fueron 15 y el martes 5. De 5 a 15 hay 10."},
  {n:3, k:"gráficos y datos", p:"¿Cuántos votos tienen chocolate y frutilla juntos?", v:"Chocolate ▇▇▇▇▇ · Frutilla ▇▇▇ · Vainilla ▇▇▇▇ · cada ▇ = 1 voto", o:[["","8 votos"],["","2 votos"],["","9 votos"]], c:0, x:"Chocolate tiene 5 y frutilla 3: 5 + 3 = 8."},
  {n:3, k:"juegos de azar", p:"Sacas una bolita de la bolsa sin mirar. ¿Qué es más probable?", v:"🔴🔴🔴🔴🔴🔵", o:[["","Que salga roja"],["","Que salga azul"],["","Las dos igual"]], c:0, x:"Hay 5 rojas y solo 1 azul. Es mucho más fácil sacar una roja."},
  /* patrones */
  {n:3, k:"patrones", p:"El patrón sigue igual. ¿Qué figura va en el lugar número 9?", v:"1🔺 2🟦 3⭕ 4🔺 5🟦 6⭕ …", o:[["⭕","El círculo"],["🔺","El triángulo"],["🟦","El cuadrado"]], c:0, x:"El círculo va en los lugares 3, 6 y 9. ¡Se repite cada 3!"},
  {n:3, k:"patrones", p:"El patrón crece. ¿Cuántas flores tendrá la figura que sigue?", v:"🌸🍀 · 🌸🌸🍀🍀 · 🌸🌸🌸🍀🍀🍀 · ?", o:[["","4 flores"],["","3 flores"],["","8 flores"]], c:0, x:"Cada vez hay una flor más: 1, 2, 3... y ahora 4. Con los tréboles serían 8 dibujos."}
]);

masPreguntas("ciencias", [
  /* ================= NIVEL 2 ================= */
  /* vertebrados */
  {n:2, k:"vertebrados", p:"El pingüino no vuela, pero es un ave. ¿Qué lo hace ave?", o:[["","Tiene plumas y pico"],["","Vive en lugares fríos"],["","Nada muy bien en el mar"]], c:0, x:"Todas las aves tienen plumas y pico, aunque algunas no vuelen, como el pingüino."},
  {n:2, k:"vertebrados", p:"¿Qué diferencia la piel de una rana de la piel de una lagartija?", o:[["","La rana la tiene húmeda y sin escamas"],["","La rana la tiene seca y con escamas"],["","La rana la tiene cubierta de pelos"]], c:0, x:"Los anfibios, como la rana, tienen piel lisa y húmeda. Los reptiles tienen escamas secas."},
  {n:2, k:"vertebrados", p:"El tiburón vive en el mar y respira con branquias. ¿Qué es?", o:[["","Un pez"],["","Un mamífero"],["","Un reptil"]], c:0, x:"Respirar con branquias bajo el agua es propio de los peces. ¡El tiburón es un pez!"},
  {n:2, k:"vertebrados", p:"¿Cuál de estos animales vive en el mar, pero respira aire con pulmones?", o:[["","La tortuga marina"],["","El pez espada"],["","El tiburón blanco"]], c:0, x:"La tortuga marina es un reptil: sube a la superficie a respirar aire con sus pulmones."},
  {n:2, k:"vertebrados", p:"¿Qué tienen en común TODOS los mamíferos?", o:[["","Sus crías toman leche de la mamá"],["","Todos caminan en cuatro patas"],["","Todos viven en tierra firme"]], c:0, x:"Por eso se llaman mamíferos: las mamás tienen mamas con leche. ¡Hay mamíferos que nadan y vuelan!"},
  {n:2, k:"vertebrados", p:"¿Qué cubre el cuerpo de la gallina y el de la tortuga?", o:[["","Plumas la gallina, escamas la tortuga"],["","Pelos la gallina, plumas la tortuga"],["","Escamas la gallina, pelos la tortuga"]], c:0, x:"Las dos ponen huevos, pero la gallina es ave (plumas) y la tortuga es reptil (escamas)."},
  /* invertebrados */
  {n:2, k:"invertebrados", p:"¿Por qué la araña NO es un insecto?", o:[["","Porque tiene 8 patas y no 6"],["","Porque come otros insectos"],["","Porque vive en su tela"]], c:0, x:"Los insectos tienen 6 patas. La araña tiene 8: es un arácnido."},
  {n:2, k:"invertebrados", p:"¿Qué tienen en común el cangrejo, el camarón y la langosta?", o:[["","Son crustáceos con caparazón duro"],["","Son insectos que viven en el mar"],["","Son peces con muchas patas"]], c:0, x:"Los crustáceos tienen un caparazón duro que los protege, antenas y muchas patas."},
  {n:2, k:"invertebrados", p:"¿En qué se diferencian un insecto y un pez?", o:[["","El pez tiene columna y el insecto no"],["","El insecto tiene columna y el pez no"],["","Los dos tienen columna vertebral"]], c:0, x:"El pez es vertebrado. El insecto es invertebrado: no tiene huesos, sino una cubierta dura por fuera."},
  {n:2, k:"invertebrados", p:"¿Cuántas partes tiene el cuerpo de un insecto?", v:"🐜", o:[["","Tres: cabeza, tórax y abdomen"],["","Dos: cabeza y cola"],["","Cuatro: cabeza, alas, patas y cola"]], c:0, x:"Todos los insectos tienen cabeza, tórax y abdomen. En el tórax van sus 6 patas."},
  {n:2, k:"invertebrados", p:"El pulpo tiene 8 brazos blanditos y no tiene huesos. Entonces es...", o:[["","Un invertebrado"],["","Un vertebrado"],["","Un pez"]], c:0, x:"Como no tiene columna vertebral, el pulpo es invertebrado. ¡Por eso cabe en huequitos chicos!"},
  /* ciclo de vida */
  {n:2, k:"ciclo de vida", p:"¿Cuál es el orden correcto del ciclo de vida de la rana?", o:[["","Huevo, renacuajo, rana joven, rana"],["","Renacuajo, huevo, rana joven, rana"],["","Huevo, rana joven, renacuajo, rana"]], c:0, x:"Primero el huevo en el agua, luego el renacuajo, después la ranita joven y al final la rana adulta."},
  {n:2, k:"ciclo de vida", p:"La mariposa pone sus huevos sobre una hoja. ¿Por qué?", o:[["","Para que la oruga tenga comida al nacer"],["","Para que los huevos tomen sol"],["","Para que el viento se los lleve"]], c:0, x:"Cuando la oruga nace, empieza a comerse las hojas de esa misma planta."},
  {n:2, k:"ciclo de vida", p:"El renacuajo tiene cola y respira con branquias. Cuando crece...", o:[["","Pierde la cola y le crecen patas"],["","Le crecen alas y plumas"],["","Le salen escamas y aletas"]], c:0, x:"Eso es la metamorfosis: el renacuajo cambia hasta ser rana y respirar con pulmones."},
  {n:2, k:"ciclo de vida", p:"¿Por qué la gallina se echa encima de sus huevos?", o:[["","Para darles calor y que nazcan"],["","Para esconderlos del sol"],["","Para que se pongan duros"]], c:0, x:"Los huevos necesitan calorcito para que el pollito crezca adentro."},
  {n:2, k:"ciclo de vida", p:"¿Qué hace la oruga casi todo el día?", o:[["","Come hojas para crecer"],["","Pone huevos"],["","Vuela entre las flores"]], c:0, x:"La oruga come y come para juntar energía antes de transformarse en mariposa."},
  /* hábitat */
  {n:2, k:"hábitat", p:"¿Por qué el chanchito de tierra vive debajo de las piedras?", o:[["","Porque ahí hay humedad y sombra"],["","Porque ahí hace más calor"],["","Porque le gusta la luz fuerte"]], c:0, x:"El chanchito de tierra necesita lugares húmedos y oscuros. Con sol fuerte se seca."},
  {n:2, k:"hábitat", p:"¿Por qué la lagartija se tiende al sol en la mañana?", o:[["","Para calentar su cuerpo"],["","Para secarse la piel mojada"],["","Para buscar agua"]], c:0, x:"Los reptiles necesitan el calor del sol para calentarse y poder moverse bien."},
  {n:2, k:"hábitat", p:"En el desierto de Atacama casi no llueve. ¿Qué necesita un animal para vivir ahí?", o:[["","Aguantar mucho tiempo con poca agua"],["","Nadar en ríos grandes"],["","Tomar agua de lluvia a diario"]], c:0, x:"Los animales del desierto están preparados para vivir con muy poquita agua."},
  {n:2, k:"hábitat", p:"Al fondo del mar, muy abajo, no llega la luz del sol. ¿Cómo es ese lugar?", o:[["","Oscuro y muy frío"],["","Iluminado y caluroso"],["","Oscuro y caluroso"]], c:0, x:"Sin luz del sol, las profundidades del mar son oscuras y el agua es muy fría."},
  {n:2, k:"hábitat", p:"Una rana necesita tener la piel húmeda. ¿Qué hábitat le sirve más?", o:[["","Un bosque con una laguna"],["","Un desierto con dunas"],["","Una playa de arena seca"]], c:0, x:"En un bosque con laguna hay agua y humedad, justo lo que necesita un anfibio."},
  /* animales de Chile */
  {n:2, k:"animales de Chile", p:"¿Por qué el huemul está en peligro de extinción?", o:[["","Porque ha perdido parte de su hábitat"],["","Porque se come todos los pastos"],["","Porque vive demasiado tiempo"]], c:0, x:"Cuando se destruye el lugar donde vive, el huemul pierde refugio y comida."},
  {n:2, k:"animales de Chile", p:"¿Dónde vive el huillín, una nutria chilena en peligro?", o:[["","En ríos y lagos del sur"],["","En el desierto del norte"],["","En la cumbre de los volcanes"]], c:0, x:"El huillín necesita ríos y lagos limpios. Por eso contaminarlos lo pone en peligro."},
  {n:2, k:"animales de Chile", p:"En el mar, una tortuga puede confundir una bolsa plástica con...", o:[["","Una medusa para comer"],["","Una roca para descansar"],["","Una ola del mar"]], c:0, x:"Las bolsas en el agua se parecen a las medusas. Por eso nunca hay que botar basura al mar."},
  {n:2, k:"animales de Chile", p:"¿Cuál de estas acciones ayuda a proteger al pudú?", o:[["","No dejar a los perros sueltos en el campo"],["","Darle pan y galletas si lo ves"],["","Llevarlo a vivir a tu casa"]], c:0, x:"Los perros sueltos atacan a los pudúes. Cuidar a tu mascota también cuida a los animales nativos."},
  {n:2, k:"animales de Chile", p:"El picaflor de Arica es un pajarito muy chiquitito. ¿Dónde vive?", o:[["","En valles del norte de Chile"],["","En los hielos del sur"],["","En islas del océano Pacífico"]], c:0, x:"Vive en valles como Azapa y Lluta, y está en peligro crítico: quedan muy poquitos."},
  /* mi cuerpo */
  {n:2, k:"mi cuerpo", p:"¿En qué parte del cuerpo está el estómago?", o:[["","En la parte de arriba de la guata"],["","Dentro del pecho, entre los pulmones"],["","En la espalda, junto a la columna"]], c:0, x:"El estómago está arriba en la guata, hacia la izquierda, justo bajo las costillas."},
  {n:2, k:"mi cuerpo", p:"El corazón es un músculo. ¿Qué hace sin parar, incluso cuando duermes?", o:[["","Bombea sangre a todo el cuerpo"],["","Llena de aire los pulmones"],["","Mueve los huesos de las piernas"]], c:0, x:"El corazón nunca descansa: día y noche empuja la sangre por todo tu cuerpo."},
  {n:2, k:"mi cuerpo", p:"¿Qué pasa con el aire que entra a los pulmones?", o:[["","La sangre toma su oxígeno"],["","Se convierte en comida"],["","Se queda guardado para siempre"]], c:0, x:"En los pulmones, el oxígeno del aire pasa a la sangre, y el corazón lo reparte."},
  {n:2, k:"mi cuerpo", p:"¿Qué trabajan juntos para que puedas patear una pelota?", o:[["","Los músculos y los huesos"],["","El estómago y los pulmones"],["","El corazón y el cráneo"]], c:0, x:"Los músculos tiran de los huesos, y así se mueve tu pierna."},
  {n:2, k:"mi cuerpo", p:"Más o menos, ¿de qué tamaño es tu corazón?", o:[["","Como tu puño cerrado"],["","Como una pelota de fútbol"],["","Como una uva chica"]], c:0, x:"Tu corazón es más o menos del tamaño de tu puño, y crece contigo."},
  /* vida sana */
  {n:2, k:"vida sana", p:"¿Por qué respiras más rápido cuando corres?", o:[["","Tus músculos necesitan más oxígeno"],["","Tu estómago necesita más comida"],["","El aire se acaba más rápido"]], c:0, x:"Al correr, los músculos trabajan más y piden más oxígeno. Por eso respiras rápido."},
  {n:2, k:"vida sana", p:"¿Qué le pasa a tu corazón si haces actividad física seguido?", o:[["","Se pone más fuerte"],["","Se pone más débil"],["","Se pone más chico"]], c:0, x:"El corazón es un músculo: con ejercicio se fortalece y trabaja mejor."},
  {n:2, k:"vida sana", p:"¿Cuánto rato conviene que los niños jueguen moviéndose cada día?", o:[["","Al menos una hora"],["","Cinco minutos"],["","Solo el fin de semana"]], c:0, x:"Se recomienda moverse al menos 60 minutos al día: correr, saltar, andar en bici..."},
  /* el agua */
  {n:2, k:"el agua", p:"Pones una cucharada de azúcar en agua y revuelves. ¿Qué pasa?", o:[["","Se disuelve y ya no se ve"],["","Se queda flotando arriba"],["","Se convierte en hielo"]], c:0, x:"El azúcar se disuelve: sigue ahí, por eso el agua queda dulce, pero ya no la ves."},
  {n:2, k:"el agua", p:"¿Qué pasa si mezclas arena con agua y dejas de revolver?", o:[["","La arena se va al fondo"],["","La arena desaparece"],["","La arena se vuelve líquida"]], c:0, x:"La arena no se disuelve en el agua. Cuando la dejas quieta, se va al fondo del vaso."},
  {n:2, k:"el agua", p:"¿Por qué la ropa mojada se seca más rápido al sol?", o:[["","El calor evapora el agua más rápido"],["","El sol empuja el agua hacia el suelo"],["","El calor congela el agua de la ropa"]], c:0, x:"Con calor, el agua de la ropa se evapora más rápido y sube al aire como vapor."},
  {n:2, k:"el agua", p:"Si derramas agua en una mesa inclinada, el agua...", o:[["","Escurre hacia la parte más baja"],["","Se queda quieta en su lugar"],["","Sube hacia la parte más alta"]], c:0, x:"El agua es líquida y escurre: siempre corre hacia abajo."},
  {n:2, k:"el agua", p:"¿Qué tienen en común el hielo, la lluvia y el vapor?", o:[["","Son agua en distintos estados"],["","Son agua en estado sólido"],["","Son agua muy salada"]], c:0, x:"Es la misma agua: sólida en el hielo, líquida en la lluvia y gaseosa en el vapor."},
  {n:2, k:"el agua", p:"Dejas un cubo de hielo en un plato en un día caluroso. ¿Qué pasa?", o:[["","Se derrite y queda agua líquida"],["","Se endurece todavía más"],["","Se convierte en sal"]], c:0, x:"Con el calor, el hielo (sólido) se derrite y pasa a ser agua líquida."},
  /* el tiempo y las estaciones */
  {n:2, k:"el tiempo y las estaciones", p:"¿Qué día llovió más?", v:"🌧️ Pluviómetro → lunes: 8 mm · martes: 15 mm · miércoles: 3 mm", o:[["","El martes"],["","El lunes"],["","El miércoles"]], c:0, x:"El pluviómetro marcó 15 mm el martes, el número más grande: ese día llovió más."},
  {n:2, k:"el tiempo y las estaciones", p:"¿Qué pasó con la temperatura?", v:"🌡️ Mañana: 6 grados → Mediodía: 18 grados", o:[["","Subió"],["","Bajó"],["","Quedó igual"]], c:0, x:"De 6 a 18 grados, la temperatura subió: al mediodía hacía más calor."},
  {n:2, k:"el tiempo y las estaciones", p:"¿Qué precipitación cae como copos blancos y suaves cuando hace mucho frío?", o:[["","La nieve"],["","El granizo"],["","La lluvia"]], c:0, x:"La nieve cae en copos suaves. El granizo, en cambio, son bolitas duras de hielo."},
  {n:2, k:"el tiempo y las estaciones", p:"¿Cómo sabes que hay viento, aunque no lo puedas ver?", o:[["","Se mueven las ramas y las banderas"],["","El termómetro marca más grados"],["","El cielo se pone más azul"]], c:0, x:"El viento es aire en movimiento: no lo vemos, pero vemos cómo mueve las cosas."},
  {n:2, k:"el tiempo y las estaciones", p:"En Chile, la Navidad llega en...", o:[["","Verano"],["","Invierno"],["","Otoño"]], c:0, x:"En Chile el verano empieza en diciembre. Por eso tenemos Navidad con calor."},

  /* ================= NIVEL 3 ================= */
  /* vertebrados */
  {n:3, k:"vertebrados", p:"La ballena vive en el mar, pero sube a la superficie cada cierto rato. ¿Para qué?", o:[["","Para respirar aire con sus pulmones"],["","Para tomar sol en el lomo"],["","Para buscar comida en la arena"]], c:0, x:"La ballena es mamífero: respira aire por un orificio en la cabeza. ¡No tiene branquias!"},
  {n:3, k:"vertebrados", p:"¿Cuál de estos animales NO es un pez?", o:[["","El delfín"],["","El tiburón"],["","El caballito de mar"]], c:0, x:"El delfín respira aire y amamanta: es mamífero. El tiburón y el caballito de mar son peces."},
  {n:3, k:"vertebrados", t:"Un animal misterioso tiene la piel seca y cubierta de escamas. Respira con pulmones y pone sus huevos en la arena.", p:"¿A qué grupo pertenece?", o:[["","Reptiles"],["","Anfibios"],["","Peces"]], c:0, x:"Piel seca con escamas, pulmones y huevos en tierra: ¡eso es un reptil, como la tortuga!"},
  {n:3, k:"vertebrados", p:"El murciélago y la paloma vuelan. ¿Qué característica muestra que la paloma es un ave?", o:[["","Tiene plumas"],["","Tiene alas"],["","Puede volar"]], c:0, x:"El murciélago también tiene alas y vuela, pero no tiene plumas. Las plumas son solo de las aves."},
  /* invertebrados */
  {n:3, k:"invertebrados", t:"El chanchito de tierra tiene 14 patas y un caparazón duro. Es pariente cercano del camarón y del cangrejo.", p:"¿A qué grupo pertenece?", o:[["","Crustáceos"],["","Insectos"],["","Arácnidos"]], c:0, x:"No es insecto (tiene más de 6 patas). Es un crustáceo que vive en tierra húmeda."},
  {n:3, k:"invertebrados", p:"¿Cuál de estos animales es un insecto?", o:[["","La chinita"],["","La araña"],["","El ciempiés"]], c:0, x:"La chinita tiene 6 patas. La araña tiene 8 y el ciempiés, muchísimas más."},
  {n:3, k:"invertebrados", p:"El escorpión tiene 8 patas, además de dos pinzas. ¿A qué grupo pertenece?", o:[["","Arácnidos"],["","Crustáceos"],["","Insectos"]], c:0, x:"Como la araña, el escorpión tiene 8 patas: es un arácnido. Sus pinzas no son patas."},
  /* ciclo de vida */
  {n:3, k:"ciclo de vida", t:"Los mosquitos ponen sus huevos en agua quieta. Sus larvas viven en el agua hasta convertirse en mosquitos que vuelan.", p:"¿Por qué conviene vaciar los tarros con agua de lluvia del patio?", o:[["","Para que no nazcan más mosquitos"],["","Para que las plantas tengan sed"],["","Para que el agua se ponga salada"]], c:0, x:"Sin agua quieta, los mosquitos no tienen dónde poner huevos. ¡Así cortas su ciclo de vida!"},
  {n:3, k:"ciclo de vida", t:"El saltamontes nace de un huevo. La cría se parece a sus papás, pero es pequeña y todavía no puede volar. Crece cambiando de piel.", p:"¿En qué se diferencia del ciclo de la mariposa?", o:[["","Su cría ya se parece al adulto"],["","Su cría es una oruga"],["","Su cría nace de la panza"]], c:0, x:"La cría de la mariposa es una oruga muy distinta. La del saltamontes ya se parece a sus papás."},
  {n:3, k:"ciclo de vida", t:"La ranita de Darwin vive en bosques del sur de Chile. El papá guarda los renacuajos dentro de su boca hasta que salen convertidos en ranitas.", p:"¿Por qué no encontrarías sus renacuajos nadando en una laguna?", o:[["","Porque crecen en la boca del papá"],["","Porque viven arriba de los árboles"],["","Porque se esconden bajo la arena"]], c:0, x:"Sus renacuajos crecen protegidos en la boca del papá. ¡Un papá muy cuidadoso!"},
  /* hábitat */
  {n:3, k:"hábitat", t:"Sofía puso lombrices en una caja. Un lado tenía tierra seca al sol y el otro, tierra húmeda a la sombra.", p:"¿Hacia qué lado crees que irán las lombrices?", o:[["","Al lado húmedo y a la sombra"],["","Al lado seco y con sol"],["","Se quedarán justo al medio"]], c:0, x:"Las lombrices respiran por la piel y necesitan humedad. El sol y la luz las secan."},
  {n:3, k:"hábitat", p:"El pingüino emperador vive en la Antártida. ¿Qué lo ayuda a no pasar frío?", o:[["","Grasa y plumas muy apretadas"],["","Una piel lisa y húmeda"],["","Unas escamas muy delgadas"]], c:0, x:"Bajo sus plumas apretaditas tiene grasa que guarda el calor, como un abrigo por dentro."},
  {n:3, k:"hábitat", p:"¿Por qué en el desierto muchos animales salen solo de noche?", o:[["","Porque de día hace demasiado calor"],["","Porque de noche llueve siempre"],["","Porque de noche hay más luz"]], c:0, x:"De día el sol calienta muchísimo. De noche refresca y es más fácil buscar comida."},
  /* animales de Chile */
  {n:3, k:"animales de Chile", t:"El huillín es una nutria que vive en ríos del sur. Come peces y camarones de río. Si el río se contamina, esos animales mueren.", p:"¿Qué le pasaría al huillín si su río se contamina?", o:[["","Se quedaría sin alimento"],["","Tendría más peces para comer"],["","Se iría a vivir al desierto"]], c:0, x:"Si mueren los peces y camarones, el huillín no tiene qué comer. Todo en el hábitat está conectado."},
  {n:3, k:"animales de Chile", p:"¿Qué ayuda MÁS a proteger a un animal en peligro de extinción?", o:[["","Cuidar el lugar donde vive"],["","Sacarle fotos de cerca"],["","Darle comida de la casa"]], c:0, x:"Si su hábitat está sano, el animal tiene refugio, comida y agua para vivir y tener crías."},
  {n:3, k:"animales de Chile", p:"En un camino del sur hay un letrero: «Cuidado, cruce de animales». ¿Qué debe hacer quien maneja?", o:[["","Ir más lento y con atención"],["","Ir más rápido para pasar luego"],["","Subir el volumen de la radio"]], c:0, x:"Así evita atropellar animales como el pudú, que cruzan los caminos del sur."},
  /* mi cuerpo */
  {n:3, k:"mi cuerpo", p:"El corazón y los músculos de las piernas tienen algo en común. ¿Qué es?", o:[["","Los dos son músculos"],["","Los dos son huesos"],["","Los dos guardan aire"]], c:0, x:"El corazón también es un músculo, ¡el que más trabaja! Se contrae para bombear sangre."},
  {n:3, k:"mi cuerpo", p:"Diego contó sus latidos en un minuto. ¿Por qué cambió el número?", v:"❤️ Sentado: 85 latidos → Después de saltar la cuerda: 130 latidos", o:[["","Saltar hizo latir más rápido su corazón"],["","Saltar hizo latir más lento su corazón"],["","Diego contó mal la segunda vez"]], c:0, x:"Al saltar, los músculos piden más oxígeno y el corazón late más rápido para llevarlo."},
  {n:3, k:"mi cuerpo", p:"Los huesos no se pueden mover solos. ¿Qué los mueve?", o:[["","Los músculos que están unidos a ellos"],["","La sangre que pasa por dentro"],["","El aire que entra a los pulmones"]], c:0, x:"Los músculos están unidos a los huesos: cuando se contraen, tiran de ellos y te mueves."},
  /* el agua */
  {n:3, k:"el agua", t:"Camila echó sal en un vaso con agua y revolvió hasta que no se vio. Dejó el vaso al sol muchos días, hasta que el agua desapareció.", p:"¿Qué encontró en el fondo del vaso?", o:[["","La sal, porque no se evapora"],["","Nada, la sal se fue con el agua"],["","Hielo, por el calor del sol"]], c:0, x:"El agua se evaporó, pero la sal no. ¡Así se saca la sal del agua de mar en las salinas!"},
  {n:3, k:"el agua", p:"Sacas un vaso de jugo helado del refri y por fuera aparecen gotitas. ¿De dónde salen?", o:[["","Del vapor del aire que se enfría"],["","Del jugo que traspasa el vidrio"],["","Del vidrio que se derrite"]], c:0, x:"El aire tiene vapor de agua invisible. Al tocar el vaso frío, se convierte en gotitas."},
  {n:3, k:"el agua", p:"Llenas una botella plástica hasta arriba con agua y la congelas. ¿Qué pasa?", o:[["","Se infla: el hielo ocupa más espacio"],["","Se achica: el hielo ocupa menos espacio"],["","Queda igual: es la misma agua"]], c:0, x:"Al congelarse, el agua se expande. ¡Por eso nunca hay que congelar botellas de vidrio llenas!"},
  {n:3, k:"el agua", p:"En el ciclo del agua, ¿qué se forma cuando el vapor sube y se enfría?", o:[["","Las nubes"],["","El mar"],["","Los ríos"]], c:0, x:"Arriba hace frío: el vapor se junta en gotitas y forma las nubes. Luego vuelve a caer como lluvia."},
  {n:3, k:"el agua", t:"En la Tierra hay mucha agua, pero casi toda es salada, del mar. Muy poquita es agua dulce que podamos tomar.", p:"¿Por qué es importante no malgastar el agua de la llave?", o:[["","Porque el agua dulce es escasa"],["","Porque el agua de la llave es salada"],["","Porque el agua del mar se acaba"]], c:0, x:"El agua que tomamos es poquita comparada con la del mar. Por eso hay que cuidarla."},
  {n:3, k:"el agua", p:"En primavera se derrite la nieve de la cordillera. ¿Qué les pasa a los ríos?", o:[["","Llevan más agua"],["","Se secan del todo"],["","Se congelan"]], c:0, x:"El agua de la nieve derretida baja por los cerros y alimenta los ríos de Chile."},
  /* el tiempo y las estaciones */
  {n:3, k:"el tiempo y las estaciones", p:"Según los pluviómetros, ¿qué ciudad fue la más seca ese mes?", v:"🌧️ Arica: 0 mm · Santiago: 20 mm · Valdivia: 190 mm", o:[["","Arica"],["","Santiago"],["","Valdivia"]], c:0, x:"Más seco quiere decir que llovió menos. En Arica el pluviómetro marcó 0 mm."},
  {n:3, k:"el tiempo y las estaciones", p:"¿Por qué algunas aves viajan a lugares lejanos cuando llega el frío?", o:[["","Para buscar calor y comida"],["","Para conocer otras aves"],["","Para aprender a volar"]], c:0, x:"Con el frío hay menos comida. Esos viajes largos de las aves se llaman migraciones."},
  {n:3, k:"el tiempo y las estaciones", p:"En un día de sol, ¿a qué hora el termómetro suele marcar más grados?", v:"🌡️ 8:00 · 14:00 · 20:00", o:[["","A las 14:00"],["","A las 8:00"],["","A las 20:00"]], c:0, x:"En la mañana hace frío, a la hora de almuerzo el sol ya calentó todo, y en la noche vuelve a enfriar."},
  /* las plantas (3° básico, OA01 y OA03) */
  {n:3, k:"las plantas", p:"¿Qué función cumple la raíz de una planta?", o:[["","Absorbe agua y sujeta la planta"],["","Fabrica las flores y los frutos"],["","Atrapa la luz del sol"]], c:0, x:"La raíz saca el agua de la tierra y afirma la planta para que no se caiga."},
  {n:3, k:"las plantas", t:"Pusimos un tallo de apio en agua con colorante azul. Al día siguiente, sus hojas tenían partes azules.", p:"¿Qué muestra este experimento?", o:[["","El tallo lleva el agua hasta las hojas"],["","Las hojas fabrican el color azul"],["","El apio se tiñe solo con la luz"]], c:0, x:"El agua con color subió por el tallo hasta las hojas. ¡El tallo es como una cañería!"},
  {n:3, k:"las plantas", t:"Tomás puso una planta en un clóset oscuro y otra igual junto a la ventana. Las regó igual durante dos semanas.", p:"¿Cómo estará la planta del clóset?", o:[["","Pálida y débil"],["","Verde y más grande"],["","Llena de flores"]], c:0, x:"Las plantas necesitan luz para fabricar su alimento. Sin luz se ponen pálidas y débiles."},
  {n:3, k:"las plantas", p:"¿Qué hace la abeja que ayuda a la planta a formar frutos?", o:[["","Lleva polen de una flor a otra"],["","Riega la flor con su néctar"],["","Se come las hojas viejas"]], c:0, x:"Eso se llama polinización: gracias al polen que llevan las abejas, la flor forma el fruto."},
  {n:3, k:"las plantas", p:"El diente de león tiene semillas con pelitos, como paracaídas. ¿Qué las lleva lejos?", o:[["","El viento"],["","La lluvia"],["","Las lombrices"]], c:0, x:"El viento sopla y las semillas vuelan lejos. Así la planta llega a nuevos lugares."},
  /* alimentación saludable (3° básico, OA06 y OA07) */
  {n:3, k:"alimentación saludable", p:"¿Qué alimentos tienen harto calcio para tener huesos fuertes?", o:[["","La leche, el yogur y el queso"],["","Los dulces y las bebidas"],["","Las papas fritas y el pan"]], c:0, x:"Los lácteos tienen calcio, que ayuda a que tus huesos y dientes crezcan fuertes."},
  {n:3, k:"alimentación saludable", p:"Un envase tiene un sello negro que dice «ALTO EN AZÚCARES». ¿Qué te avisa?", o:[["","Que conviene comerlo poco"],["","Que es bueno comerlo a diario"],["","Que no tiene nada de azúcar"]], c:0, x:"El sello avisa que tiene mucha azúcar. Es mejor elegir alimentos con menos sellos."},
  {n:3, k:"alimentación saludable", p:"¿Por qué hay que guardar la leche abierta en el refrigerador?", o:[["","Con frío se echa a perder más lento"],["","Para que se ponga más dulce y rica"],["","Para que tenga más calcio y vitaminas"]], c:0, x:"El frío frena a los microbios que echan a perder los alimentos."},
  /* luz y sonido (3° básico, OA08, OA09 y OA10) */
  {n:3, k:"luz y sonido", p:"La Luna brilla de noche, pero no tiene luz propia. ¿Por qué la vemos?", o:[["","Refleja la luz del Sol"],["","Está hecha de fuego"],["","Tiene luz como una estrella"]], c:0, x:"La luz del Sol llega a la Luna y rebota hacia nosotros. Por eso la vemos brillar."},
  {n:3, k:"luz y sonido", p:"¿Por qué se forma tu sombra en un día de sol?", o:[["","Tu cuerpo no deja pasar la luz"],["","La luz atraviesa tu cuerpo"],["","El sol pinta el suelo de negro"]], c:0, x:"La luz viaja en línea recta. Tu cuerpo la tapa, y detrás de ti queda la sombra."},
  {n:3, k:"luz y sonido", p:"Gritas frente a un cerro y escuchas tu voz de vuelta. ¿Cómo se llama eso?", o:[["","Eco"],["","Sombra"],["","Arcoíris"]], c:0, x:"El eco es el sonido que rebota en el cerro y vuelve a tus oídos."},
  {n:3, k:"luz y sonido", p:"¿Cuál de estos sonidos es más AGUDO?", o:[["","El silbato del árbitro"],["","El bombo de la banda"],["","El trueno de una tormenta"]], c:0, x:"El silbato suena finito y alto: es agudo. El bombo y el trueno son sonidos graves."},
  /* sistema solar (3° básico, OA11 y OA12) */
  {n:3, k:"sistema solar", p:"El Sol es una estrella. ¿Por qué se ve mucho más grande que las demás?", o:[["","Está mucho más cerca de la Tierra"],["","Es la estrella más grande que hay"],["","Es la única estrella que da luz"]], c:0, x:"Hay estrellas más grandes que el Sol, pero están tan lejos que se ven como puntitos."},
  {n:3, k:"sistema solar", p:"¿Qué movimiento de la Tierra hace que haya día y noche?", o:[["","Girar sobre sí misma (rotación)"],["","Dar la vuelta al Sol (traslación)"],["","Que la Luna tape al Sol"]], c:0, x:"La Tierra gira como un trompo: el lado que mira al Sol tiene día y el otro, noche."},
  {n:3, k:"sistema solar", p:"Si contaras los planetas desde el Sol hacia afuera, ¿qué lugar ocupa la Tierra?", o:[["","El tercero"],["","El primero"],["","El octavo"]], c:0, x:"Primero Mercurio, después Venus y luego la Tierra, en el tercer lugar."},
  /* reciclar (3° básico, OA05) */
  {n:3, k:"reciclar", p:"Usar un frasco de mermelada vacío para guardar lápices es...", o:[["","Reutilizar"],["","Reciclar"],["","Reducir"]], c:0, x:"Reutilizar es darle otro uso a algo sin botarlo. ¡El frasco tiene una segunda vida!"},
  {n:3, k:"reciclar", p:"Imprimir las hojas por los dos lados sirve para...", o:[["","Reducir el papel que usamos"],["","Reciclar el agua del colegio"],["","Gastar el doble de hojas"]], c:0, x:"Reducir es usar menos. Con hojas por los dos lados gastas la mitad de papel."}
]);

masPreguntas("historia", [
  /* ================= NIVEL 2 ================= */
  /* pueblos originarios */
  {n:2, k:"pueblos originarios", p:"¿Por qué los aimara cultivaban en terrazas, como escalones en el cerro?", o:[["","Para cultivar en cerros empinados"],["","Para esconderse de la lluvia"],["","Para que las llamas no subieran"]], c:0, x:"En un cerro empinado el agua arrastra la tierra; los escalones la sujetan."},
  {n:2, k:"pueblos originarios", p:"Los changos navegaban por el mar en balsas hechas de...", o:[["","Cueros de lobo marino inflados"],["","Troncos de árboles del bosque"],["","Hojas de palma tejidas"]], c:0, x:"Cosían los cueros y los inflaban con aire, como globos, para que flotaran."},
  {n:2, k:"pueblos originarios", p:"¿Qué árbol les daba piñones a los pehuenche?", o:[["","La araucaria"],["","La palma chilena"],["","El quillay"]], c:0, x:"Pehuén es la araucaria. Pehuenche quiere decir «gente del pehuén»."},
  {n:2, k:"pueblos originarios", p:"¿Qué animal cazaban los selk'nam para comer y abrigarse?", o:[["","El guanaco"],["","La vicuña"],["","El huemul"]], c:0, x:"Con su carne se alimentaban y con su piel hacían capas y toldos."},
  {n:2, k:"pueblos originarios", p:"En las canoas del pueblo yagán, ¿quiénes remaban y buceaban para sacar mariscos?", o:[["","Las mujeres"],["","Los niños chicos"],["","Los abuelos"]], c:0, x:"Los hombres cazaban lobos marinos con arpón; las mujeres remaban y buceaban en agua helada."},
  {n:2, k:"pueblos originarios", p:"En el norte chico llueve poco. ¿Cómo regaban los diaguitas sus cultivos?", o:[["","Con canales desde los ríos"],["","Con agua salada del mar"],["","Con nieve traída en canoas"]], c:0, x:"Llevaban el agua de los ríos por canales hasta sus siembras de maíz y porotos."},
  {n:2, k:"pueblos originarios", p:"En la cultura mapuche, la machi es la persona que...", o:[["","Sana y guía las ceremonias"],["","Dirige a los guerreros"],["","Construye las rucas"]], c:0, x:"La machi conoce las plantas medicinales y es muy respetada en su comunidad."},
  {n:2, k:"pueblos originarios", p:"Entre los mapuche, ¿quién es el lonko?", o:[["","El jefe de la comunidad"],["","Un instrumento musical"],["","Un tipo de casa"]], c:0, x:"Lonko quiere decir «cabeza» en mapudungun: es quien guía a su comunidad."},
  {n:2, k:"pueblos originarios", p:"El kultrún es un instrumento mapuche. ¿Qué tipo de instrumento es?", o:[["","Un tambor"],["","Una flauta"],["","Una guitarra"]], c:0, x:"Lo toca la machi en las ceremonias. Su cuero lleva dibujos que representan el mundo."},
  {n:2, k:"pueblos originarios", p:"¿Por qué los aimara podían vivir siempre en el mismo lugar?", o:[["","Porque cultivaban y criaban animales"],["","Porque no les gustaba caminar"],["","Porque vivían arriba de barcos"]], c:0, x:"Quien produce su propia comida no necesita ir a buscarla lejos: eso es ser sedentario."},
  {n:2, k:"pueblos originarios", p:"¿Qué forma tenían las antiguas casas hare paenga de Rapa Nui?", o:[["","De bote dado vuelta"],["","De pirámide"],["","De torre alta"]], c:0, x:"Tenían base de piedras y techo de fibras vegetales, como una canoa al revés."},
  {n:2, k:"pueblos originarios", p:"¿Qué significa la palabra «precolombino»?", o:[["","Antes de la llegada de Colón"],["","Después de los españoles"],["","Lo que pasará en el futuro"]], c:0, x:"Cristóbal Colón llegó a América en 1492. Lo de antes se llama precolombino."},
  /* pueblos originarios hoy */
  {n:2, k:"pueblos originarios hoy", p:"Muchas familias mapuche viven hoy en ciudades. ¿Qué mantienen muchas de ellas?", o:[["","Su idioma y sus ceremonias"],["","La caza con lanzas"],["","La ruca como única casa"]], c:0, x:"El mapudungun y el We Tripantu siguen vivos, en el campo y en la ciudad."},
  {n:2, k:"pueblos originarios hoy", p:"La Tapati es una gran fiesta que se celebra hoy en...", o:[["","Rapa Nui"],["","Chiloé"],["","San Pedro de Atacama"]], c:0, x:"Cada febrero hay competencias, bailes y cantos para celebrar la cultura rapa nui."},
  {n:2, k:"pueblos originarios hoy", p:"Con el paso del tiempo, ¿qué cambió para muchas familias aimara?", o:[["","Muchas se fueron a vivir a ciudades"],["","Todas dejaron de hablar aimara"],["","Todas se fueron a vivir al sur"]], c:0, x:"Algunas siguen en el altiplano con sus llamas; otras viven en Arica o Iquique."},
  /* aportes y mestizaje */
  {n:2, k:"aportes y mestizaje", p:"¿Cuál de estos alimentos llegó a Chile con los españoles?", o:[["🧅","La cebolla"],["🍅","El tomate"],["🎃","El zapallo"]], c:0, x:"El tomate y el zapallo ya se cultivaban en América; la cebolla vino de Europa."},
  {n:2, k:"aportes y mestizaje", p:"¿Qué fruta ya cultivaban los pueblos del sur de Chile antes de los españoles?", o:[["🍓","La frutilla"],["🍎","La manzana"],["🍇","La uva"]], c:0, x:"La frutilla chilena crecía en el sur. La manzana y la uva llegaron desde Europa."},
  {n:2, k:"aportes y mestizaje", p:"La humita se hace con choclo. ¿De quién viene esta comida?", o:[["","De los pueblos originarios"],["","De los inmigrantes alemanes"],["","De los españoles"]], c:0, x:"El maíz es americano: las humitas se hacían mucho antes de que llegaran los españoles."},
  {n:2, k:"aportes y mestizaje", p:"Hablar castellano y celebrar la Navidad son aportes de...", o:[["","Los españoles"],["","Los pueblos originarios"],["","Los inmigrantes chinos"]], c:0, x:"Los españoles trajeron su idioma y la religión católica."},
  /* inmigrantes */
  {n:2, k:"inmigrantes", p:"Las arepas, que hoy se venden en muchas ciudades de Chile, llegaron con inmigrantes de...", o:[["","Venezuela"],["","Alemania"],["","Japón"]], c:0, x:"En los últimos años llegaron muchas familias venezolanas y colombianas con sus arepas."},
  {n:2, k:"inmigrantes", p:"Frutillar y Puerto Varas tienen casas de madera de estilo...", o:[["","Alemán"],["","Japonés"],["","Árabe"]], c:0, x:"Colonos alemanes llegaron al lago Llanquihue hace más de 150 años."},
  /* tradiciones de Chile */
  {n:2, k:"tradiciones de Chile", p:"Según las leyendas de Chiloé, el Caleuche es...", o:[["","Un barco fantasma"],["","Un volcán encantado"],["","Un pez gigante"]], c:0, x:"Dicen que navega de noche, todo iluminado y con música a bordo."},
  {n:2, k:"tradiciones de Chile", p:"¿Qué ropa tradicional usa el huaso?", o:[["","Chupalla, manta y espuelas"],["","Casco, botas y chaleco"],["","Gorro, bufanda y guantes"]], c:0, x:"La chupalla es un sombrero de paja y la manta es corta y colorida."},
  {n:2, k:"tradiciones de Chile", p:"Las iglesias de Chiloé son patrimonio de la humanidad. ¿De qué están hechas?", o:[["","De madera"],["","De vidrio"],["","De piedra"]], c:0, x:"Las construyeron carpinteros chilotes con maderas de los bosques de la isla."},
  {n:2, k:"tradiciones de Chile", p:"Los palafitos de Castro, en Chiloé, son casas que...", o:[["","Se paran sobre postes en el agua"],["","Están hechas de hielo"],["","Están en la cima de un cerro"]], c:0, x:"Así los pescadores tenían su bote justo al lado de la casa."},
  /* leer planos */
  {n:2, k:"leer planos", p:"En esta calle, ¿qué está justo a la derecha de la casa?", v:"🏥 🏪 🏠 🌳 🏫", o:[["","El árbol"],["","El almacén"],["","El hospital"]], c:0, x:"A la derecha de 🏠 está 🌳. El almacén y el hospital quedan a su izquierda."},
  {n:2, k:"leer planos", p:"En un plano, ¿para qué sirve la simbología?", o:[["","Para saber qué significa cada dibujo"],["","Para saber qué hora es"],["","Para medir la temperatura"]], c:0, x:"Es el cuadrito que explica, por ejemplo, que 🌳 significa plaza."},
  {n:2, k:"leer planos", p:"Si en el plano el norte está arriba, ¿dónde queda el oeste?", o:[["","A la izquierda"],["","A la derecha"],["","Abajo"]], c:0, x:"Arriba norte, abajo sur, derecha este e izquierda oeste."},
  {n:2, k:"leer planos", p:"Si estás en la plaza, ¿hacia dónde caminas para llegar a la biblioteca?", t:"En el plano del barrio, la biblioteca está al norte de la plaza.", o:[["","Hacia el norte"],["","Hacia el sur"],["","Hacia el oeste"]], c:0, x:"Si la biblioteca está al norte de la plaza, desde la plaza caminas al norte."},
  /* el mapa de Chile */
  {n:2, k:"el mapa de Chile", p:"¿Qué ciudad queda más al norte?", o:[["","Antofagasta"],["","Concepción"],["","Puerto Montt"]], c:0, x:"Antofagasta está en pleno desierto del norte; las otras dos, mucho más al sur."},
  {n:2, k:"el mapa de Chile", p:"¿Cuál es la capital de la Región de Valparaíso?", o:[["","Valparaíso"],["","Viña del Mar"],["","San Antonio"]], c:0, x:"Viña del Mar está al ladito, pero la capital regional es Valparaíso."},
  {n:2, k:"el mapa de Chile", p:"¿Cuál es la capital de la Región de La Araucanía?", o:[["","Temuco"],["","Valdivia"],["","Osorno"]], c:0, x:"Valdivia es capital de Los Ríos, y Osorno está en la Región de Los Lagos."},
  {n:2, k:"el mapa de Chile", p:"¿Qué país está entre Chile y el océano Atlántico?", o:[["","Argentina"],["","Bolivia"],["","Perú"]], c:0, x:"Cruzando la cordillera está Argentina, y su costa da al Atlántico."},
  /* zonas de Chile */
  {n:2, k:"zonas de Chile", p:"Comparada con la cordillera de los Andes, la cordillera de la Costa es...", o:[["","Más baja"],["","Más alta"],["","Más nevada"]], c:0, x:"Los Andes tienen cerros de más de 6.000 metros; la de la Costa es mucho más baja."},
  {n:2, k:"zonas de Chile", p:"En medio del desierto, ¿qué es un oasis?", o:[["","Un lugar con agua y plantas"],["","Un cerro de arena muy alto"],["","Una playa muy fría"]], c:0, x:"San Pedro de Atacama creció junto a un oasis."},
  {n:2, k:"zonas de Chile", p:"¿En qué zona de Chile están los grandes campos de hielo?", o:[["","En el extremo sur"],["","En el norte"],["","En la zona central"]], c:0, x:"En la Patagonia hay enormes campos de hielo y glaciares."},
  {n:2, k:"zonas de Chile", p:"¿Qué diferencia a un pueblo de una ciudad?", o:[["","El pueblo tiene menos gente"],["","El pueblo tiene más edificios"],["","El pueblo tiene más autos"]], c:0, x:"Una ciudad tiene mucha gente, edificios y servicios; un pueblo es más chico."},
  /* patrimonio natural */
  {n:2, k:"patrimonio natural", p:"¿Cuál es la flor nacional de Chile?", o:[["","El copihue"],["","La rosa"],["","El girasol"]], c:0, x:"Es roja, cuelga como campanita y crece en los bosques del sur."},
  {n:2, k:"patrimonio natural", p:"¿Quiénes cuidan las plantas y animales de los parques nacionales?", o:[["","Los guardaparques"],["","Los bomberos"],["","Los carteros"]], c:0, x:"Trabajan en CONAF y cuidan la naturaleza, los senderos y a los visitantes."},
  /* vivir juntos */
  {n:2, k:"vivir juntos", p:"Si tiembla fuerte en la sala, ¿qué hay que hacer primero?", o:[["","Agacharse, cubrirse y afirmarse"],["","Correr a la calle"],["","Subirse arriba de la mesa"]], c:0, x:"Debajo de la mesa te proteges de lo que pueda caer."},
  {n:2, k:"vivir juntos", p:"¿A qué número se llama si hay un incendio?", o:[["","Al 132"],["","Al 131"],["","Al 133"]], c:0, x:"132 Bomberos, 131 ambulancia y 133 Carabineros."},
  {n:2, k:"vivir juntos", p:"Ser tolerante es...", o:[["","Aceptar que otros piensen distinto"],["","Hacer todo lo que dicen otros"],["","Enojarse con quien piensa distinto"]], c:0, x:"Podemos no estar de acuerdo y tratarnos con respeto igual."},
  {n:2, k:"vivir juntos", p:"¿Por dónde es más seguro cruzar la calle?", o:[["","Por el paso de cebra"],["","Entre autos estacionados"],["","Por la mitad de la cuadra"]], c:0, x:"En el paso de cebra los autos deben detenerse para dejar pasar al peatón."},
  /* antes y ahora */
  {n:2, k:"línea de tiempo", p:"En una línea de tiempo de tu vida, ¿qué va primero?", o:[["","Cuando naciste"],["","Cuando entraste a 2° básico"],["","Cuando aprendiste a leer"]], c:0, x:"En una línea de tiempo, lo que pasó antes va a la izquierda."},
  {n:2, k:"antes y ahora", p:"¿Qué costumbre sigue igual desde que tus abuelos eran niños?", o:[["","Comer empanadas en septiembre"],["","Hacer videollamadas"],["","Ver series por internet"]], c:0, x:"Una costumbre que se mantiene en el tiempo se llama continuidad."},

  /* ================= NIVEL 3 ================= */
  /* pueblos originarios: medio natural y forma de vida */
  {n:3, k:"pueblos originarios", p:"¿Para qué les servía ese fuego?", t:"Los yaganes navegaban por canales helados. En el centro de su canoa llevaban siempre una pequeña fogata encendida.", o:[["","Para abrigarse sin dejar de viajar"],["","Para espantar a los peces"],["","Para avisar que era de noche"]], c:0, x:"Así se calentaban y cocinaban mientras recorrían el agua fría del sur."},
  {n:3, k:"pueblos originarios", p:"¿Con qué se abrigaban los selk'nam?", t:"En Tierra del Fuego hace mucho frío y viento. Allí vivían grandes manadas de guanacos.", o:[["","Con capas de piel de guanaco"],["","Con ponchos de algodón"],["","Con mantas de plumas"]], c:0, x:"Usaban lo que su medio les daba: el guanaco era comida, abrigo y techo."},
  {n:3, k:"pueblos originarios", p:"¿Por qué los pueblos del extremo sur no cultivaban maíz?", o:[["","Porque hacía demasiado frío"],["","Porque llovía muy poco"],["","Porque vivían en el desierto"]], c:0, x:"El maíz necesita calor. Por eso en el sur frío vivían de la caza, la pesca y la recolección."},
  {n:3, k:"pueblos originarios", p:"¿Hacia qué punto cardinal mira la puerta?", t:"La puerta de la ruca mapuche se abre hacia el lado por donde sale el sol cada mañana.", o:[["","Hacia el este"],["","Hacia el oeste"],["","Hacia el sur"]], c:0, x:"El sol sale por el este. Para el pueblo mapuche, el este es un lugar muy importante."},
  {n:3, k:"pueblos originarios", p:"¿De qué se alimentaban principalmente?", t:"Un pueblo vivía en la costa del desierto. Cerca no había ríos ni lluvia, pero sí el mar.", o:[["","De peces y mariscos"],["","De maíz y papas"],["","De piñones"]], c:0, x:"Sin agua para sembrar, el mar era su despensa. Así vivían los changos."},
  {n:3, k:"pueblos originarios", p:"¿Para qué secaban las papas?", t:"En el altiplano las noches son heladas y los días, soleados. Los aimara dejaban papas al sol y a la helada hasta secarlas.", o:[["","Para guardarlas mucho tiempo"],["","Para que fueran más dulces"],["","Para dárselas a las llamas"]], c:0, x:"Así nace el chuño: papa seca que dura muchísimo sin echarse a perder."},
  {n:3, k:"pueblos originarios", p:"¿Por qué eran tan distintas estas casas?", t:"La ruca mapuche se hacía con madera y paja. Las casas atacameñas, con piedra y barro.", o:[["","Cada pueblo usaba lo de su zona"],["","Unos eran más ricos que otros"],["","Les gustaban otros colores"]], c:0, x:"En el sur hay bosques; en el desierto hay piedras. Cada uno construía con lo que tenía."},
  {n:3, k:"pueblos originarios", p:"¿Cuál de estos pueblos NO vivía en el extremo sur?", o:[["","Diaguita"],["","Selk'nam"],["","Kawésqar"]], c:0, x:"Los diaguitas vivían en los valles del norte chico, donde hacía más calor."},
  {n:3, k:"pueblos originarios", p:"¿Qué tenían en común yaganes y kawésqar?", o:[["","Navegaban en canoas por los canales"],["","Cultivaban maíz en terrazas"],["","Vivían en el desierto"]], c:0, x:"Los dos eran pueblos canoeros del extremo sur: vivían del mar."},
  /* pueblos originarios hoy */
  {n:3, k:"pueblos originarios hoy", p:"Según el texto, ¿qué cambió?", t:"Antes, la ruca era la casa de todos los días de las familias mapuche. Hoy muchas comunidades construyen rucas para reunirse y celebrar.", o:[["","Para qué se usa la ruca"],["","Cómo se llama la ruca"],["","Quién construye la ruca"]], c:0, x:"La ruca se mantiene, pero su uso cambió: eso es continuidad y cambio a la vez."},
  {n:3, k:"pueblos originarios hoy", p:"¿Qué hacen hoy muchos aimara, igual que sus antepasados?", o:[["","Cultivan quínoa y crían llamas"],["","Cazan lobos marinos en canoa"],["","Tallan moái de piedra"]], c:0, x:"Es una continuidad: una forma de vida que se mantiene hace cientos de años."},
  {n:3, k:"pueblos originarios hoy", p:"¿Qué sigue igual en Rapa Nui desde hace cientos de años?", o:[["","Se habla el idioma rapanui"],["","Se viaja solo en canoa"],["","No hay luz eléctrica"]], c:0, x:"El rapanui se habla y se enseña hoy en la isla, junto con el castellano."},
  /* aportes y mestizaje */
  {n:3, k:"aportes y mestizaje", p:"La cazuela lleva papa y zapallo, y también carne de vacuno. ¿Por qué es una comida mestiza?", o:[["","Mezcla alimentos de América y Europa"],["","La inventó un solo pueblo"],["","Todo lo que lleva viene de Asia"]], c:0, x:"La papa y el zapallo son americanos; las vacas llegaron con los españoles."},
  {n:3, k:"aportes y mestizaje", p:"¿Cuál de estas palabras viene de un idioma de los pueblos originarios?", o:[["","Choclo"],["","Mesa"],["","Libro"]], c:0, x:"Choclo viene del quechua. Mesa y libro llegaron con el castellano."},
  {n:3, k:"aportes y mestizaje", p:"¿Qué animal llegó a Chile con los españoles?", o:[["🐑","La oveja"],["🦙","La alpaca"],["🦌","El huemul"]], c:0, x:"La alpaca y el huemul ya vivían aquí. La oveja llegó en los barcos españoles."},
  {n:3, k:"aportes y mestizaje", p:"¿Cuál de estos aportes es de inmigrantes y no de los españoles?", o:[["","El kuchen"],["","El castellano"],["","El trigo"]], c:0, x:"El kuchen lo trajeron colonos alemanes, siglos después de los españoles."},
  /* tradiciones de Chile */
  {n:3, k:"tradiciones de Chile", p:"¿Por qué no se deben tocar?", t:"En el museo, Martín ve un cartel: «No tocar las vasijas». Las hicieron los diaguitas hace cientos de años.", o:[["","Para no dañar algo único y antiguo"],["","Porque todavía están calientes"],["","Porque las van a vender"]], c:0, x:"Si se rompen no se pueden reemplazar. Cuidarlas es cuidar nuestro patrimonio."},
  {n:3, k:"tradiciones de Chile", p:"¿De qué zona de Chile es esta tradición?", t:"En julio, miles de bailarines con máscaras y trajes brillantes llegan a un pueblo en medio de la pampa del desierto.", o:[["","Del norte"],["","Del sur"],["","De la zona central"]], c:0, x:"Es la fiesta de La Tirana: la pampa y el desierto están en el norte."},
  {n:3, k:"tradiciones de Chile", p:"¿Qué ejemplo es patrimonio cultural y NO patrimonio natural?", o:[["","La cueca"],["","El volcán Osorno"],["","El bosque de araucarias"]], c:0, x:"La cueca la creamos las personas; el volcán y el bosque son de la naturaleza."},
  /* leer planos */
  {n:3, k:"leer planos", p:"¿Qué está entre la plaza y el almacén?", t:"La plaza está al norte del colegio. El almacén está al sur del colegio.", o:[["","El colegio"],["","La iglesia"],["","El hospital"]], c:0, x:"Si uno está al norte y el otro al sur del colegio, el colegio queda al medio."},
  {n:3, k:"leer planos", p:"Para volver a su casa, ¿hacia dónde tiene que caminar?", t:"Sofía sale de su casa y camina hacia el este. Así llega a la panadería.", o:[["","Hacia el oeste"],["","Hacia el este"],["","Hacia el norte"]], c:0, x:"Para volver, se camina hacia el lado contrario: lo contrario del este es el oeste."},
  {n:3, k:"leer planos", p:"¿A qué lado del pueblo está el río?", t:"En el plano, el norte está arriba. El río está dibujado a la izquierda del pueblo.", o:[["","Al oeste"],["","Al este"],["","Al sur"]], c:0, x:"Con el norte arriba, la izquierda del plano siempre es el oeste."},
  {n:3, k:"leer planos", p:"En el plano ves una franja 🟦 larga y delgada. ¿Qué es?", v:"Simbología: 🟩 plaza · 🟦 río · 🟥 colegio", o:[["","Un río"],["","Una plaza"],["","Un colegio"]], c:0, x:"La simbología dice que el azul es río. Por eso siempre hay que leerla primero."},
  {n:3, k:"leer planos", p:"¿Dónde está la ventana?", t:"En el plano de la sala, la puerta está al sur. La ventana está en la pared de enfrente.", o:[["","Al norte"],["","Al este"],["","Al oeste"]], c:0, x:"Lo contrario del sur es el norte: la pared de enfrente queda al norte."},
  /* el mapa de Chile y América */
  {n:3, k:"el mapa de Chile", p:"¿Qué ciudad es?", t:"Esta ciudad está junto al mar, en el desierto, en el extremo norte de Chile, muy cerca de Perú.", o:[["","Arica"],["","La Serena"],["","Valparaíso"]], c:0, x:"Arica es la ciudad más al norte de Chile, pegadita a la frontera con Perú."},
  {n:3, k:"el mapa de Chile", p:"¿Qué país de América del Sur no tiene costa en el mar?", o:[["","Bolivia"],["","Perú"],["","Argentina"]], c:0, x:"Bolivia y Paraguay son los únicos países de América del Sur sin mar."},
  {n:3, k:"el mapa de Chile", p:"¿Qué país está al este de Argentina, junto al océano Atlántico?", o:[["","Uruguay"],["","Perú"],["","Ecuador"]], c:0, x:"Perú y Ecuador dan al Pacífico, como Chile. Uruguay da al Atlántico."},
  {n:3, k:"el mapa de Chile", p:"En Santiago, el sol se esconde detrás de la cordillera de la Costa. ¿Hacia dónde miras?", o:[["","Hacia el oeste"],["","Hacia el este"],["","Hacia el norte"]], c:0, x:"El sol se pone por el oeste, que es donde están la cordillera de la Costa y el mar."},
  /* zonas de Chile */
  {n:3, k:"zonas de Chile", p:"¿De qué zona de Chile habla el texto?", t:"Aquí llueve mucho durante todo el año. Hay bosques muy verdes y lagos con volcanes nevados.", o:[["","Del sur"],["","Del norte"],["","De la zona central"]], c:0, x:"La lluvia, los bosques y los lagos con volcanes son típicos del sur."},
  {n:3, k:"zonas de Chile", p:"¿Por qué vive tanta gente en la zona central?", o:[["","Por su clima templado y valles fértiles"],["","Porque ahí casi nunca hay temblores"],["","Porque es la zona más fría del país"]], c:0, x:"Buen clima y tierra fértil para cultivar atrajeron a la gente desde siempre."},
  {n:3, k:"zonas de Chile", p:"¿Por qué casi no hay árboles en el desierto de Atacama?", o:[["","Porque casi nunca llueve"],["","Porque hace demasiado frío"],["","Porque hay demasiados volcanes"]], c:0, x:"Sin agua las plantas no pueden crecer. En algunas partes no llueve en años."},
  {n:3, k:"zonas de Chile", p:"La mayoría de los ríos de Chile bajan de los Andes y terminan en...", o:[["","El océano Pacífico"],["","El océano Atlántico"],["","El lago Titicaca"]], c:0, x:"Bajan de la cordillera, cruzan el país de este a oeste y llegan al Pacífico."},
  /* patrimonio natural */
  {n:3, k:"patrimonio natural", p:"¿En qué zona de Chile está este parque?", t:"En el Parque Nacional Conguillío hay bosques de araucarias, lagunas y el volcán Llaima.", o:[["","Zona sur"],["","Zona norte"],["","Zona central"]], c:0, x:"Las araucarias crecen en el sur. Conguillío está en La Araucanía."},
  {n:3, k:"patrimonio natural", p:"¿En qué paisaje está este parque?", t:"En el Parque Nacional Lauca hay flamencos, vicuñas y el lago Chungará, a más de 4.000 metros de altura.", o:[["","En el altiplano"],["","En un bosque lluvioso"],["","En la costa"]], c:0, x:"A más de 4.000 metros, en el norte, está el altiplano: ahí viven las vicuñas."},
  {n:3, k:"patrimonio natural", p:"Si en un parque nacional ves un huemul, ¿qué es lo correcto?", o:[["","Mirarlo en silencio desde lejos"],["","Acercarte a darle comida"],["","Seguirlo para sacarle fotos"]], c:0, x:"Es un animal en peligro y se asusta fácil. Cuidarlo es respetar su espacio."},
  {n:3, k:"patrimonio natural", p:"¿Cuál de estos animales NO es nativo de Chile?", o:[["","El conejo"],["","El pudú"],["","El huemul"]], c:0, x:"El conejo lo trajeron desde Europa. El pudú y el huemul son de aquí."},
  /* vivir juntos */
  {n:3, k:"vivir juntos", p:"¿Qué sería lo más empático?", t:"En el recreo, Ana quiere jugar a la pinta. Su amiga Julia tiene un yeso en la pierna.", o:[["","Elegir un juego donde Julia pueda jugar"],["","Jugar a la pinta sin Julia"],["","Decirle a Julia que corra igual"]], c:0, x:"Empatía es ponerse en el lugar del otro y buscar que nadie quede fuera."},
  {n:3, k:"vivir juntos", p:"¿Qué es lo honesto?", t:"Tomás encuentra una billetera en el patio. Adentro está el carnet de un profesor.", o:[["","Devolverla a su dueño"],["","Guardarla para él"],["","Dejarla tirada ahí"]], c:0, x:"El carnet dice de quién es. Devolverla es lo que quisieras que hicieran por ti."},
  {n:3, k:"vivir juntos", p:"En una evacuación del colegio, ¿por qué no hay que volver a buscar la mochila?", o:[["","Porque se pierde tiempo y es peligroso"],["","Porque la mochila no es importante"],["","Porque el profesor la va a buscar"]], c:0, x:"Las cosas se pueden reponer; lo importante es llegar rápido a la zona segura."},
  /* derechos del niño (3° básico) */
  {n:3, k:"derechos del niño", p:"¿Cuál de estos es un derecho de los niños y no un deber?", o:[["","Recibir atención de salud"],["","Hacer las tareas del colegio"],["","Ayudar a poner la mesa"]], c:0, x:"Los deberes te tocan a ti; los derechos son lo que todos deben asegurarte."},
  {n:3, k:"derechos del niño", p:"¿Qué derecho se está respetando?", t:"Para elegir el paseo de curso, la profesora escucha las ideas de todos. Después, cada niño vota.", o:[["","El de dar su opinión"],["","El de tener un nombre"],["","El de recibir salud"]], c:0, x:"Los niños tienen derecho a opinar sobre lo que les afecta y a ser escuchados."},
  /* el planeta Tierra (3° básico) */
  {n:3, k:"el planeta Tierra", p:"La línea del ecuador divide la Tierra en...", o:[["","Mitad norte y mitad sur"],["","Mitad este y mitad oeste"],["","Parte de día y de noche"]], c:0, x:"Esas mitades se llaman hemisferio norte y hemisferio sur. Chile está en el sur."},
  {n:3, k:"el planeta Tierra", p:"¿Qué continente está en el polo sur, cubierto de hielo?", o:[["","La Antártica"],["","Oceanía"],["","África"]], c:0, x:"Es el continente más frío del planeta. Chile tiene bases científicas allí."},
  /* línea de tiempo */
  {n:3, k:"línea de tiempo", p:"¿Cuál de estos hechos ocurrió primero?", o:[["","Los pueblos originarios vivían aquí"],["","Los españoles fundaron Santiago"],["","Chile celebró su primer Dieciocho"]], c:0, x:"Los pueblos originarios vivían aquí miles de años antes de que llegaran los españoles."},
  {n:3, k:"antes y ahora", p:"¿Cuál de estos es un CAMBIO y no una continuidad?", o:[["","Antes cartas; hoy mensajes al celular"],["","Antes y hoy se baila cueca"],["","Antes y hoy se come empanada"]], c:0, x:"Un cambio es algo que ya no se hace igual; la cueca y la empanada siguen."}
]);

masPreguntas("ingles", [
  /* ===================== NIVEL 2 ===================== */
  /* entender una frase corta */
  {n:2, k:"frases cortas", p:"¿Qué significa «I have two cats»?", o:[["","Tengo dos gatos"],["","Veo dos gatos"],["","Tengo diez gatos"]], c:0, x:"I have es «yo tengo» y two es dos. Cats, con S al final, son varios gatos."},
  {n:2, k:"la casa y los juguetes", p:"¿Qué significa «My doll is in the kitchen»?", o:[["","Mi muñeca está en la cocina"],["","Mi muñeca está en el baño"],["","Mi pelota está en la cocina"]], c:0, x:"Doll es muñeca y kitchen es cocina. ¡A lo mejor la muñeca quería tomar once!"},
  {n:2, k:"family", p:"¿Qué significa «This is my sister»?", o:[["","Esta es mi hermana"],["","Esta es mi mamá"],["","Ella es mi amiga"]], c:0, x:"This is quiere decir «esta es» o «este es». Así presentas a alguien de tu familia."},
  {n:2, k:"clothes and weather", p:"¿Qué significa «I have a red dress»?", o:[["","Tengo un vestido rojo"],["","Tengo una polera roja"],["","Tengo un vestido verde"]], c:0, x:"Dress es vestido y red es rojo. En inglés el color va ANTES de la cosa: red dress."},
  {n:2, k:"school", p:"La profesora dice «Open your book». ¿Qué te está pidiendo?", o:[["","Que abras tu libro"],["","Que cierres tu libro"],["","Que guardes tu libro"]], c:0, x:"Open es abrir. Lo contrario es close: cerrar. Close your book, ¡y a recreo!"},
  {n:2, k:"body", p:"¿Qué significa «Theo has four legs»?", o:[["","Theo tiene cuatro patas"],["","Theo tiene cinco patas"],["","Theo tiene cuatro orejas"]], c:0, x:"Legs sirve para las piernas de las personas y también para las patas de los animales."},
  /* completar la frase */
  {n:2, k:"colours", p:"Completa la frase: «Bananas are ___.»", v:"🍌", o:[["","yellow"],["","blue"],["","purple"]], c:0, x:"Bananas are yellow: los plátanos son amarillos. ¡Nunca has visto uno azul!"},
  {n:2, k:"numbers", p:"Completa la frase: «A spider has ___ legs.» (spider es araña)", v:"🕷️", o:[["","eight"],["","six"],["","four"]], c:0, x:"Las arañas tienen ocho patas: eight legs. Los insectos, como la hormiga, tienen seis."},
  {n:2, k:"greetings", p:"Es de noche y te vas a acostar. Completa: «Good ___, mom!»", o:[["","night"],["","morning"],["","afternoon"]], c:0, x:"Good night se dice al ir a dormir. Good morning es para la mañana."},
  {n:2, k:"days", p:"Completa los días: «Monday, Tuesday, ___, Thursday»", o:[["","Wednesday"],["","Friday"],["","Sunday"]], c:0, x:"Lunes, martes, miércoles, jueves. Wednesday es el miércoles, justo al medio."},
  {n:2, k:"body", p:"Completa la frase: «I eat with my ___.»", o:[["","mouth"],["","ears"],["","eyes"]], c:0, x:"Con la mouth comemos. Con las ears escuchamos y con los eyes miramos."},
  {n:2, k:"clothes and weather", p:"Completa la frase: «I wear ___ on my feet.»", o:[["","shoes"],["","a hat"],["","a T-shirt"]], c:0, x:"Feet son los pies, y en los pies van los shoes. El hat va en la cabeza."},
  /* elegir la respuesta adecuada */
  {n:2, k:"greetings", p:"Te preguntan «How old are you?». ¿Qué respondes?", o:[["","I am seven."],["","I am fine."],["","My name is Sofi."]], c:0, x:"How old are you? pregunta tu edad. Se responde con los años: I am seven."},
  {n:2, k:"greetings", p:"Te preguntan «What's your name?». ¿Qué respondes?", o:[["","My name is Ema."],["","I am six."],["","I'm fine, thanks."]], c:0, x:"Name es nombre, así que te están preguntando cómo te llamas."},
  {n:2, k:"colours", p:"Te preguntan «What colour is the sky?». ¿Qué respondes?", o:[["","It's blue."],["","It's big."],["","It's Monday."]], c:0, x:"What colour pregunta por el color. En un día lindo, the sky is blue."},
  {n:2, k:"numbers", p:"Te preguntan «How many dogs are there?». ¿Qué respondes?", v:"🐶🐶🐶", o:[["","Three dogs."],["","Two dogs."],["","Three cats."]], c:0, x:"How many pregunta cuántos hay. Contaste tres perritos: three dogs."},
  {n:2, k:"days", p:"Te preguntan «What day is it today?». ¿Qué respondes?", o:[["","It's Friday."],["","It's sunny."],["","It's seven."]], c:0, x:"What day pregunta qué día es. La respuesta es un día de la semana."},
  {n:2, k:"clothes and weather", p:"Te preguntan «What's the weather like?». ¿Qué respondes?", o:[["","It's sunny."],["","It's Tuesday."],["","It's a cat."]], c:0, x:"Weather es el tiempo: sol, lluvia, viento. Por eso respondes It's sunny."},
  /* plural */
  {n:2, k:"plurales", p:"¿Cómo se dice «tres manzanas» en inglés?", o:[["","three apples"],["","three apple"],["","one apples"]], c:0, x:"Cuando hay más de una, se agrega una S al final: apple, apples."},
  {n:2, k:"plurales", p:"Completa la frase: «I have two ___.»", v:"🐱🐱", o:[["","cats"],["","cat"],["","a cat"]], c:0, x:"Son dos gatos, así que va con S: two cats. Igual que en español: gato, gatos."},
  /* this / that */
  {n:2, k:"this y that", p:"Tienes un lápiz en tu mano. ¿Qué dices?", o:[["","This is my pencil."],["","That is my pencil."],["","This is my book."]], c:0, x:"This se usa para lo que está cerquita, como lo que tienes en la mano."},
  {n:2, k:"this y that", p:"Ves un avión lejos, en el cielo. ¿Qué dices?", o:[["","That is a plane."],["","This is a plane."],["","That is a car."]], c:0, x:"That se usa para lo que está lejos. This, para lo que está cerca."},
  /* in / on / under */
  {n:2, k:"dónde está", p:"¿Qué frase dice dónde está el gato?", v:"🐱 está DENTRO de la caja 📦", o:[["","The cat is in the box."],["","The cat is on the box."],["","The cat is under the box."]], c:0, x:"In es dentro. On es encima y under es debajo."},
  {n:2, k:"dónde está", p:"¿Qué frase dice dónde está el libro?", v:"📚 está ENCIMA de la mesa", o:[["","The book is on the table."],["","The book is in the table."],["","The book is under the table."]], c:0, x:"On es encima, tocando la mesa. ¡Como el plato cuando comes!"},
  {n:2, k:"dónde está", p:"¿Qué significa «The dog is under the chair»?", o:[["","El perro está debajo de la silla"],["","El perro está encima de la silla"],["","El perro está al lado de la silla"]], c:0, x:"Under es debajo. Ahí se esconde Theo cuando truena."},

  /* ===================== NIVEL 3 ===================== */
  /* comprender una mini-descripción */
  {n:3, k:"leer en inglés", p:"¿Cómo es Tom?", t:"Tom is a dog. He is brown and small.", o:[["","Café y chico"],["","Café y grande"],["","Negro y chico"]], c:0, x:"Brown es café y small es chico. Big sería grande."},
  {n:3, k:"leer en inglés", p:"¿Qué sabemos de la familia de Sara?", t:"My name is Sara. I am eight. I have a baby brother.", o:[["","Tiene un hermanito guagua"],["","Tiene una hermanita guagua"],["","Tiene ocho hermanos"]], c:0, x:"Baby brother es un hermano guagua. Eight es la edad de Sara, no sus hermanos."},
  {n:3, k:"leer en inglés", p:"¿De qué color son los ojos de la gata?", t:"Look at my cat. She is white. She has green eyes.", o:[["","Verdes"],["","Blancos"],["","Azules"]], c:0, x:"She has green eyes: tiene ojos verdes. White es el color de su pelo."},
  {n:3, k:"leer en inglés", p:"¿Qué debería ponerse Lucas hoy?", t:"Today it is cold and it is raining. Lucas goes to school.", o:[["","Un abrigo y botas de agua"],["","Un short y sandalias"],["","Un traje de baño"]], c:0, x:"Cold es frío y raining es lloviendo. La ropa no sale en el texto: ¡la dedujiste tú!"},
  {n:3, k:"leer en inglés", p:"¿Dónde trabaja Ben?", t:"Ben is a farmer. He has three cows and two horses.", o:[["","En el campo"],["","En un hospital"],["","En un colegio"]], c:0, x:"Farmer es el granjero. Quien cuida vacas y caballos trabaja en el campo."},
  {n:3, k:"leer en inglés", p:"¿Qué trabajo tiene Ana?", t:"Ana works in a school. She has a lot of books and she teaches children.", o:[["","Es profesora"],["","Es doctora"],["","Es cocinera"]], c:0, x:"Teach es enseñar. Si enseña a niños en un colegio, Ana es teacher."},
  {n:3, k:"leer en inglés", p:"¿Dónde están Mia y su papá?", t:"It's Saturday. Mia and her dad go to the park. They play with a ball.", o:[["","En el parque"],["","En el colegio"],["","En la playa"]], c:0, x:"Park es parque. Además es sábado, así que no hay colegio."},
  {n:3, k:"leer en inglés", p:"¿Qué mascota tiene Sam?", t:"Sam has a pet. It is small and green. It can jump and swim.", o:[["","Una rana"],["","Un conejo"],["","Una tortuga"]], c:0, x:"Chica, verde, salta y nada: ¡una rana! El conejo no es verde y la tortuga no salta."},
  /* can / can't */
  {n:3, k:"can y can't", p:"¿Cuál frase es VERDADERA?", o:[["","A dog can run."],["","A dog can fly."],["","A dog can read."]], c:0, x:"Can dice lo que alguien es capaz de hacer. Theo can run, ¡y muy rápido!"},
  {n:3, k:"can y can't", p:"¿Qué significa «I can't swim»?", o:[["","No sé nadar"],["","Sé nadar"],["","No quiero nadar"]], c:0, x:"Can't significa «no puedo» o «no sé». Can, sin la T, es «puedo» o «sé»."},
  {n:3, k:"can y can't", p:"¿Qué NO puede hacer el pingüino?", t:"A penguin is a bird. It can swim, but it can't fly.", o:[["","Volar"],["","Nadar"],["","Caminar"]], c:0, x:"It can't fly: no puede volar. Es un pájaro, pero usa sus alas para nadar."},
  {n:3, k:"can y can't", p:"¿Cuál frase es VERDADERA?", v:"🐍", o:[["","A snake can't walk."],["","A snake can walk."],["","A snake can fly."]], c:0, x:"La serpiente no tiene patas, así que can't walk: se arrastra."},
  {n:3, k:"can y can't", p:"Te preguntan «Can you ride a bike?». Sí sabes. ¿Qué respondes?", o:[["","Yes, I can."],["","Yes, I am."],["","Yes, I do."]], c:0, x:"Si la pregunta empieza con can, la respuesta también usa can: Yes, I can."},
  /* I like / I don't like */
  {n:3, k:"me gusta", p:"¿Qué significa «I don't like carrots»?", o:[["","No me gustan las zanahorias"],["","Me gustan las zanahorias"],["","No tengo zanahorias"]], c:0, x:"I like es «me gusta». Con don't delante cambia a «no me gusta»."},
  {n:3, k:"me gusta", p:"¿Qué le gusta a Lola?", t:"Hi! I'm Lola. I like bananas, but I don't like milk.", o:[["","Los plátanos"],["","La leche"],["","Los plátanos y la leche"]], c:0, x:"Le gustan los plátanos. La leche, don't like: no le gusta."},
  {n:3, k:"me gusta", p:"Te gusta el helado. ¿Cómo lo dices en inglés?", o:[["","I like ice cream."],["","I don't like ice cream."],["","I have ice cream."]], c:0, x:"I like ice cream: me gusta el helado. I have sería «tengo helado»."},
  /* sentimientos */
  {n:3, k:"sentimientos", p:"¿Cómo se siente Emma?", t:"Emma lost her toy. She is crying.", o:[["","Sad"],["","Happy"],["","Tired"]], c:0, x:"Perdió su juguete y está llorando: está sad, triste."},
  {n:3, k:"sentimientos", p:"¿Cómo se siente Leo?", t:"It's Leo's birthday! He has a big cake and a new bike.", o:[["","Happy"],["","Angry"],["","Sad"]], c:0, x:"Cumpleaños, torta y bici nueva: ¡Leo está happy, feliz!"},
  {n:3, k:"sentimientos", p:"¿Qué significa «I am tired»?", o:[["","Estoy cansada"],["","Estoy enojada"],["","Estoy aburrida"]], c:0, x:"Tired es cansado o cansada. Enojada se dice angry."},
  {n:3, k:"sentimientos", p:"¿Cómo está Max?", t:"Max played football all afternoon. Now he wants to sleep.", o:[["","Tired"],["","Angry"],["","Sad"]], c:0, x:"Jugó toda la tarde y quiere dormir: está tired, cansado."},
  {n:3, k:"sentimientos", p:"¿Cómo se siente Tom?", t:"Tom's little brother broke his new toy car. Tom shouts: «No!»", o:[["","Angry"],["","Happy"],["","Tired"]], c:0, x:"Le rompieron su auto nuevo y grita: está angry, enojado."},
  /* ubicación en una escena */
  {n:3, k:"dónde está", p:"¿Dónde están los zapatos?", t:"In my bedroom there is a bed. My cat is on the bed and my shoes are under the bed.", o:[["","Debajo de la cama"],["","Encima de la cama"],["","Dentro del clóset"]], c:0, x:"Under the bed: debajo de la cama. El que está encima es el gato."},
  {n:3, k:"dónde está", p:"¿Dónde está la caja?", t:"The ball is in the box. The box is under the table.", o:[["","Debajo de la mesa"],["","Encima de la mesa"],["","Dentro de la mochila"]], c:0, x:"The box is under the table. La pelota está dentro de la caja."},
  {n:3, k:"dónde está", p:"¿Dónde está el osito?", t:"Where is my teddy bear? It isn't on the chair. It's in my backpack!", o:[["","En la mochila"],["","Encima de la silla"],["","Debajo de la silla"]], c:0, x:"It isn't on the chair: NO está en la silla. It's in my backpack: ¡en la mochila!"},
  {n:3, k:"dónde está", p:"¿Quién está más arriba?", t:"The cat is under the tree. The bird is in the tree.", o:[["","El pájaro"],["","El gato"],["","Los dos igual"]], c:0, x:"El pájaro está en el árbol y el gato está abajo, debajo del árbol."},
  /* elegir la frase bien dicha */
  {n:3, k:"frases bien dichas", p:"¿Cuál frase está bien escrita?", o:[["","I have an apple."],["","I have a apple."],["","I have one apples."]], c:0, x:"Delante de palabras como apple, egg u orange va an, porque empiezan con vocal."},
  {n:3, k:"frases bien dichas", p:"¿Cómo se dice «tengo siete años» en inglés?", o:[["","I am seven."],["","I have seven."],["","I have seven years."]], c:0, x:"En inglés la edad se dice con am, no con have: I am seven. ¡Distinto que en español!"},
  {n:3, k:"frases bien dichas", p:"¿Cómo se dice «tengo un auto rojo» en inglés?", o:[["","I have a red car."],["","I have a car red."],["","I have a cars red."]], c:0, x:"En inglés el color va antes de la cosa: a red car. En español es al revés: un auto rojo."},
  {n:3, k:"frases bien dichas", p:"Sofía es tu amiga. ¿Qué frase dices?", o:[["","She is my friend."],["","He is my friend."],["","It is my friend."]], c:0, x:"She es para niñas y mujeres. He es para niños y hombres."},
  {n:3, k:"frases bien dichas", p:"¿Cómo se dice «no me gusta la leche» en inglés?", o:[["","I don't like milk."],["","I no like milk."],["","I not like milk."]], c:0, x:"Para decir que algo no te gusta se usa don't: I don't like. ¡Nunca I no like!"}
]);

/* ============================================================
   MÁS PREGUNTAS DE NIVEL 2 Y 3 (segunda ronda)
   Lenguaje, Ciencias e Historia — para que el ciclo de repetición
   en estos niveles dure el doble.
   ============================================================ */
masPreguntas("lenguaje", [
  /* ================= NIVEL 2 ================= */
  /* --- comprender lo que leo --- */
  {n:2, k:"comprender lo que leo", p:"¿Cuándo guardó Emilia su polera de deporte?", t:"Emilia guardó su polera de deporte en la mochila la noche anterior, porque el miércoles hay educación física a primera hora.", o:[["","La noche anterior"],["","Esa misma mañana"],["","En el recreo"]], c:0, x:"El texto dice que la guardó la noche anterior, para no andar apurada en la mañana."},
  {n:2, k:"comprender lo que leo", p:"¿Por qué guardó su polera de deporte?", t:"Emilia guardó su polera de deporte en la mochila la noche anterior, porque el miércoles hay educación física a primera hora.", o:[["","Porque el miércoles hay educación física"],["","Porque se ensució jugando"],["","Porque se la pidió la profesora"]], c:0, x:"Lo dice el texto: el miércoles toca educación física a primera hora."},
  {n:2, k:"comprender lo que leo", p:"¿Qué trajo el tío Rodrigo?", t:"El tío Rodrigo llegó con una caja llena de choclos recién cosechados del campo y la dejó sobre la mesa de la cocina.", o:[["","Una caja de choclos"],["","Una caja de herramientas"],["","Una caja de ropa"]], c:0, x:"El texto dice que la caja estaba llena de choclos recién cosechados."},
  {n:2, k:"comprender lo que leo", p:"¿Dónde dejó la caja el tío Rodrigo?", t:"El tío Rodrigo llegó con una caja llena de choclos recién cosechados del campo y la dejó sobre la mesa de la cocina.", o:[["","Sobre la mesa"],["","Debajo de la cama"],["","En el patio"]], c:0, x:"La dejó sobre la mesa de la cocina, según dice el texto."},
  {n:2, k:"comprender lo que leo", p:"¿Qué se hace justo DESPUÉS de doblar la hoja por la mitad?", t:"Para armar un barquito de papel: 1. Dobla la hoja por la mitad. 2. Dobla las esquinas hacia el centro. 3. Dobla las puntas hacia arriba. 4. ¡Navégalo!", o:[["","Doblar las esquinas hacia el centro"],["","Doblar las puntas hacia arriba"],["","Navegar el barquito"]], c:0, x:"El paso 1 es doblar por la mitad, y el paso 2 es doblar las esquinas."},
  {n:2, k:"comprender lo que leo", p:"¿Cuántos pasos tiene esta instrucción?", t:"Para armar un barquito de papel: 1. Dobla la hoja por la mitad. 2. Dobla las esquinas hacia el centro. 3. Dobla las puntas hacia arriba. 4. ¡Navégalo!", o:[["","4 pasos"],["","2 pasos"],["","6 pasos"]], c:0, x:"Los números 1, 2, 3 y 4 marcan cada paso: son cuatro en total."},
  {n:2, k:"comprender lo que leo", p:"¿Cómo se sintió Vicente al terminar el partido?", t:"Cuando el árbitro pitó el final del partido, Vicente saltó, gritó de alegría y abrazó a todo su equipo: habían ganado la final.", o:[["","Alegre"],["","Triste"],["","Asustado"]], c:0, x:"El texto lo dice: gritó de alegría cuando terminó el partido."},
  {n:2, k:"comprender lo que leo", p:"¿Qué pasó en ese partido?", t:"Cuando el árbitro pitó el final del partido, Vicente saltó, gritó de alegría y abrazó a todo su equipo: habían ganado la final.", o:[["","Su equipo ganó la final"],["","Su equipo perdió"],["","El partido se suspendió"]], c:0, x:"El texto dice que habían ganado la final: por eso todos festejaban."},
  {n:2, k:"comprender lo que leo", p:"¿A qué hora es la fiesta de cumpleaños?", t:"Querida tía Pilar: el sábado es mi cumpleaños y quiero invitarte a mi casa a las cuatro de la tarde. Te quiere, Martina.", o:[["","A las cuatro de la tarde"],["","A las cuatro de la mañana"],["","A las siete de la tarde"]], c:0, x:"La carta dice claramente: a las cuatro de la tarde."},
  {n:2, k:"comprender lo que leo", p:"¿Quién escribió esta carta?", t:"Querida tía Pilar: el sábado es mi cumpleaños y quiero invitarte a mi casa a las cuatro de la tarde. Te quiere, Martina.", o:[["","Martina"],["","La tía Pilar"],["","La mamá de Martina"]], c:0, x:"Quien firma al final de la carta es quien la escribió: Martina."},
  {n:2, k:"comprender lo que leo", p:"¿Dónde vive el cóndor, según el texto?", t:"El cóndor es un ave enorme que vive en la cordillera de Chile. Puede volar muy alto sin apenas mover las alas.", o:[["","En la cordillera de Chile"],["","En el fondo del mar"],["","En la selva tropical"]], c:0, x:"El texto dice que vive en la cordillera de Chile."},
  {n:2, k:"comprender lo que leo", p:"¿Qué puede hacer el cóndor al volar?", t:"El cóndor es un ave enorme que vive en la cordillera de Chile. Puede volar muy alto sin apenas mover las alas.", o:[["","Volar muy alto sin esfuerzo"],["","Volar solo muy bajito"],["","Nadar bajo el agua"]], c:0, x:"El texto dice que vuela muy alto casi sin mover las alas."},
  {n:2, k:"comprender lo que leo", p:"¿Por qué ganó la tortuga la carrera?", t:"Una liebre se burló de una tortuga por ser lenta y la retó a una carrera. La tortuga caminó sin parar y ganó, porque la liebre se quedó dormida en el camino.", o:[["","Porque la liebre se quedó dormida"],["","Porque la tortuga corrió muy rápido"],["","Porque la liebre se cayó"]], c:0, x:"El texto dice que la liebre se durmió en el camino y por eso perdió."},
  {n:2, k:"comprender lo que leo", p:"¿Quién retó a quién en esta historia?", t:"Una liebre se burló de una tortuga por ser lenta y la retó a una carrera. La tortuga caminó sin parar y ganó, porque la liebre se quedó dormida en el camino.", o:[["","La liebre retó a la tortuga"],["","La tortuga retó a la liebre"],["","Las dos se retaron juntas"]], c:0, x:"La liebre se burló de la tortuga y la retó a competir."},
  {n:2, k:"comprender lo que leo", p:"¿Qué se inauguró ayer, según el texto?", t:"Ayer se inauguró una plaza nueva con juegos y árboles en la comuna de Ñuñoa. Muchos vecinos fueron a conocerla en la tarde.", o:[["","Una plaza nueva"],["","Un colegio nuevo"],["","Un hospital nuevo"]], c:0, x:"El texto dice que se inauguró una plaza nueva con juegos y árboles."},
  {n:2, k:"comprender lo que leo", p:"¿En qué comuna queda la plaza nueva?", t:"Ayer se inauguró una plaza nueva con juegos y árboles en la comuna de Ñuñoa. Muchos vecinos fueron a conocerla en la tarde.", o:[["","En Ñuñoa"],["","En Valdivia"],["","En Pucón"]], c:0, x:"El texto dice que la plaza quedó en la comuna de Ñuñoa."},
  /* --- vocabulario --- */
  {n:2, k:"vocabulario", p:"«Mi abuelo es muy PACIENTE: nunca se enoja si le pido que me explique de nuevo.» ¿Qué significa paciente?", o:[["","Que no se enoja fácil"],["","Que corre muy rápido"],["","Que tiene mucho sueño"]], c:0, x:"Ser paciente es esperar con calma, sin enojarse. ¡Qué suerte tener un abuelo así!"},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «gigante»?", o:[["","Diminuto"],["","Enorme"],["","Alto"]], c:0, x:"Gigante y diminuto son opuestos: uno es enorme y el otro, chiquitito."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa lo MISMO que «veloz»?", o:[["","Rápido"],["","Lento"],["","Fuerte"]], c:0, x:"Veloz y rápido son sinónimos: los dos hablan de mucha velocidad."},
  {n:2, k:"vocabulario", p:"«El perro parecía FEROZ, pero en realidad era juguetón y cariñoso.» ¿Qué significa feroz?", o:[["","Bravo y agresivo"],["","Suave y peludo"],["","Chico y débil"]], c:0, x:"Feroz es bravo o salvaje. Por eso sorprende que en verdad fuera cariñoso."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa lo CONTRARIO de «callado»?", o:[["","Ruidoso"],["","Tímido"],["","Aburrido"]], c:0, x:"El callado casi no habla; el ruidoso hace harta bulla. Son opuestos."},
  {n:2, k:"vocabulario", p:"«La torta quedó DELICIOSA: todos repitieron un pedazo.» ¿Qué significa deliciosa?", o:[["","Muy rica"],["","Muy fría"],["","Muy grande"]], c:0, x:"Si repitieron un pedazo es porque la torta estaba muy rica."},
  {n:2, k:"vocabulario", p:"¿Qué palabra significa casi lo MISMO que «triste»?", o:[["","Apenado"],["","Alegre"],["","Furioso"]], c:0, x:"Triste y apenado son sinónimos: los dos describen una pena."},
  {n:2, k:"vocabulario", p:"«Como no había llovido en meses, el campo estaba ÁRIDO.» ¿Qué significa árido?", o:[["","Muy seco"],["","Muy mojado"],["","Muy verde"]], c:0, x:"Sin lluvia por meses, la tierra se pone árida: seca y polvorienta."},
  /* --- palabras y su función --- */
  {n:2, k:"palabras y su función", p:"En «El gato negro duerme», ¿cuál palabra es el verbo?", o:[["","Duerme"],["","Gato"],["","Negro"]], c:0, x:"Duerme es la acción que hace el gato: por eso es el verbo."},
  {n:2, k:"palabras y su función", p:"¿Cuál de estas palabras es un adjetivo?", o:[["","Suave"],["","Saltar"],["","Ventana"]], c:0, x:"Suave describe cómo es algo: por eso es un adjetivo."},
  {n:2, k:"palabras y su función", p:"En «Los pájaros cantan alegres», ¿qué palabra dice cómo cantan?", o:[["","Alegres"],["","Pájaros"],["","Cantan"]], c:0, x:"Alegres describe cómo cantan los pájaros: es el adjetivo."},
  {n:2, k:"palabras y su función", p:"¿Cuál de estas palabras nombra un objeto?", o:[["","Silla"],["","Correr"],["","Bonito"]], c:0, x:"Silla es un sustantivo: nombra una cosa."},
  /* --- singular y plural --- */
  {n:2, k:"singular y plural", p:"¿Cuál es el plural de «el reloj»?", o:[["","Los relojes"],["","Los relojs"],["","Las relojes"]], c:0, x:"Cuando la palabra termina en consonante, el plural se forma con -es: relojes."},
  {n:2, k:"singular y plural", p:"¿Cuál es el plural de «la flor»?", o:[["","Las flores"],["","Las flors"],["","Los flores"]], c:0, x:"Flor termina en consonante, así que el plural lleva -es: flores."},
  {n:2, k:"singular y plural", p:"¿Cuál oración usa correctamente el plural?", o:[["","Los perros ladran fuerte."],["","Los perro ladran fuerte."],["","El perros ladran fuerte."]], c:0, x:"Si son varios perros, el artículo y el sustantivo van los dos en plural."},
  /* --- aumentativos y diminutivos --- */
  {n:2, k:"aumentativos y diminutivos", p:"¿Cuál es el diminutivo de «perro», para decirlo más chiquito y cariñoso?", o:[["","Perrito"],["","Perrazo"],["","Perruno"]], c:0, x:"Perrito es el diminutivo: se forma agregando -ito."},
  {n:2, k:"aumentativos y diminutivos", p:"¿Cuál es el aumentativo de «zapato», para decir que es bien grande?", o:[["","Zapatón"],["","Zapatito"],["","Zapatero"]], c:0, x:"Zapatón es el aumentativo: se forma agregando -ón."},
  {n:2, k:"aumentativos y diminutivos", p:"¿Cuál es el diminutivo de «pan»?", o:[["","Pancito"],["","Panzón"],["","Panadero"]], c:0, x:"Pancito es el diminutivo de pan: se agrega -cito."},
  /* --- familia de palabras --- */
  {n:2, k:"familia de palabras", p:"¿Cuál palabra es de la misma familia que «PAN»?", o:[["","Panadería"],["","Zapatería"],["","Juguetería"]], c:0, x:"Panadería viene de pan: es el lugar donde se hace y se vende."},
  {n:2, k:"familia de palabras", p:"¿Cuál palabra es de la misma familia que «LIBRO»?", o:[["","Librería"],["","Frutería"],["","Panadería"]], c:0, x:"Librería viene de libro: es el lugar donde se venden libros."},
  {n:2, k:"familia de palabras", p:"¿Cuál palabra es de la misma familia que «FLOR»?", o:[["","Florero"],["","Costurero"],["","Cocinero"]], c:0, x:"Florero viene de flor: es donde se ponen las flores."},
  /* --- escribir bien --- */
  {n:2, k:"escribir bien", p:"¿Cuál nombre propio debe llevar mayúscula?", v:"fuimos a valdivia el sábado.", o:[["","Valdivia"],["","Sábado"],["","Fuimos"]], c:0, x:"Valdivia es un nombre propio de ciudad: siempre lleva mayúscula."},
  {n:2, k:"escribir bien", p:"¿Qué signo va al final de «Qué lindo día hace»?", o:[["","El signo !"],["","El signo ?"],["","Una coma ,"]], c:0, x:"Es una exclamación de alegría: ¡Qué lindo día hace!"},
  {n:2, k:"escribir bien", p:"¿Cuál oración usa bien la coma?", o:[["","Compré manzanas, peras y uvas."],["","Compré, manzanas peras y uvas."],["","Compré manzanas peras, y uvas."]], c:0, x:"La coma va entre cada cosa de la lista: manzanas, peras y uvas."},
  {n:2, k:"escribir bien", p:"¿Cuál de estas preguntas tiene los signos correctos?", o:[["","¿Cómo te llamas?"],["","Cómo te llamas?"],["","¿Cómo te llamas."]], c:0, x:"Las preguntas necesitan los dos signos: uno al abrir y otro al cerrar."},
  /* --- tipos de texto --- */
  {n:2, k:"tipos de texto", p:"¿Qué texto usamos para saber los pasos de una receta de cocina?", o:[["","Las instrucciones"],["","Un poema de amor"],["","Una carta larga"]], c:0, x:"Las instrucciones explican, paso a paso, cómo hacer algo."},
  {n:2, k:"tipos de texto", p:"¿Para qué sirve un afiche o cartel?", o:[["","Para anunciar algo importante"],["","Para contar un cuento"],["","Para hacer cuentas"]], c:0, x:"Los afiches avisan cosas con letras grandes, para que se vean de lejos."},
  /* --- rimas y adivinanzas --- */
  {n:2, k:"rimas y adivinanzas", p:"¿Qué palabra rima con «PASTA»?", o:[["","Canasta"],["","Camisa"],["","Ventana"]], c:0, x:"Pas-ta y ca-nas-ta terminan igual: -asta."},
  {n:2, k:"rimas y adivinanzas", p:"Adivinanza: salgo de día y me escondo de noche, y sin mí no habría luz.", o:[["","El sol"],["","La luna"],["","Una estrella"]], c:0, x:"El sol sale de día y se esconde de noche: nos da la luz."},

  /* ================= NIVEL 3 ================= */
  /* --- comprender lo que leo --- */
  {n:3, k:"comprender lo que leo", p:"¿Dónde estaba Antonia?", t:"Antonia se sentó en una silla reclinable con una luz muy fuerte sobre su cabeza, mientras el dentista le pedía que abriera bien la boca.", o:[["","En el dentista"],["","En la peluquería"],["","En el oculista"]], c:0, x:"La silla reclinable, la luz fuerte y el dentista son pistas claras del lugar."},
  {n:3, k:"comprender lo que leo", p:"¿Qué le pidió el dentista a Antonia?", t:"Antonia se sentó en una silla reclinable con una luz muy fuerte sobre su cabeza, mientras el dentista le pedía que abriera bien la boca.", o:[["","Que abriera bien la boca"],["","Que cerrara los ojos"],["","Que se sacara los zapatos"]], c:0, x:"El texto dice justo eso: le pidió que abriera bien la boca."},
  {n:3, k:"comprender lo que leo", p:"¿Qué pasará probablemente si Fernanda no vuelve pronto?", t:"Fernanda dejó la manguera abierta regando las plantas y entró a buscar su celular, sin darse cuenta de que el balde de abajo ya estaba lleno hasta el borde.", o:[["","El balde se rebalsará"],["","Las plantas se secarán"],["","El agua se acabará"]], c:0, x:"Si el balde ya está lleno hasta el borde y la manguera sigue abierta, se va a rebalsar."},
  {n:3, k:"comprender lo que leo", p:"¿Para qué estaba usando Fernanda la manguera?", t:"Fernanda dejó la manguera abierta regando las plantas y entró a buscar su celular, sin darse cuenta de que el balde de abajo ya estaba lleno hasta el borde.", o:[["","Para regar las plantas"],["","Para lavar el auto"],["","Para llenar una piscina"]], c:0, x:"El texto dice que estaba regando las plantas con la manguera."},
  {n:3, k:"comprender lo que leo", p:"¿Qué significaba para los niños que se apagaran las luces?", t:"El profesor apagó las luces de la sala y todos los niños se quedaron en silencio, porque sabían que eso significaba que empezaría la película.", o:[["","Que empezaría la película"],["","Que había un corte de luz"],["","Que se acabó la clase"]], c:0, x:"El texto lo dice: sabían que las luces apagadas anunciaban la película."},
  {n:3, k:"comprender lo que leo", p:"¿Cómo reaccionaron los niños cuando se apagaron las luces?", t:"El profesor apagó las luces de la sala y todos los niños se quedaron en silencio, porque sabían que eso significaba que empezaría la película.", o:[["","Se quedaron en silencio"],["","Se pusieron a gritar"],["","Salieron corriendo de la sala"]], c:0, x:"El texto dice que se quedaron en silencio, esperando la película."},
  {n:3, k:"comprender lo que leo", p:"¿Dónde estaba Amanda?", t:"Desde la ventanilla del avión, Amanda veía las nubes pasar como algodón y sintió que sus oídos se le tapaban mientras subían más alto.", o:[["","En un avión"],["","En un barco"],["","En un auto"]], c:0, x:"La ventanilla, las nubes cerca y la altura son pistas de que iba en avión."},
  {n:3, k:"comprender lo que leo", p:"¿Qué le pasó a Amanda al subir más alto?", t:"Desde la ventanilla del avión, Amanda veía las nubes pasar como algodón y sintió que sus oídos se le tapaban mientras subían más alto.", o:[["","Se le taparon los oídos"],["","Le dio mucho sueño"],["","Se mareó del calor"]], c:0, x:"El texto dice que sintió los oídos tapados al subir más alto."},
  {n:3, k:"comprender lo que leo", p:"¿Por qué la cigarra se quedó sin comida en invierno?", t:"Una cigarra cantó todo el verano mientras las hormigas juntaban comida. Cuando llegó el frío, no tenía nada para comer. Moraleja: hay que prepararse con tiempo.", o:[["","Porque no guardó comida a tiempo"],["","Porque las hormigas se la robaron"],["","Porque no le gustaba comer"]], c:0, x:"Mientras las hormigas juntaban comida, la cigarra solo cantaba: por eso no tenía nada guardado."},
  {n:3, k:"comprender lo que leo", p:"¿Qué enseña esta fábula?", t:"Una cigarra cantó todo el verano mientras las hormigas juntaban comida. Cuando llegó el frío, no tenía nada para comer. Moraleja: hay que prepararse con tiempo.", o:[["","Que hay que prepararse con tiempo"],["","Que hay que cantar todo el día"],["","Que el invierno no llega nunca"]], c:0, x:"La moraleja lo dice al final: hay que prepararse con tiempo."},
  {n:3, k:"comprender lo que leo", p:"¿Para qué se escribió este aviso?", t:"Estimados vecinos: el sábado se cortará el agua entre las 9 y las 13 horas por trabajos en las cañerías. Junta de vecinos.", o:[["","Para avisar que cortarán el agua"],["","Para invitar a una fiesta"],["","Para vender una casa"]], c:0, x:"El aviso informa sobre el corte de agua y explica por qué será."},
  {n:3, k:"comprender lo que leo", p:"¿Cuántas horas durará el corte de agua?", t:"Estimados vecinos: el sábado se cortará el agua entre las 9 y las 13 horas por trabajos en las cañerías. Junta de vecinos.", o:[["","4 horas"],["","1 hora"],["","Todo el día"]], c:0, x:"De las 9 a las 13 horas hay 4 horas de diferencia."},
  {n:3, k:"comprender lo que leo", p:"¿Qué se puede pensar de Martín?", t:"Cuando la profesora preguntó quién había roto el florero, Martín se puso colorado y se quedó mirando el suelo sin decir nada.", o:[["","Que fue él quien lo rompió"],["","Que no estaba en la sala"],["","Que se puso feliz"]], c:0, x:"Ponerse colorado y no decir nada, mirando el suelo, son señales de sentirse culpable."},
  {n:3, k:"comprender lo que leo", p:"¿Qué hizo Martín cuando preguntó la profesora?", t:"Cuando la profesora preguntó quién había roto el florero, Martín se puso colorado y se quedó mirando el suelo sin decir nada.", o:[["","Se quedó mirando el suelo en silencio"],["","Levantó la mano de inmediato"],["","Se rió fuerte"]], c:0, x:"El texto dice justo eso: se quedó mirando el suelo sin decir nada."},
  {n:3, k:"comprender lo que leo", p:"¿Cuál oración es VERDADERA según el texto?", t:"El zorro culpeo vive en distintas zonas de Chile, desde el desierto hasta el sur. Come conejos, ratones e insectos, y sale a cazar principalmente de noche.", o:[["","Caza principalmente de noche"],["","Vive solo en el desierto"],["","Come solamente insectos"]], c:0, x:"El texto dice que caza de noche. Vive en varias zonas y come varios animales."},
  {n:3, k:"comprender lo que leo", p:"Según lo que come, ¿qué tipo de animal es el zorro culpeo?", t:"El zorro culpeo vive en distintas zonas de Chile, desde el desierto hasta el sur. Come conejos, ratones e insectos, y sale a cazar principalmente de noche.", o:[["","Es carnívoro"],["","Es herbívoro"],["","Es solo insectívoro"]], c:0, x:"Si come conejos, ratones e insectos, se alimenta de otros animales: es carnívoro."},
  /* --- vocabulario --- */
  {n:3, k:"vocabulario", p:"«El pasillo era tan ESTRECHO que solo cabía una persona a la vez.» ¿Qué significa estrecho?", o:[["","Con poco espacio"],["","Ancho y grande"],["","Torcido y feo"]], c:0, x:"Si solo cabía una persona, es porque tenía poco espacio: eso es estrecho."},
  {n:3, k:"vocabulario", p:"«Después de tanto correr, Ignacio quedó JADEANDO.» ¿Qué significa jadeando?", o:[["","Respirando muy agitado"],["","Durmiendo profundo"],["","Caminando lento"]], c:0, x:"Después de correr harto, uno respira fuerte y rápido: eso es jadear."},
  {n:3, k:"vocabulario", p:"¿Qué significa DESordenar algo?", o:[["","Lo contrario de ordenar"],["","Ordenarlo dos veces"],["","Ordenarlo muy bien"]], c:0, x:"El prefijo DES- da la idea contraria: desordenar es lo opuesto de ordenar."},
  {n:3, k:"vocabulario", p:"¿Qué significa RELEER un cuento?", o:[["","Leerlo de nuevo"],["","Leerlo al revés"],["","Dejar de leerlo"]], c:0, x:"El prefijo RE- significa otra vez: releer es volver a leer."},
  {n:3, k:"vocabulario", p:"«Necesito una PILA para la linterna.» ¿Qué significa pila en esta oración?", o:[["","Una batería"],["","Un montón de cosas"],["","Una pileta de agua"]], c:0, x:"En este caso, pila es la batería que le da energía a la linterna."},
  {n:3, k:"vocabulario", p:"«Marcelo es tan TERCO que nunca cambia de opinión, aunque le muestren que está equivocado.» ¿Qué significa terco?", o:[["","Que no cambia de idea fácilmente"],["","Que se equivoca siempre"],["","Que es muy simpático"]], c:0, x:"Ser terco es mantenerse en lo mismo, aunque haya buenas razones para cambiar."},
  {n:3, k:"vocabulario", p:"El que toca la guitarra es guitarrista. ¿Cómo se llama el que toca el violín?", o:[["","Violinista"],["","Violinero"],["","Violinador"]], c:0, x:"El sufijo -ista nombra al que toca un instrumento: guitarrista, violinista."},
  {n:3, k:"vocabulario", p:"¿Cuál es el antónimo de «obediente»?", o:[["","Desobediente"],["","Amable"],["","Responsable"]], c:0, x:"El obediente hace caso; el desobediente, no. Son antónimos."},
  /* --- palabras y su función --- */
  {n:3, k:"palabras y su función", p:"«Sebastián y Camila fueron al cine. Él compró las entradas.» ¿A quién se refiere «él»?", o:[["","A Sebastián"],["","A Camila"],["","A los dos"]], c:0, x:"«Él» reemplaza al nombre masculino que salió antes: Sebastián."},
  {n:3, k:"palabras y su función", p:"En «Los perros corren felices», ¿qué palabra podría reemplazar a «los perros»?", o:[["","Ellos"],["","Ella"],["","Nosotros"]], c:0, x:"«Ellos» reemplaza a un grupo masculino y plural, como los perros."},
  {n:3, k:"palabras y su función", p:"En «La niña alta juega fútbol», ¿cuál palabra es un adjetivo?", o:[["","Alta"],["","Niña"],["","Juega"]], c:0, x:"Alta describe cómo es la niña: por eso es el adjetivo."},
  {n:3, k:"palabras y su función", p:"En «Compré un jugo frío», ¿qué palabra describe al jugo?", o:[["","Frío"],["","Compré"],["","Jugo"]], c:0, x:"Frío dice cómo estaba el jugo: es el adjetivo de la oración."},
  /* --- singular y plural --- */
  {n:3, k:"singular y plural", p:"¿Cuál es el plural de «el lunes»?", o:[["","Los lunes"],["","Los luneses"],["","Las lunes"]], c:0, x:"Los días de la semana que terminan en S no cambian en plural: el lunes, los lunes."},
  {n:3, k:"singular y plural", p:"¿Cuál es el plural de «el paraguas»?", o:[["","Los paraguas"],["","Los paraguases"],["","Las paraguas"]], c:0, x:"Paraguas ya termina en S, así que no cambia en plural."},
  {n:3, k:"singular y plural", p:"¿Cuál es el plural de «el águila»?", o:[["","Las águilas"],["","Los águilas"],["","Las águila"]], c:0, x:"Águila usa EL en singular por sonar mejor, pero es femenina: en plural va con LAS."},
  /* --- aumentativos y diminutivos --- */
  {n:3, k:"aumentativos y diminutivos", p:"¿Cuál es el diminutivo de «flor»?", o:[["","Florecita"],["","Florota"],["","Florero"]], c:0, x:"Flor no lleva solo -ita: el diminutivo correcto es florecita."},
  {n:3, k:"aumentativos y diminutivos", p:"¿Cuál es el aumentativo de «hombre»?", o:[["","Hombrón"],["","Hombrecito"],["","Hombrero"]], c:0, x:"Hombrón es el aumentativo: se forma agregando -ón."},
  /* --- familia de palabras --- */
  {n:3, k:"familia de palabras", p:"¿Cuál palabra NO pertenece a la familia de «MAR»?", o:[["","Mesa"],["","Marino"],["","Marea"]], c:0, x:"Marino y marea vienen de mar. Mesa no tiene relación con esa familia."},
  {n:3, k:"familia de palabras", p:"¿Cuál palabra es de la misma familia que «TIERRA»?", o:[["","Terremoto"],["","Papelería"],["","Panadería"]], c:0, x:"Terremoto viene de tierra: es cuando la tierra tiembla."},
  /* --- orden alfabético --- */
  {n:3, k:"orden alfabético", p:"¿Cuál palabra va PRIMERO en orden alfabético?", v:"árbol · casa · perro", o:[["","Árbol"],["","Casa"],["","Perro"]], c:0, x:"La Á se ordena junto a la A: árbol va antes que casa y perro."},
  {n:3, k:"orden alfabético", p:"¿Cuál palabra va PRIMERO en orden alfabético?", v:"dulce · dedo · doctor", o:[["","Dedo"],["","Doctor"],["","Dulce"]], c:0, x:"Las tres empiezan con D, así que miras la segunda letra: E va antes que O y U."},
  /* --- escribir bien --- */
  {n:3, k:"escribir bien", p:"¿Cuál oración usa bien las mayúsculas?", o:[["","Fui a Temuco con mi tío Pablo."],["","fui a temuco con mi tío pablo."],["","Fui A Temuco Con Mi Tío Pablo."]], c:0, x:"Mayúscula solo al iniciar la oración y en nombres propios: Temuco y Pablo."},
  {n:3, k:"escribir bien", p:"¿Qué le falta a esta oración?", v:"cuántos años tienes", o:[["","Los signos ¿ ? y la mayúscula inicial"],["","Solo agregar una coma"],["","Nada, ya está bien escrita"]], c:0, x:"Es una pregunta: necesita ¿ al inicio, ? al final y mayúscula al empezar."},
  {n:3, k:"escribir bien", p:"¿Cuál oración usa bien la coma?", v:"Compré peras plátanos y duraznos.", o:[["","Compré peras, plátanos y duraznos."],["","Compré, peras plátanos y duraznos."],["","Compré peras plátanos, y duraznos."]], c:0, x:"La coma separa cada cosa de la lista, menos la última, que va con «y»."},
  {n:3, k:"escribir bien", p:"¿Qué nombre propio necesita mayúscula aquí?", v:"iremos de vacaciones a pucón.", o:[["","Pucón"],["","Vacaciones"],["","Iremos"]], c:0, x:"Pucón es el nombre de una ciudad: los nombres propios siempre llevan mayúscula."},
  /* --- tipos de texto --- */
  {n:3, k:"tipos de texto", p:"¿Qué diferencia hay entre un cuento y una noticia?", o:[["","El cuento es inventado"],["","El cuento siempre rima"],["","La noticia no tiene título"]], c:0, x:"Los cuentos nacen de la imaginación; las noticias cuentan hechos verdaderos."},
  {n:3, k:"tipos de texto", p:"Si un texto explica paso a paso cómo armar un juguete, ¿qué tipo de texto es?", o:[["","Instrucciones"],["","Un poema"],["","Una carta"]], c:0, x:"Las instrucciones explican en orden los pasos para hacer algo."},
  /* --- rimas y adivinanzas --- */
  {n:3, k:"rimas y adivinanzas", p:"Adivinanza: blanca por fuera, amarilla por dentro, y en la cocina siempre estoy presente.", o:[["","El huevo"],["","La leche"],["","El limón"]], c:0, x:"Cáscara blanca por fuera y yema amarilla por dentro: es el huevo."},
  {n:3, k:"rimas y adivinanzas", p:"¿Cuál palabra SÍ rima con «camión»?", o:[["","Avión"],["","Mesa"],["","Perro"]], c:0, x:"Camión y avión terminan igual, en -ión: por eso riman."}
]);

masPreguntas("ciencias", [
  /* ================= NIVEL 2 ================= */
  /* vertebrados */
  {n:2, k:"vertebrados", p:"¿Qué tiene un ave que un pez no tiene?", o:[["","Plumas"],["","Escamas"],["","Aletas"]], c:0, x:"Las aves tienen plumas; los peces tienen escamas y aletas para nadar."},
  {n:2, k:"vertebrados", p:"El perro no pone huevos: sus cachorros nacen ya formados. ¿Qué grupo es?", o:[["","Mamíferos"],["","Aves"],["","Reptiles"]], c:0, x:"Los mamíferos tienen crías vivas en vez de poner huevos, como el perro."},
  {n:2, k:"vertebrados", p:"¿Qué tienen en común la lagartija y la serpiente?", o:[["","El cuerpo cubierto de escamas"],["","El cuerpo cubierto de plumas"],["","El cuerpo cubierto de pelo"]], c:0, x:"Las dos son reptiles: su piel tiene escamas secas."},
  {n:2, k:"vertebrados", p:"¿Por qué las alas del pingüino no le sirven para volar?", o:[["","Son cortas y le sirven para nadar"],["","No tiene plumas en las alas"],["","Son demasiado grandes y pesadas"]], c:0, x:"Las alas del pingüino son chicas y fuertes: le sirven como aletas para nadar."},
  /* invertebrados */
  {n:2, k:"invertebrados", p:"¿Cuántas alas tiene una mariposa adulta?", v:"🦋", o:[["","Cuatro"],["","Dos"],["","Seis"]], c:0, x:"La mariposa tiene cuatro alas: dos delante y dos atrás."},
  {n:2, k:"invertebrados", p:"¿Qué tienen en común la abeja y la hormiga?", o:[["","Las dos son insectos con 6 patas"],["","Las dos tienen 8 patas"],["","Las dos tienen caparazón de crustáceo"]], c:0, x:"La abeja y la hormiga son insectos: tienen 6 patas y el cuerpo en tres partes."},
  {n:2, k:"invertebrados", p:"¿Por qué el caracol deja un rastro brilloso al moverse?", o:[["","Suelta una baba para deslizarse"],["","Pisa con muchas patitas mojadas"],["","Se arrastra sobre su caparazón roto"]], c:0, x:"El caracol se mueve gracias a una baba que suelta su cuerpo blando."},
  {n:2, k:"invertebrados", p:"¿Qué tiene la medusa que la hace un invertebrado?", o:[["","No tiene huesos ni columna"],["","Tiene columna vertebral blanda"],["","Tiene un caparazón de crustáceo"]], c:0, x:"La medusa no tiene huesos: por eso es invertebrada, como los insectos y las arañas."},
  /* ciclo de vida */
  {n:2, k:"ciclo de vida", p:"¿Qué tres cosas necesita una semilla para germinar y crecer?", o:[["","Agua, tierra y luz"],["","Solo mucha oscuridad"],["","Solo aire frío"]], c:0, x:"Con agua, tierra y luz, la semilla germina y crece hasta ser una planta."},
  {n:2, k:"ciclo de vida", p:"¿Cómo se llama la cría del perro?", o:[["","Cachorro"],["","Pollito"],["","Renacuajo"]], c:0, x:"La cría del perro se llama cachorro. El pollito es cría de la gallina."},
  {n:2, k:"ciclo de vida", p:"¿Qué le pasa a la oruga dentro de la crisálida?", o:[["","Se transforma en mariposa"],["","Se transforma en huevo"],["","Se transforma en flor"]], c:0, x:"Adentro de la crisálida, el cuerpo de la oruga cambia hasta ser mariposa."},
  {n:2, k:"ciclo de vida", p:"¿Cómo nace la cría de la vaca?", o:[["","Viva, sin salir de un huevo"],["","De un huevo con cáscara dura"],["","De una crisálida"]], c:0, x:"La vaca es mamífera: su cría nace viva, directamente del cuerpo de la mamá."},
  /* hábitat */
  {n:2, k:"hábitat", p:"¿Por qué el pez necesita vivir siempre dentro del agua?", o:[["","Porque respira con branquias"],["","Porque tiene plumas delicadas"],["","Porque no le gusta el sol"]], c:0, x:"Las branquias solo funcionan bajo el agua. Fuera de ella, el pez no puede respirar."},
  {n:2, k:"hábitat", p:"¿Qué necesita un cactus para vivir bien en el desierto?", o:[["","Aguantar mucho tiempo sin agua"],["","Recibir lluvia todos los días"],["","Vivir a la sombra de otras plantas"]], c:0, x:"El cactus guarda agua en su tallo grueso y aguanta muchos días sin llover."},
  {n:2, k:"hábitat", p:"En un río de aguas rápidas y frías, ¿qué animal esperarías encontrar?", o:[["","Una trucha"],["","Un camello"],["","Una lagartija del desierto"]], c:0, x:"La trucha vive en ríos y lagos de aguas frías y limpias."},
  /* animales de Chile */
  {n:2, k:"animales de Chile", p:"¿De qué se alimenta principalmente el cóndor?", o:[["","De animales muertos que encuentra"],["","De hojas y pasto tierno"],["","De peces que caza en el mar"]], c:0, x:"El cóndor es carroñero: vuela muy alto buscando animales muertos para comer."},
  {n:2, k:"animales de Chile", p:"¿Dónde suele hacer su nido el cóndor?", o:[["","En roqueríos altos de la cordillera"],["","En la arena de la playa"],["","Dentro del agua de un lago"]], c:0, x:"El cóndor anida en acantilados y roqueríos donde nadie puede molestarlo."},
  {n:2, k:"animales de Chile", p:"El guanaco vive en manada y no tiene joroba. ¿Qué animal es?", o:[["","Un pariente del camello"],["","Un roedor"],["","Un ave que no vuela"]], c:0, x:"El guanaco es un camélido, pariente del camello, y vive en manadas."},
  {n:2, k:"animales de Chile", p:"¿Por qué es importante no dejar basura en los parques nacionales?", o:[["","Para no dañar el hábitat de los animales"],["","Para que los animales tengan más comida"],["","Porque la basura ayuda a las plantas"]], c:0, x:"La basura puede enfermar a los animales y ensuciar el lugar donde viven."},
  /* mi cuerpo */
  {n:2, k:"mi cuerpo", p:"¿Qué parte de tu cuerpo protege tu cerebro?", o:[["","El cráneo"],["","Las costillas"],["","La columna"]], c:0, x:"El cráneo es un hueso durísimo que envuelve y protege tu cerebro."},
  {n:2, k:"mi cuerpo", p:"¿Qué hacen tus pulmones cada vez que respiras?", o:[["","Se llenan y se vacían de aire"],["","Bombean sangre a todo el cuerpo"],["","Digieren la comida que comiste"]], c:0, x:"Al inhalar, los pulmones se llenan de aire; al exhalar, se vacían."},
  {n:2, k:"mi cuerpo", p:"¿Para qué sirven las costillas?", o:[["","Proteger el corazón y los pulmones"],["","Para ayudarte a masticar"],["","Para que puedas oler mejor"]], c:0, x:"Las costillas forman una jaula de huesos que protege órganos importantes."},
  /* los sentidos */
  {n:2, k:"los sentidos", p:"¿Con qué sentido te das cuenta de que la sopa está muy caliente?", o:[["","El tacto"],["","El oído"],["","La vista"]], c:0, x:"La piel de tus manos siente el calor: eso es el sentido del tacto."},
  {n:2, k:"los sentidos", p:"¿Qué sentido usas para saber si la leche está cortada, antes de probarla?", o:[["","El olfato"],["","El oído"],["","El tacto"]], c:0, x:"La nariz detecta el mal olor de la leche cortada antes de que la pruebes."},
  {n:2, k:"los sentidos", p:"¿Qué parte del cuerpo usas para el sentido del gusto?", o:[["","La lengua"],["","La nariz"],["","La piel"]], c:0, x:"En la lengua están las papilas gustativas, que distinguen los sabores."},
  {n:2, k:"los sentidos", p:"Cierras los ojos y reconoces a tu perro por sus ladridos. ¿Qué sentido usaste?", o:[["","El oído"],["","La vista"],["","El olfato"]], c:0, x:"Escuchar los ladridos y reconocerlos es usar el sentido del oído."},
  /* estados de la materia */
  {n:2, k:"estados de la materia", p:"¿Cuál de estos objetos es un líquido?", o:[["","El aceite"],["","La piedra"],["","El humo"]], c:0, x:"El aceite toma la forma del envase que lo contiene: es líquido."},
  {n:2, k:"estados de la materia", p:"¿Qué forma tiene un cubo de hielo dentro de un vaso?", o:[["","La forma del cubo, no cambia"],["","La forma redonda del vaso"],["","No tiene ninguna forma"]], c:0, x:"El hielo es sólido: mantiene su propia forma aunque esté dentro de un vaso."},
  {n:2, k:"estados de la materia", p:"El aire que respiras, ¿en qué estado de la materia está?", o:[["","Gaseoso"],["","Líquido"],["","Sólido"]], c:0, x:"El aire es un gas: no se ve, pero ocupa espacio y llena los pulmones."},
  {n:2, k:"estados de la materia", p:"¿Qué le pasa a una vela cuando se derrite con el fuego?", o:[["","Pasa de sólida a líquida"],["","Pasa de líquida a gaseosa"],["","Pasa de gaseosa a sólida"]], c:0, x:"La cera sólida se calienta y se vuelve líquida: eso es derretirse."},
  /* materiales */
  {n:2, k:"materiales", p:"¿Cuál de estos objetos flota en el agua?", o:[["","Un tapón de corcho"],["","Una moneda de metal"],["","Una piedra chica"]], c:0, x:"El corcho es liviano y flota. El metal y la piedra son pesados y se hunden."},
  {n:2, k:"materiales", p:"¿Por qué se usa vidrio para hacer ventanas?", o:[["","Porque deja pasar la luz"],["","Porque es blando y flexible"],["","Porque flota en el agua"]], c:0, x:"El vidrio es transparente: deja entrar la luz aunque esté cerrada la ventana."},
  {n:2, k:"materiales", p:"¿Cuál de estos materiales se dobla más fácilmente?", o:[["","Un alambre de metal"],["","Un ladrillo"],["","Un vaso de vidrio"]], c:0, x:"El alambre es flexible y se dobla. El ladrillo y el vidrio son rígidos."},
  {n:2, k:"materiales", p:"¿Por qué las ollas se hacen de metal y no de madera?", o:[["","Porque el metal aguanta el calor del fuego"],["","Porque la madera flota mejor"],["","Porque el metal es más liviano"]], c:0, x:"El metal aguanta altas temperaturas sin quemarse, por eso sirve para cocinar."},
  /* vida sana */
  {n:2, k:"vida sana", p:"¿Por qué es importante dormir suficientes horas?", o:[["","El cuerpo descansa y se recupera"],["","El cuerpo gasta más energía"],["","Los huesos dejan de crecer"]], c:0, x:"Al dormir, tu cuerpo y tu cerebro descansan y se preparan para el otro día."},
  {n:2, k:"vida sana", p:"¿Por qué hay que lavarse las manos antes de comer?", o:[["","Para sacar microbios que enferman"],["","Para que la comida se vea más rica"],["","Para que las manos se pongan suaves"]], c:0, x:"Al lavarte las manos, sacas microbios que si comes pueden enfermarte la guata."},
  {n:2, k:"vida sana", p:"¿Qué te ayuda a mantener sanos tus dientes?", o:[["","Lavarlos después de comer"],["","Comer muchos dulces"],["","No tomar nunca agua"]], c:0, x:"Lavarte los dientes saca los restos de comida que pueden dañarlos."},
  /* el tiempo y las estaciones */
  {n:2, k:"el tiempo y las estaciones", p:"¿En qué estación del año caen las hojas de muchos árboles en Chile?", o:[["","En otoño"],["","En verano"],["","En primavera"]], c:0, x:"En otoño baja la temperatura y muchos árboles pierden sus hojas."},
  {n:2, k:"el tiempo y las estaciones", p:"¿Qué ropa es más útil un día de mucho frío?", o:[["","Una parka gruesa"],["","Una polera sin mangas"],["","Un traje de baño"]], c:0, x:"La parka gruesa abriga y ayuda a mantener el calor de tu cuerpo."},
  {n:2, k:"el tiempo y las estaciones", p:"¿Qué instrumento se usa para medir la temperatura del aire?", o:[["","El termómetro"],["","El pluviómetro"],["","La veleta"]], c:0, x:"El termómetro mide los grados de calor o frío. El pluviómetro mide la lluvia."},
  /* reciclar */
  {n:2, k:"reciclar", p:"¿En qué contenedor se bota una botella de vidrio para reciclar?", o:[["","En el contenedor verde del vidrio"],["","En el contenedor de papel"],["","En cualquier basurero"]], c:0, x:"El vidrio se recicla aparte, en contenedores especiales de color verde."},
  {n:2, k:"reciclar", p:"¿Qué se puede hacer con una hoja de cuaderno usada por un solo lado?", o:[["","Usarla de nuevo como borrador"],["","Botarla de inmediato"],["","Quemarla en el patio"]], c:0, x:"Usar el lado que quedó en blanco es una forma simple de reutilizar el papel."},
  {n:2, k:"reciclar", p:"¿Por qué conviene llevar bolsas de género al supermercado?", o:[["","Para usar menos bolsas plásticas"],["","Para que la comida pese menos"],["","Para que las frutas duren más"]], c:0, x:"Las bolsas de género se usan muchas veces y así se gastan menos bolsas plásticas."},
  /* las plantas */
  {n:2, k:"las plantas", p:"¿Qué parte de la planta fabrica su alimento con la luz del sol?", o:[["","Las hojas"],["","La raíz"],["","La semilla"]], c:0, x:"Las hojas usan la luz del sol para fabricar el alimento de la planta."},
  {n:2, k:"las plantas", p:"¿Cuál de estas plantas tiene flores?", o:[["","El rosal"],["","El helecho"],["","El pino"]], c:0, x:"El rosal es una planta con flores. El helecho y el pino no tienen flores."},

  /* ================= NIVEL 3 ================= */
  /* vertebrados */
  {n:3, k:"vertebrados", t:"Un animal tiene el cuerpo cubierto de pelo, amamanta a sus crías y vive en madrigueras bajo tierra.", p:"¿A qué grupo de vertebrados pertenece?", o:[["","Mamíferos"],["","Reptiles"],["","Aves"]], c:0, x:"Pelo y leche para las crías son señas de los mamíferos, aunque vivan bajo tierra."},
  {n:3, k:"vertebrados", p:"¿Cuál de estos animales NO pone huevos?", o:[["","El caballo"],["","La gallina"],["","La tortuga"]], c:0, x:"El caballo es mamífero: su cría nace viva. La gallina y la tortuga sí ponen huevos."},
  {n:3, k:"vertebrados", t:"El tiburón y el delfín tienen forma parecida y viven en el mar, pero uno respira con branquias y el otro sube a respirar aire.", p:"¿Cuál de los dos es un mamífero?", o:[["","El delfín"],["","El tiburón"],["","Los dos son mamíferos"]], c:0, x:"El delfín sube a respirar aire con pulmones. El tiburón usa branquias: es un pez."},
  /* invertebrados */
  {n:3, k:"invertebrados", t:"La araña tiene 8 patas y no tiene antenas. El insecto tiene 6 patas y sí tiene antenas.", p:"Si un animal tiene 6 patas y antenas, ¿qué es?", o:[["","Un insecto"],["","Un arácnido"],["","Un crustáceo"]], c:0, x:"6 patas y antenas son señas de los insectos, no de las arañas."},
  {n:3, k:"invertebrados", p:"¿Por qué la lombriz de tierra necesita que la tierra esté húmeda?", o:[["","Porque respira a través de su piel"],["","Porque toma agua con la boca"],["","Porque le gusta nadar en charcos"]], c:0, x:"La lombriz respira por la piel, y la piel necesita estar mojada para funcionar."},
  {n:3, k:"invertebrados", t:"Las abejas viven en colmenas organizadas: unas cuidan a las crías, otras buscan alimento y una sola pone los huevos.", p:"¿Qué muestra esto sobre las abejas?", o:[["","Que se organizan y trabajan en equipo"],["","Que viven siempre solas"],["","Que todas hacen exactamente lo mismo"]], c:0, x:"Las abejas son insectos sociales: se organizan y reparten el trabajo entre todas."},
  /* ciclo de vida */
  {n:3, k:"ciclo de vida", t:"La tortuga marina pone sus huevos en la arena de la playa y luego regresa al mar, sin quedarse a cuidarlos.", p:"¿Qué le pasará a las crías cuando nazcan?", o:[["","Deberán arreglárselas solas hasta el mar"],["","La mamá las llevará cargando"],["","Vivirán en el nido para siempre"]], c:0, x:"Como la mamá se fue, las tortuguitas recién nacidas caminan solas hasta el agua."},
  {n:3, k:"ciclo de vida", p:"¿En qué se parecen el ciclo de vida de la persona y el del perro?", o:[["","Los dos nacen vivos, sin salir de un huevo"],["","Los dos pasan por una crisálida"],["","Los dos ponen huevos con cáscara"]], c:0, x:"Personas y perros somos mamíferos: nacemos ya formados, sin huevo de por medio."},
  {n:3, k:"ciclo de vida", t:"Un canario pone sus huevos en un nido. Los incuba dándoles calor durante varios días, hasta que nacen los pollitos.", p:"¿Qué pasaría si el canario dejara de incubar los huevos?", o:[["","Los pollitos se quedarían sin calor"],["","Los huevos se pondrían más grandes"],["","Los pollitos nacerían mucho antes"]], c:0, x:"Sin el calor de la mamá, el pollito no puede terminar de formarse dentro del huevo."},
  /* hábitat */
  {n:3, k:"hábitat", t:"El zorro culpeo vive en distintos ambientes de Chile, desde el desierto hasta la cordillera, y come desde insectos hasta conejos.", p:"¿Qué característica le permite vivir en tantos lugares distintos?", o:[["","Comer muchos tipos de alimento distintos"],["","Comer solamente un tipo de planta"],["","Vivir únicamente bajo el agua"]], c:0, x:"Comer casi de todo le permite encontrar alimento en ambientes muy diferentes."},
  {n:3, k:"hábitat", t:"En la selva valdiviana llueve mucho y hay árboles altísimos que tapan el sol. El suelo queda siempre húmedo y en sombra.", p:"¿Qué tipo de planta esperarías encontrar ahí?", o:[["","Helechos que crecen con poca luz"],["","Cactus que aguantan la sequía"],["","Plantas del desierto"]], c:0, x:"Los helechos aguantan poca luz y necesitan humedad: les va bien en ese ambiente."},
  {n:3, k:"hábitat", p:"Si sacas un pez de la pecera y lo pones en tierra, ¿qué le pasará?", o:[["","No podrá respirar y se ahogará"],["","Se pondrá a caminar tranquilo"],["","Le crecerán patas enseguida"]], c:0, x:"Las branquias del pez solo funcionan en el agua: fuera de ella, no puede respirar."},
  /* animales de Chile */
  {n:3, k:"animales de Chile", t:"El pudú es el ciervo más pequeño del mundo y vive escondido entre la maleza de los bosques del sur de Chile.", p:"¿Por qué es difícil verlo en la naturaleza?", o:[["","Es chico y se esconde bien"],["","Es enorme y vive muy lejos"],["","Vive siempre bajo el agua"]], c:0, x:"Su tamaño pequeño y su gusto por esconderse hacen que casi no se le vea."},
  {n:3, k:"animales de Chile", t:"El choroy es un loro verde que vive en bosques del centro y sur de Chile. Come semillas y frutos de los árboles nativos.", p:"¿Qué pasaría con el choroy si se talan los bosques donde vive?", o:[["","Tendría menos alimento y refugio"],["","Tendría más árboles para comer"],["","Se iría a vivir al desierto"]], c:0, x:"Sin bosque nativo, el choroy pierde su comida y los árboles donde anida."},
  {n:3, k:"animales de Chile", p:"¿Cuál de estos animales no forma parte de la fauna nativa de Chile?", o:[["","El elefante"],["","El huemul"],["","El cóndor"]], c:0, x:"El elefante vive en África y Asia. El huemul y el cóndor son animales nativos de Chile."},
  {n:3, k:"animales de Chile", t:"El huemul aparece junto al cóndor en el escudo de Chile, uno a cada lado.", p:"¿Qué tienen en común el huemul y el cóndor, además de estar en el escudo?", o:[["","Los dos son nativos de Chile"],["","Los dos viven en el mar"],["","Los dos son insectos"]], c:0, x:"Ambos son animales que viven en Chile desde siempre y aparecen en nuestro escudo."},
  /* mi cuerpo */
  {n:3, k:"mi cuerpo", p:"Después de tragar la comida masticada, ¿qué órgano sigue deshaciéndola?", o:[["","El estómago"],["","Los pulmones"],["","El cerebro"]], c:0, x:"En el estómago, los jugos que hay adentro siguen deshaciendo la comida que masticaste."},
  {n:3, k:"mi cuerpo", t:"Cuando te asustas de repente, tu corazón late más rápido y respiras más agitado, aunque estés quieto.", p:"¿Por qué pasa esto si no te has movido?", o:[["","Tu cuerpo se prepara para reaccionar"],["","Tu corazón deja de funcionar bien"],["","Tus pulmones se llenan de agua"]], c:0, x:"El susto hace que tu cuerpo se ponga en alerta, listo para correr o reaccionar."},
  {n:3, k:"mi cuerpo", p:"¿Por qué te duelen los músculos al día siguiente de hacer mucho ejercicio?", o:[["","Porque trabajaron más de lo normal"],["","Porque se llenaron de aire"],["","Porque dejaron de recibir sangre"]], c:0, x:"Un esfuerzo grande cansa a los músculos, y por eso al otro día se sienten adoloridos."},
  /* el agua */
  {n:3, k:"el agua", t:"Un charco de agua después de la lluvia desaparece solo, sin que nadie lo seque, al pasar unos días de sol.", p:"¿Adónde se fue esa agua?", o:[["","Se evaporó y subió al aire como vapor"],["","Se transformó en tierra"],["","Bajó a un río subterráneo"]], c:0, x:"Con el calor del sol, el agua del charco se evapora y sube al aire."},
  {n:3, k:"el agua", p:"¿Por qué en invierno se empañan las ventanas de la casa por dentro?", o:[["","El vapor del aire se enfría en el vidrio"],["","El vidrio se derrite un poco con el frío"],["","La lluvia entra por debajo de la puerta"]], c:0, x:"El aire tibio de adentro tiene vapor de agua, que se convierte en gotitas al enfriarse en el vidrio."},
  {n:3, k:"el agua", t:"Dejaste un vaso con agua sin tapa sobre la mesa durante una semana entera.", p:"¿Qué esperarías encontrar al final de la semana?", o:[["","Menos agua que al principio"],["","Más agua que al principio"],["","Exactamente la misma cantidad"]], c:0, x:"Con los días, parte del agua se evapora poco a poco y queda menos en el vaso."},
  /* el tiempo y las estaciones */
  {n:3, k:"el tiempo y las estaciones", v:"🌡️ Punta Arenas: 5°C · Santiago: 14°C · Arica: 22°C", p:"¿En qué ciudad hace más frío ese día?", o:[["","En Punta Arenas"],["","En Santiago"],["","En Arica"]], c:0, x:"5 grados es la temperatura más baja de las tres: ahí hace más frío."},
  {n:3, k:"el tiempo y las estaciones", t:"En el sur de Chile llueve mucho durante casi todo el año, mientras que en el desierto de Atacama casi nunca llueve.", p:"¿Qué conviene llevar siempre en la mochila si vives en el sur?", o:[["","Un impermeable o paraguas"],["","Un traje de baño"],["","Solo ropa de verano"]], c:0, x:"Como llueve tan seguido en el sur, conviene estar preparado con impermeable."},
  {n:3, k:"el tiempo y las estaciones", p:"¿Por qué en verano se ven más días con cielo despejado que en invierno?", o:[["","Porque en invierno se forman más nubes"],["","Porque en verano el sol se esconde antes"],["","Porque en invierno hace más calor"]], c:0, x:"En invierno hay más nubes y lluvia; en verano el cielo suele estar más despejado."},
  /* las plantas */
  {n:3, k:"las plantas", t:"Una planta con flores muy coloridas y de olor dulce recibe muchas visitas de abejas y mariposas durante el día.", p:"¿Por qué esta planta atrae tantos insectos?", o:[["","El color y el olor atraen a los insectos"],["","Los insectos solo quieren descansar ahí"],["","Las flores los espantan con su color"]], c:0, x:"Colores llamativos y buen olor son señales que atraen a los insectos hacia el néctar."},
  {n:3, k:"las plantas", p:"¿Qué pasaría con una planta si le cortas todas las raíces?", o:[["","No podría tomar agua de la tierra"],["","Crecería mucho más rápido"],["","Le saldrían más flores"]], c:0, x:"Sin raíces, la planta no puede absorber agua ni nutrientes de la tierra."},
  {n:3, k:"las plantas", t:"El pino y el ciprés no tienen flores: sus semillas nacen dentro de piñas duras.", p:"¿En qué se diferencian de un rosal?", o:[["","El rosal tiene flores y ellos no"],["","El rosal no tiene semillas y ellos sí"],["","El rosal no tiene raíces y ellos sí"]], c:0, x:"El rosal es una planta con flor. El pino y el ciprés son plantas sin flor."},
  {n:3, k:"las plantas", p:"¿Por qué muchas plantas del desierto tienen espinas en vez de hojas anchas?", o:[["","Pierden menos agua que con hojas grandes"],["","Las espinas les gustan más que las hojas"],["","Así crecen mucho más rápido"]], c:0, x:"Las hojas anchas pierden mucha agua. Las espinas ayudan a la planta a ahorrarla."},
  /* alimentación saludable */
  {n:3, k:"alimentación saludable", t:"El plato de Sofía tiene arroz, pollo y una ensalada de lechuga y tomate.", p:"¿Qué le falta a este plato para tener también una fruta?", o:[["","Postre de fruta, como una manzana"],["","Servir más porciones de arroz"],["","Servir más trozos de pollo"]], c:0, x:"Ninguno de los alimentos del plato es fruta, así que le vendría bien agregar una."},
  {n:3, k:"alimentación saludable", p:"¿Por qué es mejor tomar agua que bebida para la sed?", o:[["","El agua no tiene azúcar de más"],["","La bebida quita más la sed"],["","El agua tiene más azúcar"]], c:0, x:"Las bebidas suelen tener mucha azúcar; el agua calma la sed sin ese exceso."},
  {n:3, k:"alimentación saludable", p:"Un almuerzo tiene solo papas fritas y una bebida. ¿Qué le falta para ser más sano?", o:[["","Verduras o una fruta"],["","Más papas fritas"],["","Otra bebida"]], c:0, x:"Ese almuerzo no tiene ni verduras ni fruta: le convendría agregar algunas."},
  /* luz y sonido */
  {n:3, k:"luz y sonido", p:"¿Por qué no puedes ver nada en un cuarto completamente oscuro?", o:[["","No hay luz que rebote hacia tus ojos"],["","Tus ojos dejan de funcionar sin luz"],["","El aire se pone más espeso sin luz"]], c:0, x:"Vemos las cosas porque la luz rebota en ellas y llega a nuestros ojos. Sin luz, no hay nada que ver."},
  {n:3, k:"luz y sonido", t:"Cuando tocas un tambor fuerte, el sonido es grave. Cuando tocas un silbato, el sonido es agudo.", p:"¿Qué diferencia hay entre esos dos sonidos?", o:[["","Uno es grave y el otro es agudo"],["","Los dos son igual de fuertes"],["","Los dos son igual de agudos"]], c:0, x:"El tambor suena grave y grueso; el silbato suena agudo y fino."},
  {n:3, k:"luz y sonido", p:"¿Por qué escuchas el trueno unos segundos después de ver el rayo?", o:[["","La luz viaja más rápido que el sonido"],["","El sonido viaja más rápido que la luz"],["","El rayo y el trueno son a la vez"]], c:0, x:"La luz del rayo llega casi al instante; el sonido del trueno tarda un poco más en llegar."},
  /* sistema solar */
  {n:3, k:"sistema solar", p:"¿Por qué en la Luna no hay aire para respirar?", o:[["","No tiene atmósfera como la Tierra"],["","El Sol se lo quemó todo"],["","Los astronautas se lo llevaron"]], c:0, x:"La Luna no tiene una capa de aire (atmósfera) que retenga gases como en la Tierra."},
  {n:3, k:"sistema solar", t:"La Tierra da una vuelta completa alrededor del Sol cada 365 días, más o menos.", p:"¿Cómo se llama ese recorrido de un año completo?", o:[["","Traslación"],["","Rotación"],["","Eclipse"]], c:0, x:"La traslación es el viaje de la Tierra alrededor del Sol, que dura un año."},
  {n:3, k:"sistema solar", p:"¿Por qué de noche se ven las estrellas y de día no?", o:[["","La luz del Sol es tan fuerte que las tapa"],["","Las estrellas se apagan de día"],["","Las estrellas se esconden tras la Luna"]], c:0, x:"De día el cielo está tan iluminado por el Sol que no se alcanza a ver el brillo de las estrellas."},
  /* reciclar */
  {n:3, k:"reciclar", t:"Martina separó la basura de su casa: papeles en una caja, restos de comida en otra y botellas plásticas en una tercera.", p:"¿Para qué sirve separar así la basura?", o:[["","Para reciclar mejor cada material"],["","Para que ocupe menos espacio"],["","Para que huela menos mal"]], c:0, x:"Separar los materiales facilita que cada uno vaya al reciclaje correcto."},
  {n:3, k:"reciclar", p:"¿Cuál de estas acciones ayuda a REDUCIR la basura que generas?", o:[["","Llevar tu propia botella reutilizable"],["","Comprar más bolsas plásticas"],["","Usar una hoja nueva para cada dibujo"]], c:0, x:"Usar una botella reutilizable evita comprar botellas plásticas nuevas cada vez."},
  {n:3, k:"reciclar", p:"¿Por qué conviene enjuagar un frasco de vidrio antes de reciclarlo?", o:[["","Para sacar los restos de comida pegados"],["","Para que el vidrio cambie de color"],["","Para que sea más fácil de romper"]], c:0, x:"Sin restos de comida, el vidrio se recicla mejor y no atrae bichos ni mal olor."},
  /* los sentidos */
  {n:3, k:"los sentidos", t:"Camila tiene los ojos vendados. Toca una fruta redonda, lisa y fría, y siente su cáscara sin hoyitos.", p:"¿Qué sentido está usando Camila para reconocer la fruta?", o:[["","El tacto"],["","La vista"],["","El oído"]], c:0, x:"Tocar y sentir la forma, la textura y la temperatura es usar el sentido del tacto."},
  {n:3, k:"los sentidos", p:"¿Por qué es más difícil disfrutar el sabor de la comida cuando estás resfriado?", o:[["","Con la nariz tapada no hueles bien"],["","La lengua deja de funcionar con el resfrío"],["","Los oídos tapados afectan el sabor"]], c:0, x:"El gusto y el olfato trabajan juntos: con la nariz tapada, la comida sabe menos."},
  /* estados de la materia */
  {n:3, k:"estados de la materia", t:"Camila puso agua líquida en el congelador. Varias horas después, sacó un bloque duro y frío.", p:"¿Qué cambio de estado ocurrió?", o:[["","El agua pasó de líquida a sólida"],["","El agua pasó de sólida a gaseosa"],["","El agua pasó de gaseosa a líquida"]], c:0, x:"El frío del congelador hizo que el agua líquida se congelara y se volviera sólida."},
  /* materiales */
  {n:3, k:"materiales", t:"Nicolás dejó dos juguetes bajo la lluvia toda la tarde: uno de plástico y uno de cartón.", p:"¿Cuál de los dos juguetes se dañará más con el agua?", o:[["","El de cartón"],["","El de plástico"],["","Los dos igual"]], c:0, x:"El cartón absorbe agua y se deshace. El plástico no deja pasar el agua."}
]);

masPreguntas("historia", [
  /* ================= NIVEL 2 ================= */
  /* símbolos patrios */
  {n:2, k:"símbolos patrios", p:"¿De qué color es la estrella de la bandera chilena?", o:[["","Blanca"],["","Azul"],["","Roja"]], c:0, x:"La estrella blanca va sobre el cuadrado azul, en la esquina de la bandera."},
  {n:2, k:"símbolos patrios", p:"En el escudo de Chile hay un cóndor y un...", o:[["","Huemul"],["","León"],["","Águila"]], c:0, x:"El cóndor y el huemul son los dos animales que sostienen el escudo de Chile."},
  {n:2, k:"símbolos patrios", p:"Sin contar el cuadrado azul, ¿cuántas franjas de color tiene la bandera chilena?", o:[["","Dos: blanca y roja"],["","Tres: blanca, roja y verde"],["","Una, solo roja"]], c:0, x:"Arriba va la franja blanca y abajo la roja; en la esquina va el cuadrado azul."},
  {n:2, k:"símbolos patrios", p:"¿Qué representa el color rojo de la bandera chilena?", o:[["","La sangre de los héroes"],["","El cielo despejado"],["","La nieve de la cordillera"]], c:0, x:"El rojo recuerda a quienes lucharon por la patria; el azul es el cielo."},
  {n:2, k:"símbolos patrios", p:"¿Cómo hay que estar cuando se canta el himno nacional?", o:[["","De pie y en silencio"],["","Sentado y conversando"],["","Corriendo por la sala"]], c:0, x:"Cantar de pie y con respeto es una forma de honrar a nuestro país."},
  {n:2, k:"símbolos patrios", p:"El lema del escudo de Chile dice «Por la razón o la...»", o:[["","Fuerza"],["","Suerte"],["","Plata"]], c:0, x:"«Por la razón o la fuerza» está escrito debajo del escudo de Chile."},
  /* oficios y comunidad */
  {n:2, k:"oficios y comunidad", p:"¿Por qué el agricultor es importante para toda la comunidad?", o:[["","Cultiva alimentos que comemos"],["","Cuida el orden en las calles"],["","Enseña en la escuela"]], c:0, x:"Sin agricultores no tendríamos frutas, verduras ni cereales en la mesa."},
  {n:2, k:"oficios y comunidad", p:"¿Qué hace el cartero en el barrio?", o:[["","Reparte cartas y encomiendas"],["","Apaga incendios en casas"],["","Vende remedios en la farmacia"]], c:0, x:"El cartero recorre las calles para que las cartas lleguen a su destino."},
  {n:2, k:"oficios y comunidad", p:"¿Por qué es importante el trabajo de quien recolecta la basura?", o:[["","Mantiene limpio y sano el barrio"],["","Construye casas nuevas"],["","Cuida a los enfermos"]], c:0, x:"Si nadie retirara la basura, se acumularía y podría enfermarnos."},
  {n:2, k:"oficios y comunidad", p:"¿Qué oficio se dedica a construir casas y edificios?", o:[["","El albañil"],["","El dentista"],["","El bibliotecario"]], c:0, x:"El albañil trabaja con ladrillos, cemento y otros materiales de construcción."},
  {n:2, k:"oficios y comunidad", p:"En la posta o el consultorio, ¿quién revisa si estás sano?", o:[["","El médico o la médica"],["","El panadero del barrio"],["","El profesor de la sala"]], c:0, x:"Los médicos revisan, diagnostican y ayudan a que te mejores."},
  {n:2, k:"oficios y comunidad", p:"¿Qué tienen en común el bombero y el carabinero?", o:[["","Cuidan la seguridad de todos"],["","Los dos venden pan"],["","Los dos enseñan matemática"]], c:0, x:"Ambos trabajan para que estemos seguros, aunque de formas distintas."},
  /* el barrio */
  {n:2, k:"el barrio", p:"¿Para qué sirve la plaza de un barrio?", o:[["","Para juntarse y jugar"],["","Para vender remedios"],["","Para guardar solo libros"]], c:0, x:"La plaza es un espacio de todos, para jugar, conversar y descansar."},
  {n:2, k:"el barrio", p:"¿A dónde vas si te sientes enfermo y hay un lugar de salud cerca de tu casa?", o:[["","A la posta o consultorio"],["","A la municipalidad"],["","A la biblioteca"]], c:0, x:"La posta atiende urgencias y controles de salud del barrio."},
  {n:2, k:"el barrio", p:"¿Qué lugar del barrio tiene libros para pedir prestados?", o:[["","La biblioteca"],["","La feria"],["","La municipalidad"]], c:0, x:"En la biblioteca puedes llevar libros a tu casa y después devolverlos."},
  {n:2, k:"el barrio", p:"¿Para qué sirve la municipalidad de una comuna?", o:[["","Organiza plazas y calles"],["","Vende frutas y verduras"],["","Atiende emergencias médicas"]], c:0, x:"La municipalidad se encarga de cuidar y organizar la comuna donde vives."},
  {n:2, k:"el barrio", p:"En la feria del barrio, ¿qué venden principalmente los feriantes?", o:[["","Frutas y verduras frescas"],["","Libros para leer en casa"],["","Remedios para la gripe"]], c:0, x:"Los feriantes traen la cosecha del campo para vender cerca de tu casa."},
  /* familia y cambios */
  {n:2, k:"familia y cambios", p:"¿Para qué sirven las fotos antiguas de la familia?", o:[["","Recordar cómo era la familia"],["","Saber qué hora es"],["","Aprender matemática"]], c:0, x:"Las fotos guardan momentos del pasado que de otra forma se olvidarían."},
  {n:2, k:"familia y cambios", p:"¿Qué puede contarte un abuelo que no está en los libros de historia?", o:[["","Sus recuerdos personales"],["","El nombre de todos los países"],["","Las tablas de multiplicar"]], c:0, x:"Los abuelos son testigos: vivieron cosas que ellos mismos pueden contarte."},
  {n:2, k:"familia y cambios", p:"Comparado con antes, hoy las familias se comunican más rápido gracias a...", o:[["","Los celulares e internet"],["","Que hay menos personas"],["","Que hay menos ciudades"]], c:0, x:"Antes solo había cartas o teléfono fijo; hoy hay video llamadas al instante."},
  {n:2, k:"familia y cambios", p:"¿Qué es un árbol genealógico?", o:[["","Muestra la familia y sus generaciones"],["","Un árbol que da frutas ricas"],["","Un mapa turístico de un país"]], c:0, x:"En el árbol genealógico se ven papás, abuelos, bisabuelos y más."},
  {n:2, k:"familia y cambios", p:"Si una familia cambia de casa o de ciudad con el paso del tiempo, eso es un...", o:[["","Cambio"],["","Continuidad"],["","Plano"]], c:0, x:"Un cambio es algo que era de una forma y ahora es distinto."},
  /* línea de tiempo */
  {n:2, k:"línea de tiempo", p:"En una línea de tiempo, ¿qué palabra indica algo que aún no ha pasado?", o:[["","Futuro"],["","Pasado"],["","Ahora"]], c:0, x:"El futuro es lo que todavía no ha ocurrido."},
  {n:2, k:"línea de tiempo", p:"¿Qué pasa primero en la línea de tiempo de un día normal?", o:[["","Levantarse en la mañana"],["","Cenar en la noche"],["","Dormir en la noche"]], c:0, x:"El día empieza cuando te levantas, mucho antes de la cena."},
  {n:2, k:"línea de tiempo", p:"Si ordenas hechos según cuándo pasaron, ¿qué herramienta estás usando?", o:[["","Una línea de tiempo"],["","Un plano"],["","Una simbología"]], c:0, x:"La línea de tiempo ordena los sucesos de más antiguo a más reciente."},
  /* pueblos originarios */
  {n:2, k:"pueblos originarios", p:"¿Qué usaban los mapuche para teñir su lana de colores?", o:[["","Plantas y raíces naturales"],["","Pinturas industriales"],["","Tinta de calamar"]], c:0, x:"Con hierbas, cortezas y raíces lograban lana teñida de distintos colores."},
  {n:2, k:"pueblos originarios", p:"¿Qué instrumento andino se hace con cañas de distinto largo y se sopla?", o:[["","La zampoña"],["","El piano"],["","La guitarra eléctrica"]], c:0, x:"Instrumentos como la zampoña son propios de la música andina del norte."},
  {n:2, k:"pueblos originarios", p:"¿Por qué el pueblo rapa nui vive en una isla y no en el continente?", o:[["","Está en medio del océano Pacífico"],["","Llegaron por el desierto"],["","Está en la cordillera"]], c:0, x:"Rapa Nui es una isla muy lejos de la costa de Chile, en medio del mar."},
  {n:2, k:"pueblos originarios", p:"En el guillatún, una ceremonia mapuche importante, la comunidad se junta para...", o:[["","Agradecer y pedir favores"],["","Vender animales de campo"],["","Aprender a leer y escribir"]], c:0, x:"El guillatún es una rogativa donde se reúnen a agradecer y pedir por su comunidad."},
  {n:2, k:"pueblos originarios", p:"El telar es una herramienta que usaban los mapuche para...", o:[["","Tejer mantas y ponchos"],["","Cazar animales"],["","Construir rucas"]], c:0, x:"En el telar entrelazan hilos de lana para hacer tejidos con dibujos."},
  /* efemérides */
  {n:2, k:"efemérides", p:"¿Qué se celebra cada 1 de mayo en Chile?", o:[["","El Día del Trabajo"],["","El Día de la Madre"],["","El Día del Niño"]], c:0, x:"Ese día se reconoce el esfuerzo de todas las personas que trabajan."},
  {n:2, k:"efemérides", p:"¿Qué recordamos cada 18 de septiembre?", o:[["","El camino hacia la independencia"],["","La llegada de Colón a América"],["","El cumpleaños del Presidente"]], c:0, x:"En 1810 se formó la Primera Junta de Gobierno, primer paso hacia ser un país libre."},
  {n:2, k:"efemérides", p:"¿En qué mes se celebra el Día de la Madre en Chile?", o:[["","En mayo"],["","En septiembre"],["","En diciembre"]], c:0, x:"Se celebra el segundo domingo de mayo."},
  {n:2, k:"efemérides", p:"¿Qué tradición de las Fiestas Patrias se hace al aire libre con viento?", o:[["","Elevar volantines"],["","Decorar el árbol"],["","Buscar huevos de chocolate"]], c:0, x:"En septiembre el viento ayuda a que los volantines vuelen bien alto."},
  {n:2, k:"efemérides", p:"¿Qué fecha marca el comienzo de un nuevo año en el calendario?", o:[["","El 1 de enero"],["","El 18 de septiembre"],["","El 25 de diciembre"]], c:0, x:"El 1 de enero empieza un año nuevo en el calendario que usamos."},
  /* el mapa de Chile */
  {n:2, k:"el mapa de Chile", p:"¿Cuál de estas ciudades queda más al sur de Chile?", o:[["","Punta Arenas"],["","Arica"],["","La Serena"]], c:0, x:"Punta Arenas está en el extremo sur, cerca de la Antártica."},
  {n:2, k:"el mapa de Chile", p:"¿Por qué en el sur de Chile hay tantos ríos y lagos?", o:[["","Porque llueve mucho todo el año"],["","Por estar cerca del desierto"],["","Por hacer mucho calor siempre"]], c:0, x:"La lluvia constante llena los ríos y lagos de esa zona."},
  {n:2, k:"el mapa de Chile", p:"¿Qué separa a Chile de Argentina en gran parte de su territorio?", o:[["","La cordillera de los Andes"],["","El océano Pacífico"],["","El desierto de Atacama"]], c:0, x:"Los Andes son una cadena de montañas altísima que marca la frontera este."},
  {n:2, k:"el mapa de Chile", p:"¿Cuál es la forma general del territorio chileno?", o:[["","Larga y angosta"],["","Redonda como un círculo"],["","Cuadrada como una caja"]], c:0, x:"Chile se extiende de norte a sur y es muy angosto de este a oeste."},
  {n:2, k:"el mapa de Chile", p:"¿Qué tienen en común el desierto de Atacama y la Patagonia?", o:[["","Están en los extremos del país"],["","Tienen selva tropical"],["","Tienen el mismo clima"]], c:0, x:"Atacama está en el extremo norte y la Patagonia, en el extremo sur."},
  /* leer planos */
  {n:2, k:"leer planos", p:"Si el norte está arriba en el plano, ¿dónde queda el sur?", o:[["","Abajo"],["","A la derecha"],["","A la izquierda"]], c:0, x:"Norte arriba y sur abajo: son los lados opuestos del plano."},
  {n:2, k:"leer planos", p:"¿Qué muestra un plano que no muestra una foto del lugar?", o:[["","Los nombres de calles y lugares"],["","Los colores del cielo"],["","El clima de ese día"]], c:0, x:"El plano rotula calles y lugares para que sepas dónde queda cada cosa."},
  {n:2, k:"leer planos", p:"Si caminas del colegio hacia el este, ¿de qué lado te alejas?", o:[["","Del oeste"],["","Del sur"],["","Del norte"]], c:0, x:"El este y el oeste son lados opuestos: al ir a uno, te alejas del otro."},
  /* transporte */
  {n:2, k:"transporte", p:"¿Qué medio de transporte se usaba antes, cuando no existían los autos?", o:[["","La carreta con caballos"],["","El avión a chorro"],["","El metro"]], c:0, x:"Antes de los autos, las carretas tiradas por caballos hacían los viajes largos."},
  {n:2, k:"transporte", p:"¿Qué medio de transporte permite viajar por el aire?", o:[["","El avión"],["","El barco"],["","El tren"]], c:0, x:"El avión vuela por el aire y puede cruzar países en pocas horas."},

  /* ================= NIVEL 3 ================= */
  /* símbolos patrios */
  {n:3, k:"símbolos patrios", p:"¿En qué parte de la bandera está la estrella?", t:"La bandera de Chile tiene un cuadrado azul en la esquina superior izquierda, con una estrella blanca en el medio.", o:[["","En la esquina superior izquierda"],["","En el centro de la franja roja"],["","En la esquina inferior derecha"]], c:0, x:"El texto ubica el cuadrado azul, con la estrella adentro, en esa esquina."},
  {n:3, k:"símbolos patrios", p:"¿Por qué el escudo de Chile tiene un cóndor y un huemul juntos?", o:[["","Representan fuerza y nobleza del país"],["","Son las mascotas de un equipo"],["","Son los únicos animales de Chile"]], c:0, x:"El cóndor simboliza fuerza y el huemul, nobleza; juntos representan al país."},
  {n:3, k:"símbolos patrios", p:"¿Qué actitud muestran los niños al ponerse de pie?", t:"En un acto del colegio, todos los niños se ponen de pie cuando empieza a sonar el himno nacional.", o:[["","Respeto por la patria"],["","Que tienen sueño"],["","Que quieren jugar"]], c:0, x:"Ponerse de pie durante el himno es una forma de mostrar respeto por el país."},
  {n:3, k:"símbolos patrios", p:"¿Cuál de estas cosas NO es un símbolo patrio oficial de Chile?", o:[["","La cueca"],["","La bandera"],["","El escudo"]], c:0, x:"La cueca es nuestro baile nacional, pero los símbolos patrios son bandera, escudo e himno."},
  {n:3, k:"símbolos patrios", p:"Si ves el escudo de Chile en un documento, ¿qué te indica eso?", o:[["","Que viene del Estado de Chile"],["","Que el documento es un cuento"],["","Que es de otro país"]], c:0, x:"El escudo se usa en documentos oficiales porque representa a nuestro país."},
  /* oficios y comunidad */
  {n:3, k:"oficios y comunidad", p:"¿Por qué la llevaron a la posta?", t:"Valentina se cortó la mano en el recreo. La llevaron primero a la enfermería del colegio y después a la posta.", o:[["","Para que la revisara un experto"],["","Para que aprendiera a leer"],["","Para comprar pan"]], c:0, x:"La posta tiene médicos y enfermeras preparados para atender heridas."},
  {n:3, k:"oficios y comunidad", p:"¿Qué pasaría si no existiera el oficio de agricultor?", o:[["","Faltarían frutas y verduras"],["","Las calles estarían más limpias"],["","Habría más libros en la biblioteca"]], c:0, x:"Gran parte de lo que comemos depende del trabajo de quienes cultivan la tierra."},
  {n:3, k:"oficios y comunidad", p:"¿Qué tienen en común el médico y el enfermero?", o:[["","Cuidan la salud de todos"],["","Construyen edificios"],["","Manejan micros"]], c:0, x:"Los dos trabajan juntos en la salud, aunque hagan tareas distintas."},
  {n:3, k:"oficios y comunidad", p:"¿Qué tienen en común estos oficios?", t:"En la comuna se necesita gente que recoja la basura, cuide las plazas y enseñe en los colegios.", o:[["","Ayudan a que la comunidad funcione"],["","Todos trabajan de noche"],["","Todos usan el mismo uniforme"]], c:0, x:"Cada oficio cumple una función distinta, pero todos benefician a la comunidad."},
  {n:3, k:"oficios y comunidad", p:"¿Cuál de estos oficios NO trabaja directamente con personas enfermas?", o:[["","El agricultor"],["","El médico"],["","El enfermero"]], c:0, x:"El agricultor cultiva alimentos; el médico y el enfermero atienden a los enfermos."},
  /* el barrio */
  {n:3, k:"el barrio", p:"¿A qué dos lugares debería ir Martina?", t:"Martina quiere devolver un libro y comprar frutas frescas. En su barrio hay una plaza, una biblioteca y una feria.", o:[["","A la biblioteca y a la feria"],["","A la plaza y a la posta"],["","A la municipalidad y a la plaza"]], c:0, x:"La biblioteca es para devolver libros y la feria, para comprar frutas."},
  {n:3, k:"el barrio", p:"¿Por qué es útil que un barrio tenga una posta cerca?", o:[["","Se atiende salud sin viajar lejos"],["","Ahí se compran libros"],["","Ahí se hacen trámites municipales"]], c:0, x:"Tener servicios cerca ahorra tiempo, sobre todo en una urgencia de salud."},
  {n:3, k:"el barrio", p:"¿Qué tipo de tareas hace la municipalidad?", t:"En la municipalidad se organizan las plazas, la limpieza de las calles y algunos programas de la comuna.", o:[["","Organiza servicios para la comuna"],["","Vende frutas y verduras"],["","Atiende directo a los enfermos"]], c:0, x:"La municipalidad se encarga de que la comuna funcione bien para todos."},
  {n:3, k:"el barrio", p:"¿Qué diferencia hay entre una plaza y una biblioteca?", o:[["","Una es para jugar; otra, para leer"],["","Las dos sirven solo para leer"],["","Las dos sirven solo para comprar"]], c:0, x:"Cada lugar del barrio cumple una función distinta para la comunidad."},
  /* familia y cambios */
  {n:3, k:"familia y cambios", p:"¿Qué cambió desde que la abuela era niña?", t:"La abuela de Fran cuenta que de niña no tenía televisor y escuchaba las noticias por radio con su familia.", o:[["","La forma de recibir información"],["","El nombre de su familia"],["","El país donde vive"]], c:0, x:"Antes solo se escuchaba radio; hoy además hay televisión e internet."},
  {n:3, k:"familia y cambios", p:"Si comparas una foto de tus abuelos de niños con una tuya, ¿qué podrías notar?", o:[["","La ropa y objetos de esa época"],["","El color de piel de las personas"],["","Que antes no había familias"]], c:0, x:"La ropa, los peinados y los objetos cambian con el paso del tiempo."},
  {n:3, k:"familia y cambios", p:"¿Qué tipo de cambio muestra esta historia familiar?", t:"El bisabuelo de Ana viajaba a caballo al pueblo vecino. El abuelo ya usaba auto. Ana usa micro.", o:[["","El de los medios de transporte"],["","El del nombre de la familia"],["","El del idioma que hablan"]], c:0, x:"De generación en generación, la familia usó transportes distintos para el mismo viaje."},
  {n:3, k:"familia y cambios", p:"¿Por qué es útil entrevistar a un abuelo sobre su infancia?", o:[["","Cuenta datos que no están en libros"],["","Siempre dice lo mismo que un libro"],["","No sirve para aprender nada nuevo"]], c:0, x:"Un abuelo es un testigo directo: vivió esa época y puede contarla con detalles."},
  {n:3, k:"familia y cambios", p:"¿Cuál de estas costumbres es una CONTINUIDAD y no un cambio?", o:[["","Reunirse a comer en Navidad"],["","Escribir cartas para comunicarse"],["","Viajar en carreta a otro pueblo"]], c:0, x:"Juntarse en Navidad se sigue haciendo hoy, aunque cambien otras costumbres."},
  /* línea de tiempo */
  {n:3, k:"línea de tiempo", p:"¿Qué pasó justo antes de entrar a kínder?", t:"Josefa nació, luego aprendió a caminar, después entró a kínder y ahora está en 2° básico.", o:[["","Aprendió a caminar"],["","Entró a 2° básico"],["","Nació"]], c:0, x:"En la línea de tiempo, caminar fue antes del kínder, y kínder antes de 2° básico."},
  {n:3, k:"línea de tiempo", p:"En una línea de tiempo familiar, ¿qué suele ir más a la izquierda?", o:[["","El hecho más antiguo"],["","El hecho más reciente"],["","Un hecho que aún no pasa"]], c:0, x:"En una línea de tiempo, lo más antiguo se dibuja primero, hacia la izquierda."},
  {n:3, k:"línea de tiempo", p:"¿Qué ocurrió en el medio de esos dos hechos?", t:"Los pueblos originarios vivían en Chile mucho antes de que llegaran los españoles. Después, Chile se independizó.", o:[["","La llegada de los españoles"],["","La independencia de Chile"],["","La vida antes de los españoles"]], c:0, x:"El orden es: pueblos originarios, llegada de los españoles y luego independencia."},
  /* pueblos originarios */
  {n:3, k:"pueblos originarios", p:"¿Por qué es tan importante la ropa de lana para los aimara?", t:"Los aimara viven en el altiplano, a mucha altura, donde de noche hace un frío helado aunque de día haga calor.", o:[["","Protege del frío de la noche"],["","Les gusta más ese color"],["","Así se ven más altos"]], c:0, x:"Un clima con noches heladas exige ropa abrigada, y la lana cumple esa función."},
  {n:3, k:"pueblos originarios", p:"¿Qué tienen en común los mapuche y los diaguitas?", o:[["","Ambos cultivaban la tierra"],["","Ambos vivían solo del mar"],["","Ambos vivían en el hielo del sur"]], c:0, x:"Los dos sembraban y cosechaban, aunque en distintas zonas de Chile."},
  {n:3, k:"pueblos originarios", p:"¿Qué tipo de pueblo describe el texto?", t:"Un pueblo vivía cerca del mar en canoas, cazaba lobos marinos y se movía entre canales e islas.", o:[["","Nómada y canoero"],["","Sedentario y agricultor"],["","Del desierto"]], c:0, x:"Vivir en canoas y moverse por canales es propio de un pueblo nómada del mar."},
  {n:3, k:"pueblos originarios", p:"¿Por qué se dice que los rapa nui son un pueblo isleño?", o:[["","Su territorio es una isla en el océano"],["","Viven al lado de la cordillera"],["","Cultivan en el desierto"]], c:0, x:"Rapa Nui, o Isla de Pascua, está rodeada de mar por todos lados."},
  {n:3, k:"pueblos originarios", p:"¿Cuál de estos pueblos NO se dedicaba principalmente a cultivar la tierra?", o:[["","Los yaganes"],["","Los mapuche"],["","Los diaguitas"]], c:0, x:"Los yaganes vivían del mar; mapuche y diaguitas sembraban y cosechaban."},
  {n:3, k:"pueblos originarios", p:"¿Qué es continuidad y qué es cambio en este texto?", t:"Antes muchas comunidades mapuche vivían de la agricultura en el campo. Hoy muchas familias mapuche viven también en ciudades.", o:[["","Cambia dónde viven; sigue su cultura"],["","Cambia su cultura; sigue dónde viven"],["","Todo cambió por completo"]], c:0, x:"El lugar donde viven cambió, pero muchas costumbres y su idioma se mantienen."},
  /* efemérides */
  {n:3, k:"efemérides", p:"¿Qué fue exactamente lo que pasó ese día en 1810?", t:"El 18 de septiembre se recuerda la Primera Junta de Gobierno de 1810, un paso hacia la independencia de Chile.", o:[["","Se formó la Primera Junta de Gobierno"],["","Chile ya era independiente"],["","Llegaron los primeros españoles"]], c:0, x:"En 1810 se dio el primer paso; la independencia completa llegó años después."},
  {n:3, k:"efemérides", p:"¿Por qué el Día del Trabajo tiene una fecha fija cada año?", o:[["","Se eligió para honrar el trabajo"],["","Porque ese día siempre llueve"],["","Porque coincide con un cumpleaños"]], c:0, x:"Es una fecha establecida en el calendario para reconocer el esfuerzo laboral."},
  {n:3, k:"efemérides", p:"¿Qué mes describe el texto?", t:"El cielo chileno se llena de volantines de colores y las familias comen empanadas y asado.", o:[["","Septiembre"],["","Diciembre"],["","Mayo"]], c:0, x:"Volantines, empanadas y asado son típicos de las Fiestas Patrias, en septiembre."},
  {n:3, k:"efemérides", p:"¿Cuál de estas fechas NO es una efeméride chilena?", o:[["","El 4 de julio"],["","El 18 de septiembre"],["","El 1 de mayo"]], c:0, x:"El 4 de julio es la independencia de Estados Unidos, no de Chile."},
  {n:3, k:"efemérides", p:"¿Qué tienen en común el 18 de septiembre y el 1 de mayo?", o:[["","Son fechas fijas cada año"],["","Ocurren en el mismo mes"],["","Son días de invierno"]], c:0, x:"Aunque celebran cosas distintas, ambas son fechas fijas que se repiten cada año."},
  /* el mapa de Chile y zonas */
  {n:3, k:"el mapa de Chile", p:"¿De qué ciudad se trata?", t:"Está en pleno desierto, muy cerca de la frontera con Perú, y su costa mira al océano Pacífico.", o:[["","Arica"],["","Punta Arenas"],["","Puerto Montt"]], c:0, x:"Desierto, frontera con Perú y costa en el Pacífico: esa es Arica."},
  {n:3, k:"el mapa de Chile", p:"¿Por qué en el extremo sur de Chile hace tanto frío?", o:[["","Está muy cerca de la Antártica"],["","Está muy cerca del ecuador"],["","Está en pleno desierto"]], c:0, x:"Mientras más al sur, más cerca de la Antártica y más frío es el clima."},
  {n:3, k:"el mapa de Chile", p:"¿De qué país se trata?", t:"Este país no tiene costa en el mar. Está entre Chile, Argentina, Perú, Brasil y Paraguay.", o:[["","Bolivia"],["","Uruguay"],["","Ecuador"]], c:0, x:"Bolivia es uno de los pocos países de América del Sur sin salida al mar."},
  {n:3, k:"el mapa de Chile", p:"¿Por qué la mayoría de los ríos chilenos van de este a oeste?", o:[["","Nacen en los Andes y bajan al mar"],["","Nacen en el mar y suben"],["","Van siempre de norte a sur"]], c:0, x:"El agua baja desde las alturas de los Andes hasta llegar al océano Pacífico."},
  {n:3, k:"el mapa de Chile", p:"¿Qué relación hay entre el clima de un lugar y sus cultivos?", o:[["","Cada cultivo necesita un clima adecuado"],["","El clima no afecta a las plantas"],["","Todos crecen igual en cualquier clima"]], c:0, x:"Por eso el maíz crece bien en climas cálidos y no en el frío extremo del sur."},
  /* leer planos */
  {n:3, k:"leer planos", p:"¿Qué lugar queda justo entre la plaza y la biblioteca?", t:"En el plano, la plaza está al este del colegio y la biblioteca está al oeste del colegio.", o:[["","El colegio"],["","La posta"],["","La municipalidad"]], c:0, x:"Si uno queda al este y otro al oeste del colegio, el colegio está al medio."},
  {n:3, k:"leer planos", p:"Si en un plano el norte está arriba, ¿qué lado representa el sur?", o:[["","La parte de abajo del plano"],["","La parte derecha del plano"],["","La parte izquierda del plano"]], c:0, x:"Cuando el norte está arriba, el sur queda siempre abajo, en el lado opuesto."},
  {n:3, k:"leer planos", p:"¿Por qué caminó hacia el sur para volver?", t:"Diego camina desde su casa hacia el norte y llega al parque. Luego camina hacia el sur para volver a su casa.", o:[["","El sur es lo contrario del norte"],["","El sur queda más lejos"],["","Así llega a otro parque"]], c:0, x:"Para regresar por el mismo camino, hay que ir en la dirección contraria."},
  /* transporte */
  {n:3, k:"transporte", p:"¿Qué se mantiene igual en los dos casos?", t:"Antes cruzaban el río en balsas o botes de remo. Hoy hay puentes y también lanchas a motor.", o:[["","Que hay que cruzar el río igual"],["","Que ya no existen los ríos"],["","Que nadie necesita cruzar"]], c:0, x:"La forma de cruzar cambió, pero la necesidad de cruzar el río sigue igual."},
  {n:3, k:"transporte", p:"¿Por qué el avión hizo que los viajes largos fueran mucho más rápidos?", o:[["","Vuela por el aire sin obstáculos"],["","Es más barato que caminar"],["","Puede navegar por el mar"]], c:0, x:"Al volar directo por el aire, el avión evita caminos, ríos y montañas."},
  {n:3, k:"transporte", p:"¿Cuál de estos medios de transporte es el más reciente en Chile?", o:[["","El avión de pasajeros"],["","El tren a vapor"],["","El caballo de carga"]], c:0, x:"Los aviones de pasajeros se volvieron comunes recién en el siglo XX."},
  {n:3, k:"transporte", p:"¿Qué mejoró con el paso del tiempo?", t:"Antes un paquete viajaba en tren o carreta y demoraba varios días. Hoy puede ir en avión y llegar en horas.", o:[["","La rapidez para trasladar cosas"],["","El precio de la comida"],["","El tamaño de las ciudades"]], c:0, x:"Los nuevos medios de transporte permiten que las cosas lleguen mucho más rápido."}
]);
