---
title: 'Expansión'
date: '2020-11-09 10:12:00'
description: 'La terminal de linux tiene mucho para enseñarnos y vamos a hablar de la expansión.'
type: 'post'
tags:
    [
        'expansion',
        'linux',
        'terminal',
        'shell',
        'consola',
        'filtros',
        'echo',
        'comodines',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/QMJHF4VH/Captura-de-pantalla-de-2020-11-09-09-57-43.png'
authors: ['PatoJAD']
---

Cada vez que escribes un comando y presionas la tecla enter, bash realiza varios procesos sobre el texto antes de llevar a cabo el comando. Hemos visto un par de casos de cómo una simple secuencia de caracteres, por ejemplo “\*”, puede tener mucho significado para el shell. El proceso que hace que esto ocurra se llama expansión. Con la expansión, introduces algo y se expande en otra cosa antes de que el shell actúe sobre ello. Para demostrar qué queremos decir con esto, echemos un vistazo al comando echo. echo es un shell builtin que realiza una tarea muy simple. Muestra sus argumentos de texto en la salida estándar:

{{< img src="https://i.postimg.cc/QMJHF4VH/Captura-de-pantalla-de-2020-11-09-09-57-43.png" >}}

    echo PatoJAD el mejor Blog

Veremos una salida tal como:

    PatoJAD el mejor Blog

Es muy sencillo. Cualquier argumento que pasemos a echo se muestra. Probemos otro ejemplo:

    echo *

Muestra una salida como:

    Desktop Documents ls-output.txt Music Pictures Public Templates Videos

{{< img src="https://i.postimg.cc/V67vRJqw/Captura-de-pantalla-de-2020-11-09-09-58-46.png" >}}

Pero, ¿qué ha pasado? ¿por qué echo no ha escrito “\*”? Como recordarás de nuestro trabajo con comodines, el carácter “\*” significa coincidencia con cualquier carácter en el nombre de archivo, pero lo que no hemos visto en nuestra conversación original es cómo hace eso el shell. La respuesta sencilla es que el shell expande el “\*” en algo más (en este ejemplo, los nombres de los archivos que se encuentran en el directorio de trabajo actual) antes de que el comando echo se ejecute. Cuando presionamos la tecla enter, el shell automáticamente expande todos los caracteres en la línea de comandos antes de que el comando sea ejecutado, por lo que el comando echo no ve el “\*”, sólo su resultado expandido. Sabiendo esto, podemos ver que echo se ha comportado como se esperaba.

## Expansión de nombres de archivo

El mecanismo según el cual trabajan los comodines se llama expansión de nombres de archivo. Si probamos algunas de las técnicas que hemos empleado en nuestros capítulos anteriores, veremos que son realmente expansiones. Tomemos un directorio home que aparezca de la siguiente forma:

    ls



    Desktop   ls-output.txt Pictures Templates
    Documents Music         Public   Videos

podríamos llevar a cabo las siguientes expansiones:

{{< img src="https://i.postimg.cc/nrCzwn2D/Captura-de-pantalla-de-2020-11-09-09-59-49.png" >}}

    echo D*



    Desktop Documents

y:

    echo *s



    Documents Pictures Templates Videos

{{< img src="https://i.postimg.cc/XJNXdfyx/Captura-de-pantalla-de-2020-11-09-10-00-11.png" >}}

## Expansión de nombres de archivos ocultos

Como sabemos, los nombres de archivo que empiezan por un punto están ocultos. La expansión de nombres de archivo también respeta este comportamiento. Una expansión como:

    echo *

no revela los archivos ocultos. Podría parecer a primera vista que podríamos incluir archivos ocultos en una expansión comenzando el patrón con un punto, así:

    echo .*

Casi funciona. De todas formas, si examinamos los resultados atentamente, veremos que los nombres “.” y “..” también aparecen en los resultados. Como estos nombres se refieren al directorio actual y su directorio padre, usar este patrón probablemente producirá un resultado incorrecto. Podemos verlo si probamos el comando:

    ls -d .* | less

Para ejecutar mejor una expansión de nombres de archivo en esta situación, tenemos que emplear un patrón más específico:

    echo .[!.]*

Este patrón se expande en todos los nombres de archivo que empiecen con un punto, no incluye un segundo punto, seguido de cualquier otro carácter. Esto funcionará correctamente con la mayoría de archivos ocultos (aunque no incluirá archivos con varios puntos al comienzo de su nombre). El comando ls con la opción -A (“almost all” o “casi todo”) proporcionará un listado correcto de los archivos ocultos:

    ls -A

## Expansión aritmética

El shell permite realizar aritmética mediante la expansión. Esto nos permite usar el prompt del shell como una calculadora:

{{< img src="https://i.postimg.cc/MHNGCg3r/Captura-de-pantalla-de-2020-11-09-10-00-41.png" >}}

    echo $((2 + 2))



    4

La expansión aritmética usa la forma:

    $((expresión))

Donde _expresión_ es una expresión aritmética consistente en valores y operadores aritméticos. La expansión aritmética sólo soporta enteros (números enteros sin decimales), pero puede realizar un buen número de operaciones diferentes.

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
