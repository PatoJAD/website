---
title: 'Reducir consumo de Steam'
date: '2021-03-11 09:50:00.00'
description: 'Todos algunas vez jugamos al pokemon de GBA, ya sea el Amarillo, El Rojo Fuejo, el Zafari o cualquier otro.'
type: 'juegos'
tags:
    [
        'steam',
        'valve',
        'client',
        'consumo',
        'performance',
        'mejorar',
        'browser',
        'no-browser',
        'params',
        'Parametros',
    ]
category: ['Juegos', 'Linux']
img: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/767U3KQXVFG27ORY34QLGRUV6Y.jpg'
authors: ['PatoJAD']
---

Steam es una de las plataformas de videojuegos más grandes del mundo. Y los usuarios de linux contamos con esta plataforma nativa desde hace muchos años. En esta oportunidad vamos a intentar sacarle un poco más de provecho reduciendo el consumo de la plataforma para poder obtener un mejor resultado a la hora de jugar en nuestros equipos. Es posible jugar en equipos de pocos recursos y lo mejor es tratar de optimizar el consumo de todo el sistema en general.

{{< img src="https://www.muycomputer.com/wp-content/uploads/2018/09/steam-portada.jpg" >}}

## Video

Claramente una mejor explicación requiere de un video que hable por sí solo. En esta oportunidad les dejo la explicación de como funciona esto que vamos a hacer el día de hoy.

{{< youtube id="jZJwsmZ2t0g" >}}

## Terminal

Cómo prometo en el video dejo los los comandos que vamos a estar utilizando. Recordemos que para esto es necesario tener instalado steam en nuestros dispositivos y esto es compatible con cualquier distribución de linux dado que son características propias del cliente de Steam

```bash
steam -no-browser +open steam://open/minigameslist
```

Con este comando podemos generar lanzadores y/o abrir el juego desde la terminal de una forma más “performante” donde no se habiliten los navegadores ni muchos procesos en segundo plano que eventualmente no utilizamos

{{< img src="https://www.howtogeek.com/wp-content/uploads/2020/10/steam-small-mode.png" >}}
