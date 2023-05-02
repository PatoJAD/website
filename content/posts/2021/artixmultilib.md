---
title: 'Activar Multilib Artix'
date: '2021-03-24 17:03:00'
description: 'En esta oportunidad volvemos con un tutorial orientado a Artix Linux o mejor dicho a Arch en general.'
type: 'linux'
tags:
    [
        'artix',
        'arch',
        'video',
        'multilib',
        'pacman',
        'wine',
        'steam',
        'paqueteria',
        'linux',
        '32bits',
        '64bits',
        '32',
        '64',
        'bits',
        'multilibs',
    ]
category: ['Linux']
img: 'https://ubunlog.com/wp-content/uploads/2019/12/flatpak-cover.png'
authors: ['PatoJAD']
---

En esta oportunidad volvemos con un tutorial orientado a Artix Linux o mejor dicho a Arch en general. Si bien puede que los usuarios más habituales esto lo tengan incorporado. Puede que los usuarios nuevos no lo sepan o ignoren esto por lo cual quería dejar un video conciso.

## El Video

Como estoy intentando actualizarse con los videos estoy intentando ser conciso y dar la información sin divagar mucho.

{{< youtube id="OusBLacPkPA" >}}

## Adicional

Les dejo los comandos que utilizo en el video y que es lo que hacen. Esto es util si no estas acostumbrado a escribir comandos en la terminal:

```bash
sudo pacman -Si multilib
```

Sirve para averiguar si se encuentra habilitado o no el repositorio.

```bash
sudo cat /etc/pacman.conf
```

Imprime en pantalla la configuración del archivo localizado en /etc/pacman.conf

```bash
sudo nano /etc/pacman.conf
```

Permite editar el archivo de configuracion
