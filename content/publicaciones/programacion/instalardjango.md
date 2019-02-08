---
title: "Instalar Django"
date: "2018-12-19"
description: "Un exelente framework de Python"
type: "programacion"
img:  "https://4.bp.blogspot.com/-keihHIsVOU8/XDTYLT-UZxI/AAAAAAAAekc/ckQbw2_oTuYGdeY42ZXRZN_XmCKu5dQwACLcBGAs/s640/django-python.png"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
---

{{< img src="https://4.bp.blogspot.com/-keihHIsVOU8/XDTYLT-UZxI/AAAAAAAAekc/ckQbw2_oTuYGdeY42ZXRZN_XmCKu5dQwACLcBGAs/s640/django-python.png">}}

Antes de instalar vamos a asegurarnos de tener el sistema actualizado (No es un requisito necesario pero nunca esta de mas tener todo actualizado). Esto lo pueden hacer con los comandos:

    sudo apt-get update
    sudo apt-get dist-update

o

    sudo apt-get update
    sudo apt-get upgrade

Una ves realizada la actualización (Injustificada en mi caso) Procedemos a instalar pip de python que es una especie de repositorios que nos deja descargar proyectos como si fuera un git, de aquí vamos a descargar el framework.

    sudo apt-get install python-pip

Luego solo debemos descargar el framework en la carpeta del proyecto ejecutando dentro de la misma el siguiente comando:

    pip install django
