---
title: 'Moviendose en la Terminal'
date: '2020-07-08 09:17:00'
description: 'Lo primero que necesitamos aprender es cómo navegar por el sistema de archivos en nuestro sistema GNU/Linux.'
type: 'post'
tags: ['comandos', 'pwd', 'terminal', 'cd', 'ls', 'terminal', 'linux']
categories: ['Linux']
img: 'https://i.postimg.cc/5ywwBtKH/Screenshot-20200708-090822.png'
authors: ['PatoJAD']
---

En esta oportunidad queremos ver un poco como es la navegación mediante la terminal, y como siempre digo, esto lo hacemos a modo de amigarnos con la terminal. No siempre es necesario hacerlo de tal manera pero es útil y rápido en muchas ocasiones...

Lo primero que necesitamos aprender es **cómo navegar** por el sistema de archivos en nuestro sistema GNU/Linux. En este inicio presentaremos los siguientes comandos:

-   **pwd** – Muestra el nombre del directorio de trabajo actual
-   **cd** – Cambia de directorio
-   **ls** – Muestra el contenido del directorio

## El directorio de trabajo actual

La mayoría de nosotros, probablemente, **estamos familiarizados con un gestor de archivos gráfico** que representa el árbol del sistema de directorios. Fíjate que el árbol, normalmente, aparece colgando boca abajo, o sea, con la raíz arriba y las ramas hacia abajo.

{{< img src="http://multimedia.uoc.edu/blogs/sqsw/files/2013/01/sfjerar.gif" >}}

Sin embargo, la línea de comandos no tiene imágenes (o al menos no nativamente), así que para navegar por el árbol del sistema de ficheros tenemos que pensar de una forma **un poco diferente** a lo que venimos _acostumbrados_.

Imagina que el sistema de ficheros es como un laberinto con forma de árbol boca abajo y que podemos estar dentro de él. En un momento dado, estamos dentro de un directorio en concreto y podemos ver los archivos contenidos en él, y la ruta hacia el directorio que está sobre nosotros (llamado directorio padre) y los subdirectorios debajo de nosotros. Este directorio, en el cual estamos, se llama directorio de trabajo actual. Para mostrar el directorio de trabajo actual, utilizamos el comando pwd (print working directory):

    pwd

Obteniendo una salida similar a esta

    /home/pato

{{< img src="https://i.postimg.cc/6pxrpC3d/Screenshot-20200708-090455.png" >}}

La primera vez que accedemos al sistema nuestro directorio de trabajo actual es nuestro directorio home (~). Cada cuenta de usuario tiene su propio directorio home y es el **único lugar donde un usuario sin privilegios puede escribir archivos**.

## Listando los contenidos de un directorio

Para listar los archivos y directorios en el directorio de trabajo actual, usamos el comando ls.

    ls

Obteniendo una salida similar a esta

    Desktop Documents Music Pictures Public Templates Videos

{{< img src="https://i.postimg.cc/J4ZTxrH5/Screenshot-20200708-090638.png" >}}

En realidad, podemos usar el comando ls para listar el contenido de cualquier directorio, no solo el directorio de trabajo actual, y hay muchas otras cosas curiosas que puede hacer también…

## Cambiando el directorio de trabajo actual

Para cambiar el directorio de trabajo actual utilizamos el comando cd. Para hacer esto, escribe cd seguido de la ruta del directorio de trabajo que queramos. Una ruta es el camino de tomamos a través de las ramas del árbol para llegar al directorio que queremos. Las rutas pueden ser **especificadas de dos formas**; como rutas **absolutas** o como rutas **relativas**.

## Rutas Absolutas

Una ruta absoluta comienza con el **directorio raíz** y sigue _rama tras rama_ hasta que la ruta al directorio o archivo que queremos está completa. Por ejemplo, hay un directorio en nuestro sistema en el que la mayoría de los programas de sistema están instalados. La ruta de dicho directorio es /usr/bin. Esto significa que en el directorio raíz (representado por la barra inclinada en la ruta) hay un directorio llamado “usr” que contiene un directorio llamado “bin”.

    cd /usr/bin
    pwd

Obtendremos una salida como

    /usr/bin



    ls

Y esto listará muchísimos archivos

{{< img src="https://i.postimg.cc/5ywwBtKH/Screenshot-20200708-090822.png" >}}

Ahora podemos ver que **hemos cambiado el directorio** de trabajo a /usr/bin y que está lleno de archivos. ¿Ves cómo ha cambiado el prompt del shell? Por defecto, normalmente está configurado para mostrar automáticamente el nombre del directorio de trabajo.

## Rutas Relativas

Mientras que una ruta absoluta empieza desde el directorio raíz y sigue hasta su destino, **una ruta relativa comienza en el directorio de trabajo**. Para hacer esto, utiliza un par de símbolos especiales que representan posiciones relativas en el árbol del sistema de archivos. Estos símbolos son “.” _(punto)_ y “..” _(punto punto)_.

El símbolo “.” se refiere al directorio de trabajo y el símbolo “..” se refiere al directorio padre del directorio de trabajo. Veamos cómo funciona. Ahora le diremos que queremos cambiar el directorio de trabajo al padre de /usr/bin que es /usr. Podríamos hacerlo de dos formas diferentes. Tanto con una ruta absoluta:

    cd /usr
    pwd

Obteniendo una salida como esta

    /usr

Como, con una ruta relativa:

    cd ..
    pwd

Obteniendo una salida como esta

    /usr

Dos métodos diferentes con idénticos resultados. ¿Cuál usamos? ¡El que requiera teclear menos!

{{< img src="https://i.postimg.cc/HszMdRqC/Screenshot-20200708-091020.png" >}}

Ahora, hay algo importante que se debe señalar aquí. En la mayoría de los casos, puedes omitir el “./”. Está implícito. Escribir:

    cd bin

hace lo mismo. En general, si no especificas una ruta a algo, se asumirá el directorio de trabajo.

## Algunos atajos útiles

Veamos algunas formas útiles para cambiar rápidamente el directorio de trabajo actual.

    cd

Cambia el directorio de trabajo a tu directorio home.

    cd -

Cambia el directorio de trabajo al anterior directorio de trabajo.

    cd ~nombre_de_usuario

Cambia el directorio de trabajo al directorio home de nombre_de_usuario. Por ejemplo, cd ~pato cambiará el directorio al directorio home del usuario “pato”.

{{< img src="https://i.postimg.cc/sxV2LDDG/Screenshot-20200708-091153.png" >}}

## Resumiendo

En este capítulo hemos visto como el shell trata la estructura de directorios del sistema. Hemos aprendido sobre las rutas absolutas y relativas y los comandos básicos que se usan para moverse por dicha estructura. En el próximo capítulo utilizaremos este conocimiento para darnos una vuelta por un sistema Linux moderno.

Fuente: **"The Linux Command Line - Second Internet Edition"** de _William E. Shotts, Jr._ - (es) **Adriano Sánchez**

## Tambien Leer

-   {{< textlink text="¿Por qué usar la línea de comandos?" url="/posts/2020/07/por-qué-usar-la-línea-de-comandos/" >}}
