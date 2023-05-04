---
title: 'Flatpack no siempre es un enemigo'
date: '2021-02-22 10:12:00'
description: 'El hecho de que no prefiera usarlas no implica que sea un desertor de la misma, hoy pretendo explicar cuando, desde mi punto de vista, es ideal el uso de este tipo de paqueterias.'
type: 'linux'
tags:
    [
        'flatpack',
        'snap',
        'appimage',
        'rolling',
        'distro',
        'debian',
        'ubuntu',
        'paqueteria',
    ]
categories: ['Linux']
img: 'https://ubunlog.com/wp-content/uploads/2019/12/flatpak-cover.png'
authors: ['PatoJAD']
---

Si bien muchas veces explique porque el uso de flatpack y gestores similares que empaquetan todas las librerías necesarias generando apps al mejor estilo MS-DOS no son recomendables. El hecho de que no prefiera usarlas no implica que sea un desertor de la misma, hoy pretendo explicar cuando, **desde mi punto de vista,** es ideal el uso de este tipo de paqueterias.

{{< img src="https://ubunlog.com/wp-content/uploads/2019/12/flatpak-cover.png" >}}

## Lo estable vs lo que necesito

Antes de empezar con el tema que nos compete, lo ideal es explicar porque estos estilos de paquetería **SI** pueden ser una idea genial. Muchas personas siempre buscan tener una distribución estable donde no tengan que preocuparse por actualizaciones y posibles rupturas del sistema. En ese caso el precio a pagar es ver novedades en la web como las de VLC y Audacious pero saber que hay que esperar mucho para poder siquiera probarlo. Esto se volvió un gran problema viendo lo estable que se fueron poniendo las distros Rolling que traen estas novedades siempre al N+1

{{< img src="https://blog.desdelinux.net/wp-content/uploads/2011/10/rolling.png" >}}

## Flatpack y sus amigos salvando las distros…

Gracias a este sistema de paquetería muchas veces es más simple utilizar un flatpack o appimage que intentar compilar las apps y todas sus dependencias sin romper el OS Base. En estos casos (como audacious en Debian) Flatpack permite aprovechar la experiencia estable y ligera de debian probando aplicaciones más nuevas sin dañar el sistema.

{{< img src="https://ubunlog.com/wp-content/uploads/2019/05/Eliminar-por-completo-Flatpak-Snap-Appimage.jpg" >}}

## ¿Un estándar para todas las distros?

Esta idea es realmente paupérrima. Si bien puede que este tipo de paqueteria sea ideal para **SUPLIR algún defecto** no implica que la distro deba moverse pura y exclusivamente en estos tipos de paqueterias. Lo ideal es seguir viéndolo como un complemento para salvar algunos posibles problemas y no como una solución mágica que, como otras, terminan atentando contra el hardware y la performance.

{{< img src="https://i.redd.it/81vlrnefp8e41.png" >}}

## Tu opinión

Cual es tu opinión sobre este tipo de paqueterias, ¿Lo usas?¿Lo usarías? ¿Qué tiene de bueno y qué tiene de malo?
