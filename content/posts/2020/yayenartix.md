---
title: "Instalar YAY en Artix Linux"
date: "2020-10-06 10:43:00"
description: "En esta oportunidad vamos a ver como instalar yay en Artix linux"
type: "linux"
tags: ["aur", "aurman", "yay", "arch", "artix", "linux", "instalar"]
category: ["Linux"]
img: "https://www.forosla.com/wp-content/uploads/2019/07/yayaur.jpg"
authors: ["PatoJAD"]
---



En base a lo que pide Pipe en esta oportunidad vamos a seguir con Artix esta hermosa distro que es realmente performante. Para esta oportunidad vamos a ver como instalar yay en esta magnífica distro. Por lo cual voy a dejar un corto video donde explico todo y obviamente todo esto va a estar a lo largo de la publicación.




## El Video



Espero que les guste el video, y no se olviden de apoyar y suscribirse al canal para motivar el progreso.


{{< youtube code="w-XxsaqPBZU" >}}



## Instalación



Para la instalación debemos ejecutar la siguiente línea de comandos que es lo que realizó durante el video. De esta forma podemos copiar y pegar



    sudo pacman -Sy
    sudo pacman -S git base-devel
    cd /tmp
    rm -rf yay 2> /dev/null
    git clone https://aur.archlinux.org/yay.git
    cd yay
    makepkg -si




## Adicional



Para activar la salida colorida en pacman y, por extensión, en yay, como recalqué en el video se puede usar este comando:



    sudo sed -i '/^#Color/s/^#//' /etc/pacman.conf



Ya teniendo todo ok debemos eliminar aurman de la siguiente manera...



    sudo pacman -R aurman




---




Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
