---
title: "4 Formas de buscar archivos"
date: "2020-07-01 09:41:00"
description: "Hoy vamos a estar viendo un poco como buscar en la terminal, algo muy útil y realmente rápido que recorrer directorios"
type: "linux"
tags: ["find", "locate", "whereis", "which", "buscar", "terminal", "linux"]
category: ["Linux"]
img: "https://i.ibb.co/9pc9JD9/Screenshot-20200701-092342.png"
authors: ["PatoJAD"]
---



En linux existen muchas formas de buscar archivos, directorios, binarios, códigos fuente, etc. La terminal es una de nuestras herramientas favoritas (y digo nuestras porque vos seguramente si no te llevas bien vas a irte amigando y viendo que es realmente útil) que nos permite hacerlo más simple y manejar prácticamente todo el sistema. por lo cual hoy vamos a ver como buscar archivos desde la terminal…




## Find


{{< img src="https://i.ibb.co/Qc1pGqZ/Screenshot-20200701-091150.png" >}}


Para buscar archivos en la línea de comando puedes usar el comando find, su sintaxis es la siguiente:



    find ruta criterio acción



Donde:



* **Ruta** es la sección del sistema de archivo donde buscar (el directorio especifico y todos los subdirectorios). Si no se especifica nada el directorio que se usará será donde te encuentras actualmente.
* **Criterio** es las propiedades del archivo.
* **Acción** son opciones que influyen en la condición o control de la búsqueda


{{< img src="https://i.ibb.co/44QS1PY/Screenshot-20200701-091308.png" >}}



## Locate


{{< img src="https://i.ibb.co/DtZN6vh/Screenshot-20200701-091835.png" >}}


El comando locate es una **alternativa** al comando find. El comando find debe buscar a través de la parte del sistema de archivos seleccionado, proceso que puede ser un poco lento.

Por otro lado, locate busca a través de una base de datos previamente creada para ese propósito (/var/lib/locatedb), haciéndolo más rápido. La base de datos es automáticamente creada y actualizada diariamente. Pero los cambios hechos después de haber sido actualizado no se tomarán en cuenta por locate, a menos que actualices la base datos manualmente usando el comando:



    updatedb


{{< img src="https://i.ibb.co/yV0Bdh7/Screenshot-20200701-091923.png" >}}



## Whereis


{{< img src="https://i.ibb.co/nzR3SJ6/Screenshot-20200701-092220.png" >}}


el comando whereis retorna los binarios (opción -b), página de manual (opción -m) y los código fuentes (opción -s) de un comando específico. Si no se usa ninguna opción devolverá toda la información, si está disponible. Este comando es más rápido que find pero es menos minucioso.


{{< img src="https://i.ibb.co/9pc9JD9/Screenshot-20200701-092342.png" >}}



## Which


{{< img src="https://i.ibb.co/jDKmtRN/Screenshot-20200701-092617.png" >}}


El comando wich busca todas las rutas listadas en la variable PATH para un comando específico y devuelve la ruta completa del comando. El comando es específicamente útil si existen varias versiones del mismo comando en diferentes directorios y si quieres saber qué versión se ejecuta cuando no se especifica ninguna ruta.

Muchas veces necesitamos saber dónde están los binarios y esta solución no solo es práctica sino que es muy fácil de usar.


{{< img src="https://i.ibb.co/hC19jv5/Screenshot-20200701-092711.png" >}}


---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
