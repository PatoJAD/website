---
title: 'XanMod el Kernel que te recomendamos'
date: '2020-04-17 08:05:00'
description: '¿Sabes que es posible mejorar el rendimiento de tu distro con un kernel con buenas configuraciones e incluso más actualizado?'
type: 'linux'
tags: ['kernel', 'linux', 'actualziar', 'debian', 'ubuntu']
category: ['Linux']
img: 'https://xanmod.org/index_files/xanmod_wallpaper.png'
authors: ['PatoJAD']
---

XanMod es una **distribución de kernel de Linux** de propósito general con configuraciones personalizadas y **nuevas características**. Creado para proporcionar una experiencia de escritorio estable, receptiva y fluida.

La versión en tiempo real **se recomienda para aplicaciones críticas de tiempo de ejecución**, como eSports de juegos Linux, transmisión, producciones en vivo y entusiastas de latencia ultra baja.

Admite todas las versiones recientes de 64 bits de **Debian** y sistemas basados ​​en **Ubuntu**.

## Mi opinion

Ofrecen al **posibilidad** de mantener actualizado tu kernel a la ultima version. Como ellos dicen esto **no es recomendable en ambientes que requieran estabilidad**, sin embargo yo lo vengo usando asi y no me dio ningun problema, siempre me mantengo actualizado y sin **errores criticos**

Anteriormente hable de {{< textlink text="liquorix" url="/linux/2020/01/liquorix-que-es-como-lo-instalo/" >}} un kernel que estaba destinado a los videojuegos. Sin embargo en mi tiempo de prueba me dio mucho mejor rendimiento Xanmod e incluso **menos consumo de bateria**.

## Principales características

-   Núcleo preventivo completo sin tick a 500Hz con programador de núcleo de CPU sintonizado.
-   RCU Boost para un mejor rendimiento de multitarea y menor latencia de tiempo de cuadros DRI.
-   Tuned Multi-Queue Block Layer w / Low-Latency BFQ I / O Scheduler
-   Mejoras de caché, Virtual Memory Manager y CPUFreq Governor.
-   BBR TCP Control de congestión + Algoritmo de gestión de colas CAKE.
-   ORC Unwinder para la implementación de Kernel Stack Traces
-   Conjunto de parches de terceros disponible: soporte ZSTD Kernel e Initrd, Clear Linux, PCIe ACS Override, BMQ Process Scheduler, Futex Proton fsync, Aufs, Ureadahead y GCC graysky's.
-   Compilación de kernel de Linux en tiempo real (PREEMPT_RT) disponible.
-   Paquete de kernel genérico para compatibilidad con la mayoría de las distribuciones basadas en Debian y Ubuntu. Construido sobre el último GCC 9.3 y Binutils 2.34.
-   Licencia GPLv2. Se puede construir para cualquier distribución o propósito.

## Instalacion

Nuevamente la instalacion se facilita con {{< textlink text="nuestro repositorio instalado" url="/repositorio/" >}}, dado que en el se encuentra el repositorio de lvtommy repository y lo podemos instalar asi:

    sudo apt install lvtommy-kernel-repository

Luego basta con actualizar e instalar el kernel de la siguiente forma:

    sudo apt update
    sudo apt install lvtommy-linux-kernel

Y nos instalara el mas actualizado y asi lo mantendra ante nuevas actualizaciones. En caso de querer una version en especifico basta con instalarla de la siguiente manera:

    sudo apt install linux-image-x.x.x-xanmodx && sudo apt install linux-headers-x.x.x-xanmodx

Donde las _x_ se cambian por la version del kernel que quieras

## Adicionales

En el repositorio tambien nos mantiene actualizados los microcode lo cual es util para el rendimiento y la seguridad, y asi podes instalarlos (si aun no los tienes) dependiendo tu modelo:

Intel

    sudo apt install intel-microcode iucode-tool

AMD

    sudo apt install amd64-microcode

Tambien es posible descargar su wallpaper oficial desde el siguiente {{< textlink text="link" url="https://dl.xanmod.org/artwork/" >}}

¿Lo usas?¿Lo probaste?¿Tenes dudas? Te esperamos en nuestro grupo de Telegram para debatir y hacer amistades nuevas!
