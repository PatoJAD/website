---
title: 'Mejorar el Rendimiento de tu CPU'
date: '2020-09-17 08:50:00'
description: 'Vamos a ver como mejorar el rendimiento de tu CPU con un ejemplo de Intel de AMD'
type: 'post'
tags:
    [
        'amd',
        'linux',
        'cpu',
        'kernel',
        'xenmod',
        'intel',
        'microcode',
        'performance',
    ]
categories: ['Linux']
img: 'https://hardzone.es/app/uploads-hardzone.es/2020/06/CPU.jpg'
authors: ['PatoJAD']
---

Ya con anterioridad hablamos de mejorar la performance de nuestra placa de video, algunos usuarios notaron más los cambios que otros, y en base a eso decidí terminar la segunda parte. Ya mejoramos el GPU (aunque sea integrado) Ahora nos toca el CPU. Al igual que el GPU lo ideal es eliminar lo que no sirve para optimizar todo tipos de llamada pero en este caso algunas distros pueden complicarnos más que otras.

## Posibles problemas

{{< img src="https://www.sololinux.es/wp-content/uploads/2017/08/kernel-panic-sololinux-es-2.png" >}}

Si usas Ubuntu o Debian suelen traer un kernel que se llama “generic” este kernel busca simplificar la vida de los teniendo como dependencias todos los controladores para evitar errores, sin embargo si pretendemos quedarnos con este kernel no vamos a poder seguir, en contraposición otras distros como arch y demás no suelen tener este problemas pero siempre existen kernels alternativos (zen, liquorix, etc).

## Cambiando el kernel

{{< img src="https://xanmod.org/index_files/xanmod_wallpaper.png" >}}

En mi caso de Debian o Ubuntu voy a recomendar Xanmod que si bien hay un [tutorial de como instalarlo](/post/2020/09/mejorar-el-rendimiento-de-tu-placa-de-video/) quiero aprovechar esta oportunidad para mejorar ese tutorial.

    echo 'deb http://deb.xanmod.org releases main' | sudo tee /etc/apt/sources.list.d/xanmod-kernel.list && wget -qO - https://dl.xanmod.org/gpg.key | sudo apt-key add -

Con este comando vamos agregar el **repositorio oficial** de Xanmod a nuestra distro (recordemos que es siempre en bases Debian o Ubuntu) y además de esto agregamos las llaves para poder instalar el contenido de este repositorio. Luego de esto procedemos a actualizar y a instalar el kerner **Xenmod** de la siguiente forma:

    sudo apt update && sudo apt install linux-xanmod

Tiene diferentes variables donde podemos elegir el tipo de kernel que queremos instalar entre las cuales podemos ver:

-   **linux-xanmod** Versión completa del kernel funcional
-   **linux-xanmod-edge** Versión completa adelantada (puede generar algún error)
-   **linux-xanmod-lts** Versión de soporte a largo plazo
-   **linux-xanmod-rt** Versión RealTime (orientado a multimedia)
-   **linux-xanmod-edge-rt** Versión RealTime adelantada (orientado a multimedia puede generar errores)

Una vez que tengamos instalado el kernel basta con reiniciar para poder iniciar el sistema con el nuevo kernel. Yo luego de reiniciar eliminar los kernels viejos (si comprobé que todo funciona ok) Pero son manías mías.

## Mejorando la performance del CPU

Bien, ahora lo que vamos a hacer es eliminar el controlador que no utilicemos para mejorar la performance de las llamadas como dije antes. Cuando hagamos esto **puede eliminar el kernel anterior** si no lo hicimos nosotros, en caso de que el kernel funcione ok podemos proseguir.

En caso de tener un **Intel** debemos ejecutar:

    sudo apt remove amd64-microcode

En caso de tener un procesador de **AMD** debemos ejecutar:

    sudo apt remove intel-microcode
