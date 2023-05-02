---
title: 'La bomba zip'
date: '2019-09-13'
description: '¿Sabías que descomprimir un archivo de 42mb puede ser el final de tu maquina? No te pierdas todo lo que tienes que saber sobre la bomba zip'
type: 'redesyseguridad'
tags:
    [
        'bomba',
        'zip',
        'seguridad',
        'programacion',
        'petabytes',
        'terabytes',
        'gigabytes',
        'bytes',
        'malware',
        'malicioso',
        'maliciosos',
    ]
category: ['Seguridad', 'Programacion']
img: 'https://media.metrolatam.com/2019/07/11/stephaniemelisht-4afdb0fb4aeb4a6bdb8b5526ef50ca74-600x400.jpg'
authors: ['PatoJAD']
---

> Un archivo comprimido de 46 MB que explota hasta alcanzar los 4.5 petabytes, la bomba ZIP más potente creada hasta ahora
>
> {{< citaname name="genbeta" >}}

Así nos presenta genbeta en su publicación a esta bomba zip. Básicamente es un archivo malicioso (de apariencia inocente) que esconde una enorme cantidad de datos comprimida en diferentes niveles anidados, viéndose como un inofensivo zip de tan solo 42MB.

Este tipo de archivo es capaz de colapsar el ordenador por un colapso de buffer y existen hace bastante tiempo, sin embargo, ninguno es capaz de hacerlo como el creado por David Fifield que pasa de 42 MB a 4.5PB. Pero no solo esto, él va mas allá y decide hacerlo no recursivo lo cual permite que la “explosión” de datos se realice en una descompresión y no en una recursión.

## Estructura de un archivo ZIP

Un archivo zip es, básicamente, un archivo central que referencia a los otros archivos

{{< img src="https://www.bamsoftware.com/hacks/zipbomb/normal.svg" >}}

El directorio central está al final del archivo zip. Es una lista de encabezados que contiene metadatos para un solo archivo, como su nombre de archivo y suma de verificación CRC-32, y un puntero hacia atrás a un encabezado de archivo local. Un encabezado de directorio central tiene 46 bytes de longitud, más la longitud del nombre del archivo.

Un archivo consta de un encabezado de archivo local seguido de datos. El encabezado del archivo local tiene 30 bytes de longitud, más la longitud del nombre del archivo. Contiene una copia redundante de los metadatos del encabezado y los tamaños comprimidos y sin comprimir de los datos de archivo que siguen. Zip es un formato contenedor, no un algoritmo de compresión, por lo cual los datos de cada archivo se comprimen utilizando un algoritmo especificado en los metadatos, generalmente DEFLATE.

Esta descripción del formato zip omite muchos detalles que no son necesarios para comprender la bomba zip. Más adelante explicaremos a fundo el funcionamiento y como crear tu propia bomba zip.

## Descarga

Aquí ofrecemos la descarga de 3 archivos que David dejo en su blog que son 3 bombas zip donde podemos ver su peso comprimido y su peso luego de la “explosión” o descompresión. De antemano no recomiendo utilizarlos para otra cosa que no sean fines científicos y obviamente sobre entornos controlados.

{{< link text="42 kB	→	5.5 GB" url="https://www.bamsoftware.com/hacks/zipbomb/zbsm.zip" >}}

{{< link text="10 MB	→	281 TB" url="https://www.bamsoftware.com/hacks/zipbomb/zblg.zip" >}}

{{< link text="46 MB	→	4.5 PB (Zip64, less compatible)" url="https://www.bamsoftware.com/hacks/zipbomb/zbxl.zip" >}}
