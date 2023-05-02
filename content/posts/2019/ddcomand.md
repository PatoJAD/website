---
title: 'Como usar dd'
date: '2019-03-08'
description: 'Muchas nos preguntamos cuál es la mejor APP para armar nuestros USB booteables...'
type: 'linux'
tags:
    [
        'dd',
        'terminal',
        'linux',
        'usb',
        'booteable',
        'boot',
        'bootable',
        'usb booteable',
        'usb bootable',
    ]
category: ['Linux', 'Aplicaciones']
img: 'data:image/png;base64,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'
authors: ['PatoJAD']
---

Muchas nos preguntamos cuál es la mejor APP para armar nuestros USB booteables... En los grupos encontramos muchas respuestas diferentes y cada uno con su fanatismo.

La realidad de esto es que puede fallar en cualquier momento no existe una app perfecta ni siquiera lo preferida (etcher) que es a mí parecer la que mejor funciona se salva de algún que otro error

### Entonces... ¿Que usamos?

La respuesta corta a esta pregunta es "cualquiera" y la larga "cualquiera que te guste" sin embargo hoy vamos a explicar cuál debemos usar cuando nuestra app preferida falla. Imagino que muchos ya se imaginan que estamos hablando de la terminal y el famoso comando “dd”

Para usarlo basicamebte debemos hacer

```zsh
sudo dd if=origen of=destino
```

Donde if significa input file (archivo de entrada), es decir, lo que se quiere copiar (iso, cd, etc..) y of significa output file (archivo de salida), o sea, el archivo destino (donde se van a copiar los datos).
Tanto el origen como destino pueden ser dispositivos (lectora de CD o DVD, disco duro, diskettera, pendrive, partición, etc.), archivo de copia de seguridad o imagen de disco, etc, pero no carpetas o subcarpetas.

Uno de los principales problemas a la hora de usar dd es que no comprendemos bien nuestros discos (/dev/sda1, sdb1, etc…) y es importante comprender bien que disco estamos señalando (más que nada en of donde vamos a estar escribiendo los datos), para asegurarnos correctamente cuales son los discos que vamos a usar podemos simplemente utilizar cualquier gestor de particiones grafico (por ejemplo, gparted) o el comando

```zsh
fdisk –l
```

El único “problema” de este comando básico es que no deja una incertidumbre de cuanto falta, cómo va el proceso y demás… Recordemos que no nos da un feedback de lo que está pasando mientras se está grabando.

Esto se puede solucionar con un pequeño cambio en el comando original que nos mostrara como va ocurriendo todo:

```zsh
sudo dd if=origen |pv|dd of=destino
```

Como resultado obtendríamos en el terminal una especie de barra de progreso, la información sobre bytes transferidos, el tiempo que lleva ejecutándose y la tasa de transferencia, todo esto en tiempo real.

```zsh
( alf ) - ( ~ )
└──┤ dd if=/devmmcblk0p1 |pv|dd of=/dev/mmcblk0p2
1,630GB 0:21:30 [1,12MB/s] [
```

Además al terminar nos muestra estadísticas de la tasa de transferencia, el total de bytes transferidos y el tiempo total que tardó en transferir todos los datos.

```zsh
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
```

-   Comprobar antes de ejecutar cualquier linea de comandos con esta segunda sintaxis, que tenemos instalado en el sistema el paquete pv, o instalarlo si no lo tuviéramos: ambas cosas con Synaptic.

Si necesitas mas informacion sobre este comando podemos usar {{< textlink url="/post/2019/01/man-tu-manual-para-linux/" text="MAN siguiendo nuestro tuto" >}}

Fuente: desdelinux
