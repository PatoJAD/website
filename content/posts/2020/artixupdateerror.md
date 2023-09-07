---
title: 'Pacman conflicto de Archivos al Actualizar'
date: '2020-11-03 08:40:00'
description: 'En esta oportunidad vamos a ver como instalar yay en Artix linux'
type: 'post'
tags:
    [
        'arch',
        'update',
        'conflicto',
        'error',
        'artix',
        'linux',
        'archivos',
        'nss',
        'overwrite',
        'pacman',
    ]
categories: ['Linux']
img: 'https://1.bp.blogspot.com/-Dx2aFhPt15E/XpdfoGIB49I/AAAAAAAAJeo/gPrQbF9IOjEPK8jAYiO-_JeuEM6OZvg8ACPcBGAsYHg/s1600/Error%2Bal%2Bconfirmar%2Bla%2Btransacci%25C3%25B3n.png'
authors: ['PatoJAD']
---

Dentro de todas las distribuciones basadas en Arch Linux siempre existe la posibilidad de tener errores al actualizar, mas que nada cuando se juntan muchas actualizaciones por periodos realmente largos. En estos casos las posibilidades de errores aumentan y es preciso buscar una solución.

## El caso de Artix Linux

Artix es una distribución muy buena de la que [ya hablamos antes](/post/2020/08/artix-linux/), incluso en el canal de youtube le dedique un saga, un poco corta, a la cual el dia de hoy sumo un video mas. Los sabores oficiales de artix, al dia de la fecha, tienen este problema de actualizaciones acumuladas, el cual da el error:

```bash
error: no se pudo realizar la operación (archivos en conflicto)
nss: /usr/lib/p11-kit-trust.so existe en el sistema de archivos
```

Este error puede pasarnos con cualquier librería o archivo y ahora vamos a darle una solución simple!

## Video

Claramente es mejor explicarlo y mostrarlo en vivo para entender qué funciona y como lo hace, por lo cual voy a dejar un video.

{{< youtube id="NFpfYXY12NI" >}}

Si te gusto no te olvides de apoyarme suscribiendote y dándole un “Me Gusta” ¡No cuesta nada pero vale mucho!

## Lo utilizado

Si bien como se aclara en el video podemos usar [comodines](/post/2020/09/manipulando-archivos-y-directorios/). En este caso vamos a dejar el comando específico y cada uno lo modifica de la forma que crea conveniente. El patrón a seguir es el siguiente:

```bash
error: no se pudo realizar la operación (archivos en conflicto)
nss: x existe en el sistema de archivos
```

Para el error que figura arriba el comando es:

```zsh
sudo pacman -Syu --overwrite x
```

{{< warning text="**ATENCIÓN:** En mi caso uso -Syu porque estoy actualizando, pero lo mismo seria si estamos instalando un paquete" >}}

```zsh
sudo pacman -S nombreDelPaquete --overwrite x
```

Ahora les dejo el caso específico del video para que vean como seria esto implementado.

```bash
error: no se pudo realizar la operación (archivos en conflicto)
nss: /usr/lib/p11-kit-trust.so existe en el sistema de archivos
```

Y la solución (para la actualización) es:

```zsh
    sudo pacman -Syu --overwrite /usr/lib/p11-kit-trust.so
```
