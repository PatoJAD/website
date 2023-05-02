---
title: 'Más diversión con ls'
date: '2020-07-15 09:17:00'
description: 'Vamos a conocer un poco más este gran comando que es tan usado y tan útil... vamos a divertirnos con ls'
type: 'linux'
tags: ['comandos', 'ls', 'terminal', 'consola', 'linux']
category: ['Linux']
img: 'https://i.postimg.cc/Kz0rYX84/Screenshot-20200715-084652.png'
authors: ['PatoJAD']
---

El comando ls es _probablemente el más usado_, y por una buena razón. Con él, podemos ver los contenidos de un directorio y determinar varios atributos importantes de los archivos y directorios. Como hemos visto, podemos usar simplemente ls para ver una lista de los archivos y subdirectorios contenidos en el directorio de trabajo actual:

```zsh
ls
```

obteniendo una salida

```zsh
Desktop Documents Music Pictures Public Templates Videos
```

Además del directorio de trabajo actual, podemos especificar el directorio a listar, de esta forma:

```zsh
ls /usr
```

obteniendo una salida

```zsh
bin  games    kerberos    libexec    sbin    src
etc  include  lib         local      share   tmp
```

O incluso especificar múltiples directorios. En este ejemplo listaremos el directorio home del usuario (simbolizado por el carácter “~”) y el directorio /usr:

```zsh
ls ~ /usr
```

obteniendo una salida

```zsh
/home/pato:
Desktop Documents Music Pictures Public Templates Videos

/usr:
bin games   kerberos  libexec  sbin  src
etc include lib       local    share tmp
```

También podemos cambiar el formato de la salida para que nos muestre más detalles:

```zsh
ls -l
```

con una salida

```zsh
total 56
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Desktop
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Documents
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Music
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Pictures
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Public
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Templates
drwxrwxr-x 2 me me 4096 2007-10-26 17:20 Videos
```

Añadiendo “-l” al comando, cambiamos la salida al formato largo.

{{< img src="https://i.postimg.cc/Kz0rYX84/Screenshot-20200715-084652.png" >}}

## Opciones y argumentos

Esto nos ofrece un aspecto muy importante sobre cómo funcionan la mayoría de los comandos. A los comandos, a menudo, le siguen una o más opciones que modifican su comportamiento, y adicionalmente, uno o más argumentos, los elementos sobre los que el comando actúa. Así que la mayoría de los comandos se muestran así:

```zsh
comando -opciones argumentos
```

La mayoría de los comandos usan opciones que consisten en un sólo carácter precedido por un guión, por ejemplo, “-l”, pero muchos comandos, incluidos los del Proyecto GNU, también soportan opciones largas, consistentes en una palabra precedida por dos guiones. Además, muchos comandos permiten múltiples opciones cortas enlazadas. En este ejemplo, al comando ls se le han dado dos opciones, la opción “l” para mostrar la salida en formato largo, y la opción “t” para ordenar el resultado por la fecha de modificación de los archivos.

```zsh
ls -lt
```

Añadiremos la opción larga “--reverse” para invertir el orden de la lista:

```zsh
ls -lt --reverse
```

Fíjate que las opciones de los comandos, como los nombres de archivo en Linux, distinguen entre mayúsculas y minúsculas.

{{< img src="https://i.postimg.cc/4NqPtTb9/Screenshot-20200715-084749.png" >}}

El comando ls tiene un gran número de posibles opciones. Las más comunes están listadas a continuación.

-   **-a --all** Lista todos los archivos, incluso aquellos cuyo nombre empieza con un punto, que normalmente no se listan (es decir, ocultos).
-   **-A --almost-all** Como la opción -a anterior, salvo que no lista . (el directorio actual) y .. (el directorio padre).
-   **-d --directory** Por lo general, si especificamos un directorio, ls listará los contenidos del directorio y no el directorio en sí. Usa esta opción junto con la opción -l para ver detalles del directorio en lugar de su contenido.
-   **-F --classify** Esta opción añadirá un carácter indicador al final de cada nombre listado. Por ejemplo, una “/” es que el nombre es un directorio.
-   **-h --human-readable** En los listados en formato largo, muestra el tamaño de los archivos en un formato comprensible, en lugar de en bytes.
-   **-l** Muestra los resultados en formato largo.
-   **-r --reverse** Muestra los resultados en orden inverso. Normalmente, ls muestra los resultados en orden alfabético ascendente.
-   **-S** Ordena los resultados por tamaño.
-   **-t** Ordena por la fecha de modificación.

## Un vistazo más profundo al formato largo

Como vimos antes, la opción “-l” hace que ls muestre sus resultados en formato largo. Este formato contiene gran cantidad de información útil. Aquí está el directorio Examples de un sistema Ubuntu:

```zsh
-rw-r--r-- 1 root root 3576296 2007-04-03 11:05 Experience patojad.ogg
-rw-r--r-- 1 root root 1186219 2007-04-03 11:05 patojad-leaflet.png
-rw-r--r-- 1 root root   47584 2007-04-03 11:05 logo-LynxOS.png
-rw-r--r-- 1 root root   44355 2007-04-03 11:05 logo-PatoJAD.png
-rw-r--r-- 1 root root   34391 2007-04-03 11:05 logo-Antix.png
-rw-r--r-- 1 root root   32059 2007-04-03 11:05 oo-cd-cover.odf
-rw-r--r-- 1 root root  159744 2007-04-03 11:05 oo-derivatives.doc
-rw-r--r-- 1 root root   27837 2007-04-03 11:05 oo-maxwell.odt
-rw-r--r-- 1 root root   98816 2007-04-03 11:05 oo-trig.xls
-rw-r--r-- 1 root root  453764 2007-04-03 11:05 oo-welcome.odt
-rw-r--r-- 1 root root  358374 2007-04-03 11:05 patojad Sax.ogg
```

Veamos los diferentes campos de uno de los archivos y examinemos su significado:

-   **-rw-r--r--** Permisos de acceso al archivo. El primer carácter indica el tipo de archivo. Entre los diferentes tipos, un guión al principio significa un archivo normal, mientras que una “d” indica un directorio. Los siguientes tres caracteres son los permisos de acceso para el propietario del archivo, los tres siguientes los de los miembros del grupo del archivo, y lo tres últimos los del resto de usuarios. El significado completo de esto lo trataremos en el Capítulo 9 – Permisos.
-   **1** Número de enlaces fuertes del archivo. Veremos el tema de los enlaces más adelante.
-   **root** El nombre del propietario del archivo.
-   **root** El nombre del grupo propietario del archivo.
-   **32059** Tamaño del archivo en bytes.
-   **2007-04-03 11:05** Fecha y hora de la última modificación del archivo.
-   **oo-cd-cover.odf** Nombre del archivo.
