---
title: "GameMode en Linux"
date: "2020-08-05 09:17:00"
description: "Si sos de esas personas que les gusta jugar te presentamos GameMode, una herramienta que mejora tu experiencia en los videojuegos"
type: "juegos"
tags: ["gamemode", "game", "mode", "juegos", "steam", "systemd", "liquorix", "xanmod", "nativo", "feral", "feralinteractive"]
category: ["Juegos"]
img: "https://www.linuxadictos.com/wp-content/uploads/GameMode.jpg"
authors: ["PatoJAD"]
---

{{< br >}}

Yo recordaba con anterioridad haber hablado de esto, sin embargo no encontre registro en el blog de esto, por lo cual estimo que fue en mi periodo como fundador de LatinLinux. Ayer por la noche estaba mirando un hermoso stremeng de nuestro gran amigo Linux Gaming Español y se mencionó el mítico GameMode de linux para mejorar el rendimiento…

{{< br >}}
{{< br >}}

## ¿Que es GameMode?

{{< br >}}
{{< img src="https://www.profesionalreview.com/wp-content/uploads/2018/04/GameMode-mejora-el-rendimiento-de-los-juegos-en-Linux-1.jpg" >}}
{{< br >}}

Básicamente es una herramienta que realiza modificaciones de configuración temporales para poder obtener un mejor rendimiento de los videojuegos en linux. Lo cual nos permite disfrutar de una mejor experiencia sin modificar kernel ni agregar adicionales. Entre las mejoras que podemos encontrar se recalcan las siguientes:

{{< br >}}

* Cambiar el gobernador de la CPU.
* Prioridad de O/I.
* Programador de kernel (SCHED_ISO).
* Protector de pantalla inhibido
* Modo de rendimiento de GPU (NVIDIA y AMD), overclocking de GPU (NVIDIA),
* Scripts personalizados.

{{< br >}}

Este maravilloso programa se encuentra para todas las distribuciones de linux y en esta oportunidad vamos a intentar generalizar la instalación.

{{< br >}}

**¡ATENCIÓN! - Este sistemita depende fielmente de systemD para iniciar. De momento no intente portearlo ni usarlo en distros sin systemd con capa de compatibilidad (cómo MX)**

{{< br >}}
{{< br >}}

## ¿No es lo mismo que hace Liquorix y Xanmod?

{{< br >}}

La respuesta corta es, si, la diferencia es que GameMode solo selecciona esas configuraciones mientras estamos jugando y el resto del rato tenemos nuestro kernel en estado normal o como viene por defecto.

Sin embargo cabe recalcar que pueden ser utilizados en conjunto, y no genera conflictos. Los kernels, a diferencia de GameMode, están pensado para todos los usos del dia a dia, por lo cual el GameMode cambiara esas configs que para que en dicho momento funcione pura y exclusivamente como plataforma de juegos.

{{< br >}}
{{< br >}}

## ¿Como lo instalo?

{{< br >}}

Para instalarlo basta con instalar las dependencias dependiendo de qué base tenemos, a continuación dejo las genéricas que suelen faltar (puede que te falte una más pero eso lo notarás al momento de compilar, ahi te marcara que es lo que falta)

{{< br >}}

**Debian y derivados:**

    sudo apt install meson libsystemd-dev pkg-config ninja-build git libdbus-1-dev dbus-user-session

{{< br >}}

**Arch y derivados**

    sudo pacman -S meson systemd git dbus

{{< br >}}

**Fedora y derivados**

    sudo dnf install meson systemd-devel pkg-config git dbus-devel

{{< br >}}

**Gentoo**

    emerge --ask games-util/gamemode

{{< br >}}

Una vez que las dependencias estén instaladas podemos proceder a instalar de su propio git la herramienta para comenzar a utilizarla.

{{< br >}}

    cd /tmp/
    git clone https://github.com/FeralInteractive/gamemode.git
    cd gamemode
    git checkout 1.5
    ./bootstrap.sh

{{< br >}}

Como podemos ver clonamos el repositorio en la carpeta tmp (archivos temporales) y luego hacemos un checkout a la 1.5 (Si bien al actual es 1.5.1 dio errores al compilar, y no tiene cambios significativos) Y luego ejecutamos ./bootstrap.sh que nos permite realizar la instalacion mediante este script.

{{< br >}}
{{< br >}}

## ¿Como lo uso?

{{< br >}}

Lo bueno de esto es que también es muy simple de utilizar y vamos a ver 2 ejemplos de uso que desde mi punto de vista son “los más usados” uno con los juegos nativos y otro mediante steam.

{{< br >}}
{{< br >}}

### Juegos nativos

{{< br >}}

La mayoría de los juegos nativos podemos ejecutarlos por la terminal, por lo cual como primera instancia bastaría con ejecutarlo por la terminal de la siguiente manera:

{{< br >}}

    gamemoderun supertuxkart

{{< br >}}

Si concluimos con que queremos tenerlo un poco más “automático” bastará con editar el lanzador del menú y modificar el comando agregandolo el gamemoderun anteriormente. De esta forma vamos a tener el GameMode tambien ejecutandolo desde el menú

{{< br >}}
{{< br >}}

### Steam y GameMode

{{< br >}}

Como dije antes para **Steam** también podemos activarlo y en este caso voy a explicar el paso a paso para evitar errores.

Lo primero que debemos hacer es ir a la Biblioteca y buscar el juego al cual queremos optimizar (recordemos que el mismo deberá estar instalado) Una vez que lo encontramos le damos click derecho e ingresamos en las propiedades

{{< br >}}
{{< img src="https://i.postimg.cc/k5QnDL0X/Screenshot-20200805-091858.png" >}}
{{< br >}}

En esa ventana emergente que nos ejecuto vamos a seleccionar **DEFINIR PARÁMETROS DE LANZAMIENTO...** que nos volverá abrir una ventana emergente…

{{< br >}}
{{< img src="https://i.postimg.cc/3R9YFmrs/Screenshot-20200805-092007.png" >}}
{{< br >}}

En esta ventana vamos a agregar el comando tal cual lo podemos ver en la parte de abajo, es importante que no te olvides de ninguna parte del mismo (en el caso de que ya hayas editado esto es posible mezclar configuraciones)

{{< br >}}

    gamemoderun %command%

{{< br >}}
{{< img src="https://i.postimg.cc/9Mcc9J2P/Screenshot-20200805-092039.png" >}}
{{< br >}}

Una vez agregado basta con guardarlo y ya podemos iniciar el juego desde steam que va a iniciar con GameMode. (Las imagenes se pueden ver diferentes dado que uso una Skin para Steam)

{{< br >}}
{{< br >}}

## Cosas raras

{{< br >}}

A mi al ejecutar el juego se me pega un toque pero despues de unos segundos va “con de todo” por lo cual puedo asumir que tiene que ver con los cambios de configuraciones que realiza el GameMode

{{< br >}}

Ahora contanos vos ¿Lo Usaste? ¿Que te pareció? ¿Notaste una mejora?

{{< br >}}

---

{{< br >}}

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
