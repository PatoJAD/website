---
title: "GTK vs QT"
date: "2019-03-11"
description: "Ambas librerias tiene sus ventajas y hoy vamos a ver mi sorpresa con estas librerias"
type: "programacion"
tags: ["GTK","QT","Librerias","versus"]
category: ["Programacion"]
img:  "https://i.postimg.cc/pXfgbk5p/gtkvsqt-patojad.jpg"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importante agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---

En esta publicación no pretendo hablar de Gnome y KDE, que, si bien son exponentes de estas dos tecnologías son simplemente implementaciones… Y como tales tienen sus propios asuntos que nos oscurecerían esta pequeña OPINION que voy a dar...

También quiero aclarar que esto es una opinión en base a mi experiencia y no es una verdad absoluta (Por lo cual invito a todos a contar su experiencia). Este post se viene a que estos días me di cuenta que mi fanatismo estaba infundado y me sorprendí al informarme y extender mis horizontes.

Siempre preferí a QT, Muchos sabrán que mi escritorio preferido es KDE, y por esto creí que era la mejor librería y durante mi uso la verdad me encontré como y contento. QT tiene muchas facilidades y permite fácilmente crear interfaces bastante lindas. Sus componentes primitivos ya son lindos estéticamente de por sí y con un poco de trabajo llegamos a resultados muy satisfactorios.

Sin embargo, decidí darle una oportunidad nuevamente a GTK, siempre tuvo mala fama por una de sus más conocidas implementaciones (Gnome). Creí que al usar GTK mis programas serian lentos y pesados como este escritorio y ahí fue donde empezaron las sorpresas…

{{< img src="https://i.postimg.cc/dVWNwfst/gtkvsqt2-patojad.png" >}}

### Optimización

Como dije en este punto temí encontrar a GTK mucho más lento y con consumos muchos más elevados que QT, sin embargo, la sorpresa fue que todo fue puro prejuicio. Ambas apps (Exactamente las mismas) tenían consumos similares, sus diferencias eran despreciables (Probablemente errores de programación míos)


### Componentes primitivos

En este post estoy evitando dar puntos o decir cuál es el mejor para no afectar el juicio de nadie. Aun así, en esta sección debo admitir que los componentes primitivos de QT son de mejor calidad estética que los de GTK, sin embargo, ambos son muy editables, incluso GTK se me hizo más cómodo llegar a lo que quería. Si debemos elegir SOLO teniendo en cuenta componentes primarios tengo 2 cosas para decirles:

*	Ambos van a cansarte tarde o temprano
* Nadie debe usar componentes primarios para un sistema


### Convergencia

Este fue el motivo por el cual le di una oportunidad a GTK y por cual creo que, contra todo pronóstico actual, puede retomar el trono y volverse el futuro. Puri.sm creo una librería (Libhandy) que podríamos definir como el “Boostrap” de GTK (Algo que QT no tiene, si tiene librerías para hacer apps para mobile pero no una que sirva para ambos) y esto es lo que le da una gran ventaja a futuro y es lo que puede convertirlo en el mejor si QT no se pone a pensar en este aspecto.


### Conclusión

Personalmente me di cuenta que es absurdo calificar las librerías por su implementación (Gnome y KDE) porque claramente ninguna muestra el 100% del potencial de las librerías. Me sorprendió abismalmente todo lo que respecta a GTK y me volvió loco pensar en Libhandy y las cosas que podría hacer a futuro.  
Mi consejo para todo el que quiera iniciarse en algunas librerías es que tiene que ver las dos y ver cual se siente más cómodo. Es hermoso trabajar en ambos y no importa lo que digan los programadores cada uno tiene su fanatismo, lo mejor es probar y definir cada uno.
