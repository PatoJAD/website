---
title: "Como instalar MU Online en Linux"
date: "2019-05-06"
description: "Muchos conocemos este MMORPG Medieval que lleva años entre nosotros y a muchos nos marco la infancia"
type: "juegos"
tags: ["MMORPG","MUOnline","Free", "Wine"]
category: ["Juegos"]
img: "https://i.postimg.cc/DzPcG0ZB/Deepin-Screenshot-20181205105759.png"
authors: ["PatoJAD"]
---

Este Juego no se encuentra disponible para nuestro sistema operativo ni piensa migrar, sin embargo, esto no nos limita para poder jugarlo, hoy les traigo una guía simple de cómo hacerlo funcionar en nuestro Linux sin inconveniente.

## Instalar WineHQ
Lo primero que debemos hacer es instalar WineHQ en nuestra distribución, para esto debemos agregar las librerías y ejecutar la instalación.

### Debian

Habilitamos los 32 bits

    sudo dpkg --add-architecture i386

Descargamos e instalamos a Key

    wget -nc https://dl.winehq.org/wine-builds/winehq.key
    sudo apt-key add winehq.key

Agregamos el repositorio dependiendo de nuestra versión

| Version |	Agregar a /etc/apt/sources.list: |
|---|---|
| Debian 8 (Jessie) |	deb https://dl.winehq.org/wine-builds/debian/ jessie main |
| Debian 9 (Stretch) |	deb https://dl.winehq.org/wine-builds/debian/ stretch main |
| Debian 10 (currently Testing) (Buster) |	deb https://dl.winehq.org/wine-builds/debian/ buster main |

<br />

Actualizamos el Sistema

    sudo apt update

Instalamos uno de los paquetes

| version | comando |
|---|---|
| Stable branch | sudo apt install --install-recommends winehq-stable |
| Development branch | sudo apt install --install-recommends winehq-devel |
| Staging branch | sudo apt install --install-recommends winehq-staging |

<br />

### Fedora
Agregamos los repositories

<br />

| version | comando |
|---|---|
| Fedora 29 | dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/29/winehq.repo |
| Fedora 30 | dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/30/winehq.repo|
<br/>

E instalamos la version que deseamos

| version | comando |
|---|---|
| Stable branch | dnf install winehq-stable |
| Development branch |	dnf install winehq-devel |
| Staging branch	| dnf install winehq-staging |

<br/>
Para otras distribuciones o BDS o MacOS revisar en su {{< textlink text="sitio oficial" url="https://wiki.winehq.org/Download" >}}

## Volviendo Al MU
<br/>

Una vez instalado nos descargamos el instalador del juego, en mi caso lo testee con {{< textlink text="LynxMu" url="http://lynxmu.tk/" >}} (Mas adelante hablare del mismo) El cual contiene un instalado. ¡El instalador lo ejecutamos con wine y usamos la metodología Windows Siguiente, siguiente, siguiente y Acepto!

El único problema que encontré es que no inicia el Launcher, pero podemos jugar ingresando en:

    home/.wine/driver_c/programfiles(86)/LynxGames/MuOnline/

Y ejecutando el main.exe

(Dentro de nuestro file manajer podemos presionar ctrl+h para ver los archivos y carpetas ocultos por ejemplo .wine)
