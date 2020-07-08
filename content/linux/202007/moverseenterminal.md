---
title: "Moviendose en la Terminal"
date: "2020-07-08 09:17:00"
description: "Lo primero que necesitamos aprender es cómo navegar por el sistema de archivos en nuestro sistema GNU/Linux."
type: "linux"
tags: ["comandos", "pwd", "terminal", "cd", "ls", "terminal", "linux"]
category: ["Linux"]
img: "https://i.postimg.cc/5ywwBtKH/Screenshot-20200708-090822.png"
authors: ["PatoJAD"]
---


En esta oportunidad queremos ver un poco como es la navegación mediante la terminal, y como siempre digo, esto lo hacemos a modo de amigarnos con la terminal. No siempre es necesario hacerlo de tal manera pero es útil y rápido en muchas ocasiones...

Lo primero que necesitamos aprender es **cómo navegar** por el sistema de archivos en nuestro sistema GNU/Linux. En este inicio presentaremos los siguientes comandos:

{{< br >}}

* **pwd** – Muestra el nombre del directorio de trabajo actual
* **cd** – Cambia de directorio
* **ls** – Muestra el contenido del directorio

{{< br >}}
{{< br >}}

## El directorio de trabajo actual

{{< br >}}

La mayoría de nosotros, probablemente, **estamos familiarizados con un gestor de archivos gráfico** que representa el árbol del sistema de directorios. Fíjate que el árbol, normalmente, aparece colgando boca abajo, o sea, con la raíz arriba y las ramas hacia abajo.

{{< br >}}
{{< img src="http://multimedia.uoc.edu/blogs/sqsw/files/2013/01/sfjerar.gif" >}}
{{< br >}}

Sin embargo, la línea de comandos no tiene imágenes (o al menos no nativamente), así que para navegar por el árbol del sistema de ficheros tenemos que pensar de una forma **un poco diferente** a lo que venimos *acostumbrados*.

Imagina que el sistema de ficheros es como un laberinto con forma de árbol boca abajo y que podemos estar dentro de él. En un momento dado, estamos dentro de un directorio en concreto y podemos ver los archivos contenidos en él, y la ruta hacia el directorio que está sobre nosotros (llamado directorio padre) y los subdirectorios debajo de nosotros. Este directorio, en el cual estamos, se llama directorio de trabajo actual. Para mostrar el directorio de trabajo actual, utilizamos el comando pwd (print working directory):

{{< br >}}

    pwd

{{< br >}}

Obteniendo una salida similar a esta

{{< br >}}

    /home/pato

{{< br >}}
{{< img src="https://i.postimg.cc/6pxrpC3d/Screenshot-20200708-090455.png" >}}
{{< br >}}

La primera vez que accedemos al sistema nuestro directorio de trabajo actual es nuestro directorio home (~). Cada cuenta de usuario tiene su propio directorio home y es el **único lugar donde un usuario sin privilegios puede escribir archivos**.

{{< br >}}
{{< br >}}

## Listando los contenidos de un directorio

{{< br >}}

Para listar los archivos y directorios en el directorio de trabajo actual, usamos el comando ls.

{{< br >}}

    ls

{{< br >}}

Obteniendo una salida similar a esta

{{< br >}}

    Desktop Documents Music Pictures Public Templates Videos

{{< br >}}
{{< img src="https://i.postimg.cc/J4ZTxrH5/Screenshot-20200708-090638.png" >}}
{{< br >}}

En realidad, podemos usar el comando ls para listar el contenido de cualquier directorio, no solo el directorio de trabajo actual, y hay muchas otras cosas curiosas que puede hacer también…

{{< br >}}
{{< br >}}

## Cambiando el directorio de trabajo actual

{{< br >}}

Para cambiar el directorio de trabajo actual utilizamos el comando cd. Para hacer esto, escribe cd seguido de la ruta del directorio de trabajo que queramos. Una ruta es el camino de tomamos a través de las ramas del árbol para llegar al directorio que queremos. Las rutas pueden ser **especificadas de dos formas**; como rutas **absolutas** o como rutas **relativas**.

{{< br >}}
{{< br >}}

## Rutas Absolutas

{{< br >}}

Una ruta absoluta comienza con el **directorio raíz** y sigue *rama tras rama* hasta que la ruta al directorio o archivo que queremos está completa. Por ejemplo, hay un directorio en nuestro sistema en el que la mayoría de los programas de sistema están instalados. La ruta de dicho directorio es /usr/bin. Esto significa que en el directorio raíz (representado por la barra inclinada en la ruta) hay un directorio llamado “usr” que contiene un directorio llamado “bin”.

{{< br >}}

    cd /usr/bin
    pwd

{{< br >}}

Obtendremos una salida como

{{< br >}}

    /usr/bin

{{< br >}}

    ls

{{< br >}}

Y esto listará muchísimos archivos

{{< br >}}
{{< img src="https://i.postimg.cc/5ywwBtKH/Screenshot-20200708-090822.png" >}}
{{< br >}}

Ahora podemos ver que **hemos cambiado el directorio** de trabajo a /usr/bin y que está lleno de archivos. ¿Ves cómo ha cambiado el prompt del shell? Por defecto, normalmente está configurado para mostrar automáticamente el nombre del directorio de trabajo.

{{< br >}}
{{< br >}}

## Rutas Relativas

Mientras que una ruta absoluta empieza desde el directorio raíz y sigue hasta su destino, **una ruta relativa comienza en el directorio de trabajo**. Para hacer esto, utiliza un par de símbolos especiales que representan posiciones relativas en el árbol del sistema de archivos. Estos símbolos son “.” *(punto)* y “..” *(punto punto)*.

El símbolo “.” se refiere al directorio de trabajo y el símbolo “..” se refiere al directorio padre del directorio de trabajo. Veamos cómo funciona. Ahora le diremos que queremos cambiar el directorio de trabajo al padre de /usr/bin que es /usr. Podríamos hacerlo de dos formas diferentes. Tanto con una ruta absoluta:

{{< br >}}

    cd /usr
    pwd

{{< br >}}

Obteniendo una salida como esta

{{< br >}}

    /usr

{{< br >}}

Como, con una ruta relativa:

{{< br >}}

    cd ..
    pwd

{{< br >}}

Obteniendo una salida como esta

{{< br >}}

    /usr

{{< br >}}

Dos métodos diferentes con idénticos resultados. ¿Cuál usamos? ¡El que requiera teclear menos!

{{< br >}}
{{< img src="https://i.postimg.cc/HszMdRqC/Screenshot-20200708-091020.png" >}}
{{< br >}}

Ahora, hay algo importante que se debe señalar aquí. En la mayoría de los casos, puedes omitir el “./”. Está implícito. Escribir:

{{< br >}}

    cd bin

{{< br >}}

hace lo mismo. En general, si no especificas una ruta a algo, se asumirá el directorio de trabajo.

{{< br >}}
{{< br >}}

## Algunos atajos útiles

{{< br >}}

Veamos algunas formas útiles para cambiar rápidamente el directorio de trabajo actual.

{{< br >}}

    cd

Cambia el directorio de trabajo a tu directorio home.

{{< br >}}

    cd -
Cambia el directorio de trabajo al anterior directorio de trabajo.

{{< br >}}

    cd ~nombre_de_usuario
Cambia el directorio de trabajo al directorio home de nombre_de_usuario. Por ejemplo, cd ~pato cambiará el directorio al directorio home del usuario “pato”.

{{< br >}}
{{< img src="https://i.postimg.cc/sxV2LDDG/Screenshot-20200708-091153.png" >}}
{{< br >}}
{{< br >}}

## Resumiendo

{{< br >}}

En este capítulo hemos visto como el shell trata la estructura de directorios del sistema. Hemos aprendido sobre las rutas absolutas y relativas y los comandos básicos que se usan para moverse por dicha estructura. En el próximo capítulo utilizaremos este conocimiento para darnos una vuelta por un sistema Linux moderno.

{{< br >}}

Fuente: **"The Linux Command Line - Second Internet Edition"** de *William E. Shotts, Jr.* - (es) **Adriano Sánchez**

{{< br >}}
{{< br >}}

## Tambien Leer

{{< br >}}

* {{< textlink text="¿Por qué usar la línea de comandos?" url="/linux/2020/07/por-qué-usar-la-línea-de-comandos/" >}}

{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
