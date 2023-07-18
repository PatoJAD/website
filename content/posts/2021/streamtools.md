---
title: 'Stream Tools'
date: '2021-05-31 09:10:00'
description: 'Stream Tools herramientas simples y dinamicas para los Streamers'
type: 'post'
tags:
    [
        'streams',
        'tools',
        'cards',
        'free',
        'thirds',
        'streamers',
        'obs',
        'browser',
        'linux',
    ]
categories: ['Noticias', 'Aplicaciones']
img: 'https://i.postimg.cc/WThR0szw/image.png'
authors: ['PatoJAD']
---

En esta oportunidad vengo a contar en algo que trabajé hace mucho y esta funcional pero nunca lo comente. Claramente no es un gran aporte pero espero algún día terminar de expandirlo y ofrecer más opciones.

> Las herramientas que creamos tienen como fin ser realmente simple de usar para poder dar la mejor experiencia a los streamers que están iniciando y no disponen de los recursos o conocimientos como para personalizar sus Streams. También está orientado al mundo de GNU/Linux aunque puede ser utilizado en cualquier plataforma

{{< img src="https://i.postimg.cc/WThR0szw/image.png" >}}

Esto consiste en unas herramientas un tanto predefinidas que son perfectamente configurables para que cada streamer la personalice para agregar a sus directos o porque no algun youtube a sus videos.

## Requisitos Base

Estas herramientas se hicieron pensando en OBS por lo cual necesitamos tener OBS instalado y el complemento conocido como **Browser** que nos permite mostrar una web. El mismo podemos ver su instalación desde la [siguiente publicación](/aplicaciones/2021/05/linux-browser-obs/). Una vez que tengamos todo esto podemos generar nuestro link desde la web de StreamTolls.

{{< img src="https://i.postimg.cc/BbyZ6Qq9/image.png" >}}

{{< link text="Stream Tools Docs" url="https://streamtools.patojad.com.ar/docs/" >}}

## El uso

El uso está más detallado en la documentación que dejamos arriba, pero básicamente consiste en modificar los links de ejemplos manteniendo en cuenta los parámetros de la siguiente tabla:

| Parámetro |           Descripción            | Formato                              | Ejemplo |
| :-------- | :------------------------------: | :----------------------------------- | :-----: |
| title     | Es el título principal del third | **Tipo:** Texto **Tamaño máximo:** 9 | PatoJAD |
| subtitle  |    Es el subtítulo del third     | **Tipo:** Texto **Tamaño máximo:** 7 |   UrT   |
| color     |   El color para la decoración    | **Tipo:** hexadecimal                | f0f313  |

Seguramente en un futuro se agreguen más tipos de contenido, sin embargo por el momento solo tenemos disponibles los thirds genéricos que se ven en la documentación.
