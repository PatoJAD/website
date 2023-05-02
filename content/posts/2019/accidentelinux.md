---
title: 'Linux, Un feliz Accidente'
date: '2019-12-06'
description: 'Quien diría que nuestro amado GNU/Linux nace de la mano de un terrible accidente que todo programador odiaría...'
type: 'linux'
tags:
    [
        'historia',
        'linux',
        'linus',
        'torvalds',
        'unix',
        'minix',
        'kernel',
        'gnu',
        'gnu/linux',
    ]
category: ['Linux']
img: 'https://diarioti.com/wp-content/uploads/2012/12/32304a_torvalds-aalto-4601.jpg'
authors: ['PatoJAD']
---

Estos días navegando por reddit me encontré con una publicación que me llamo la atención abismalmente. Creo que puede llegar a ser realmente para todos los linuxnautas y por eso me sentí en la obligación de compartirla.

La publicación original es de Agustl y pueden encontrarla en su propio blog el cual recomiendo visitar. ¡También antes de leer esto les quiero comentar que la “traducción” que realice no es literal y pueden encontrar diferencias!

## Cómo Linus Torvalds creó accidentalmente Linux

Rondando 1990 Linus Torvalds era un “infeliz” usuario de Minix. (Minix era un sistema operativo creado post Unix v7 para poder seguir enseñando sistemas operativos con una estructura similar a Unix. Recordemos que a partir de Unix v7 se prohibió su uso para la educación)

Después de poseer algunas computadoras “interesantes” (una VIC-20 y una Sinclair QL) Linux decidio ahorra para comprar una PC compatible con IBM, la cual traía, por supuesto, una versión de DOS, la cual Linus remplazo inmediatamente por su querido Minix.

> Por "inmediatamente", me refiero a "pasé la mayor parte de una semana instalándolo".

{{< img src="https://i.pinimg.com/originals/51/7d/21/517d2182f230d4f686c85507b45c2d26.jpg" >}}

Minix era un sistema operativo bastante popular, y gratuito. Lo cual es un combo realmente irresistible para un estudiante universitario que no tiene mucho dinero (Aquí me siento muy identificado). Linus había pedido por adelantado Minix y tardo un mes en llegarle los 16 disquets que contenían el sistema, los parches y los manuales. (Imaginen por un momento 16 la dimensión de eso, en esa época, claramente a mí me llevaría tal vez más de una semana instalarlo y configurarlo correctamente. Es incluso más difícil que hoy en día compilar un Linux con LFS)

Podemos decir que Linus era un hombre Feliz con Minix, pero sentía que algunas cosas le faltaban. Claramente como es Linus escribió lo suyo…

## El inicio del accidente

Su proyecto principal era un emulador de terminal, uno que pudiera usar en las maquinas de la universidad para que se conectaran entre si. Queria aprender sobre las entradas y salidas de su PC IBM, por lo cual decidio que su terminal trabajaba al nivel del Hardware, sin sistema operativo.
Este emulador fue el inicio de Linux…

## Un paso mas

Luego escribió un controlador de disco para poder guardar todo el trabajo que realizaba mientras no se encontraba en Minix. Hasta que finalmente su emulador de terminar pudo lanzar BASH (Me sorprende que BASH sea tan viejo). A esto Linux lo llamo su “gnu-emacs de programas de emulador de terminal”

> "gnu-emacs of terminal emulation programs"

(en ingles suena mas bonito)

## Otoño 1991 la caída

Linus considera dejar de lado su emulador de terminal. Estaba razonablemente feliz con este y hacia lo que necesitaba que haga, básicamente se aburrió de su proyecto, es común que a los desarrolladores nos aburran nuestros proyectos personales, más cuando creemos que son chicos, que poco es lo que podemos hacer por este proyecto.

Vale aclarar (fuera de post) que esto hace que grandes proyectos no vean la luz, los desarrolladores solemos perder algo de fe en nuestros proyectos y las comunidades no suelen ser muy cálidas (cuando las hay)

## El Accidente (Oportuncrisis)

{{< img src="https://k60.kn3.net/taringa/2/7/6/5/8/6/43/tinchocarajero/CE2.jpg" >}}

Entonces un triste dia, Linus **elimino accidentalmente su partición de Minix**. En ese momento si bien Linux estaba naciendo el seguía utilizando Minix como entorno de desarrollo. Linux, en ese momento solo “servía” para leer emails y noticias desde el emulador de terminal. Luego del error (Que describe en la cita que esta abajo) Fue un punto de quiebre para la decisión que debería tomar, o tomar toda una semana nuevamente reinstalando Minix o retomar Linux reconociendo que era suficientemente bueno como para poder remplazar Minix. Desde ese momento escribió los programas para compilar Linux. Y cada vez que extrañaba algo de Minix solo lo agregaba a Linux.

De esta forma, y con un accidente Linux tuvo la oportunidad de nacer, ver la luz y ser uno de los grandes sistemas operativos de hoy en día.

En las propias palabras de Linus:

> Back then, I was booting into Linux but used Minix as the main development environment. Most of what I was doing under Linux was reading email and news from the university’s computer via the terminal emulator I had written. The university computer was constantly busy, so I had written a program that auto-dialed into it. But in December, I mistakenly auto-dialed my hard disk instead of my modem. I was trying to auto-dial /dev/tty1 [...]. But by mistake I auto-dialed /dev/hda1, which is the hard disk device. The end result was that I inadvertently overwrote some of the most critical parts of the partition where I had Minix. Yes, that meant I couldn’t boot Minix anymore.
>
> That was the point where I had a decision to make: I could reinstall Minix, or I could bite the bullet and acknowledge that Linux was good enough that I didn’t need Minix. I would write the programs to compile Linux, under itself, and whenever I felt I needed Minix, I would just add the desired feature to Linux.
>
> {{< citaname name="Linus Torvalds" >}}

¿Quién sabe cuántos otros sistemas tienen historias similares? ¿O cuantas historias similares pasarán y nacerán nuevas cosas?
