---
title: 'Activar Descargas paralelas en Pacman'
date: '2021-07-15 09:51:00.00'
description: 'Pacman 6 trajo muchas cosas y entre esas las descargas multiples'
type: 'post'
tags:
    [
        'youtube',
        'video',
        'artix',
        'pacman',
        'paralelas',
        'descargas',
        'sinmultaneas',
        'manjaro',
        'arch',
        'endeavour',
        'opinion',
        'archlinux',
        'linux',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/MH1q52GV/pacmanparalelo.png'
authors: ['PatoJAD']
---

Como mencionamos [hace un tiempo llegó pacman 6](/post/2021/06/llegó-pacman-v6-y-pamac-quedó-anonadado/), y la primera impresión para algunos no fue buena porque pamac no estaba a la altura ni estaba preparado para esto. Sin embargo ya está todo solucionado y podemos comenzar a sacarle el mejor provecho a esto. En esta oportunidad vamos a hablar de una nueva opción que seguro queremos tener habilitada en nuestra distro…

## Descargas en paralelo

Claramente sabemos que son las descargas en paralelo y algunos no nos percatamos de que pacman no descargaba simultáneamente los paquetes pero hoy te damos el paso a paso para que habilites la descarga en paralelo en tu distro base arch preferida…

## Cómo hacerlo

Te dejo un video donde explico como realizar esto y claramente más abajo vas a poder ver los comandos utilizados:

{{< youtube id="xOeA9rx6HLA" >}}

Primero abrimos, como administrador, el archivo de configuración:

```bash
sudo nano /etc/pacman.conf
```

Luego, como explica en el video, agregamos la siguiente linea:

```bash
ParallelDownloads = 5
```

Donde 5 representa la cantidad de descargas en paralelo que queremos tener, este número lo podemos variar dependiendo nuestra velocidad de internet y necesidades.
