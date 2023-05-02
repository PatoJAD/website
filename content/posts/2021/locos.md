---
title: 'LocOS, la nueva distro ligera'
date: '2021-05-05 08:01:00.00'
description: 'LocOS la distro para equipos modestos y de bajo recursos'
type: 'linux'
tags: ['locos', 'linux', 'debian', 'antix', 'ubuntu', 'ligera']
category: ['Linux']
img: 'https://i.postimg.cc/XvR0S9B1/image.png'
authors: ['PatoJAD']
---

Loc-OS Linux es una distribución de Gnu/Linux creada por un Urugayo que vive en Brasil. Esta distribución tiene el propósito de ser una distro ligera y completa al mismo tiempo, pudiendo así resucitar equipos muy viejos. Existe una versión de 32 bits, especial para equipos con hasta 1GB de RAM y también hay otra versión de 64 bis, especial para maquinas con 2GB de RAM o más. Mucha gente aún conserva algún PC de muy bajos recursos y con Loc-Os Linux podrás darle otra oportunidad antes de que se convierta en basura electrónica. .

{{< youtube id="TwO2rAnXBD8" >}}

Loc-OS no es una disto "Linux from scratch", sino que es una modificación (respin) de Antix 19.3. Antix está basado en Debian, con lo cual Loc-OS en el fondo es un Debian 10 Buster completo y funcional pero sin systemd.

## ¿Debo usar Loc-OS o Antix?

Muchos usuarios declinarian por usar directamente Antix, sin embargo el proyecto tiene una respuesta para todos aquellos que se hagan esta pregunta.

> Antix está muy bien, pero Loc-OS Linux se podría decir que es una versión mejorada, ya que Antix no posee ningún escritorio, solamente 3 gestores de ventanas (que Loc-OS no los tiene), los cuales son ICEwm (como principal), JWM y Fluxbox. Loc-OS en cambio trae (únicamente) LXDE, el cual es un escritorio completo y ligero. Muy fácil de usar. Ademas no hay programas innecesarios. En esta distro solo encontrarás el software básico para cualquier PC (programas de oficina, calculadora, editor de textos, reproductor de video y audio, navegador web y en la versión de 64 bits, también trae Wine, Steam y Stremio, etc). Además si probaste Antix y tuviste problemas al conectarte a internet vía Wi-Fi, en esta distro es probable que no tengas ese problema, ya que cuenta con drivers adicionales de red.

## Características

Loc-OS Linux de 32 bits, usa el kernel 4.9 LTS que va muy bien en hardware antiguo y promete iniciar el sistema completo consumiendo aproximadamente 185Mb de RAM. En cambio la versión de 64 bits usa el kernel linux 5.10, que es el kernel LTS más reciente hasta la fecha.

{{< img src="https://i.postimg.cc/XvR0S9B1/image.png" >}}

Incluye una simple pero potente tienda de software, también el gestor de paquetes synaptic y Gdebi para poder instalar paquetes .deb de forma sencilla. Únicamente en la versión de 64 bits incluye soporte a flatpack junto a una bonita tienda de software.

{{< link url="http://locoslinux.tonohost.com/descargas.html" text="Descarga">}}
