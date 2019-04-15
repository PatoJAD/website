---
title: 'SystemD al volante mata...'
date: '2019-04-15'
description: 'Una hermosa comparación entre SystemD y un motor... No hay que ser mecánico para entenderlo solo hace falta no querer morir'
type: 'linux'
tags: ["SystemD","Init","Libre","GNU/Linux","Auto"]
category: ["Linux"]
img: 'https://i.postimg.cc/sgWTVgxx/photo-2018-03-27-15-45-22.jpg'
authors: ["PatoJAD"]
---

Muchas personas comentan que los que no queremos SystemD simplemente usamos la excusa “PID1” como si eso no fuera suficiente.

Sin embargo, en esta ocasión no pretendemos mencionar nada respecto a eso, vamos a hablar de responsabilidades y como tal no hay mejor forma de hacerlo que una comparación con algo de la vida cotidiana (Salvaremos muchas excepciones para evitar divagar mucho)

## Un Auto con SystemD

{{< img src="https://thumbs.gfycat.com/GiddyGrimBluefintuna-max-1mb.gif" >}}

Desde ahora vamos a tratar a los autos como PC, de esta forma podemos llevar a la realidad OTRO de los muchos errores que tiene SystemD y como si eso se llevara a la vida real sería realmente pésima idea, pero al no verlo reflejado directamente no le hacemos caso…
Del error que venimos a hablar de la falta de delegación de responsabilidades (Es acá donde cualquier programador y en especial uno que ama los objetos se asusta mucho). SystemD básicamente no quiere delegar responsabilidades, tiene una filosofía de “si no pasa por mí no existe” haciendo que Todo demore más, desde las apps de inicio hasta a la apertura de cualquier app. Esto si bien es muy grave, muchos son capas de aceptarlos con sus I5 y sus 4 GB de RAM.

## ¿Dónde quedo el auto?

{{< img src="https://ugc.kn3.net/i/760x/http://24.media.tumblr.com/d05a9170952fbc68fee6071bdf099773/tumblr_mqrpyswIYa1rymud4o1_500.gif" >}}

Ahí vamos, Imaginemos entonces con esta filosofía un auto, donde el motor es SystemD (Vamos a olvidar los miles de errores que puede llegar a tener systemD y solo a concentrarnos en lo maligno de no delegar correctamente responsabilidades) Mientras el auto funciona parece ir todo bien, solo percibimos un pequeño delay entre pulsamos la palanca y se encienden las luces…
Sin embargo es en un momento pasamos mal el cambio y se apaga el auto, inmediatamente dirigimos el auto a la banquina y presionamos el freno pero… Claro nuestro motor (SystemD) está fallando, o apagado, y los frenos no funcionan tampoco el volante… Por ende, solo debemos cerrar los ojos y esperar que no sea tan grave el accidente.

## Hasta ahí llego el auto…
La vida real es muy diferente dado que los autos no le piden permiso al motor para frenar y en el caso de que este falle el auto frena igual, sin embargo, nosotros aceptamos día a día que nuestros ordenadores le pidan permiso a un INIT para poder escuchar música…

No te olvides de dejarnos tus comentarios…
