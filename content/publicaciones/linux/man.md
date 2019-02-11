---
title: "Man, tu Manual para Linux!"
date: "2019-01-14"
description: "Manual de Linux"
type: "linux"
tags: ["Manual","MAN","console","Terminal"]
category: ["Linux"]
img:  "https://1.bp.blogspot.com/-4_wiFDX5KH4/XDdXcf0CVNI/AAAAAAAAem4/OmohUYH21-4n07RIxsNZn0b60go5CsDggCLcBGAs/s640/man_patojad.png"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importate agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---

En la vida cotidiana cuando adquirimos un producto del cual desconocemos correctamente su funcionamiento o alguna funcionalidad recurrimos al manual. Esta es una practica que viene hace años y que, si bien, no se valora mucho es lo que nos permite hacernos con nuevos productos facilitando nuestro día a día.

### ¿Que tiene que ver esto con linux?

Llevando esta analogía a linux podríamos decir que cada producto es una aplicación. Y muchas veces no conocemos el funcionamiento completo de la misma. Sin embargo en esta situación solemos ir a los foros o grupos a consultar las dudas, dependiendo de que otra persona lo conozca y se encuentre justo en ese momento disponible para respondernos. ¿No seria mejor tener un manual de cada aplicación? Bueno, hoy te digo que eso ya lo tenes...

### ¿Que es man?

Bueno, como dije si existe y se llama "man" pero... ¿Que es man? simplemente es una herramienta de los sistemas Unix que cumple la función de manual, donde se encuentra documentado todo acerca de comandos, archivos, llamadas a sistema, etc. Por lo cual tenemos acceso a un manual completo sobre nuestro sistema operativo que nos puede ayudar a solucionar mucho antes de hacer una pregunta.

{{< img src="https://3.bp.blogspot.com/-a2g2i0Wvrio/XDdXVq-hp_I/AAAAAAAAem0/nnmB0eVYVxkUIQ2eI3ySEcsRCwaVZZa3QCLcBGAs/s640/manual_patojad.png" >}}

### ¿Como se usa?

La gran mayoría de las aplicaciones aportan a man para que quede todo documentado y cualquier usuario pueda obtener la documentación de la misma sin tener que acceder a Internet para esto existe un comando basico que nos permite ver "el manual" de una aplicación

    man aplicacion

Llevando esto a un ejemplo funcional podríamos querer ver el "el manual" de man (Si "el manual" trae un manual de uso...) en ese caso deberiamos hacer:

    man man

y lograríamos ver la documentación completa de man.

En ocasiones algunas aplicaciones un poco mas complejas poseen varias secciones del manual (como los manuales de los autos que tambien contiene muchas secciones) cuando esto ocurre suele mostrar un mensaje indicando la sección, como man(1) y man(7), o exit(1) y exit(3). Para acceder a estas secciones basta con indicarlo de la siguiente forma:

    man 3 printf


### ¿Que secciones hay?

El manual normalmente está dividido en ocho secciones numeradas, organizadas como sigue (en BSD, Unix y Linux):

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

No te llevas bien con ingles, no te preocupes {{< textlink url="https://patojad.gitlab.io/blog/publicaciones/linux/manenespañol/" text="aquí" >}} podes ver como traducirlo al español!
