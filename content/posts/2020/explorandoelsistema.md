---
title: 'Preparandose para explorar el sistema'
date: '2020-07-24 09:38:00'
description: 'Vamos a ver lo ulti'
type: 'post'
tags: ['comandos', 'ls', 'terminal', 'consola', 'linux', 'less', 'file']
categories: ['Linux']
img: 'https://i.postimg.cc/v8ghvzrZ/Screenshot-20200724-092825.png'
authors: ['PatoJAD']
---

Ahora que sabemos cómo movernos por el sistema de archivos, es hora de realizar una visita guiada por nuestro sistema GNU/Linux. Sin embargo, antes de empezar, vamos a aprender algunos comandos más que serán útiles en nuestro viaje:

-   **ls** – Lista los contenidos de un directorio
-   **file** – Muestra el tipo de archivo
-   **less** – Muestra el contenido del archivo

## Averiguando el tipo de archivo con file

Al explorar el sistema será útil saber qué contienen los archivos. Para hacerlo utilizaremos el comando _file_ para determinar el tipo de archivo. Como vimos antes, los nombres de archivo en Linux no necesitan reflejar el contenido del archivo. Mientras que un nombre de archivo como “picture.jpg” se espera que contenga una imagen comprimida JPEG, esto no tiene por qué ser así en Linux. Podemos invocar el comando file de la siguiente forma:

    file nombre_del_archivo

Cuando se invoca, el comando file mostrará una breve descripción del contenido del archivo. Por ejemplo:

    file lince.jpg

Genera una salida como la siguiente:

    lince.jpg: JPEG image data, JFIF standard 1.01

![](https://i.postimg.cc/fLFKNtNs/Screenshot-20200724-092502.png)

Hay muchos tipos de archivos. De hecho, una de las ideas comunes en los sistemas operativos tipo Unix, como es Linux, es que **“todo es un archivo”**. Mientras que muchos de los archivos en tu sistema son familiares, por ejemplo MP3 y JPEG, hay otros muchos que son un poco menos obvios y algunos que son un poco raros.

## Viendo el contenido de un archivo con less

El comando less es un programa para ver archivos de texto. En nuestro sistema Linux, hay muchos archivos que contienen texto legible por humanos. El programa less proporciona una forma adecuada para examinarlos.

¿Para qué querríamos examinar archivos de texto? Porque muchos de los archivos que contienen la configuración del sistema (llamados archivos de configuración) están almacenados en este formato, y ser capaces de leerlos nos permite ver cómo funciona el sistema por dentro. Además, muchos de los programas que el sistema utiliza (llamados scripts) están almacenados en este formato. En capítulos posteriores, aprenderemos cómo editar archivos de texto para modificar configuraciones del sistema y escribiremos nuestros propios scripts, pero por ahora sólo veremos su contenido.

El comando less se usa de la siguiente manera:

    less nombre_del_archivo

Una vez ejecutado, el programa less nos permite desplazarnos arriba y abajo a través de un archivo de texto. Por ejemplo, para examinar el archivo que define todas las cuentas de usuario del sistema, usamos el siguiente comando:

    less /etc/passwd

![](https://i.postimg.cc/D0XcyvvX/Screenshot-20200724-092653.png)

Una vez que el programa less arranca, podemos ver el contenido del archivo. Si el archivo ocupa más de una página, podemos desplazarnos arriba y abajo. Para salir de less, pulsamos la tecla “q”.

## Menos es Más (Less is More)

El programa less fue diseñado como un reemplazo mejorado de un programa anterior de Unix llamado more. El nombre "less" viene de un juego de palabras “menos es mas – less is more” - un lema de los arquitectos y diseñadores modernistas.

less entra en la clase de programas llamados “paginadores”, que permiten ver fácilmente documentos de texto largos en forma de páginas. Mientras que el programa more sólo permitía avanzar páginas, el programa less permite avanzar y retroceder por las páginas y cuenta también con otras características.

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
