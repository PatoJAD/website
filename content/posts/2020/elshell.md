---
title: 'El Shell de Linux'
date: '2020-06-23 08:56:00'
description: 'Hablemos del shell, una util herramienta a la que debemos perderle el miedo'
type: 'post'
tags: ['shell', 'linux', 'kernel', 'scripts']
categories: ['Linux']
img: 'https://www.axpe-blogs.com/wp-content/uploads/ShellShock.jpg'
authors: ['PatoJAD']
---

El **Shell** es un programa _especial_ utilizado como una interfaz entre el usuario y el núcleo del Sistema Operativo tambien conocido como **Kernel**. A grandes rasgos, el **Kernel** (junto a otro conjunto de apps) es un programa que se carga en memoria al momento en el que el PC se inicia, y se encarga de administrar el sistema hasta que apagamos el computador; es decir, crea y controla procesos, gestiona la memoria, el sistema de archivos y mucho más.

Volviendo al **Shell**, lo podemos definir como un Programa Utilitario que se inicia cuando accedemos a nuestra sesión en el sistema operativo. Este, _le permite al usuario interactuar con el Kernel_ a través de la interpretación de los comandos que el usuario ingresa en la línea de comandos ó a través de los **"scripts"** (archivos que ejecutan un conjunto de comandos).

## Lo que hace el Shell

![](https://i.blogs.es/c701d7/terminal/1366_2000.png)

Después de que tipeamos un comando, la responsabilidad del Shell es:

1. Analizar la línea de Comandos
2. Manejar los comodines, las redirecciones, tuberías y planificar el control de ejecución de los comandos.
3. Buscar el comando, si lo encuentra, ejecutar el comando, en caso contrario emitir un error.

En muchas ocasiones, para realizar una tarea tenemos que digitar un **conjunto de comandos**. Si esta tarea la realizamos en reiteradas ocasiones lo más probable será querer _automatizarla_. Para hacer esto posible, hacemos uso de los **"Shell Scripts"**, que no son otra cosa que archivos ejecutables que contienen _una secuencia de comandos_. Los "Shell Scripts" oscilan entre archivos que ejecutan un conjunto de comandos (como los "batch files"), pudiendo llegar a ejecutar programas para toma de decisiones, comprobación de archivos y mucho más. _No basta con tener conocimientos de programación para desarrollar "Shell Scripts"_, también es necesario contar con un basto entendimiento de los utilitarios y herramientas de linux, y como estos trabajan. Algunas utilidades como **grep**, **sed** y **gawk** se convierten en herramientas muy poderosas cuando se utilizan en los "Shell Scripts" para gestionar la salida de comandos y archivos.

Para concluir, podemos decir que cuando ejecutamos comandos desde un "Shell Script", estamos utilizando el Shell como un lenguaje de programación.
