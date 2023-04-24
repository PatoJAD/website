---
title: 'Error Boost.Python en el proceso Bootloader - Huayra'
date: '2023-03-20 08:47:00.00'
description: 'Vamos a ver como solucionar el error Boost.Python en el proceso Bootloader en huayra durante la instlacion'
type: 'linux'
tags:
    [
        'huayra',
        'error',
        'install',
        'instalacion',
        'grub',
        'uefi',
        'efi',
        'bootloader',
        'boost',
        'python',
        'boost.python',
        'command',
        'grub-install',
        'non-zero',
        'exit status 127',
        '/usr/sbin/chroot',
        'chroot',
        'no such file or directory',
    ]
category: ['Linux']
img: 'https://i.postimg.cc/gjKRR12p/photo-2023-03-17-14-17-29.jpg'
authors: ['PatoJAD']
---

Desde que arme el video de de la review de **Huayra** y su instalación (el cual pueden ver acá abajo) muchos comentarios me llegaban con **problemas de instalación**, y el último fue la semana pasada de la mano de un miembro de la comunidad llamado **Nicolas Ojeda** (al que le mando un fuerte saludo) con el cual indagando un rato (como otras veces en la comunidad) llegamos a la clara solución y la idea es dejar documentada esta solución para personas que tengan el mismo error con esta, o cualquier otra, distribución.

{{< youtube code="t-Mx2ZaPTP4" >}}

## El error

Básicamente el error ocurre durante el proceso de instalación, a la hora de instalar el grub obtenemos un cartel como el siguiente:

{{< img src="https://i.postimg.cc/gjKRR12p/photo-2023-03-17-14-17-29.jpg" >}}

Donde nos informa que hay un error a la hora de instalar el **bootloader**.Esto deja el sistema inutilizable pero ya realizó el formateo de las particiones de los discos, por lo cual si es nuestra única máquina nos complica muchísimo.

## La solución

{{< img src="https://uploads-ssl.webflow.com/636ab6ba0e1bd250e3aaedaf/63905e57364473528de52e1a_Etcher_steps.gif" >}}

Para poder solucionar este error de bootloader lo único que debemos hacer es utilizar otra aplicación para bootear el USB, en estos casos se usaba **unetbootin** o **rufus** pero generan este error. En la experiencia que generamos con este error sabemos que balena **etcher** es la mejor app para generar booteables para **Huayra Linux**. Tenemos la suerte de que esta app es multiplataforma.

{{< link url="https://www.balena.io/etcher" text="Sitio de Etcher" >}}

Espero que esto te haya servido y no te olvides de contar tu experiencia y por supuesto de unirte al foro y al grupo de telegram!

{{< link url="https://www.balena.io/etcher" text="Responder en el Foro" >}}
