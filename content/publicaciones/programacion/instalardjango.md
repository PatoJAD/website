---
title: "Instalar Django"
date: "2018-12-19"
description: "Un exelente framework de Python"
type: "programacion"
tags: ["Python","Django","framework","instalar"]
category: ["Programacion"]
img:  "https://i.postimg.cc/GpQLQ3PX/django-python.png"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importante agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---

{{< img src="https://i.postimg.cc/GpQLQ3PX/django-python.png">}}

Antes de instalar vamos a asegurarnos de tener el sistema actualizado (No es un requisito necesario pero nunca esta de mas tener todo actualizado). Esto lo pueden hacer con los comandos:

    sudo apt-get update
    sudo apt-get dist-update

o

    sudo apt-get update
    sudo apt-get upgrade

Una vez realizada la actualización (Injustificada en mi caso) Procedemos a instalar pip de python que es una especie de repositorios que nos deja descargar proyectos como si fuera un git, de aquí vamos a descargar el framework.

    sudo apt-get install python-pip

Luego solo debemos descargar el framework en la carpeta del proyecto ejecutando dentro de la misma el siguiente comando:

    pip install django
