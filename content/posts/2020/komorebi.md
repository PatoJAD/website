---
title: 'Komorebi'
date: '2020-03-20 09:07:00'
description: 'Cambia la forma en que miras tu escritorio. Esta impecable aplicacion permite dar una vuelta de tuercas a tus wallpapers.'
type: 'estilo'
tags:
    [
        'wallpapers',
        'gtk',
        'kde',
        'background',
        'fondo de pantalla',
        'fondo',
        'desktop',
    ]
category: ['Estilo', 'Linux', 'Aplicaciones']
img: 'https://www.muylinux.com/wp-content/uploads/2018/07/Komorebi.jpg'
authors: ['PatoJAD']
---

Komorebi es un bonito e impresionante gestor de wallpapers para cualquier distro Linux, es de código abierto y fué desarrollado en Vala por Abraham Masri.

La herramienta cuenta con fondos personalizables que pueden ser configurados de diversas maneras y en cualquier momento, psoee múltiples fondos pantallas (animados, estáticos, degradados entre otros), los mismos son enriquecidos con diversas opciones que la herramienta nos ofrece.

Este gestor de wallpapers nos permite añadir a nuestro fondo las estadísticas de nuestro sistema (uso de memoria ram, disco,…), añadir un estilo dark, fecha y hora, optimizar el rendimiento de fondos, entre otras excelentes funcionalidades.

Su panel es muy sencillo de usar y los efectos de los fondos simplemente son geniales.

## Cómo instalar komorebi

La instalacion es muy sencilla, para instalarlo en cualquier distribucion (realizando la compilacion a mano) es muy sencilla.

Primero instalamos las dependecias del proyecto (eso varia dependiendo de la base y el sistema de paquetesque tenga nuestra distro) pero los paquetes a instalar son libgtop2-dev, libgtk-3-dev, cmake, y valac

Despues de esto debemos correr los siguientes comandos los cuales ire explicando su funcionamiento. El primer comando nos permite clonar el proyecto de Git (su version en Master) y nos pociciona en la carpeta para poder seguir:

    git clone https://github.com/iabem97/komorebi.git
    cd komorebi

Creamos la carpeta build dentro del proyecto y nos pocicionamos dentro, esto nos sirve para poder compilar sin ensuciar el codigo fuente.

    mkdir build && cd build

Este comando ejecuta la compilacion y la instalacion del proyecto, esto recordemos que no varia entre distribuciones:

    cmake .. && sudo make install && ./komorebi
