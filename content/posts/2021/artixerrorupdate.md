---
title: 'Solucion al erro de Update de Artix'
date: '2021-06-10 09:51:00.00'
description: 'Artix presenta problemas para actualizar y te contamos como arreglarlo'
type: 'linux'
tags:
    [
        'youtube',
        'video',
        'artix',
        'actualizar',
        'error',
        'update',
        'upgrade',
        'syu',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/3JHLQtNz/artix.png'
authors: ['PatoJAD']
---

En estos días Artix linux estuvo presentando problemas para actualizar, al intentar actualizar nos aparece un error al resolver dependencias de SysyemD. Sin embargo esta distro no trae SystemD por lo cual nunca podrían cumplirse. En esta ocasión vamos a ver como arreglar este error.

## Video

En este video podemos ver el paso a paso de como arreglar este error:

{{< youtube id="UtGfiw-Pgdk" >}}

con pacman:

```bash
sudo pacman -Syu elogind artix-archlinux-support
```

con yay:

```bash
yay -Syu elogind artix-archlinux-support
```
