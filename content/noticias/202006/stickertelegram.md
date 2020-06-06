---
title: 'Crea Tu Propio Pack de Stickers en Telegram'
date: '2020-06-06 14:04:00'
description: 'En Telegram tenemos los stickers hace realmente mucho, y en esta oportunidad vamos a crear nuestro propio pack.'
type: 'noticias'
tags: ["telegram", "sticker", "stickers", "crear", "pack"]
category: ["Noticias"]
img: 'https://i.postimg.cc/B6WCCgjw/image.png'
authors: ["PatoJAD"]
---

{{< br >}}

En esta oportunidad vamos a ver como hacer **nuestro propio pack de stickers**, en este caso, no vamos a meternos en edición de imagen, o vamos a hacer lo menos posible por lo cual no vamos a usar ni GIMP ni ninguna herramienta por el estilo.

En mi caso los voy a usar mi propia cara y para eso voy usar **BitMoji** (Gracias Cumpi por darlo a conocer) y voy a descargar de ahi en formato PNG todos lo que quiera convertir en sticker.

{{< br >}}
{{< img src="https://sdk.bitmoji.com/render/panel/9c3e3a09-773c-4836-a93c-7efe79b8b562-c796801f-3d03-48e6-9753-c6df668cc1af-v1.png?transparent=1&palette=1" >}}
{{< br >}}

Una vez descargados las imágenes nos daremos cuenta que **no coinciden con el requisito de telegram** que sean de por lo menos 512*512 pero sí son perfectamente cuadradas, lo cual es perfecto para el uso que le queremos dar.

{{< br >}}
{{< br >}}

## Hackaso para evitar editar las imágenes

{{< br >}}

A muchos no les gusta la terminal y si es tu caso podes tranquilamente abrir las imágenes una por una y redimensionarlas y volver a guardarlo. Si no te molesta usar un poco la terminal te voy a contar este *“Hackaso”* que te va a permitir transformarlas en poco tiempo *(Tenía un script que tardaba un seg pero lo borre sin querer)*

Abrimos una terminal y nos ubicamos donde descargamos las imágenes y a continuación basta con ejecutar el siguiente comando *(por cada imagen)* para generar la redimensión de la misma sin ningún inconveniente:

{{< br >}}

    convert -resize 512×512 nombredelaimagen.png nombredelaimagen512.png

{{< br >}}

Y esto nos crea el archivo *nombredelaimagen512.png* que tiene la medida perfecta para nuestro sticker.

{{< br >}}
{{< br >}}

## Creando el Pack

{{< br >}}

Para comenzar tenemos que **iniciar una conversación** con un bot que va a hacer casi todo por nosotros y para iniciarla te dejo aca abajo un hermoso botón!

{{< br >}}
{{< link url="https://telegram.me/stickers" text="@stickers" >}}
{{< br >}}

Una vez iniciada la conversación nos va mostrar toda la lista de opciones y comandos que utiliza. Pero nosotros sabemos que es lo que queremos hacer, para iniciar vamos a **crear un nuevo pack** de stickers enviando el siguiente comando

{{< br >}}

    /newpack

{{< br >}}

Lo primero que te pedirá el bot es un nombre para el paquete de stickers. Este nombre será visible para quien vea cualquiera de sus stickers, así que intenta que sea descriptivo. En mi caso vamos a usar *PatoJAD*

{{< br >}}
{{< img src="https://i.postimg.cc/4NtJ3vtN/image.png" >}}
{{< br >}}
{{< br >}}

## Agregando Stickers

{{< br >}}

Ahora tenemos que ir agregando de a uno cada uno de los stickers que queremos, para eso tenemos que enviarlo **COMO ARCHIVO** y no como *imagen*, y luego enviar los emojis con los que queremos relacionarlos, y así consecutivamente con todos los stickers que tengamos.

{{< br >}}
{{< img src="https://i.postimg.cc/c45QsSRN/image.png">}}
{{< br >}}

Una vez que hayamos subido todos los que nos gustan debemos terminar **publicando el paquete** de stickers para su uso, esto lo podemos hacer simplemente enviando el comando publish al bot de la siguiente forma:

{{< br >}}

    /publish

{{< br >}}

Y nos pedira 2 datos más, **una imagen que represente al pack** que también debemos enviar como archivo y debe ser un PNG de 100x100 para lo cual les reitero el comando para que sea más simple

{{< br >}}

    convert -resize 100×100 nombredelaimagen.png logo.png

{{< br >}}

Y una vez enviado nos pedirá **el nombre Corto del Pack**, en nuestro caso vamos a volver a usar *PatoJAD* dado que es corto y fácil de aprender.

{{< br >}}
{{< img src="https://i.postimg.cc/B6VqjMMt/image.png" >}}
{{< br >}}

Y ya nos genero una url para compartir el sticker con quienes queramos y poder empezarlo a utilizar… Te dejo el pack que cree por *si queres usarlo* y espero que te sirva y no te olvides de enviarnos los packs que hagas a {{< textlink url="https://t.me/PatoJADCommunity" text="nuestro grupo de telegram" >}}

{{< br >}}
{{< link text="Stickers PatoJAD" url="https://t.me/addstickers/PatoJAD" >}}
{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
