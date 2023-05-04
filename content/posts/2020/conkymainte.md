---
title: 'Mainte un Conky diferente'
date: '2020-07-10 13:15:00'
description: 'En esta oportunidad vamos a hablar de un Conky en especial Mainte lucir nuestros recursos'
type: 'post'
tags: ['conky', 'manager2', 'linux']
categories: ['Estilo']
img: 'https://i.ibb.co/w6VJh6Q/Screenshot-20200710-130523.png'
authors: ['PatoJAD']
---

En esta oportunidad vamos a hablar de un Conky en especial aprovechemos el viernes de escritorio para recomendar un conky que realmente permita lucir realmente nuestro escritorio.

## Mainte un conky diferente

Mainte es un conky que muestra una información útil de nuestro equipo y lo hace de una forma muy estética. Este conky fue pensado para un caso muy específico, sin embargo, gracias a todo el desarrollo hoy se puede utilizar para todos los equipos y todas las distros así que sin más preámbulos vamos a ir a como instalar esta distro.

{{< img src="https://camo.githubusercontent.com/d679002e85fe798a3b6787abc59d87ac0bc742c1/68747470733a2f2f692e6962622e636f2f52486371464c782f53637265656e73686f742d32303139313230322d3232333131382e706e67" >}}

## Instalación

En primer lugar, abra el terminal e instalar conky si no lo tienes, y adicionalmente a eso un conky manager (en mi caso voy a utilizar conky-manager2 del repositorio de la comunidad) mediante el comando:

```zsh
sudo apt install conky conky-manager2 libgee-0.8-2
```

Una vez instalado debemos descargar el theme mainte para poder ponerlo en nuestro escritorio y eso lo hacemos desde el siguiente link

{{< link url="https://github.com/gvoze32/Mainte/releases/tag/v3.0" text="Descargar Mainte" >}}

Una vez descargado debemos extraer toda la carpeta y copiarla en /home/$USER/.conky (configure el archivo oculto como visible en su administrador de archivos porque la carpeta está oculta)

Una vez realizado esto basta con iniciar el conky manager y activar los dos conky de Mainte para poder verlo de la siguiente forma

{{< img src="https://i.ibb.co/pKD0qLw/Screenshot-20200710-130504.png" >}}

Y poder mostrar un ViernesDeEscritorio así…

{{< img src="https://i.ibb.co/w6VJh6Q/Screenshot-20200710-130523.png" >}}
