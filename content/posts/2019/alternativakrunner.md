---
title: 'Alternativa a Krunner'
date: '2019-03-21'
description: 'Si bien KDE realizo un gran trabajo con Krunner muchos programadores realizaron un esfuerzo increible para que puedas tener tu altenativa en escritorios no KDE'
type: 'post'
tags:
    [
        'kruner',
        'kde',
        'alternativas',
        'dmenu',
        'ulauncher',
        'aplicaciones',
        'linux',
    ]
categories: ['Aplicaciones', 'Linux']
img: 'https://www.dz-techs.com/wp-content/uploads/2018/01/pe-krunner-DzTechs.jpg'
authors: ['PatoJAD']
---

{{< img src="https://www.kdeblog.com/wp-content/uploads/2010/05/krunner-main-image.jpg" >}}

De KDE podemos destacar muchas cosas, hoy vamos a hablar de KRunner una aplicación que fue pensada 100% para la comodidad del usuario. Para quien no lo conozca, en KDE nosotros podemos tocar ctrl + space y nos abre un input que nos permite buscar aplicaciones, ejecutar un comando de la terminal etc… Si bien no suena como algo útil, es realmente muy útil y nos optimiza mucho el tiempo de uso de nuestro equipo.
Me paso después de mucho tiempo de usarlo que otras distros me resultaban vuelteras y molestas dado que no contenían dicha funcionalidad, y el instalarlo en distribuciones no KDE me llevaban a instalar muchas dependencias.

# Alternativas a KRunner

Durante mucho tiempo iniciamos una búsqueda de las mejores opciones y traemos dos, que se adaptan a todos los tipos de uso. Ambos se probaron en diferentes circunstancias (junto a otras alternativas) para llegar a la información que les traemos hoy.

## Ulauncher

{{< img src="https://i.postimg.cc/FRxvXvkD/photo-2019-03-21-09-36-11.jpg" >}}

Esta aplicación es la primera recomendación, tiene una interfaz muy intuitiva y es simple de usar. Nos permite migrar entre diferentes temas oscuros y claros para que se integre mejor con nuestro escritorio. Esta opción es la más linda, al escribir nos muestra los iconos y nombres de las apps que machan con nuestra búsqueda y trae un menú de configuraciones integrado que nos hace fácil editar su configuración.

{{< img src="https://i.postimg.cc/0jWqrCfS/photo-2019-03-21-09-36-14.jpg" >}}

{{< img src="https://i.postimg.cc/x8T20ZKY/photo-2019-03-21-09-36-17.jpg" >}}

Para instalarlo debemos descargar el instalador correspondiente de su {{< textlink text="página" link="https://ulauncher.io/" >}} (deb, rpm o aur) y seguir con el proceso de instalación que recomiendan en la página.

Es recomendable entrar a la configuración y seleccionar la opción para que inicie con el sistema operativo para ahorrarnos un paso.

## Dmenu

Otra de las pruebas se realizó en un equipo más modesto de recursos, donde el costo de mantener ulauncher se notaba. En este punto decidimos probar dmenu una aplicación que cumple exactamente la misma función, pero “sin tanta chicha”. Dmenu nos permite obtener esta misma función, pero no cuenta con themes ni mucha interfaz con iconos, simplemente se ejecuta se busca y se ejecuta

{{< img src="https://blog.desdelinux.net/wp-content/uploads/2011/10/dmenu-160408.jpg" >}}

Dmenu sueles estar en los repositorios de la mayoría de las distribuciones, por lo cual basta con buscarlo y realizar la instalación (ej sudo apt install dmenu)
