---
title: "Instalar el Zen Kernel"
date: "2021-05-27 09:18:00.00"
description: "Vamos a cambiar el kernel para mejorar el rendimiento en videojuegos"
type: "linux"
tags: ["artix","kernel","zen","arch","endeavour","manjaro"]
category: ["Linux"]
img: "https://i.postimg.cc/gkd80yH4/image.png"
authors: ["PatoJAD"]
---

Dentro del mundo de **GNU/Linux** existe muchísimo software libre incluso **Linux** el kernel de este sistema, y al ser libre cualquiera puede compilarlo y configurarlo como quiera, incluso publicarlo. En esta oportunidad vamos a ver cómo instalar un kernel modificado por la comunidad para mejorar el rendimiento bajo demanda, es un kernel muy bueno para quienes les gusta jugar, entre otras cosas.

{{< img src="https://i.postimg.cc/gkd80yH4/image.png" >}}

## Sobre Zen

Zen es el kernel conocido como Liquorix compilado para Arch y este kernel presenta muchísimas mejoras entre las que podemos ver:

> Liquorix es un reemplazo del kernel de distribución creado con la mejor configuración y fuentes de kernel para cargas de trabajo de escritorio, multimedia y juegos.

* **Zen Interactive Tuning:** ajusta el kernel para mejorar la capacidad de respuesta a costa del rendimiento y el uso de energía.

```
--- Virtual Memory Subsystem ---------------------------

Mem dirty before bg writeback..:  10 %  ->  20 %
Mem dirty before sync writeback:  20 %  ->  50 %

--- Block Layer ----------------------------------------

Default MQ scheduler......: mq-deadline -> bfq

--- CPU Scheduler (CFS) --------------------------------

Scheduling latency.............:   6    ->   3    ms
Minimal granularity............:   0.75 ->   0.3  ms
Wakeup granularity.............:   1    ->   0.5  ms
CPU migration cost.............:   0.5  ->   0.25 ms
Bandwidth slice size...........:   5    ->   3    ms

--- CPU Scheduler (MuQSS) ------------------------------

Scheduling interval............:   6    ->   4    ms
ISO task max realtime use......:  70 %  ->  25 %
```

* **Programador de procesos MuQSS:** programador de procesos justo para juegos, multimedia y cargas en tiempo real.
* **Programación de alta resolución:** tiempos de espera de alta resolución y frecuencia de tick de 1000 Hz para una programación precisa de tareas con baja fluctuación.
* **RCU jerárquica basada en árboles no garantizada:** implementación de RCU para sistemas en tiempo real.
* **Prevención de kernel duro:** Prevención de kernel más agresiva antes de requerir parches en tiempo real. Garantiza un sistema receptivo en escenarios de cargas de trabajo mixtas de alta intensidad.
* **Budget Fair Queue:** programador de disco adecuado optimizado para el uso de escritorio, alto rendimiento / baja latencia.
* **Control de congestión TCP BBR2:** Control de congestión rápido, maximiza el rendimiento, garantizando velocidades más altas que Cubic.
* **Reemplazo directo del núcleo de distribución:** configuración de estilo de distribución adecuada que admite la selección más amplia de hardware. Opciones de paravirtualización habilitadas para reducir la sobrecarga bajo virtualización.
* **Depuración mínima:** número mínimo de opciones de depuración habilitadas para aumentar el rendimiento del kernel.

## Instalación

{{< youtube code="OLiOcArU5fM" >}}

Primero debemos instalar el kernel, esto lo podemos hacer con pacman o con yay de la siguiente manera:

```
yay -S linux-zen linux-zen-header
```

```
sudo pacman -S linux-zen linux-zen-header
```

Si venís de distribuciones basadas en Debian ya intentaste reiniciar, pero como se demuestra en el video no funciona asi, por lo cual es necesario actualizar el GRUB.

```
sudo update-grub
```
