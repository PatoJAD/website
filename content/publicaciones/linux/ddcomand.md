---
title: "Como usar dd"
date: "2019-03-08"
description: "Muchas nos preguntamos cuál es la mejor APP para armar nuestros USB booteables..."
type: "linux"
tags: ["dd","terminal","linux"]
category: ["Linux"]
img:  "https://cloud.addictivetips.com/wp-content/uploads/2018/03/dd-e1520370085938.png"
authors: ["PatoJAD"]
---

Muchas nos preguntamos cuál es la mejor APP para armar nuestros USB booteables... En los grupos encontramos muchas respuestas diferentes y cada uno con su fanatismo.

La realidad de esto es que puede fallar en cualquier momento no existe una app perfecta ni siquiera lo preferida (etcher) que es a mí parecer la que mejor funciona se salva de algún que otro error

### Entonces... ¿Que usamos?

La respuesta corta a esta pregunta es "cualquiera" y la larga "cualquiera que te guste" sin embargo hoy vamos a explicar cuál debemos usar cuando nuestra app preferida falla. Imagino que muchos ya se imaginan que estamos hablando de la terminal y el famoso comando “dd”

Para usarlo basicamebte debemos hacer

    sudo dd if=origen of=destino

Donde if significa input file (archivo de entrada), es decir, lo que se quiere copiar (iso, cd, etc..) y of significa output file (archivo de salida), o sea, el archivo destino (donde se van a copiar los datos).
Tanto el origen como destino pueden ser dispositivos (lectora de CD o DVD, disco duro, diskettera, pendrive, partición, etc.), archivo de copia de seguridad o imagen de disco, etc, pero no carpetas o subcarpetas.

Uno de los principales problemas a la hora de usar dd es que no comprendemos bien nuestros discos (/dev/sda1, sdb1, etc…) y es importante comprender bien que disco estamos señalando (más que nada en of donde vamos a estar escribiendo los datos), para asegurarnos correctamente cuales son los discos que vamos a usar podemos simplemente utilizar cualquier gestor de particiones grafico (por ejemplo, gparted) o el comando

    fdisk –l

El único “problema” de este comando básico es que no deja una incertidumbre de cuanto falta, cómo va el proceso y demás… Recordemos que no nos da un feedback de lo que está pasando mientras se está grabando.

Esto se puede solucionar con un pequeño cambio en el comando original que nos mostrara como va ocurriendo todo:

    sudo dd if=origen |pv|dd of=destino

Como resultado obtendríamos en el terminal una especie de barra de progreso, la información sobre bytes transferidos, el tiempo que lleva ejecutándose y la tasa de transferencia, todo esto en tiempo real.

    ( alf ) - ( ~ )
    └──┤ dd if=/devmmcblk0p1 |pv|dd of=/dev/mmcblk0p2
    1,630GB 0:21:30 [1,12MB/s] [

Además al terminar nos muestra estadísticas de la tasa de transferencia, el total de bytes transferidos y el tiempo total que tardó en transferir todos los datos.

    ( alf ) - ( ~ )
    └──┤ dd if=/devmmcblk0p1 |pv|dd of=/dev/mmcblk0p2
    10530816+0 registros leídos <=>
    10530816+0 registros escritos
    5391777792 bytes (5.4 GB) copiados, 3873,48 s, 1,4 MB/s
    5,02GB 1:04:33 [1,33MB/s] [ <=>
    10530816+0 registros leídos <=>
    10530816+0 registros escritos
    5391777792 bytes (5.4 GB) copiados, 3873,48 s, 1,4 MB/s
    ( alf ) - ( ~ )
    └──┤

 * Comprobar antes de ejecutar cualquier linea de comandos con esta segunda sintaxis, que tenemos instalado en el sistema el paquete pv, o instalarlo si no lo tuviéramos: ambas cosas con Synaptic.

Si necesitas mas informacion sobre este comando podemos usar {{< textlink url="https://patojad.gitlab.io/publicaciones/linux/man/" text="MAN siguiendo nuestro tuto" >}}

Fuente: desdelinux
