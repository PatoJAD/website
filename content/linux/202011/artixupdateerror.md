---
title: "Pacman conflicto de Archivos al Actualizar"
date: "2020-11-03 08:40:00"
description: "En esta oportunidad vamos a ver como instalar yay en Artix linux"
type: "linux"
tags: ["arch", "update", "conflicto", "error", "artix", "linux", "archivos", "nss", "overwrite", "pacman"]
category: ["Linux"]
img: "https://1.bp.blogspot.com/-Dx2aFhPt15E/XpdfoGIB49I/AAAAAAAAJeo/gPrQbF9IOjEPK8jAYiO-_JeuEM6OZvg8ACPcBGAsYHg/s1600/Error%2Bal%2Bconfirmar%2Bla%2Btransacci%25C3%25B3n.png"
authors: ["PatoJAD"]
---

{{< br >}}

Dentro de todas las distribuciones basadas en Arch Linux siempre existe la posibilidad de tener errores al actualizar, mas que nada cuando se juntan muchas actualizaciones por periodos realmente largos. En estos casos las posibilidades de errores aumentan y es preciso buscar una solución.

{{< br >}}
{{< br >}}

## El caso de Artix Linux

{{< br >}}

Artix es una distribución muy buena de la que {{< textlink text="ya hablamos antes" url="/linux/2020/08/artix-linux/" >}}, incluso en el canal de youtube le dedique un saga, un poco corta, a la cual el dia de hoy sumo un video mas. Los sabores oficiales de artix, al dia de la fecha, tienen este problema de actualizaciones acumuladas, el cual da el error:

{{< br >}}

    error: no se pudo realizar la operación (archivos en conflicto)
    nss: /usr/lib/p11-kit-trust.so existe en el sistema de archivos

{{< br >}}

Este error puede pasarnos con cualquier librería o archivo y ahora vamos a darle una solución simple!

{{< br >}}
{{< br >}}

## Video

{{< br >}}

Claramente es mejor explicarlo y mostrarlo en vivo para entender qué funciona y como lo hace, por lo cual voy a dejar un video.

{{< br >}}
{{< youtube code="NFpfYXY12NI" >}}
{{< br >}}

Si te gusto no te olvides de apoyarme suscribiendote y dándole un “Me Gusta” ¡No cuesta nada pero vale mucho!

{{< br >}}
{{< br >}}

## Lo utilizado

{{< br >}}

Si bien como se aclara en el video podemos usar {{< textlink text="comodines" url="/linux/2020/09/manipulando-archivos-y-directorios/" >}}. En este caso vamos a dejar el comando específico y cada uno lo modifica de la forma que crea conveniente. El patrón a seguir es el siguiente:

{{< br >}}

    error: no se pudo realizar la operación (archivos en conflicto)
    nss: x existe en el sistema de archivos

{{< br >}}

Para el error que figura arriba el comando es:

{{< br >}}

    sudo pacman -Syu --overwrite x

{{< br >}}

**ATENCIÓN:** En mi caso uso -Syu porque estoy actualizando, pero lo mismo seria si estamos instalando un paquete

{{< br >}}

    sudo pacman -S nombreDelPaquete --overwrite x

{{< br >}}

Ahora les dejo el caso específico del video para que vean como seria esto implementado.

{{< br >}}

    error: no se pudo realizar la operación (archivos en conflicto)
    nss: /usr/lib/p11-kit-trust.so existe en el sistema de archivos

{{< br >}}

Y la solución (para la actualización) es:

{{< br >}}

    sudo pacman -Syu --overwrite /usr/lib/p11-kit-trust.so

{{< br >}}
{{< br >}}

---


{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
