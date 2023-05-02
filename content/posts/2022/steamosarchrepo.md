---
title: 'Agregar Repositorio de SteamOS a Arch'
date: '2022-09-13 11:48:00.00'
description: 'Vamos a agregar los repositorios de SteamOS Holo a nuestra distro favorita de Arch Linux'
type: 'linux'
tags:
    [
        'steamos',
        'arch',
        'holo',
        'jupiter',
        'repositorio',
        'holoiso',
        'manjaro',
        'endeavour',
        'artix',
        'arcolinux',
        'archcraft',
    ]
category: ['Linux']
img: 'https://i.postimg.cc/L5qmGySj/steamenarch.png'
authors: ['PatoJAD']
---

Vamos a agregar los repositorios de SteamOS (Holo y jupiter) a nuestra distribución de Arch Linux favorita. Esto puede sernos útil para poder acceder a sus apps, configuraciones y personalizaciones.

-   {{< textlink text="Repositorio Jupiter" url="https://steamdeck-packages.steamos.cloud/archlinux-mirror/jupiter/os/x86_64/" >}}
-   {{< textlink text="Repositorio Holo" url="https://steamdeck-packages.steamos.cloud/archlinux-mirror/holo/os/x86_64/" >}}
-   {{< textlink text="Todos los Repositorios" url="https://steamdeck-packages.steamos.cloud/archlinux-mirror/" >}}
-   {{< textlink text="Ultimas ISO" url="https://steamdeck-packages.steamos.cloud/archlinux-mirror/iso/latest/" >}}

Antes que nada te dejo el link donde vas a poder ver los repositorios posibles y los paquetes que tiene cada uno de estos.

## Video

{{< youtube id="dY6ISmFUlTY" >}}

## Comandos

Lo primero que vamos a hacer es abrir nuestro `pacman.conf` para poder agregar los repositorios, esto lo hacemos desde la terminal y como administrador para poder guardar los cambios de la siguiente manera:

```bash
sudo nano /etc/pacman.conf
```

Luego agregamos las siguientes 2 líneas al final del archivo. En mi caso estaban comentadas pero tu debes agregarlas (se pega con ctrl+shift+v)

```cfg
[jupiter]
Server = https://steamdeck-packages.steamos.cloud/archlinux-mirror/$repo/os/$arch
SigLevel = Never

[holo]
Server = https://steamdeck-packages.steamos.cloud/archlinux-mirror/$repo/os/$arch
SigLevel = Never
```

Luego guardamos (ctrl+o y después enter) y cerramos, ya podemos actualizar para descargar la información de nuestros repositorios

```bash
sudo pacman -Syyu
```

Y ya podemos instalar desde los repositorios de SteamOS
