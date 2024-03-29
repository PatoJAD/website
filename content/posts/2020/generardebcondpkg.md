---
title: '¿Como crear un deb con dpkg?'
date: '2020-04-02 10:14:00'
description: 'En este caso vamos a usar DPKG para crear un instalador .deb para nuestro sistema o nuestros repositorios'
type: 'post'
tags: ['dpkg', 'deb', 'debian', 'crear', 'generar']
categories: ['Programacion']
img: 'https://i.postimg.cc/VNdxsv2L/dpkg.webp'
authors: ['PatoJAD']
---

Existen muchas formas de crear un instalable .deb para nuestros sistemas. En este caso vamos a ver uno de los metodos, probablemente el mas simple de todos y uno de los mas utiles por su practicidad.

## ¿Como funciona?

{{< youtube id="mHqRbo1A5MM" >}}

Como se puede apreciar en el video lo que debemos hacer es organizar las carpetas de nuestro programa como si estuvieramso en el directorio raiz (en el caso practico en la carpeta deb tomamos como si fuera raiz para posicionar todos los archivos en la pocicion que deben quedar post intalacion)

Luego debemos crear el directorio DEBIAN en "nuestro root" y dentro de el crear el archivo control, el cual podemos hacerlo de la siguiente forma:

    mkdir DEBIAN
    cd DEBIAN
    vim control

(En el ultimo punto podemos usar vim, vi, pluma, gedit, deepin-editor o el que querramos para que nos quede comodo editar el archivo). Inmediatamente despues basta con agregar lo siguiente personalizando los datos claramente:

    Package: lynxos-gtk-theme
    Priority: optional
    Section: graphics
    Maintainer: PatoJAD <jdecima@disroot.org>
    Architecture: amd64
    Version: 0.0.4
    Depends: lynxos-icons-theme, lynxos-wallpapers
    Description: Tema de GTK para LynxOS
     LynxOS un thema GTK integrado con su trabajo en el escritorio

Recorda que en el video se explica mucho mejor como funcionan los campos. Realmente es importante completarlos bien para evitar errores futuros. En la ultima linea (la descripcion larga) es importante dejar el espacio como inicio de linea.

Despeus de esto basta con ejecutar el comando dpkg que empaqueta el archivo dejando listo nuestro instalador de la siguiente forma:

    dpkg -b ./ ../lynxos-gtk-theme-0.0.4_amd64.deb

Donde dpkg -b recibe 2 parametos el 1 es el directorio que tomamoscomo raiz para crear nuestro deb (en el caso practico deb) y el 2 donde queremos que quede el deb con el respectivo nombre.
