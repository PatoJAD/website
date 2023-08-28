---
title: 'RetroPie'
date: '2018-12-12'
description: 'Arcade Games en tu GNU Linux de una forma muy simple'
type: 'post'
tags:
    [
        'retropie',
        'retro',
        '8bits',
        '16bits',
        'arcade',
        'juegos',
        'linux',
        'aplicaciones',
        'patojad',
    ]
categories: ['Juegos', 'Linux', 'Aplicaciones']
img: 'https://i.postimg.cc/mksFBfCJ/maxresdefault.jpg'
authors: ['PatoJAD']
---

Muchos de nosotros crecimos con juegos de otra época, y tenemos cierta fidelidad a esos juegos. Soy de los que prefieren jugar al Pokemon Esmeralda al Pokemon GO. Y por suerte es algo que pude inculcar en mi familia. Siempre tenemos que volver a los orígenes.

En medio de esta "aventura" me encontre con el mundo feliz de _RetroPie_, lo cual me permitió convertir mi PC en una consola retro para jugar con mi familia (con posibles peleas maritales ¡Luego de que te gana en el Street fighter!).

![](https://i.postimg.cc/wBNvv4qp/Themes.png)
<br>

## Instalación

Según _RetroPie_ deberías usar Ubuntu pero personalmente recomiendo Debian (si usas Arch tenes una alternativa genial con RetroArch) esta me dio menos problemas. Actualmente lo monte en un Raspberry y en Mi pc on Deepin.

Iniciamos actualizando nuestro sistema operativo (Es importante que nada te bloquee mas adelante ninguna instalación asi que recomiendo tener todo actualizado correctamente!)

```zsh
sudo apt-get update && sudo apt-get upgrade
```

Vamos a instalar algunas dependencias necesarias para iniciar

```zsh
sudo apt-get install -y git dialog unzip xmlstarlet
```

Y ahora es donde uno agradece a la comunidad y al sistema Libre / OpenSource, la primera vez tuve dos horas buscando y compilando cosas para que quede todo ok, pero ahora hubo un loco que se dedicó a facilitarnos la vida y ¡Armo un script que soluciona todo con correrlo!. Por ende solo debemos descargar de su repositorio a dicho script:

```zsh
git clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git
```

¡ Y correrlo para que se instale todo!:

```zsh
cd RetroPie-Setup && sudo ./retropie_setup.sh
```

Veremos una pantalla como esta:

![](https://i.postimg.cc/XYdSBRCQ/c4e3da42-79c4-11e6-82a8-026afa67801b.png)

Eligiendo solo Basic Install tenemos todo para iniciar a jugar (el proceso puede demorar mucho dependiendo de velocidad de internet). Para saber mas les dejo la documentación correspondiente (en Inglés) lugar de donde saque la informacion.
