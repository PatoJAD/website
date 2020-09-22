---
title: "Man, tu Manual para Linux!"
date: "2019-01-14"
description: "MAN tu manual para linux al alcance de la terminal"
type: "linux"
tags: ["manual","man","console","terminal", "shell", "bash", "linux", "uso"]
category: ["Linux"]
img:  "https://i.postimg.cc/G2D38xB0/man-patojad.png"
authors: ["PatoJAD"]
---

{{< br >}}

En la vida cotidiana cuando adquirimos un producto del cual desconocemos correctamente su funcionamiento o alguna funcionalidad, recurrimos al manual. Esta es una práctica que viene hace años y que, si bien no se valora mucho es lo que nos permite hacernos con nuevos productos facilitando nuestro día a día.

{{< br >}}
{{< br >}}

## ¿Qué tiene que ver esto con GNU/Linux?

{{< br >}}

Llevando esta analogía a GNU/Linux podríamos decir que cada producto es una aplicación. Y muchas veces no conocemos el funcionamiento completo de la misma. Sin embargo en esta situación solemos ir a los foros o grupos a consultar las dudas, dependiendo de que otra persona lo conozca y se encuentre justo en ese momento disponible para respondernos. ¿No seria mejor tener un manual de cada aplicación? Bueno, hoy te digo que eso ya lo tenes...

{{< br >}}
{{< br >}}

## ¿Qué es man?

{{< br >}}

Bueno, como dije si existe y se llama "man" pero... ¿Qué es man?, simplemente es una herramienta de los sistemas Unix que cumple la función de manual, donde se encuentra documentado todo acerca de comandos, archivos, llamadas a sistema, etc. Por lo cual tenemos acceso a un manual completo sobre nuestro Sistema Operativo que nos puede ayudar a solucionar mucho antes de hacer una pregunta.

{{< br >}}
{{< img src="https://i.postimg.cc/HW4HqxXt/manual-patojad.png" >}}
{{< br >}}
{{< br >}}

## ¿Cómo se usa?

{{< br >}}

La gran mayoría de las aplicaciones aportan a man para que quede todo documentado y cualquier usuario pueda obtener la documentación de la misma sin tener que acceder a Internet para esto existe un comando basico que nos permite ver "el manual" de una aplicación

{{< br >}}

    man aplicacion

{{< br >}}

Llevando esto a un ejemplo funcional podríamos querer ver el "el manual" de man (si "el manual" trae un manual de uso...) en ese caso deberiamos hacer:

{{< br >}}

    man man

{{< br >}}

y lograríamos ver la documentación completa de man.

En ocasiones algunas aplicaciones un poco mas complejas poseen varias secciones del manual (como los manuales de los autos que tambien contienen muchas secciones) cuando esto ocurre suele mostrar un mensaje indicando la sección, como **man(1)** y **man(7)**, o **exit(1)** y **exit(3)**. Para acceder a estas secciones basta con indicarlo de la siguiente forma:

{{< br >}}

    man 3 printf

{{< br >}}
{{< br >}}

## ¿Qué secciones hay?

{{< br >}}

El manual normalmente esta dividido en ocho secciones numeradas, organizadas como sigue (en BSD, Unix y GNU/Linux):

{{< br >}}

|Sección | Descripción |
| ------ | ----------- |
| 1 | Comandos Generales |
| 2 | Llamadas al sistema |
| 3 | Biblioteca C de funciones |
| 4 | Ficheros especiales (normalmente dispositivos) y drivers |
| 5 | Formatos de fichero y convenciones |
| 6 | Juegos y salvapantallas |
| 7 | Miscelánea |
| 8 | Comandos de administración del sistema y Demonios |

{{< br >}}

En algunos sistemas están disponibles también las siguientes secciones:

{{< br >}}

| Sección | Descripción |
| ------- | ----------- |
| 0 | Archivos de cabecera de la biblioteca estándar de C |
| 9 | Rutinas del Kernel |
| n | Tcl/Tk |
| x | X Window System |

{{< br >}}

No te llevas bien con Inglés, no te preocupes {{< textlink url="/linux/2019/01/poner-las-paginas-de-man-en-español/" text="aquí" >}} podes ver como traducirlo al español!

{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
