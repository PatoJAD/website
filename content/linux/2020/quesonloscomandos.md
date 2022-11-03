---
title: "¿Qué son exactamente los comandos?"
date: "2020-09-09 10:33:00"
description: "Vamos a comenzar a entender un poco mas sobre los comandos de linux"
type: "linux"
tags: ["type", "linux", "which", "comandos", "terminal", "consola"]
category: ["Linux"]
img: "https://elandroidefeliz.com/wp-content/uploads/2018/02/Listado-de-comandos-MS-DOS-definitivo-696x425.jpg"
authors: ["PatoJAD"]
---



Un comando puede ser una de estas cuatro cosas:



1. **Un programa ejecutable** como todos esos archivos que vimos en /usr/bin. Dentro de esta categoría, los programas pueden ser binarios compilados como programas escritos en C y C++, o programas escritos en lenguajes de script como el shell, perl, python, ruby, etc.
2. **Un comando contenido en el propio shell**. bash soporta gran número de comandos internos llamados shell builtins. El comando cd, por ejemplo, es un shell builtin.
3.**Una función del shell**. Estos son pequeños scripts de shell incorporados en el entorno. Veremos cómo configurar el entorno y cómo escribir funciones del shell en próximos capítulos, pero por ahora, sólo ten en cuenta que existen.
4. **Un alias**. Comando que podemos definir nosotros mismos, construidos a partir de otros comandos.




## Identificando comandos



A menudo es útil saber exactamente cual de los cuatro tipos de comandos estamos usando y Linux proporciona un par de formas de averiguarlo.




## type – Muestra de qué tipo es un comando



El comando type es un shell builtin que muestra el tipo de comando que el shell ejecutará, indicándole el nombre de un comando en particular. Funciona así:



    type comando



donde "comando" es el nombre del comando que quieres examinar. Aquí tienes algunos ejemplos:



    type type
    type is a shell builtin



    type ls
    ls is aliased to 'ls --color=tty'



    type cp
    cp is /bin/cp



Aquí vemos los resultados para tres comandos diferentes. Fíjate en el de ls (realizado sobre un sistema Fedora) y en cómo el comando ls es realmente un alias del comando ls con la opción “--color=tty” añadida. ¡Ahora sabemos porqué la salida de ls se muestra en color!




## which – Muestra la localización de un ejecutable



A veces hay más de una versión de un programa ejecutable instalada en un sistema. Aunque no es muy usual en los sistemas de escritorio, sí es más frecuente en grandes servidores. Para determinar la localización exacta de un ejecutable dado tenemos el comando which:



    which ls
    /bin/ls



which sólo funciona con programas ejecutables, ni con builtins ni con alias que son sustitutos de los verdaderos programas ejecutables. Cuando intentamos usar which en un shell builtin, por ejemplo, cd, no tendremos respuesta o nos dará un mensaje de error:



    which cd
    /usr/bin/which: no cd in (/opt/jre1.6.0_03/bin:/usr/lib/qt-3.3/bin:/usr/kerberos/bin:/opt/jre1.6.0_03/bin:/usr/lib/ccache:/usr/local/bin:/usr/bin:/bin:/home/me/bin)




## Obteniendo la documentación de un comando



Ahora que sabemos qué es un comando, podemos buscar la documentación disponible para cada tipo de comando. Pero esto lo veremos mas adelante...



---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
