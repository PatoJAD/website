---
title: '¿Como instalar Wine?'
date: '2021-04-16 09:36:00'
description: 'Vamos a crear, en esta oportunidad, un USB multiboot donde podemos dejar todas las ISOs que necesitamos tener a mano'
type: 'aplicaciones'
tags: ["wine", "windows", "apps", "exe", "instalar", "arch", "ubuntu", "debian", "fedora", "apt", "pacman", "dnf", "yay"]
category: ["Aplicaciones"]
img: 'https://windows-cdn.softpedia.com/screenshots/Ventoy_1.png'
authors: ["PatoJAD"]
---

Ya con anterioridad me consultaron de como instalar Wine en Artix, esto me llevó a armar el video y obviamente siempre a explicar mi perspectiva o punto de vista sobre el uso de wine. En esta oportunidad el video es específico de distros basadas en Arch. Sin embargo, en la parte inferior van a poder encontrar la instalación para otras distros de linux.

## Pre requisitos

Si venis por Artix o cualquier distro de Arch te recomiendo que veas de antemano las instalaciones y configuraciones de las que hago uso en el video y doy por sabido estas son

* {{< textlink text="Multilib" url="/linux/2021/03/activar-multilib-artix/">}}
* {{< textlink text="yay" url="/linux/2020/10/instalar-yay-en-artix-linux/">}}

## Video

Como siempre disfruto mucho de armar videos y dejar mi opinion asi que sin rodeos los dejo con el video

{{< youtube code="47A2KBLgj6I" >}}

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



| Version |	Agregar a /etc/apt/sources.list: |
|---|---|
| Debian 8 (Jessie) |	deb https://dl.winehq.org/wine-builds/debian/ jessie main |
| Debian 9 (Stretch) |	deb https://dl.winehq.org/wine-builds/debian/ stretch main |
| Debian 10 (currently Testing) (Buster) |	deb https://dl.winehq.org/wine-builds/debian/ buster main |




Actualizamos el Sistema



    sudo apt update



Instalamos uno de los paquetes



| version | comando |
|---|---|
| Stable branch | sudo apt install --install-recommends winehq-stable |
| Development branch | sudo apt install --install-recommends winehq-devel |
| Staging branch | sudo apt install --install-recommends winehq-staging |




### Fedora



Agregamos los repositories



| version | comando |
|---|---|
| Fedora 29 | dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/29/winehq.repo |
| Fedora 30 | dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/30/winehq.repo|



E instalamos la version que deseamos



| version | comando |
|---|---|
| Stable branch | dnf install winehq-stable |
| Development branch |	dnf install winehq-devel |
| Staging branch	| dnf install winehq-staging |



Para otras distribuciones o BDS o MacOS revisar en su {{< textlink text="sitio oficial" url="https://wiki.winehq.org/Download" >}}




### Arch



Si estás en una distro basada en arch lo que recomiendo es instalar wine-staging que es, personalmente la instalación que me dio un mejor rendimiento. En mi caso lo hice con yay pero puedes hacerlo directamente con pacman



    yay -S wine-staging
