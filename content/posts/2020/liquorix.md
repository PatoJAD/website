---
title: 'Liquorix ¿Que es? ¿Como lo instalo?'
date: '2020-01-28 08:28:00'
description: 'Liquorix es un reemplazo de kernel de distribución creado con la mejor configuración y fuentes de kernel para cargas de trabajo de escritorio, multimedia y juegos.'
type: 'post'
tags: ['kernel', 'linux', 'liquorix', 'debian', 'deepin', 'ubuntu']
categories: ['Linux']
img: 'https://i.postimg.cc/pdrfNJpP/Deepin-Screenshot-20200128083827.png'
authors: ['PatoJAD']
---

Liquorixes un Kernel que se encuentra modificado (a nivel configuraciones) que nos permite obtener un mejor rendimiento de nuestra dristribucion, suele tener como costo un pequeño aumento en el consumo de energia (en equipos desktops o conectados a la corriente no nos daremos cuenta de esto) que puede afectar a los equipos que dispongan de poca autonomia.

## CARACTERÍSTICAS PRINCIPALES

-   Sintoniza el kernel para la capacidad de respuesta a costa del rendimiento y el uso de energía.

    ```log
    --- Virtual Memory Subsystem ---------------------------

    Mem dirty before bg writeback..:  10 %  ->  20 %
    Mem dirty before sync writeback:  20 %  ->  50 %

    --- Block Layer ----------------------------------------

    Block Layer Queue Depth........: 128    -> 512
    Default MQ scheduler......: mq-deadline -> bfq

    --- CPU Scheduler (CFS) --------------------------------

    Scheduling latency.............:   6    ->   3    ms
    Minimal granularity............:   0.75 ->   0.3  ms
    Wakeup granularity.............:   1    ->   0.5  ms
    CPU migration cost.............:   0.5  ->   0.25 ms
    Bandwidth slice size...........:   5    ->   3    ms

    --- CPU Scheduler (MuQSS) ------------------------------

    Scheduling interval............:   6    ->   2    ms
    ISO task max realtime use......:  70 %  ->  25 %
    ```
-   Programador de proceso justo para juegos, multimedia y cargas en tiempo real.
-   Tiempos de espera de alta resolución para la programación precisa de tareas de baja fluctuación. IRQs y RCU roscados para reducir la fluctuación de fase causada por tics periódicos a 250Hz.
-   Implementación de RCU para sistemas en tiempo real.
-   La preferencia de kernel más agresiva antes de requerir parches en tiempo real. Garantiza un sistema receptivo en escenarios de carga de trabajo mixta de alta intensidad.
-   Programador de disco adecuado optimizado para uso de escritorio, alto rendimiento/baja latencia.
-   Control de congestión rápido, maximiza el rendimiento, garantizando velocidades más altas que Cubic.
-   Las compilaciones binarias se producen para Debian estable, de prueba e inestable. Las compilaciones de Ubuntu están disponibles en el PPA Liquorix el mismo día a las pocas horas de que se publiquen las versiones de Debian.
-   Configuración de estilo de distribución adecuada que admite la selección más amplia de hardware. Opciones de paravirtualización habilitadas para reducir la sobrecarga en la virtualización.
-   Número mínimo de opciones de depuración habilitadas para aumentar el rendimiento del kernel.

## Instalacion

En esta oportunidad me encuentro usando Deepin como distro base en mi ambito laboral, por lo cual decidi instalarle Liquorix como kernel, para esto mismo genero el tutorial con el proceso de instalacion.

Lo primero que debemos hacer es agregar los repositorios de Liquorix a nuestra distro, para eso vamos a usar lo siguiente

### Debian

```bash
codename="$(find /etc/apt -type f -name '*.list' | xargs grep -E '^deb' | awk '{print $3}' | grep -Eo '^[a-z]+' | sort | uniq -c | sort -n | tail -n1 | grep -Eo '[a-z]+$')" && sudo apt-get update && sudo apt-get install apt-transport-https && echo -e "deb http://liquorix.net/debian $codename main\ndeb-src http://liquorix.net/debian $codename main\n\n# Mirrors:\n#\n# Unit193 - France\n# deb http://mirror.unit193.net/liquorix $codename main\n# deb-src http://mirror.unit193.net/liquorix $codename main" | sudo tee /etc/apt/sources.list.d/liquorix.list && curl https://liquorix.net/linux-liquorix.pub | sudo apt-key add - && sudo apt-get update
```

### Deepin

```bash
codename="stable" && sudo apt-get update && sudo apt-get install apt-transport-https && echo -e "deb http://liquorix.net/debian $codename main\ndeb-src http://liquorix.net/debian $codename main\n\n# Mirrors:\n#\n# Unit193 - France\n# deb http://mirror.unit193.net/liquorix $codename main\n# deb-src http://mirror.unit193.net/liquorix $codename main" | sudo tee /etc/apt/sources.list.d/liquorix.list && curl https://liquorix.net/linux-liquorix.pub | sudo apt-key add - && sudo apt-get update
```

### Ubuntu

```bash
sudo add-apt-repository ppa:damentz/liquorix && sudo apt-get update
```

Una ves que los agregamos y nos aseguramos de tener la distribucion correctamente actualizada procedemos a instalar esta version del kernel
(Les recomiendo guardar bien el nombre de los binarios por si hay errores poder volverlo atras con facilidad desde las opciones avanzadas)

### Debian, Deepin y Ubuntu

```bash
sudo apt-get install linux-image-liquorix-amd64 linux-headers-liquorix-amd64
```

Una ves instalado correctamente solo reiniciamos y ya tenemos el nuevo kernel funcionando
