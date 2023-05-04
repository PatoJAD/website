---
title: 'Instalar Chaotic AUR'
date: '2022-01-12 09:45:00.00'
description: 'Chaotic es un repositorio que busca traer los paquetes de AUR, o al menos los de mayor uso desde el punto de vista del creador, para administrarlos de forma simple con pacman.'
type: 'linux'
tags:
    [
        'arch',
        'aur',
        'artix',
        'endeavour',
        'manjaro',
        'pacman',
        'chaotic',
        'chaoticaur',
        'guia',
        'tutorial',
        'instalacion',
        'pacaur',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/6qZncTqL/chaoticaur.png'
authors: ['PatoJAD']
---

Chaotic es un repositorio que busca traer los paquetes de AUR, o al menos los de mayor uso desde el punto de vista del creador, para administrarlos de forma simple con pacman. Sin tener que instalar los AUR ni configurarlos y mucho menos usar los AURHelpers. Estos son algunos de los detalles a tener en cuenta sobre Chaotic:

{{< youtube id="vZr3rN4_ZDc" >}}

-   La mayoría de los paquetes disponibles en este repositorio se crean automáticamente a partir de su paquete fuente AUR respectivo. Sin embargo, hay algunas excepciones, consulte https://github.com/chaotic-aur/packages para averiguar cuáles.
-   El clúster de construcción principal es un nodo en el centro de datos de UFSCars que está alojado en San Carlos, San Paulo, Brazil.

## Comandos

En el video muestro como se realiza y que podemos ver el resultado dentro de nuestros repositorios en **pacman** por esto mismo voy a dejar a continuación los comandos.

Instalación o descarga de las Key del repositorio para chequear los paquetes:

```bash
pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com
pacman-key --lsign-key FBA220DFC880C036
```

Instalación de los paquetes con pacman (En el video los instalo por separado, sin embargo el comando de abajo los instala a los dos juntos)

```bash
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

Por último tenemos que agregar el repositorio en la configuración de pacman. Para esto debemos editarla con permisos de administrador, por ejemplo de la siguiente manera `sudo nano /etc/pacman.conf` y agregamos lo siguiente en la sección de repositorios:

```cfg
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

### Recomendaciones

Las siguientes recomendaciones son propias de los desarrolladores de **ChaoticAUR** con alguna que otra modificación:

-   Si sos usuario de powerpill y queres usarlo para realizar todas las descargas desde todos los mirrors se recomienda realizar la actualización de la siguiente manera:
    ```bash
    sudo pacman -Sy && sudo powerpill -Su && paru -Su
    ```
    Asegúrese de insertar todos los espejos en su pacman.conf o use caotic-mirrorlist con todos ellos activos si usa powerpill.
-   Si está utilizando otros repositorios de terceros, le recomendamos que coloque Chaotic-AUR antes que ellos en `/etc/pacman.conf`. Dado que actualizamos la mayoría de los paquetes cada hora y seguimos los `PKGBUILD` de **AUR**, este repositorio es más adecuado como primera opción al descargar paquetes.
-   Si necesita omitir la actualización de un paquete para usar las creadas localmente (por ejemplo, con optimizaciones nativas), puede agregar `'IgnorePkg = ...'` a la sección del repositorio en `/etc/pacman.conf`
-   Puede elegir el repositorio desde el que descargar un paquete de esta manera: `pacman -S chaotic-aur/dxvk-mingw-git`. Algunos ayudantes de AUR también lo admiten, por ejemplo: `paru -S aur/firefox-hg`

{{< warning text="Debe tener habilitado el repositorio multilib." >}}
