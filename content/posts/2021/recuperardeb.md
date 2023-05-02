---
title: 'Obteniendo .deb de apps instaladas'
date: '2021-04-23 10:31:00.00'
description: 'Como recuperar un .deb de una app instalada'
type: 'linux'
tags:
    [
        'deb',
        'ubuntu',
        'debian',
        'recuperar',
        'dpkg-repack',
        'repack',
        'app',
        'instalada',
        'instalar',
        'paquete',
        'paquetes',
        'dpkg',
        'dpkg-repack',
        'repack',
        'linux',
    ]
category: ['Linux', 'Aplicaciones']
img: 'https://i.postimg.cc/SQBhsvNM/image.png'
authors: ['PatoJAD']
---

Es común que muchas veces encontremos en alguna distro una app que sea única de esta distro y nos gusta mucho. En esta oportunidad vamos a portear o a recuperar los instalados en las distribuciones basadas en Debian/Ubuntu.

## Instalando repack

Lo primero es instalar las dependencias o mejor dicho las app necesaria para poder rearmar los paquetes .deb para poder llevarlos a otras distros. Esto lo vamos a instalar de la siguiente manera:

```bash
sudo apt-get install dpkg-repack
```

## Usando Repack

Realmente es muy simple, repack nos permite generar .deb desde paquetes ya instalados, lo cual nos permite acceder a cualquier app instalada esté o no en el repositorio. Si se instaló con un deb podemos volver a generar el deb

```bash
sudo dpkg-repack nombre-de-la-app
```
