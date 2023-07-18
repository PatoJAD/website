---
title: '¿Como jugar al WoW en Linux?'
date: '2020-11-30 11:29:00'
description: 'Es un elegante juego multijugador gratuito sobre bucear, voltear y deslizarse hacia el caos de las películas de acción.'
tags:
    [
        'wow',
        'word',
        'warcraft',
        'mmorpg',
        'linux',
        'gratis',
        'linux',
        'wine',
        'legion',
    ]
categories: ['Juegos']
type: 'post'
img: 'https://hardwareviews.com/wp-content/uploads/2020/07/word-of-warcraft-1620x800-1-1024x506.jpg'
authors: ['PatoJAD']
---

{{< img src="https://cadenaser00.epimg.net/ser/imagenes/2019/08/27/ser_madrid_sur/1566920041_790600_1566920146_noticia_normal.jpg" >}}

Todos conocemos este gran juego o la gran mayoría, yo creo que junto al **Lineage 2** y el **[MU](/post/2019/05/como-instalar-mu-online-en-linux/)** son los _MMORPG_ que marcaron mi infancia, y hoy por hoy sigue siendo uno de los juegos que nos sorprenden y nos dan mucha emoción a cambio de horas de nuestra vida.

## ¿Hasta donde llego?

Actualmente existen muchas versiones del WoW pero no todas podemos jugarla en linux, en mi basta experiencia (Aunque muchos me puedan contradecir y eso me gustaria) el soporte de Wine para 64bits es deplorable. Al punto tal de que solo podemos correr perfectamente aplicaciones de 32bits y este es nuestro limitante.

{{< img src="https://i.postimg.cc/QVLFXMzs/image.png" >}}

Desde la versión del WoW conocida como **Battle of Azeroth** se eliminó completamente el soporte para 32bits por lo cual no podemos avanzar hasta que wine no mejore su compatibilidad con 64bits. Esto nos impide, de momento, jugar en el servidor oficial de blizzard.

{{< img src="https://gamedustria.com/wp-content/uploads/2016/09/WoWLEgion.jpg" >}}

En esta oportunidad voy a explicar como utilizar este magnifico juego pero obviamente desde un servidor privado con una de las últimas versiones que nos soportan los 32bits que no es nada más ni nada menos que **Legion** donde podemos disfrutar la historia de Illidan.

{{< img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPtNMJoMaEVWXxKzq-lzloVmnrJ7C_FGrLAlIAB4GiRJYQ2lvT7_kVj4-9_pk1Bb4bDmA9lFPTTxk3-IzmIwCT9rosCDkxcA&usqp=CAU&ec=45732302" >}}

**ATENCIÓN: Si bien existen videos de como instalar el original con Lutris esto crashea muchísimo en raids y situaciones específicas por lo cual no recomiendo pagar una suscripción hasta que no esté mejorado el soporte a 64 bits para evitar golpes de ira**

## ¿Mi maquina se lo banca?

Por suerte el Wow es un juego que no requiere mucho hardware para jugar, poniendo todo al minimo (low). Y existe una gran diferencia con jugarlo todo en “ultra” pero este “sacrificio” de estética nos permite disfrutarlo en equipos que no sean meramente gamers.

-   **CPU (Procesador):** Intel Core2 Duo E8500 o AMD Phenom II X3 720
-   **GPU (Gráficos):** NVIDIA GeForce GT 440 – AMD Radeon HD 5670 – Intel HD Graphics 5000
-   **Memoria RAM:** 2GB
-   **Espacio en el Disco Duro:** 45GB

{{< img src="https://www.guiaswow.com/wp-content/uploads/2016/02/Zu7dsO3.png" >}}

Como vemos es realmente poco lo que pide y seguramente nosotros cumplamos estos requisitos, pero vale aclarar que si lo que vamos a usar es la placa de video integrada recomiendo tener un mínimo de 4GB de ram dado que la integrada utiliza nuestra ram como VRAM.

## Instalar WineHQ

{{< img src="https://linuxhint.com/wp-content/uploads/2020/06/1-12.jpg" >}}

Lo primero que debemos hacer es instalar WineHQ en nuestra distribución, para esto debemos agregar las librerías y ejecutar la instalación.

### Debian

Habilitamos los 32 bits

    sudo dpkg --add-architecture i386

Descargamos e instalamos a Key

    wget -nc https://dl.winehq.org/wine-builds/winehq.key
    sudo apt-key add winehq.key

Agregamos el repositorio dependiendo de nuestra versión

| Version                                | Agregar a /etc/apt/sources.list:                           |
| -------------------------------------- | ---------------------------------------------------------- |
| Debian 8 (Jessie)                      | deb https://dl.winehq.org/wine-builds/debian/ jessie main  |
| Debian 9 (Stretch)                     | deb https://dl.winehq.org/wine-builds/debian/ stretch main |
| Debian 10 (currently Testing) (Buster) | deb https://dl.winehq.org/wine-builds/debian/ buster main  |

Actualizamos el Sistema

    sudo apt update

Instalamos uno de los paquetes

| version            | comando                                              |
| ------------------ | ---------------------------------------------------- |
| Stable branch      | sudo apt install --install-recommends winehq-stable  |
| Development branch | sudo apt install --install-recommends winehq-devel   |
| Staging branch     | sudo apt install --install-recommends winehq-staging |

### Fedora

Agregamos los repositories

| version   | comando                                                                               |
| --------- | ------------------------------------------------------------------------------------- |
| Fedora 29 | dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/29/winehq.repo |
| Fedora 30 | dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/30/winehq.repo |

E instalamos la version que deseamos

| version            | comando                    |
| ------------------ | -------------------------- |
| Stable branch      | dnf install winehq-stable  |
| Development branch | dnf install winehq-devel   |
| Staging branch     | dnf install winehq-staging |

Para otras distribuciones o BDS o MacOS revisar en su [sitio oficial](https://wiki.winehq.org/Download)

### Arch

Si estás en una distro basada en arch lo que recomiendo es instalar wine-staging que es, personalmente la instalación que me dio un mejor rendimiento. En mi caso lo hice con yay pero puedes hacerlo directamente con pacman

    yay -S wine-staging

## Volviendo al WoW

{{< img src="https://i.ytimg.com/vi/XwkaeAQcWRw/maxresdefault.jpg" >}}

Volviendo al juego, en mi caso elegí un servidor especifico, conocido como [Freakz](https://www.wow-freakz.com/) que no es un paytowin y en el cual no hay colas largas para jugar. Una vez descargado lo descomprimimos en la carpeta que querramos en mi caso utilizo el directorio

    ~/Juegos/WoW

Y una vez ahí ejecutamos el launcher. La primera vez que lo ejecutemos tardará bastante en configurar wine y algunas cosas del juego, también puede tirar el épico error de “dejo de funcionar” pero al abrirlo nuevamente ya podemos entrar sin problemas. Si elegimos la opción minimalista que descarga el juego mientras jugamos puede ser un poco más lento pero nos permite jugar desde el momento 0 es perfecto para impacientes.
