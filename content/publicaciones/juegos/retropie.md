---
title: "RetroPie"
date: "2018-12-12"
description: "Arcade Games"
type: "juegos"
tags: ["RetroPie","Retro","8bits"]
category: ["Juegos"]
img:  "https://1.bp.blogspot.com/-MEnmuisaPTU/XDTZ1fekq-I/AAAAAAAAelI/7NxidHReSwoXzKRDxGts0DJC4vuUGZIaQCLcBGAs/s1600/maxresdefault.jpg"
atname: "PatoJAD"
atdesc: "Desarrollador"
atimg: "https://patojad.gitlab.io/blog/img/perfil.jpg"
atbio: "Sobre mi no hay mucho para decir, me dedico a desarrollar en una empresa de telecomunicaciones, utilizo linux desde el 2012 y hace años que es mi sistema operativo main. Soy una persona que busca crecer profesionalmente sin dejar de divertirse y hacer lo que me gusta. Siempre digo que cuando un proyecto sale es importate agradecer, por lo cual les recomiendo a todos leer la seccion Agreadecimientos en la cual me tome un tiempito para poder agradecer a todos y cada uno de los que hicieron posible todo esto."
---

Muchos de nosotros crecimos con juegos de otra época, y tenemos cierta fidelidad a esos juegos, Soy de los que prefieren jugar al Pokemon Esmeralda al Pokemon GO. Y por suerte es algo que pude inculcar en mi familia, Siempre tenemos que volver a los orígenes.

En medio de esta "aventura" me encontre con el mundo Feliz de RetroPie lo cual me permitió convertir mi PC en una consola retro para jugar con mi familia (Con posibles peleas maritales luego de que te gana en el Street fighter!)

{{< img src="https://retropie.org.uk/wp-content/uploads/2016/03/Themes.png" >}}

#### Instalación
Segun RetroPie deberias usar Ubuntu pero personalmente recomiendo Debian (Si usas Arch tenes una alternativa genial con RetroArch) esta me dio menos problemas. Actualmente lo monte en un Raspberry y en Mi pc on Deepin.

Iniciamos actualizando nuestro sistema operativo (Es importante que nada te bloquee mas adelante ninguna instalación asi que recomiendo tener todo actualizado correctamente!)

    sudo apt-get update && sudo apt-get upgrade

Vamos a instalar algunas dependencias necesarias para iniciar

    sudo apt-get install -y git dialog unzip xmlstarlet

Y ahora es donde uno agradece a la comunidad y al sistema Libre / OpenSource, la primera vez tuve 2 horas buscando y compilando cosas para que quede todo ok, Pero ahora hubo un loco que se dedicó a facilitarnos la vida y armo un script que soluciona todo con correrlo! Por ende solo debemos descargar de su repositorio el script:

    git clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git

Y correrlo para que se instale todo!

    cd RetroPie-Setup && sudo ./retropie_setup.sh

Veremos una pantalla como esta:

{{< img src="https://i0.wp.com/cloud.githubusercontent.com/assets/8606384/18487839/c4e3da42-79c4-11e6-82a8-026afa67801b.png?w=800&ssl=1" >}}

Eligiendo solo Basic Install Tenemos todo para iniciar a jugar (El proceso puede demorar mucho dependiendo de velocidad de internet) Para saber mas les dejo la documentación correspondiente (En inglés) lugar de donde saque la informacion!
