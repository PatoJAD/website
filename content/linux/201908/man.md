---
title: "Man, tu Manual para Linux!"
date: "2019-01-14"
description: "Manual de Linux"
type: "linux"
tags: ["Manual","MAN","console","Terminal"]
category: ["Linux"]
img:  "https://i.postimg.cc/G2D38xB0/man-patojad.png"
authors: ["PatoJAD"]
---

En la vida cotidiana cuando adquirimos un producto del cual desconocemos correctamente su funcionamiento o alguna funcionalidad, recurrimos al manual. Esta es una práctica que viene hace años y que, si bien no se valora mucho es lo que nos permite hacernos con nuevos productos facilitando nuestro día a día.

### ¿Qué tiene que ver esto con GNU/Linux?

Llevando esta analogía a GNU/Linux podríamos decir que cada producto es una aplicación. Y muchas veces no conocemos el funcionamiento completo de la misma. Sin embargo en esta situación solemos ir a los foros o grupos a consultar las dudas, dependiendo de que otra persona lo conozca y se encuentre justo en ese momento disponible para respondernos. ¿No seria mejor tener un manual de cada aplicación? Bueno, hoy te digo que eso ya lo tenes...

### ¿Qué es man?

Bueno, como dije si existe y se llama "man" pero... ¿Qué es man?, simplemente es una herramienta de los sistemas Unix que cumple la función de manual, donde se encuentra documentado todo acerca de comandos, archivos, llamadas a sistema, etc. Por lo cual tenemos acceso a un manual completo sobre nuestro Sistema Operativo que nos puede ayudar a solucionar mucho antes de hacer una pregunta.

{{< img src="https://i.postimg.cc/HW4HqxXt/manual-patojad.png" >}}

### ¿Cómo se usa?

La gran mayoría de las aplicaciones aportan a man para que quede todo documentado y cualquier usuario pueda obtener la documentación de la misma sin tener que acceder a Internet para esto existe un comando basico que nos permite ver "el manual" de una aplicación

    man aplicacion

Llevando esto a un ejemplo funcional podríamos querer ver el "el manual" de man (si "el manual" trae un manual de uso...) en ese caso deberiamos hacer:

    man man

y lograríamos ver la documentación completa de man.

En ocasiones algunas aplicaciones un poco mas complejas poseen varias secciones del manual (como los manuales de los autos que tambien contienen muchas secciones) cuando esto ocurre suele mostrar un mensaje indicando la sección, como **man(1)** y **man(7)**, o **exit(1)** y **exit(3)**. Para acceder a estas secciones basta con indicarlo de la siguiente forma:

    man 3 printf


### ¿Qué secciones hay?

El manual normalmente esta dividido en ocho secciones numeradas, organizadas como sigue (en BSD, Unix y GNU/Linux):

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

En algunos sistemas están disponibles también las siguientes secciones:

| Sección | Descripción |
| ------- | ----------- |
| 0 | Archivos de cabecera de la biblioteca estándar de C |
| 9 | Rutinas del Kernel |
| n | Tcl/Tk |
| x | X Window System |

No te llevas bien con Inglés, no te preocupes {{< textlink url="https://patojad.tk/linux/manenespañol/" text="aquí" >}} podes ver como traducirlo al español!
