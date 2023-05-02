---
title: 'Crea Tu Propio Pack de Stickers en Telegram'
date: '2020-06-06 14:04:00'
description: 'En Telegram tenemos los stickers hace realmente mucho, y en esta oportunidad vamos a crear nuestro propio pack.'
type: 'noticias'
tags: ['telegram', 'sticker', 'stickers', 'crear', 'pack']
category: ['Noticias']
img: 'https://i.postimg.cc/B6WCCgjw/image.png'
authors: ['PatoJAD']
---

En esta oportunidad vamos a ver como hacer **nuestro propio pack de stickers**, en este caso, no vamos a meternos en edición de imagen, o vamos a hacer lo menos posible por lo cual no vamos a usar ni GIMP ni ninguna herramienta por el estilo.

En mi caso los voy a usar mi propia cara y para eso voy usar **BitMoji** (Gracias Cumpi por darlo a conocer) y voy a descargar de ahi en formato PNG todos lo que quiera convertir en sticker.

{{< img src="https://sdk.bitmoji.com/render/panel/9c3e3a09-773c-4836-a93c-7efe79b8b562-c796801f-3d03-48e6-9753-c6df668cc1af-v1.png?transparent=1&palette=1" >}}

Una vez descargados las imágenes nos daremos cuenta que **no coinciden con el requisito de telegram** que sean de por lo menos 512\*512 pero sí son perfectamente cuadradas, lo cual es perfecto para el uso que le queremos dar.

## Hackaso para evitar editar las imágenes

A muchos no les gusta la terminal y si es tu caso podes tranquilamente abrir las imágenes una por una y redimensionarlas y volver a guardarlo. Si no te molesta usar un poco la terminal te voy a contar este _“Hackaso”_ que te va a permitir transformarlas en poco tiempo _(Tenía un script que tardaba un seg pero lo borre sin querer)_

Abrimos una terminal y nos ubicamos donde descargamos las imágenes y a continuación basta con ejecutar el siguiente comando _(por cada imagen)_ para generar la redimensión de la misma sin ningún inconveniente:

    convert -resize 512×512 nombredelaimagen.png nombredelaimagen512.png

Y esto nos crea el archivo _nombredelaimagen512.png_ que tiene la medida perfecta para nuestro sticker.

## Creando el Pack

Para comenzar tenemos que **iniciar una conversación** con un bot que va a hacer casi todo por nosotros y para iniciarla te dejo aca abajo un hermoso botón!

{{< link url="https://telegram.me/stickers" text="@stickers" >}}

Una vez iniciada la conversación nos va mostrar toda la lista de opciones y comandos que utiliza. Pero nosotros sabemos que es lo que queremos hacer, para iniciar vamos a **crear un nuevo pack** de stickers enviando el siguiente comando

    /newpack

Lo primero que te pedirá el bot es un nombre para el paquete de stickers. Este nombre será visible para quien vea cualquiera de sus stickers, así que intenta que sea descriptivo. En mi caso vamos a usar _PatoJAD_

{{< img src="https://i.postimg.cc/4NtJ3vtN/image.png" >}}

## Agregando Stickers

Ahora tenemos que ir agregando de a uno cada uno de los stickers que queremos, para eso tenemos que enviarlo **COMO ARCHIVO** y no como _imagen_, y luego enviar los emojis con los que queremos relacionarlos, y así consecutivamente con todos los stickers que tengamos.

{{< img src="https://i.postimg.cc/c45QsSRN/image.png">}}

Una vez que hayamos subido todos los que nos gustan debemos terminar **publicando el paquete** de stickers para su uso, esto lo podemos hacer simplemente enviando el comando publish al bot de la siguiente forma:

    /publish

Y nos pedira 2 datos más, **una imagen que represente al pack** que también debemos enviar como archivo y debe ser un PNG de 100x100 para lo cual les reitero el comando para que sea más simple

    convert -resize 100×100 nombredelaimagen.png logo.png

Y una vez enviado nos pedirá **el nombre Corto del Pack**, en nuestro caso vamos a volver a usar _PatoJAD_ dado que es corto y fácil de aprender.

{{< img src="https://i.postimg.cc/B6VqjMMt/image.png" >}}

Y ya nos genero una url para compartir el sticker con quienes queramos y poder empezarlo a utilizar… Te dejo el pack que cree por _si queres usarlo_ y espero que te sirva y no te olvides de enviarnos los packs que hagas a {{< textlink url="https://t.me/PatoJADCommunity" text="nuestro grupo de telegram" >}}

{{< link text="Stickers PatoJAD" url="https://t.me/addstickers/PatoJAD" >}}
